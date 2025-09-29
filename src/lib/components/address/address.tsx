import React from 'react';
import { Avatar, AvatarProps } from '../avatar/avatar';

import styled from 'styled-components';
import BodyText from '../body-text/body-text.tsx';
import Tooltip from '../tooltip/tooltip.tsx';
import { HashLink } from '../hash-link/hash-link.tsx';
import FlexRow from '../flex-row/flex-row.tsx';
import FlexColumn from '../flex-column/flex-column.tsx';
import {
  formatHash,
  HashLength,
  shortenCsprName,
  truncateCSPRName,
} from '../../utils/formatters.ts';
import { Size } from '../../types.ts';
import TruncateBox from '../truncate-box/truncate-box.tsx';
import Copy from '../copy/copy.tsx';

interface AddressProps {
  hash: string | null | undefined;
  name?: string | undefined;
  logo?: string | null;
  csprName?: string | undefined;
  tooltipCaption?: string;
  additionalTooltipBlock?: React.ReactElement;
  navigateToPath?: string;
  hashLength?: HashLength;
  nameTruncateSize?: Size;
  avatarSize?: AvatarProps['size'];
  hashFontSize?: HashFontSize;
  minifiedCopyNotification?: boolean;
  itemsSpacing?: number;
  horizonalAlign?: 'center' | 'top';
  loading?: boolean;
  /** @deprecated use *navigateToPath* instead */
  navigationPath?: keyof any;
  /** @deprecated use *minifiedCopyNotification* instead */
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

const AddressContent = ({
  navigateToPath,
  csprName,
  hash,
  hashLength,
  hashFontSize,
  align,
  minified,
}) => {
  if (!navigateToPath || navigateToPath === '') {
    const CSPR_NAME_TRUNCATION_LENGTH = 24;
    const copiedValue = csprName || hash || '';

    const truncatedCsprName =
      csprName && hashLength === HashLength.TINY
        ? truncateCSPRName(csprName, CSPR_NAME_TRUNCATION_LENGTH)
        : csprName;
    const formattedHash = hash ? formatHash(hash, hashLength) : null;

    return (
      <FlexRow itemsSpacing={4} align={align}>
        <BodyText
          size={3}
          scale={hashFontSize === HashFontSize.big ? 'sm' : undefined}
          monotype={!csprName}
        >
          {truncatedCsprName || formattedHash}
        </BodyText>
        <Copy value={copiedValue} minified={minified} />
      </FlexRow>
    );
  }

  return (
    <StyledBodyText
      size={3}
      scale={hashFontSize === HashFontSize.big ? 'sm' : undefined}
      monotype={!csprName}
    >
      <HashLink
        href={navigateToPath}
        hash={hash}
        csprName={csprName && shortenCsprName(csprName, HashLength.TINY)}
        hashLength={hashLength}
        minified={minified}
        align={align}
      />
    </StyledBodyText>
  );
};

export enum HashFontSize {
  'default' = 'default',
  'big' = 'big',
}

/**
 * Address component can be used to display a public key or hash associated with an account.
 * It supports various configurations, including loading state, logo, name, csprName, and tooltip.
 *
 * @param {boolean} loading - Specifies whether the address component is in a loading state.
 * @param {string | null} logo - The logo associated with the address, if available.
 * @param {string | undefined} name - The display name of the address.
 * @param {string | undefined} [csprName] - The CSPR.name associated with the address, if applicable.
 * @param {string | null | undefined} hash - The public key or hash associated with the address.
 * @param {string} [tooltipCaption] - Text to be displayed in a tooltip for additional context.
 * @param {string} [navigateToPath] - The path to navigate to when interacting with the address.
 * @param {HashLength} [hashLength] - Specifies the length of the hash representation.
 * @param {Size} [nameTruncateSize] - Defines the size of the name text.
 * @param {AvatarProps['size']} [avatarSize] - The size of the avatar related to the address.
 * @param {HashFontSize} [hashFontSize] - Specifies the font size to display the hash.
 * @param {boolean} [minifiedCopyNotification] - Determines if the address component should be rendered in a minimized style.
 * @param {number} [itemsSpacing] - Gap between avatar and hash.
 * @param {'center' | 'top'} [horizonalAlign] - Horizontal alignment of the address component.
 * @param {keyof any} [navigationPath] - **@deprecated** Use `navigateToPath` instead.
 * @param {'full' | 'tiny'} [copyNotifyingStyle] - **@deprecated** Use `minifiedCopyNotification` instead.
 */
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
  horizonalAlign = 'center',
  itemsSpacing = 12,
}: AddressProps) => {
  if (loading || !hash) {
    return (
      <FlexRow align="center" itemsSpacing={itemsSpacing}>
        <Avatar hash={hash} loading={loading} size={avatarSize} />
      </FlexRow>
    );
  }

  const align = horizonalAlign === 'center' ? 'center' : 'flex-start';

  if (hash === '00') {
    // hash == '00' means that it is a Immediate Switch Block
    // NOTE: as part of Casper network node v1.5, the node software now creates an "immediate switch block" on upgrades;
    // there are no rewards for this block. it simply captures the information after application of the upgrade,
    // which allows this to be deterministically detected
    return (
      <FlexRow align="center" itemsSpacing={itemsSpacing}>
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
    <FlexRow align={align} itemsSpacing={itemsSpacing}>
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
              <AddressContent
                hashFontSize={hashFontSize}
                navigateToPath={navigateToPath}
                hash={hash}
                csprName={
                  csprName && shortenCsprName(csprName, HashLength.TINY)
                }
                hashLength={hashLength}
                minified={minifiedCopyNotification}
                align={align}
              />
              <FlexRow itemsSpacing={6} align={align}>
                <StyledTruncateBox size={nameTruncateSize}>
                  <BodyText size={3} variation="darkGray" noWrap>
                    {name}
                  </BodyText>
                </StyledTruncateBox>
              </FlexRow>
            </>
          ) : (
            <AddressContent
              hashFontSize={hashFontSize}
              navigateToPath={navigateToPath}
              hash={hash}
              csprName={csprName && shortenCsprName(csprName, HashLength.TINY)}
              hashLength={hashLength}
              minified={minifiedCopyNotification}
              align={align}
            />
          )}
        </FlexColumn>
      </Tooltip>
    </FlexRow>
  );
};

export default Address;
