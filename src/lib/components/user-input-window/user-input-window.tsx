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

export interface ValidationProps {
  validationMessage: string;
  regexpPattern: any;
}
export interface UserInputWindowSceneProps {
  isOpen: boolean;
  bodyImg?: React.ReactElement;
  position: ModalPosition;
  title: string;
  withHeader?: boolean;
  headerLogo?: React.ReactElement;
  information?: React.ReactElement | string;
  confirmLabel: string;
  onConfirm: (value: string, isChecked?: boolean) => void;
  confirmColor?: string;
  dismissLabel?: string;
  onDismiss: () => void;
  inputLabel?: string;
  inputType: InputValidationType;
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
          : ['300px', '400px', '446px'],
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
      textAlign: 'left',
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

const StyledInput = styled(Input)(({ theme }) =>
  theme.withMedia({
    width: '100%',
    ':focus': {
      outline: 'none',
    },
  })
);

const CheckBoxContainer = styled.div<ModalPositionProps>(({ theme, position }) =>
  theme.withMedia({
    margin:  position === ModalPosition.TopRight ? '40px 0 -20px 0' : ['40px 0 -20px 0','40px 0 -20px 0','72px 0 -40px 0']
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
  portalClass = 'portal',
}: UserInputWindowSceneProps) => {
  const theme = useTheme();
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(isOpen);

  useEscapeKey(() => shouldCloseOnEsc && setShowModal(false));

  const { ref } = useClickAway({
    callback: () => {
      shouldCloseOnOverlayClick && setShowModal(false);
    },
  });

  const regexMatched = (val) => !!val && validationSetting?.regexpPattern.test(val);

  const handleEnterKeyDown = (e) => {
    let val = e.target.value;

    if (val && !formError) {
      if (e.key === 'Enter') {
        onConfirm(val, isChecked)
      }
    } else return;
  };

  const handleOnSubmit = () => {
    onConfirm(value, isChecked);
  };

  const handleInputChange = (e) => {
    let passVal = e.target.value;

    if(validationSetting?.regexpPattern && validationSetting?.validationMessage) {
      !!passVal && regexMatched(passVal)
          ? setFormError(null)
          : setFormError(`${validationSetting?.validationMessage}`);
    }
    setValue(passVal);
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
                onDismiss={onDismiss}
              />
            )}
            {bodyImg && <ImageWrapper>{bodyImg}</ImageWrapper>}
            <StyledCaption position={position}>
              <StyledCaptionText size={1} scale="lg">
                {title}
              </StyledCaptionText>
            </StyledCaption>
            <FlexRow justify="center">
              <StyledInformationText position={position} size={3} scale="sm">
                {information}
              </StyledInformationText>
            </FlexRow>
            <FlexRow>
              <StyledInput
                required={required}
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleEnterKeyDown}
                label={<BodyText size={2}>{inputLabel}</BodyText>}
                placeholder={placeholder}
                error={!!formError}
                validationType={inputType}
                validationText={formError}
              />
            </FlexRow>
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
                disabled={value ? !!formError : true}
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
