import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import UpIcon from '../../assets/icons/ic-arrow-up.svg';
import DownIcon from '../../assets/icons/ic-arrow-down.svg';
import { useClickAway } from '../../hooks/use-click-away';

const StyledDropdown = styled.div<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    outline: 'none',
    position: 'relative',
    borderRadius: theme.borderRadius.base,

    ...(disabled && {
      opacity: '0.5',
      pointerEvents: 'none',
    }),

    background: theme.styleguideColors.fillSecondary,
    ':hover, :active': {
      background: theme.styleguideColors.fillSecondary,
      svg: {
        path: {
          fill: theme.styleguideColors.fillPrimaryRed,
        },
      },
    },
  }),
);

const StyledContentRow = styled(FlexRow)<{ error?: boolean }>(
  ({ theme, error }) =>
    theme.withMedia({
      width: '100%',
      border: error ? `1px solid ${theme.styleguideColors.contentRed}` : 'none',
    }),
);

const StyledInput = styled.input<{ fontSize?: string; icon?: boolean }>(
  ({ theme, fontSize, icon }) => ({
    lineHeight: '1.5',
    fontSize: fontSize,
    height: '36px',
    borderRadius: theme.borderRadius.base,
    outline: 'none',
    padding: icon ? '0 12px' : '0 16px',
    transition: 'all 200ms ease',
    width: '100%',
    color: theme.styleguideColors.contentPrimary,
    border: 'none',
    background: theme.styleguideColors.fillSecondary,
    ':hover': {
      cursor: 'pointer',
    },
  }),
);

const ItemContainer = styled.div<{
  isOpen?: boolean;
  height?: string;
  maxHeight?: string;
  fontSize?: string;
}>(({ theme, isOpen, height, fontSize, maxHeight }) => ({
  display: isOpen ? 'block' : 'none',
  borderRadius: theme.borderRadius.base,
  fontSize: fontSize,
  paddingLeft: '6px',
  background: theme.styleguideColors.fillSecondary,
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
  marginTop: '4px',
  height: height,
  maxHeight: maxHeight,
  overflowY: 'auto',
  position: 'absolute',
  top: '100%',
  width: '100%',
  zIndex: '1000',
}));

const Item = styled.div<{ selected: boolean }>(({ theme, selected }) => ({
  display: 'block',
  cursor: 'pointer',
  padding: '8px 10px',
  color: theme.styleguideColors.contentPrimary,
  ':hover, :active': {
    background: theme.styleguideColors.fillSecondaryBlueHover,
  },
  fontWeight: selected ? 600 : 400,
}));

const ArrowSvg = styled(SvgIcon)(({ theme }) => ({
  marginRight: '16px',
  path: {
    fill: theme.styleguideColors.contentPrimary,
  },
}));

const CustomIcon = styled.div<{ inLoop?: boolean }>(({ inLoop }) => ({
  margin: inLoop ? '0 12px 0 0' : '0 0 0 16px',
  display: 'inline',
  position: 'relative',
  bottom: inLoop ? '0' : '1px',
}));

interface Item {
  value: string;
  label: string;
  icon?: React.ReactElement | null;
}

export interface SearchableDropdownProps {
  items: Item[];
  value: Item;
  onSelect: (data: any) => void;
  height?: string;
  maxHeight?: string;
  fontSize?: string;
  placeholder?: string;
  isError?: boolean;
}

export const SearchableDropdown = ({
  items,
  value,
  height,
  isError,
  fontSize,
  maxHeight,
  onSelect,
  placeholder,
}: SearchableDropdownProps) => {
  const [searchedValue, setSearchedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [icon, setIcon] = useState<React.ReactElement | null>(null);

  const inputRef = useRef(null);

  const { ref } = useClickAway({
    callback: () => {
      setIsOpen(false);
    },
  });

  useEffect(() => {
    value.icon && setIcon(value.icon);
  }, [value]);

  useEffect(() => {
    if (isOpen === rotate) return;

    setRotate(isOpen);
  }, [isOpen]);

  const selectOption = (option) => {
    setSearchedValue('');
    onSelect(option);

    setIsOpen((isOpen) => !isOpen);
    setIsOpen(!isOpen);
    setIcon(option.icon);
  };

  const handleOpenDropdown = (e) => {
    setIsOpen(true);
  };

  const getDisplayValue = () => {
    if (searchedValue) return searchedValue;
    if (value) return value.label;

    return '';
  };

  const filterOptionsWithSearchedValue = (options, searchedValue) => {
    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchedValue.toLowerCase()) > -1,
    );
  };

  const searchedItems = filterOptionsWithSearchedValue(items, searchedValue);

  return (
    <StyledDropdown ref={ref}>
      <FlexRow
        align="center"
        justify="space-between"
        onClick={handleOpenDropdown}
      >
        <StyledContentRow
          justify={'space-around'}
          align={'center'}
          error={isError}
        >
          {icon && <CustomIcon>{icon}</CustomIcon>}
          <StyledInput
            ref={inputRef}
            placeholder={placeholder}
            value={getDisplayValue()}
            onChange={(e) => {
              setSearchedValue(e.target.value);
              onSelect({});
            }}
            fontSize={fontSize}
            icon={Boolean(icon)}
          />
          <ArrowSvg src={rotate ? UpIcon : DownIcon} />
        </StyledContentRow>
      </FlexRow>

      <ItemContainer
        isOpen={isOpen}
        height={height}
        fontSize={fontSize}
        maxHeight={maxHeight}
      >
        {searchedItems.map((item, index) => {
          return (
            <Item
              onClick={() => selectOption(item)}
              selected={item.value === value.value}
              key={index}
            >
              {item.icon && <CustomIcon inLoop>{item.icon}</CustomIcon>}
              {item.label}
            </Item>
          );
        })}
      </ItemContainer>
    </StyledDropdown>
  );
};

export default SearchableDropdown;
