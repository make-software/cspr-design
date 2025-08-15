import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useMultipleSelection, useCombobox } from 'downshift';
import { useClickAndTouchAway } from '../../hooks/use-click-and-touch-away';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import { BaseProps } from '../../types';
import SvgIcon from '../svg-icon/svg-icon';
import Input from '../input/input';
import { ArrowDownIcon, DeleteIcon, SearchIcon } from '../../icons-index';

const DropdownContainer = styled.div<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    outline: 'none',

    ...(disabled && {
      opacity: '0.5',
      pointerEvents: 'none',
    }),
  }),
);

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
  }),
);

const InputContainer = styled(FlexRow)(({ theme }) => ({
  width: '100%',
}));

const StyledInput = styled(Input)(() => ({
  width: '100%',
  border: 'none',
  height: '24px',
  '> div': {
    padding: '0 8px',
  },
}));

const DropdownIconWrapper = styled(FlexRow)(({ theme }) => ({
  paddingRight: '8px',
  marginLeft: '8px',
}));

const ArrowSvgIcon = styled(SvgIcon)(({ theme }) => ({
  path: {
    fill: theme.styleguideColors.contentPrimary,
  },
}));

const ClearSvgIcon = styled(SvgIcon)(({ theme }) => ({
  path: {
    stroke: theme.styleguideColors.contentPrimary,
  },
}));

const ChipItemContainer = styled.span(({ theme }) => ({
  borderRadius: theme.borderRadius.base,
  cursor: 'pointer',
  padding: '2px 8px',
  background: theme.styleguideColors.fillTertiary,
  color: theme.styleguideColors.contentPrimary,
  wordBreak: 'break-word',
}));

const ItemsContainer = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  display: isOpen ? 'inherit' : 'none',
  marginTop: 4,
  borderRadius: theme.borderRadius.base,
  background: theme.styleguideColors.fillSecondary,
  maxHeight: '250px',
  overflowY: 'scroll',
}));

const ItemsContainerEmpty = styled(FlexRow)(({ theme }) => ({
  padding: '32px 16px',
  pointerEvents: 'none',
  justifyContent: 'center',
}));

const ItemContainer = styled(FlexRow)(({ theme }) => ({
  cursor: 'pointer',
  minHeight: 36,
  padding: '8px 16px',
  wordBreak: 'break-word',
  ':hover, :active': {
    background: theme.styleguideColors.fillSecondaryBlueHover,
    fontWeight: 600,
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

export type MultiSelectDropdownValue = {
  label: string;
  chipLabel?: string;
  value: any;
};

export type MultiSelectDropdownEventValue = {
  target: {
    name?: string;
    value: MultiSelectDropdownValue | null;
  };
};

export interface MultiSelectInputProps extends BaseProps {
  value?: MultiSelectDropdownValue[];
  items: MultiSelectDropdownValue[];
  label?: string | JSX.Element;
  placeholder?: string;
  disabled?: boolean;
  onAddItem?: (ev: MultiSelectDropdownEventValue) => void;
  onSelectItem?: (ev: MultiSelectDropdownEventValue) => void;
  onRemoveItem?: (ev: MultiSelectDropdownEventValue) => void;
  onChangeInput?: (value: string) => void;
}

const getChangeEvent = (value: any): MultiSelectDropdownEventValue => {
  return {
    target: {
      name: undefined,
      value,
    },
  };
};

export function MultiselectDropdown(props: MultiSelectInputProps) {
  const {
    items,
    value,
    label,
    placeholder,
    disabled = false,
    onSelectItem,
    onAddItem,
    onRemoveItem,
    onChangeInput,
  } = props;
  const [inputValue, setInputValue] = useState<string>('');

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
    setSelectedItems,
    reset,
  } = useMultipleSelection<MultiSelectDropdownValue>({
    initialSelectedItems: value,
    onSelectedItemsChange: (changes) => {
      onSelectItem && onSelectItem(getChangeEvent(changes.selectedItems));
    },
  });

  const inputValueItem =
    inputValue?.length >= 3
      ? [
          {
            id: inputValue,
            label: inputValue,
            value: inputValue,
            chipLabel: inputValue,
          },
        ]
      : [];

  const itemsWithCustomInputValue = [...inputValueItem, ...items];

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    openMenu,
  } = useCombobox<MultiSelectDropdownValue>({
    inputValue,
    items: itemsWithCustomInputValue,
    onStateChange: ({ inputValue, type, selectedItem: newSelectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue || '');
          onChangeInput && onChangeInput(inputValue || '');
          break;

        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          const isAlreadySelected = selectedItems.some(
            (i) => i.value === newSelectedItem?.value,
          );

          if (newSelectedItem) {
            if (isAlreadySelected) {
              setSelectedItems(
                selectedItems.filter((i) => i.value !== newSelectedItem.value),
              );
              onRemoveItem && onRemoveItem(getChangeEvent(newSelectedItem));
            } else {
              addSelectedItem(newSelectedItem);
              onAddItem && onAddItem(getChangeEvent(newSelectedItem));
            }
          }
          break;
        case useCombobox.stateChangeTypes.FunctionCloseMenu:
          handleClearInput();
          break;
        default:
          break;
      }
    },
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: state.isOpen, // keep the menu open after selection.
          };
        default:
          return changes;
      }
    },
  });

  const { ref: outerClickRef } = useClickAndTouchAway({
    callback: () => {
      if (isOpen) {
        handleClearInput();
      }
    },
  });

  //Align resetting selected values if they were reset in parent
  useEffect(() => {
    if (!value || value.length < 1) {
      reset();
    }
  }, [value]);

  const handleClearInput = () => {
    setInputValue('');
    onChangeInput && onChangeInput('');
  };

  const handleClearAll = () => {
    handleClearInput();
    onSelectItem && onSelectItem(getChangeEvent(null));
    reset();
  };

  const showInput = isOpen || selectedItems.length === 0;

  return (
    <DropdownContainer disabled={disabled} ref={outerClickRef}>
      <FlexColumn itemsSpacing={4}>
        {label && (
          <BodyText lineHeight={'xs'} {...getLabelProps()} size={1}>
            {label}
          </BodyText>
        )}
        <div>
          <MultiSelectContainer
            isOpen={isOpen}
            align="center"
            justify="space-between"
            {...getToggleButtonProps(
              getDropdownProps({ preventKeyAction: isOpen }),
            )}
          >
            <InputContainer gap={8} wrap={'wrap'}>
              {selectedItems.map((selectedItem, index) => (
                <ChipItemContainer
                  key={`selected-item-${index}`}
                  {...getSelectedItemProps({ selectedItem, index })}
                >
                  <BodyText
                    lineHeight={'xs'}
                    size={3}
                    variation={selectedItem ? 'inherit' : 'darkGray'}
                  >
                    <FlexRow align={'center'} gap={4}>
                      {selectedItem?.chipLabel || selectedItem?.label}
                      <MultiSelectDeleteIcon
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          removeSelectedItem(selectedItem);
                        }}
                        size={14}
                        src={DeleteIcon}
                      />
                    </FlexRow>
                  </BodyText>
                </ChipItemContainer>
              ))}
              {showInput ? (
                <StyledInput
                  {...getInputProps(
                    {
                      placeholder,
                      value: inputValue || '',
                      disabled,
                      onFocus() {
                        openMenu();
                      },
                    },
                    { suppressRefError: true },
                  )}
                  prefixIcon={<SvgIcon src={SearchIcon} />}
                />
              ) : null}
            </InputContainer>
            <DropdownIconWrapper>
              {!!selectedItems.length && (
                <ClearSvgIcon
                  src={DeleteIcon}
                  onClick={handleClearAll}
                  marginRight
                />
              )}
              <ArrowSvgIcon src={ArrowDownIcon} rotate={isOpen} />
            </DropdownIconWrapper>
          </MultiSelectContainer>
          <ItemsContainer {...getMenuProps()} isOpen={isOpen}>
            {isOpen &&
              (!(
                itemsWithCustomInputValue && itemsWithCustomInputValue.length
              ) ? (
                <ItemsContainerEmpty>
                  <BodyText size={3} lineHeight={'xs'} scale={'xs'}>
                    No items found
                  </BodyText>
                </ItemsContainerEmpty>
              ) : (
                itemsWithCustomInputValue.map(
                  (item: MultiSelectDropdownValue, index: number) => (
                    <ItemContainer
                      align="center"
                      justify="space-between"
                      itemsSpacing={10}
                      key={`${item.value}${index}`}
                      {...getItemProps({
                        item,
                        index,
                        'aria-selected': selectedItems.includes(item),
                      })}
                    >
                      <BodyText size={3} lineHeight={'xs'} scale={'xs'}>
                        {item.label}
                      </BodyText>
                    </ItemContainer>
                  ),
                )
              ))}
          </ItemsContainer>
        </div>
      </FlexColumn>
    </DropdownContainer>
  );
}

export default MultiselectDropdown;
