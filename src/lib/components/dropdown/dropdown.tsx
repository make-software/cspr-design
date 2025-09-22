import React from 'react';
import Downshift, { ControllerStateAndHelpers } from 'downshift';
import styled from 'styled-components';
import isEqual from 'fast-deep-equal';

import { BaseProps } from '../../types';

import BodyText from '../body-text/body-text';
import FlexRow, { FlexRowProps } from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import {
  InputInteractionType,
  useGetInputInteractionType,
} from '../../utils/input-interaction-type';

import UpIcon from '../../assets/icons/ic-arrow-up.svg';
import DownIcon from '../../assets/icons/ic-arrow-down.svg';
import DeleteIcon from '../../assets/icons/ic-delete.svg';

const StyledDropdown = styled.div<{
  isFixedDropdown?: boolean;
  disabled?: boolean;
}>(({ theme, disabled, isFixedDropdown }) => ({
  outline: 'none',
  position: isFixedDropdown ? 'relative' : 'unset',
  ...(disabled && {
    opacity: '0.5',
    pointerEvents: 'none',
  }),
}));

const Container = styled(FlexRow)<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  borderRadius: theme.borderRadius.base,
  border: 'none',
  height: 36,
  padding: '0 16px',
  background: theme.styleguideColors.fillSecondary,
  ':hover, :active': {
    background: theme.styleguideColors.fillSecondary,
    svg: {
      color: theme.styleguideColors.fillPrimaryRed,
    },
  },
}));

const ItemsContainer = styled.div<{
  isOpen: boolean;
  isFixedDropdown?: boolean;
}>(({ theme, isOpen, isFixedDropdown }) => ({
  display: isOpen ? 'inherit' : 'none',
  marginTop: 4,
  borderRadius: theme.borderRadius.base,
  background: theme.styleguideColors.fillSecondary,
  ...(isFixedDropdown && {
    position: 'absolute',
    top: '60px',
    width: '100%',
    zIndex: 1,
  }),
}));

const ItemContainer = styled(FlexRow)<
  FlexRowProps & { isHighlighted?: boolean }
>(({ theme, isHighlighted }) => ({
  cursor: 'pointer',
  minHeight: 36,
  padding: '8px 16px',
  ':hover, :active': {
    background: theme.styleguideColors.fillSecondaryBlueHover,
    fontWeight: 600,
  },
  ...(isHighlighted && {
    '&:not(:hover)': {
      border: `1px solid ${theme.styleguideColors.contentBlue}`,
      borderRadius: theme.borderRadius.base,
    },
  }),
}));

const DeleteSvgIcon = styled(SvgIcon)(({ theme }) => ({
  path: {
    stroke: theme.styleguideColors.contentSecondary,
  },
  ':hover, :active': {
    path: {
      stroke: theme.styleguideColors.fillPrimaryRed,
    },
  },
}));

export type DropdownValue = { value: string; label: string };
export type DropdownItem<T = DropdownValue> = T;

export type DropdownEventValue = {
  target: {
    name?: string;
    value: DropdownValue | null;
  };
};

/* eslint-disable-next-line */
export interface DropdownProps extends BaseProps {
  id?: string;
  items: DropdownValue[];
  value?: DropdownValue | null;
  label?: string;
  placeholder?: string;
  areItemsRemovable?: boolean;
  onChange?: (ev: DropdownEventValue) => void;
  onSelect?: (ev: DropdownEventValue) => void;
  onRemove?: (ev: DropdownEventValue) => void;

  noItemsMessage?: string;
  isFixedDropdown?: boolean;
}

const getChangeEvent = (value: any): DropdownEventValue => {
  return {
    target: {
      name: undefined,
      value,
    },
  };
};

export function Dropdown(props: DropdownProps) {
  const {
    id,
    items,
    placeholder,
    label,
    areItemsRemovable,
    value,
    style,
    onSelect,
    onRemove,
    noItemsMessage = 'No Options!',
    isFixedDropdown = false,
  } = props;

  const getChangeEvent = (value: DropdownValue | null): DropdownEventValue => {
    return {
      target: {
        name: undefined,
        value,
      },
    };
  };

  const handleRemoveItem = (
    item: DropdownItem,
    ev,
    downshift: ControllerStateAndHelpers<DropdownItem>,
  ) => {
    ev.preventDefault();
    ev.stopPropagation();

    const value = item && itemValueGetter(item);
    onRemove && onRemove(getChangeEvent(value));
  };

  const itemValueGetter = (item) => item.value;
  const itemNameGetter = (item) => item.label;

  const handleItemSelect = (item) => {
    onSelect && onSelect(item);
  };

  const getItemToString = (item) => {
    if (item === null) return '';
    return typeof item === 'string' ? item : item.label;
  };

  const inputInteractionTypeRef = useGetInputInteractionType();

  return (
    <Downshift
      itemToString={getItemToString}
      onSelect={handleItemSelect}
      selectedItem={value}
      selectedItemChanged={(prevItem, item) => !isEqual(prevItem, item)}
    >
      {(downshift) => {
        const {
          getItemProps,
          getMenuProps,
          isOpen,
          selectedItem,
          getRootProps,
          getToggleButtonProps,
          highlightedIndex,
        } = downshift;

        const noItems = !(items && items.length);

        const handleFocus = (ev) => {
          !isOpen && downshift.openMenu();
        };

        return (
          <StyledDropdown
            {...getRootProps({ refKey: 'innerRef' })}
            style={style}
            isFixedDropdown={isFixedDropdown}
          >
            {label && (
              <BodyText
                lineHeight={'xs'}
                size={1}
                aria-label={label}
                id={id}
                tabIndex={0}
              >
                {label}
              </BodyText>
            )}
            <Container
              align="center"
              justify="space-between"
              {...getToggleButtonProps()}
              isOpen={isOpen}
              itemsSpacing={10}
              tabIndex={0}
            >
              <BodyText
                size={3}
                lineHeight={'xs'}
                variation={selectedItem ? 'inherit' : 'darkGray'}
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {itemNameGetter(selectedItem) || placeholder}
              </BodyText>
              <SvgIcon
                src={isOpen ? UpIcon : DownIcon}
                rotate={isOpen}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter') {
                    handleFocus(ev);
                  }
                }}
                tabIndex={0}
                alt={'Arrow icon'}
                role={'img'}
                aria-labelledby={id}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
              />
            </Container>
            <ItemsContainer
              {...getMenuProps()}
              isOpen={isOpen}
              isFixedDropdown={isFixedDropdown}
              aria-labelledby={id}
            >
              {isOpen &&
                (noItems ? (
                  <div style={{ padding: '8px 16px', pointerEvents: 'none' }}>
                    <BodyText
                      size={3}
                      scale={'xs'}
                      lineHeight={'xs'}
                      variation="darkGray"
                    >
                      {noItemsMessage}
                    </BodyText>
                  </div>
                ) : (
                  items.map((item, idx) => {
                    const isSelected = isEqual(item, selectedItem);
                    const isHighlighted =
                      inputInteractionTypeRef.current ===
                        InputInteractionType.keyboard &&
                      highlightedIndex !== null &&
                      highlightedIndex === idx;
                    return (
                      <ItemContainer
                        key={`${item}-${idx}`}
                        align="center"
                        justify="space-between"
                        itemsSpacing={10}
                        {...getItemProps({ item, index: idx })}
                        isHighlighted={isHighlighted}
                      >
                        <BodyText
                          size={isSelected ? 1 : 3}
                          style={{
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          }}
                          scale={'xs'}
                          lineHeight={'xs'}
                        >
                          {itemNameGetter(item)}
                        </BodyText>
                        {areItemsRemovable && (
                          <DeleteSvgIcon
                            src={DeleteIcon}
                            onClick={(ev) =>
                              handleRemoveItem(item, ev, downshift)
                            }
                          />
                        )}
                      </ItemContainer>
                    );
                  })
                ))}
            </ItemsContainer>
          </StyledDropdown>
        );
      }}
    </Downshift>
  );
}

export default Dropdown;
