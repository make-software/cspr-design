import React from 'react';
import Downshift, {
  ControllerStateAndHelpers,
  useMultipleSelection,
  useSelect,
} from 'downshift';
import styled from 'styled-components';
import isEqual from 'fast-deep-equal';

import { BaseProps } from '../../types';

import SubtitleText from '../subtitle-text/subtitle-text';
import BodyText from '../body-text/body-text';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';

const StyledDropdown = styled.div(({ theme }) => ({
  outline: 'none',
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

const ItemsContainer = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  display: isOpen ? 'inherit' : 'none',
  marginTop: 4,
  borderRadius: theme.borderRadius.base,
  background: theme.styleguideColors.fillSecondary,
}));

const ItemContainer = styled(FlexRow)(({ theme }) => ({
  cursor: 'pointer',
  minHeight: 36,
  padding: '8px 16px',
  ':hover, :active': {
    background: theme.styleguideColors.fillSecondaryBlueHover,
    fontWeight: 600,
  },
}));

const DeleteIcon = styled(SvgIcon)(({ theme }) => ({
  path: {
    stroke: theme.styleguideColors.contentSecondary,
  },
  ':hover, :active': {
    path: {
      stroke: theme.styleguideColors.fillPrimaryRed,
    },
  },
}));

const MultiSelectContainer = styled(FlexRow)<{ isOpen: boolean }>(
  ({ theme }) => ({
    borderRadius: theme.borderRadius.base,
    height: 36,
    padding: '0 8px',
    background: theme.styleguideColors.fillSecondary,
    ':hover, :active': {
      svg: {
        color: theme.styleguideColors.fillPrimaryRed,
      },
    },
  })
);

const PlaceholderWrapper = styled.span(({ theme }) => ({
  padding: '8px',
}));

const ChipItemContainer = styled.span(({ theme }) => ({
  borderRadius: theme.borderRadius.base,
  cursor: 'pointer',
  padding: '2px 8px',
  background: theme.styleguideColors.fillTertriary,
}));

const OverflowWrapper = styled.span(({ theme }) => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

const DropdownIconWrapper = styled.div(({ theme }) => ({
  padding: '12px 12px',
}));

const CheckIcon = styled(SvgIcon)(({ theme }) => ({
  path: {
    fill: theme.styleguideColors.contentBlue,
  },
}));

const MultiSelectDeleteIcon = styled(SvgIcon)(({ theme }) => ({
  path: {
    stroke: theme.styleguideColors.contentBlue,
  },
  ':hover, :active': {
    path: {
      stroke: theme.styleguideColors.contentRed,
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
  items: DropdownValue[];
  value?: DropdownValue | null;
  label?: string;
  placeholder?: string;
  areItemsRemovable?: boolean;
  isSearchable?: boolean;
  onChange?: (ev: DropdownEventValue) => void;
  onSelect?: (ev: DropdownEventValue) => void;
  onRemove?: (ev: DropdownEventValue) => void;

  noItemsMessage?: string;
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
    items,
    placeholder,
    label,
    areItemsRemovable,
    value,
    style,
    onSelect,
    onRemove,
    noItemsMessage = 'No Options!',
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
    downshift: ControllerStateAndHelpers<DropdownItem>
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
        } = downshift;

        const noItems = !(items && items.length);

        return (
          <StyledDropdown
            {...getRootProps({ refKey: 'innerRef' })}
            style={style}
            tabIndex="0"
          >
            {label && <SubtitleText size={1}>{label}</SubtitleText>}
            <Container
              isOpen={isOpen}
              align="center"
              justify="space-between"
              {...getToggleButtonProps()}
              itemsSpacing={10}
            >
              <SubtitleText
                size={2}
                variation={selectedItem ? 'inherit' : 'darkGray'}
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {itemNameGetter(selectedItem) || placeholder}
              </SubtitleText>
              <SvgIcon
                src={
                  isOpen
                    ? 'assets/icons/ic-arrow-up.svg'
                    : 'assets/icons/ic-arrow-down.svg'
                }
              />
            </Container>
            <ItemsContainer {...getMenuProps()} isOpen={isOpen}>
              {isOpen &&
                (noItems ? (
                  <div style={{ padding: '8px 16px', pointerEvents: 'none' }}>
                    <BodyText size={3} variation="darkGray">
                      {noItemsMessage}
                    </BodyText>
                  </div>
                ) : (
                  items.map((item, idx) => {
                    const isSelected = isEqual(item, selectedItem);

                    return (
                      <ItemContainer
                        key={`${item}-${idx}`}
                        align="center"
                        justify="space-between"
                        itemsSpacing={10}
                        isSelected={isSelected}
                        {...getItemProps({ item, index: idx })}
                      >
                        <BodyText
                          size={isSelected ? 1 : 3}
                          style={{
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {itemNameGetter(item)}
                        </BodyText>
                        {areItemsRemovable && (
                          <DeleteIcon
                            src="assets/icons/ic-delete.svg"
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

export type MultiDropdownValue = {
  label: string;
  chipLabel?: string;
  value: any;
};

export interface MultiSelectDropdownProps extends BaseProps {
  items: MultiDropdownValue[];
  label?: string;
  placeholder?: string;
  onChange?: (ev: DropdownEventValue) => void;
  onSelect?: (ev: DropdownEventValue) => void;
  onRemove?: (ev: DropdownEventValue) => void;
}

export function MultiSelectDropdown(props: MultiSelectDropdownProps) {
  const { items, label, placeholder, onSelect, onChange, onRemove } = props;

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection<MultiDropdownValue>({
    initialSelectedItems: undefined,
    onSelectedItemsChange: (changes) => {
      onSelect && onSelect(getChangeEvent(changes.selectedItems));
    },
  });

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    selectedItem: null,
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    items,
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
        case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep the menu open after selection.
          };
        default:
          return changes;
      }
    },
    onStateChange: ({ type, selectedItem: newSelectedItem }) => {
      switch (type) {
        case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
        case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          {
            const isAlreadySelected = selectedItems.some(
              (i) => i.value === newSelectedItem?.value
            );

            if (newSelectedItem) {
              if (isAlreadySelected) {
                removeSelectedItem(newSelectedItem);
                onRemove && onRemove(getChangeEvent(newSelectedItem));
              } else {
                addSelectedItem(newSelectedItem);
                onChange && onChange(getChangeEvent(newSelectedItem));
              }
            }
          }
          break;
        default:
          break;
      }
    },
  });

  return (
    <StyledDropdown>
      {label && (
        <SubtitleText size={1} {...getLabelProps()}>
          {label}
        </SubtitleText>
      )}
      <MultiSelectContainer
        isOpen={isOpen}
        align="center"
        justify="space-between"
        {...getToggleButtonProps(
          getDropdownProps({ preventKeyAction: isOpen })
        )}
      >
        <OverflowWrapper>
          <SubtitleText
            size={2}
            variation={selectedItem ? 'inherit' : 'darkGray'}
          >
            <OverflowWrapper>
              <FlexRow gap={4}>
                {selectedItems.length === 0 ? (
                  <PlaceholderWrapper>{placeholder}</PlaceholderWrapper>
                ) : (
                  selectedItems.map((selectedItem, index) => (
                    <ChipItemContainer
                      key={`selected-item-${index}`}
                      {...getSelectedItemProps({ selectedItem, index })}
                    >
                      <FlexRow align={'center'} gap={4}>
                        {selectedItem?.chipLabel}
                        <MultiSelectDeleteIcon
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            removeSelectedItem(selectedItem);
                          }}
                          size={14}
                          src={'assets/icons/ic-delete.svg'}
                        />
                      </FlexRow>
                    </ChipItemContainer>
                  ))
                )}
              </FlexRow>
            </OverflowWrapper>
          </SubtitleText>
        </OverflowWrapper>
        <DropdownIconWrapper>
          <SvgIcon
            size={16}
            src={
              isOpen
                ? 'assets/icons/ic-arrow-up.svg'
                : 'assets/icons/ic-arrow-down.svg'
            }
          />
        </DropdownIconWrapper>
      </MultiSelectContainer>
      <ItemsContainer {...getMenuProps()} isOpen={isOpen}>
        {isOpen &&
          items.map((item, index) => {
            const isSelected = selectedItems?.some(
              (i) => i.value === item.value
            );
            return (
              <ItemContainer
                align="center"
                justify="space-between"
                itemsSpacing={10}
                key={`${item.value}${index}`}
                {...getItemProps({ item, index })}
              >
                <BodyText size={isSelected ? 1 : 3}>{item.label}</BodyText>
                {isSelected && (
                  <CheckIcon size={14} src={'assets/icons/ic-checkmark.svg'} />
                )}
              </ItemContainer>
            );
          })}
      </ItemsContainer>
    </StyledDropdown>
  );
}

export default Dropdown;
