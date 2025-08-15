import React, { useState } from 'react';
import styled from 'styled-components';
import { PaginationContainer } from './pagination-container';
import { useClickAway } from '../../hooks/use-click-away';
import CaptionText from '../caption-text/caption-text';
import SvgIcon from '../svg-icon/svg-icon';
import ArrowDownIcon from '../../assets/icons/ic-arrow-down.svg';

export const PaginationDropdownContainer = styled.div(({ theme }) =>
  theme.withMedia({
    position: 'relative',
    minWidth: [58],
  }),
);

export const PaginationDropdownMenu = styled.ul(({ theme }) =>
  theme.withMedia({
    width: '100%',
    position: 'absolute',
    display: 'block',
    background: theme.styleguideColors.fillSecondary,
    boxShadow: theme.boxShadow.block,
    padding: 0,
    margin: '4px 0',
    borderRadius: theme.borderRadius.base,
    zIndex: theme.zIndex.dropdown,
    '& > div': {
      borderRadius: 0,
    },
    '& > :first-child': {
      borderRadius: theme.borderRadius.base,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    '& > :last-child': {
      borderRadius: theme.borderRadius.base,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
  }),
);

const PaginationDropdownMenuItem = styled.li(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  position: 'relative',
  '& > input': {
    display: 'none',
  },
}));

interface PaginationDropdownProps {
  value: number;
  items: number[];
  onChange: (perPage: number) => void;
}

export const PaginationDropdown = ({
  value,
  items,
  onChange,
}: PaginationDropdownProps) => {
  const [opened, setOpened] = useState(false);

  const { ref } = useClickAway({
    callback: () => {
      setOpened(false);
    },
  });

  return (
    <PaginationDropdownContainer
      ref={ref}
      onClick={() => {
        setOpened(!opened);
      }}
    >
      <PaginationContainer>
        <CaptionText size={1}>{value}</CaptionText>
        <SvgIcon
          src={ArrowDownIcon}
          marginLeft
          rotate={opened}
          role={'img'}
          alt={'Arrow down icon'}
        />
      </PaginationContainer>
      {opened && (
        <PaginationDropdownMenu>
          {items.map((item) => (
            <PaginationContainer
              key={item}
              onClick={() => {
                onChange(item);
              }}
            >
              <PaginationDropdownMenuItem>
                <input
                  type="radio"
                  name="rows"
                  id={`${item}-row`}
                  defaultChecked={item === value}
                  value={item}
                />
                <CaptionText size={2}>{item}</CaptionText>
              </PaginationDropdownMenuItem>
            </PaginationContainer>
          ))}
        </PaginationDropdownMenu>
      )}
    </PaginationDropdownContainer>
  );
};
