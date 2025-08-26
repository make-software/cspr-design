import React from 'react';
import { Avatar, AvatarProps } from '../avatar/avatar';

import styled from 'styled-components';
import BodyText from '../body-text/body-text.tsx';
import Tooltip from '../tooltip/tooltip.tsx';
import { HashLink } from '../hash-link/hash-link.tsx';
import FlexRow from '../flex-row/flex-row.tsx';
import FlexColumn from '../flex-column/flex-column.tsx';
import { HashLength } from '../../utils/formatters.ts';
import { Size } from '../../types.ts';
import TruncateBox from '../truncate-box/truncate-box.tsx';

/**
 * Address component can be used to display a public key or hash associated with an account.
 * It supports various configurations, including loading states, logos, names, and tooltips.
 *
 *
 * Properties:
 * @property {boolean} loading - Specifies whether the address component is in a loading state.
 * @property {string | null} logo - The logo associated with the address, if available.
 * @property {string | undefined} name - The display name of the address.
 * @property {string | undefined} [csprName] - The CSPR.name associated with the address, if applicable.
 * @property {string | null | undefined} hash - The public key or hash associated with the address.
 * @property {string} [tooltipCaption] - Text to be displayed in a tooltip for additional context.
 * @property {string} [navigateToPath] - The path to navigate to when interacting with the address.
 * @property {HashLength} [hashLength] - Specifies the length of the hash representation.
 * @property {Size} [nameTruncateSize] - Defines the size of the name text.
 * @property {AvatarProps['size']} [avatarSize] - The size of the avatar related to the address.
 * @property {HashFontSize} [hashFontSize] - Specifies the font size to display the hash.
 * @property {boolean} [minified] - Determines if the address component should be rendered in a minimized style.
 * @property {keyof any} [navigationPath] - **@redundant** Use `navigateToPath` instead.
 * @property {'full' | 'tiny'} [copyNotifyingStyle] - **@deprecated** Use `minified` instead.
 */
interface AddressProps {
  loading: boolean;
  logo: string | null;
  name: string | undefined;
  hash: string | null | undefined;
  csprName?: string | undefined;
  tooltipCaption?: string;
  additionalTooltipBlock?: React.ReactElement;
  navigateToPath?: string;
  hashLength?: HashLength;
  nameTruncateSize?: Size;
  avatarSize?: AvatarProps['size'];
  hashFontSize?: HashFontSize;
  minifiedCopyNotification?: boolean;
  /** @redundant use navigateToPath instead */
  navigationPath?: keyof any;
  /** @deprecated use minified instead */
  copyNotifyingStyle?: 'full' | 'tiny';
}

const StyledTruncateBox = styled(TruncateBox)(() => ({
  height: '20px',
}));

const StyledBodyText = styled(BodyText)(({ theme }) => ({
  color: theme.styleguideColors.contentBlue,
  '& > *': {
    color: theme.styleguideColors.contentBlue,
  },
  '&:hover > *': {
    color: theme.styleguideColors.fillPrimaryRed,
  },
  '&:active > *': {
    color: theme.styleguideColors.fillPrimaryRedClick,
  },
}));

export enum HashFontSize {
  'default' = 'default',
  'big' = 'big',
}

const shortenCsprName = (
  csprName: string,
  visibleStringLength: HashLength = HashLength.SMALL,
) => {
  const [name, extension] = csprName.split(/(.cspr)$/);

  const MIN_TRUNCATE_LENGTH = HashLength.TINY * 2 + 3;
  const hashLength = name.length;

  if (hashLength === HashLength.FULL || hashLength <= MIN_TRUNCATE_LENGTH) {
    return csprName;
  }

  const firstPart = name.substring(0, visibleStringLength);
  const secondPart = name.substring(hashLength - visibleStringLength);

  return `${firstPart}...${secondPart}${extension}`;
};

export const Address = ({
  hash,
  csprName,
  logo,
  name,
  loading,
  hashLength,
  minifiedCopyNotification,
  navigateToPath,
  tooltipCaption,
  additionalTooltipBlock,
  nameTruncateSize = 5,
  avatarSize = 'default',
  hashFontSize = HashFontSize.default,
}: AddressProps) => {
  if (loading || !hash) {
    return (
      <FlexRow align="center" itemsSpacing={12}>
        <Avatar hash={hash} loading={loading} size={avatarSize} />
      </FlexRow>
    );
  }

  if (hash === '00') {
    // hash == '00' means that it is a Immediate Switch Block
    // NOTE: as part of Casper network node v1.5, the node software now creates an "immediate switch block" on upgrades;
    // there are no rewards for this block. it simply captures the information after application of the upgrade,
    // which allows this to be deterministically detected
    return (
      <FlexRow align="center" itemsSpacing={12}>
        <Avatar hash={hash} loading={loading} size={avatarSize} />
        <FlexColumn>
          <BodyText size={2} monotype>
            {hash}
          </BodyText>
          <BodyText size={3} variation="darkGray" noWrap>
            System
          </BodyText>
        </FlexColumn>
      </FlexRow>
    );
  }

  return (
    <FlexRow align="center" itemsSpacing={12}>
      {logo ? (
        <Avatar
          src={logo}
          loading={loading}
          size={avatarSize}
          alt={'Account logo'}
        />
      ) : (
        <Avatar hash={hash} loading={loading} size={avatarSize} />
      )}

      <Tooltip
        caption={tooltipCaption}
        tooltipContent={hash}
        additionalBlock={additionalTooltipBlock}
      >
        <FlexColumn>
          {name ? (
            <>
              <StyledBodyText
                size={3}
                scale={hashFontSize === HashFontSize.big ? 'sm' : undefined}
                monotype={!csprName}
              >
                <HashLink
                  minified={minifiedCopyNotification}
                  href={navigateToPath}
                  hash={hash}
                  csprName={
                    csprName && shortenCsprName(csprName, HashLength.TINY)
                  }
                  hashLength={hashLength}
                />
              </StyledBodyText>
              <FlexRow itemsSpacing={6} align={'center'}>
                <StyledTruncateBox size={nameTruncateSize}>
                  <BodyText size={3} variation="darkGray" noWrap>
                    {name}
                  </BodyText>
                </StyledTruncateBox>
              </FlexRow>
            </>
          ) : (
            <StyledBodyText
              size={3}
              scale={hashFontSize === HashFontSize.big ? 'sm' : undefined}
              monotype={!csprName}
            >
              <HashLink
                href={navigateToPath}
                hash={hash}
                csprName={
                  csprName && shortenCsprName(csprName, HashLength.TINY)
                }
                hashLength={hashLength}
                minified={minifiedCopyNotification}
              />
            </StyledBodyText>
          )}
        </FlexColumn>
      </Tooltip>
    </FlexRow>
  );
};
