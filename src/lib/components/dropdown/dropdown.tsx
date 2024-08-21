import React, { useEffect } from 'react';
import Downshift, {
  ControllerStateAndHelpers,
  useMultipleSelection,
  useSelect,
} from 'downshift';
import styled from 'styled-components';
import isEqual from 'fast-deep-equal';

import { BaseProps } from '../../types';

import BodyText from '../body-text/body-text';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import FlexColumn from '../flex-column/flex-column';

import UpIcon from '../../assets/icons/ic-arrow-up.svg';
import DownIcon from '../../assets/icons/ic-arrow-down.svg';
import CheckmarkIcon from '../../assets/icons/ic-checkmark.svg';
import DeleteIcon from '../../assets/icons/ic-delete.svg';

const StyledDropdown = styled.div<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    outline: 'none',

    ...(disabled && {
      opacity: '0.5',
      pointerEvents: 'none',
    }),
  })
);

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

const ClearSvgIcon = styled(SvgIcon)(({ theme }) => ({
  path: {
    stroke: theme.styleguideColors.contentPrimary
  }
}));

const MultiSelectContainer = styled(FlexRow)<{ isOpen: boolean }>(
  ({ theme }) => ({
    borderRadius: theme.borderRadius.base,
    padding: '8px',
    background: theme.styleguideColors.fillSecondary,
    ':hover, :active': {
      svg: {
        color: theme.styleguideColors.fillPrimaryRed,
      },
    },
  })
);

const PlaceholderWrapper = styled.span(({ theme }) => ({
  padding: '0 8px',
}));

const ChipItemContainer = styled.span(({ theme }) => ({
  borderRadius: theme.borderRadius.base,
  cursor: 'pointer',
  padding: '2px 8px',
  background: theme.styleguideColors.fillTertriary,
  color: theme.styleguideColors.contentPrimary,
}));

const OverflowWrapper = styled.span(({ theme }) => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

const DropdownIconWrapper = styled(FlexRow)(({ theme }) => ({
  paddingRight: '8px',
  marginLeft: '8px',
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
            {label && (
              <BodyText lineHeight={'xs'} size={1}>
                {label}
              </BodyText>
            )}
            <Container
              isOpen={isOpen}
              align="center"
              justify="space-between"
              {...getToggleButtonProps()}
              itemsSpacing={10}
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
              <SvgIcon src={isOpen ? UpIcon : DownIcon} />
            </Container>
            <ItemsContainer {...getMenuProps()} isOpen={isOpen}>
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

export type MultiDropdownValue = {
  label: string;
  chipLabel?: string;
  chipName?: string;
  value: any;
};

export interface MultiSelectDropdownProps extends BaseProps {
  value?: MultiDropdownValue[];
  items: MultiDropdownValue[];
  label?: string | JSX.Element;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (ev: DropdownEventValue) => void;
  onSelect?: (ev: DropdownEventValue) => void;
  onRemove?: (ev: DropdownEventValue) => void;
  onClearAllItems?: (ev: DropdownEventValue) => void;
}

export function MultiSelectDropdown(props: MultiSelectDropdownProps) {
  const {
    items,
    value,
    label,
    placeholder,
    disabled,
    onSelect,
    onChange,
    onRemove,
    onClearAllItems,
  } = props;

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
    setSelectedItems,
    reset,
  } = useMultipleSelection<MultiDropdownValue>({
    initialSelectedItems: value,
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
                setSelectedItems(
                  selectedItems.filter((i) => i.value !== newSelectedItem.value)
                );
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

  //Align resetting selected values if they were reset in parent
  useEffect(() => {
    if (!value || value.length < 1) {
      reset();
    }
  }, [value]);

  const handleClearAll = () => {
    onClearAllItems && onClearAllItems(getChangeEvent(null));
    reset();
  };

  return (
    <StyledDropdown disabled={disabled}>
      <FlexColumn itemsSpacing={4}>
        {label && (
          <BodyText lineHeight={'xs'} {...getLabelProps()} size={1}>
            {label}
          </BodyText>
        )}
        <div>
          <MultiSelectContainer
            align="center"
            justify="space-between"
            {...getToggleButtonProps({
              ...getDropdownProps({ preventKeyAction: isOpen }),
              onClick: (e) => e.stopPropagation(),
              isOpen,
            })}
          >
            <span>
              <BodyText
                lineHeight={'xs'}
                size={3}
                variation={selectedItem ? 'inherit' : 'darkGray'}
              >
                <OverflowWrapper>
                  <FlexRow gap={8} wrap={'wrap'}>
                    {selectedItems.length === 0 ? (
                      <PlaceholderWrapper>{placeholder}</PlaceholderWrapper>
                    ) : (
                      selectedItems.map((selectedItem, index) => (
                        <ChipItemContainer
                          key={`selected-item-${index}`}
                          {...getSelectedItemProps({ selectedItem, index })}
                        >
                          <FlexRow align={'center'} gap={4}>
                            {selectedItem?.chipName && (
                              <BodyText
                                lineHeight={'xs'}
                                size={1}
                                variation={'black'}
                              >
                                {selectedItem.chipName}
                              </BodyText>
                            )}
                            {selectedItem?.chipLabel || selectedItem?.label}
                            <MultiSelectDeleteIcon
                              onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                removeSelectedItem(selectedItem);
                                onRemove &&
                                  onRemove(getChangeEvent(selectedItem));
                              }}
                              size={14}
                              src={DeleteIcon}
                            />
                          </FlexRow>
                        </ChipItemContainer>
                      ))
                    )}
                  </FlexRow>
                </OverflowWrapper>
              </BodyText>
            </span>
            <DropdownIconWrapper>
              {onClearAllItems && !!selectedItems.length && (
                <ClearSvgIcon
                  src={DeleteIcon}
                  onClick={handleClearAll}
                  marginRight
                />
              )}
              <SvgIcon size={16} src={isOpen ? UpIcon : DownIcon} />
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
                    <BodyText
                      size={isSelected ? 1 : 3}
                      lineHeight={'xs'}
                      scale={'xs'}
                    >
                      {item.label}
                    </BodyText>
                    {isSelected && <CheckIcon size={14} src={CheckmarkIcon} />}
                  </ItemContainer>
                );
              })}
          </ItemsContainer>
        </div>
      </FlexColumn>
    </StyledDropdown>
  );
}

export default Dropdown;
