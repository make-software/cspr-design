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

interface AddressProps {
  loading: boolean;
  logo: string | null;
  name: string | undefined;
  csprName?: string | undefined;
  publicKey: string | null | undefined;
  tooltipCaption?: string;
  navigateToPath?: string;
  hashLength?: HashLength;
  nameSize?: Size;
  avatarSize?: AvatarProps['size'];
  hashFontSize?: HashFontSize;
  minified?: boolean;
  /** @redundunt use navigateToPath instead */
  navigationPath?: keyof any;
  /** @deprecated use minified instead */
  copyNotifyingStyle?: 'full' | 'tiny';
}

const StyledTruncateBox = styled(TruncateBox)(() => ({
  height: '20px',
}));

export enum HashFontSize {
  'default' = 'default',
  'big' = 'big',
}

const StyledHashWrapper = ({ hashFontSize, ...props }) => {
  return (
    <BodyText
      {...props}
      size={3}
      scale={hashFontSize === HashFontSize.big ? 'sm' : props.scale}
    />
  );
};

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

// Check usage of this component
export const Address = ({
  publicKey,
  csprName,
  logo,
  name,
  loading,
  hashLength,
  minified,
  navigateToPath,
  tooltipCaption,
  nameSize = 5,
  avatarSize = 'default',
  hashFontSize = HashFontSize.default,
}: AddressProps) => {
  if (loading || !publicKey) {
    return (
      <FlexRow align="center" itemsSpacing={12}>
        <Avatar hash={publicKey} loading={loading} size={avatarSize} />
      </FlexRow>
    );
  }

  if (publicKey === '00') {
    // publicKey == '00' means that it is a Immediate Switch Block
    // NOTE: as part of Casper network node v1.5, the node software now creates an "immediate switch block" on upgrades;
    // there are no rewards for this block. it simply captures the information after application of the upgrade,
    // which allows this to be deterministically detected
    return (
      <FlexRow align="center" itemsSpacing={12}>
        <Avatar hash={publicKey} loading={loading} size={avatarSize} />
        <FlexColumn>
          <BodyText size={2} monotype>
            {publicKey}
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
        <Avatar hash={publicKey} loading={loading} size={avatarSize} />
      )}

      <Tooltip caption={tooltipCaption} tooltipContent={publicKey}>
        <FlexColumn>
          {name ? (
            <>
              <StyledHashWrapper
                hashFontSize={hashFontSize}
                monotype={!csprName}
              >
                <HashLink
                  minified={minified}
                  href={navigateToPath}
                  hash={publicKey}
                  csprName={
                    csprName && shortenCsprName(csprName, HashLength.TINY)
                  }
                  hashLength={hashLength}
                />
              </StyledHashWrapper>
              <FlexRow itemsSpacing={6} align={'center'}>
                <FlexRow>
                  <StyledTruncateBox size={nameSize}>
                    <BodyText size={3} variation="darkGray" noWrap>
                      {name}
                    </BodyText>
                  </StyledTruncateBox>
                </FlexRow>
              </FlexRow>
            </>
          ) : (
            <StyledHashWrapper hashFontSize={hashFontSize} monotype={!csprName}>
              <HashLink
                href={navigateToPath}
                hash={publicKey}
                csprName={
                  csprName && shortenCsprName(csprName, HashLength.TINY)
                }
                hashLength={hashLength}
                minified={minified}
              />
            </StyledHashWrapper>
          )}
        </FlexColumn>
      </Tooltip>
    </FlexRow>
  );
};
