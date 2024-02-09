import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import Button from '../button/button';
import Input, { InputValidationType } from '../input/input';
import BodyText from '../body-text/body-text';
import ReactModal from 'react-modal';
import { useClickAway } from '../../hooks/use-click-away';
import { useEscapeKey } from '../../hooks/use-escape-key';
import ModalHeader from '../modal-header/modal-header';
import SubtitleText from '../subtitle-text/subtitle-text';
import { ThemeModeType } from '../navigation/cspr-products-menu/products-menu-item';
import {
  ModalPosition,
  ModalPositionProps,
} from '../confirmation-window/confirmation-window';
import Checkbox, { CheckboxFontSize } from '../checkbox/checkbox';
import WarningMessage, {
  WarningMessageProps,
} from '../warning-message/warning-message';

export interface ValidationProps {
  validationMessage: string;
  regexpPattern: any;
}

export interface RepeatInputProps {
  validationMessage: string;
  label?: string;
  placeholder?: string;
}

export interface UserInputWindowSceneProps {
  isOpen: boolean;
  bodyImg?: React.ReactElement;
  position: ModalPosition;
  title: string;
  withHeader?: boolean;
  headerLogo?: React.ReactElement;
  information?: React.ReactElement | string;
  repeatInput?: RepeatInputProps;
  warningMessage?: WarningMessageProps;
  informationOnlyMode?: boolean;
  hideXButton?: boolean;
  confirmLabel: string;
  onConfirm: (value: string, isChecked?: boolean) => void;
  confirmColor?: string;
  dismissLabel?: string;
  onDismiss?: () => void;
  isMandatoryCheckBox?: boolean;
  inputLabel?: string;
  inputType?: InputValidationType;
  placeholder?: string;
  required?: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  themeMode?: ThemeModeType;
  checkboxLabel?: string | React.ReactElement;
  validationSetting?: ValidationProps;
  portalClass?: string;
}

const centerModalStyles = {
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  border: 'none',
  borderRadius: '12px',
  padding: '32px 24px 24px 24px',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

const topModalStyles = {
  top: '40px',
  left: 'auto',
  right: '40px',
  border: 'none',
  bottom: 'auto',
  borderRadius: '12px',
  padding: '16px 24px 24px 24px',
};

const ModalContainer = styled(FlexColumn)<ModalPositionProps>(
  ({ theme, position }) =>
    theme.withMedia({
      width:
        position === ModalPosition.TopRight
          ? ['300px', '350px', '350px']
          : ['300px', '440px', '496px'],
      background: theme.styleguideColors.backgroundPrimary,
      borderColor: theme.styleguideColors.backgroundPrimary,
    })
);

const ImageWrapper = styled(FlexRow)(({ theme }) =>
  theme.withMedia({
    margin: '15px 0 24px 0',
  })
);

const StyledCaption = styled.div<ModalPositionProps>(({ theme, position }) =>
  theme.withMedia({
    textAlign: 'left',
    marginBottom: '16px',
  })
);

const StyledCaptionText = styled(SubtitleText)(({ theme }) =>
  theme.withMedia({
    fontWeight: [600, 600, 700],
    fontSize: ['20px', '24px', '24px'],
    color: theme.styleguideColors.contentPrimary,
  })
);

const StyledInformationText = styled(BodyText)<ModalPositionProps>(
  ({ theme, position }) =>
    theme.withMedia({
      color: theme.styleguideColors.contentSecondary,
    })
);

const ButtonsContainer = styled(FlexRow)<ModalPositionProps>(
  ({ theme, position }) =>
    theme.withMedia({
      marginTop:
        position === ModalPosition.TopRight ? '40px' : ['32px', '32px', '56px'],
      flexDirection: ['column', 'row', 'row'],
    })
);

const StyledInput = styled(Input)<{ margin?: string }>(({ theme, margin }) =>
  theme.withMedia({
    width: '100%',
    margin: margin,
    ':focus': {
      outline: 'none',
    },
  })
);

const CheckBoxContainer = styled.div<ModalPositionProps>(
  ({ theme, position }) =>
    theme.withMedia({
      margin:
        position === ModalPosition.TopRight
          ? '40px 0 -20px 0'
          : ['40px 0 -20px 0', '40px 0 -20px 0', '72px 0 -40px 0'],
    })
);

const handleTheme = (theme, position) => {
  const modalStyle = {
    overlay: {
      backgroundColor: theme.styleguideColors.backgroundOverlay,
      zIndex: 15,
    },
    content:
      position === ModalPosition.TopRight
        ? {
            ...topModalStyles,
            ...{
              backgroundColor: theme.styleguideColors.backgroundPrimary,
              borderColor: theme.styleguideColors.backgroundPrimary,
            },
          }
        : {
            ...centerModalStyles,
            ...{
              backgroundColor: theme.styleguideColors.backgroundPrimary,
              borderColor: theme.styleguideColors.backgroundPrimary,
            },
          },
  };

  return modalStyle;
};

export const UserInputWindow = ({
  isOpen,
  position,
  title,
  withHeader,
  headerLogo,
  bodyImg,
  information,
  confirmLabel,
  confirmColor,
  onConfirm,
  dismissLabel,
  shouldCloseOnEsc,
  shouldCloseOnOverlayClick,
  onDismiss,
  themeMode,
  inputType,
  placeholder,
  required = false,
  inputLabel,
  checkboxLabel,
  validationSetting,
  repeatInput,
  warningMessage,
  informationOnlyMode,
  isMandatoryCheckBox,
  hideXButton,
  portalClass = 'portal',
}: UserInputWindowSceneProps) => {
  const theme = useTheme();
  const [value, setValue] = useState('');
  const [repeatValue, setRepeatValue] = useState('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [repeatInputError, setRepeatInputError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(isOpen);

  useEscapeKey(() => shouldCloseOnEsc && setShowModal(false));

  const { ref } = useClickAway({
    callback: () => {
      shouldCloseOnOverlayClick && setShowModal(false);
    },
  });

  const regexMatched = (val) =>
    !!val && validationSetting?.regexpPattern.test(val);

  const isValueEqual = (firstVal, secondVal) =>
    firstVal && secondVal && firstVal === secondVal;

  const handleEnterKeyDown = (e) => {
    let val = e.target.value;

    if (val && !formError) {
      if (e.key === 'Enter') {
        onConfirm(val, isChecked);
      }
    } else return;
  };

  const handleOnSubmit = () => {
    onConfirm(value, isChecked);
  };

  const handleInputChange = (e) => {
    let passVal = e.target.value;

    repeatInput && repeatValue && setRepeatValue('');

    if (
      validationSetting?.regexpPattern &&
      validationSetting?.validationMessage
    ) {
      !!passVal && regexMatched(passVal)
        ? setFormError(null)
        : setFormError(`${validationSetting?.validationMessage}`);
    }
    setValue(passVal);
  };

  const handleRepeatInputChange = (e) => {
    let repeatVal = e.target.value;

    if (repeatInput?.validationMessage) {
      !!repeatVal && isValueEqual(value, repeatVal)
        ? setRepeatInputError(null)
        : setRepeatInputError(`${repeatInput?.validationMessage}`);
    }
    setRepeatValue(repeatVal);
  };

  const handleDisableButton = () => {
    if (isMandatoryCheckBox && !isChecked) return true;

    if (informationOnlyMode) return false;

    if (repeatInput) {
      return repeatValue ? !!repeatInputError : true;
    } else {
      return value ? !!formError : true;
    }
  };

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {showModal && (
        <ReactModal
          isOpen={showModal}
          style={handleTheme(theme, position)}
          onRequestClose={onDismiss}
          shouldCloseOnEsc
          shouldCloseOnOverlayClick
          portalClassName={portalClass}
        >
          <ModalContainer position={position} ref={ref}>
            {withHeader && (
              <ModalHeader
                themeMode={themeMode}
                headerLogo={headerLogo}
                onClose={hideXButton ? undefined : onDismiss}
              />
            )}
            {bodyImg && <ImageWrapper>{bodyImg}</ImageWrapper>}
            <StyledCaption position={position}>
              <StyledCaptionText size={1} scale="lg">
                {title}
              </StyledCaptionText>
            </StyledCaption>
            <FlexRow justify="left">
              <StyledInformationText position={position} size={3} scale="sm">
                {information}
              </StyledInformationText>
            </FlexRow>
            {!informationOnlyMode && (
              <FlexRow>
                <StyledInput
                  required={required}
                  value={value}
                  onChange={handleInputChange}
                  onKeyDown={handleEnterKeyDown}
                  label={<BodyText size={2}>{inputLabel}</BodyText>}
                  placeholder={placeholder}
                  margin={'16px 0'}
                  error={!!formError}
                  validationType={inputType}
                  validationText={formError}
                />
              </FlexRow>
            )}
            {!informationOnlyMode && repeatInput && (
              <FlexRow>
                <StyledInput
                  required={required}
                  value={repeatValue}
                  onChange={handleRepeatInputChange}
                  onKeyDown={handleEnterKeyDown}
                  label={<BodyText size={2}>{repeatInput?.label}</BodyText>}
                  placeholder={repeatInput?.placeholder}
                  error={!!repeatInputError}
                  validationType={inputType}
                  validationText={repeatInputError}
                />
              </FlexRow>
            )}
            {warningMessage && (
              <WarningMessage
                title={warningMessage.title}
                message={warningMessage.message}
                margin={warningMessage.margin}
                iconSrc={warningMessage.iconSrc}
              />
            )}
            {checkboxLabel && (
              <CheckBoxContainer position={position}>
                <Checkbox
                  checked={isChecked}
                  label={checkboxLabel}
                  onChange={handleCheckBox}
                  checkboxFontSize={CheckboxFontSize.small}
                />
              </CheckBoxContainer>
            )}
            <ButtonsContainer
              position={position}
              gap={'16px'}
              justify={'space-between'}
            >
              {dismissLabel && (
                <Button color={'secondaryBlue'} onClick={onDismiss}>
                  {dismissLabel}
                </Button>
              )}
              <Button
                color={confirmColor === 'red' ? 'primaryRed' : 'primaryBlue'}
                onClick={handleOnSubmit}
                disabled={handleDisableButton()}
              >
                {confirmLabel}
              </Button>
            </ButtonsContainer>
          </ModalContainer>
        </ReactModal>
      )}
    </>
  );
};

export default UserInputWindow;
