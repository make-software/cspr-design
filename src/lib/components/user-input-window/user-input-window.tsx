import React, { useCallback, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import Button from '../button/button';
import Input, { InputValidationType } from '../input/input';
import BodyText from '../body-text/body-text';
import ReactModal from 'react-modal';
import { useClickAway } from '../../hooks/use-click-away';
import { useEscapeKey } from '../../hooks/use-escape-key';
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
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
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
  shouldCloseOnEsc,
  shouldCloseOnOverlayClick,
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
  const [formError, setFormError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(isOpen);

  useEscapeKey(() => shouldCloseOnEsc && setShowModal(false));

  const getRegexByInputType = useCallback(() => {
    switch (inputType) {
      case InputValidationType.password:
        return /^[a-zA-Z0-9]{12}/;
      default:
        return /^[a-zA-Z0-9]{12}/;
    }
  }, []);

  const regexMatched = !!value && getRegexByInputType().test(value);

  const modalStyle = {
    overlay: {
      backgroundColor: '#0E1126A0',
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

  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      onConfirm(e.target.value);
    }
  };

  const { ref } = useClickAway({
    callback: () => {
      shouldCloseOnOverlayClick && setShowModal(false);
    },
  });

  const handleInputChange = (e) => {
    regexMatched ? setFormError(null) : setFormError(`${validationMessage}`);
    setValue(e.target.value);
  };

  return (
    <>
      {showModal && (
        <ReactModal
          isOpen={showModal}
          style={modalStyle}
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
                onChange={handleInputChange}
                onKeyDown={handleEnterKeyDown}
                label={<BodyText size={2}>{inputLabel}</BodyText>}
                placeholder={placeholder}
                error={!!formError}
                validationType={inputType}
                validationText={formError}
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
