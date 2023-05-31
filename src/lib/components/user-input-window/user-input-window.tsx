import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import Button from '../button/button';
import Input, { InputValidationType } from '../input/input';
import BodyText from '../body-text/body-text';
import ReactModal from 'react-modal';
import ModalHeader from './modal-header';
import SubtitleText from '../subtitle-text/subtitle-text';
import { ThemeModeType } from '../navigation/cspr-products-menu/products-menu-item';
import {
  ModalPosition,
  ModalPositionProps,
} from '../confirmation-window/confirmation-window';

export interface UserInputWindowSceneProps {
  isOpen: boolean;
  bodyImg?: React.ReactElement;
  position: ModalPosition;
  title: string;
  withHeader?: boolean;
  headerLogo?: React.ReactElement;
  information?: React.ReactElement | string;
  confirmLabel: string;
  onConfirm: (value: string) => void;
  confirmColor?: string;
  dismissLabel?: string;
  onDismiss: () => void;
  inputLabel?: string;
  inputType: InputValidationType;
  validationMessage?: string;
  placeholder?: string;
  required?: boolean;
  themeMode?: ThemeModeType;
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
          ? ['261px', '350px', '350px']
          : ['261px', '400px', '446px'],
      background: theme.styleguideColors.backgroundPrimary,
      borderColor: theme.styleguideColors.backgroundPrimary,
    })
);

const ImageWrapper = styled(FlexRow)(({ theme }) =>
  theme.withMedia({
    margin: '15px 0 35px 0',
  })
);

const StyledCaption = styled.div<ModalPositionProps>(({ theme, position }) =>
  theme.withMedia({
    textAlign: position === ModalPosition.TopRight ? 'left' : 'center',
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
      textAlign: position === ModalPosition.TopRight ? 'left' : 'center',
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
  })
);

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
  onDismiss,
  themeMode,
  inputType,
  placeholder,
  required = false,
  inputLabel,
  validationMessage,
  portalClass = 'portal',
}: UserInputWindowSceneProps) => {
  const theme = useTheme();

  const [value, setValue] = useState('');
  const error =
    inputType === InputValidationType.password &&
    !!value &&
    /^[a-zA-Z0-9]{12}/.test(value);

  const modalStyle = {
    overlay: {
      backgroundColor: '#0E1126A0',
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

  return (
    <>
      {isOpen && (
        <ReactModal
          isOpen={isOpen}
          style={modalStyle}
          onRequestClose={onDismiss}
          shouldCloseOnEsc
          shouldCloseOnOverlayClick
          portalClassName={portalClass}
        >
          <ModalContainer position={position}>
            {withHeader && (
              <ModalHeader
                themeMode={themeMode}
                headerLogo={headerLogo}
                onDismiss={onDismiss}
              />
            )}
            {bodyImg && <ImageWrapper justify="center">{bodyImg}</ImageWrapper>}
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
                onChange={(event) => setValue(event.target.value)}
                label={<BodyText size={2}>{inputLabel}</BodyText>}
                placeholder={placeholder}
                error={!error}
                validationType={inputType}
                validationText={validationMessage}
              />
            </FlexRow>
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
                onClick={() => onConfirm(value)}
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
