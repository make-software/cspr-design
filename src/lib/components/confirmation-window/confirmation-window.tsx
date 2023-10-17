import React from 'react';
import styled, { useTheme } from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import Button from '../button/button';
import BodyText from '../body-text/body-text';
import ReactModal from 'react-modal';
import ModalHeader from '../modal-header/modal-header';
import SubtitleText from '../subtitle-text/subtitle-text';
import { ThemeModeType } from '../navigation/cspr-products-menu/products-menu-item';

export enum ModalPosition {
  TopRight = 'topRight',
  Center = 'center',
}

export interface ModalPositionProps {
  position: ModalPosition;
}

export interface ConfirmationWindowSceneProps {
  isOpen: boolean;
  bodyImg?: React.ReactElement;
  position: ModalPosition;
  title: string;
  withHeader?: boolean;
  headerLogo?: React.ReactElement;
  information?: React.ReactElement | string;
  confirmLabel: string;
  onConfirm: () => void;
  confirmColor?: string;
  dismissLabel?: string;
  onDismiss: () => void;
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

const InformationText = styled(BodyText)<ModalPositionProps>(
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

export const ConfirmationWindow = ({
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
  portalClass = 'portal',
}: ConfirmationWindowSceneProps) => {
  const theme = useTheme();

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
              boxShadow:
                themeMode === ThemeModeType.dark
                  ? '0px 16px 48px rgba(9, 12, 26, 0.5)'
                  : '0px 16px 48px rgba(26, 25, 25, 0.2)',
            },
          }
        : {
            ...centerModalStyles,
            ...{
              backgroundColor: theme.styleguideColors.backgroundPrimary,
              borderColor: theme.styleguideColors.backgroundPrimary,
              boxShadow:
                themeMode === ThemeModeType.dark
                  ? '0px 16px 48px rgba(9, 12, 26, 0.5)'
                  : '0px 16px 48px rgba(26, 25, 25, 0.2)',
            },
          },
  };

  const StyledConfirmButton = styled(Button)(({ theme }) =>
    theme.withMedia({
      backgroundColor: theme.styleguideColors.fillPrimaryBlue,
      ':hover': {
        background: theme.styleguideColors.fillPrimaryBlueHover,
      },
      ':active': {
        background: theme.styleguideColors.fillPrimaryBlueClick,
      },
    })
  );

  const StyledDismissButton = styled(Button)(({ theme }) =>
    theme.withMedia({
      color: theme.styleguideColors.contentBlue,
      ':hover': {
        background: theme.styleguideColors.fillSecondaryBlueHover,
      },
      ':active': {
        background: theme.styleguideColors.fillSecondaryBlueClick,
      },
    })
  );

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
              <InformationText position={position} size={3} scale="sm">
                {information}
              </InformationText>
            </FlexRow>
            <ButtonsContainer
              position={position}
              gap={'16px'}
              justify={'space-between'}
            >
              {dismissLabel && (
                <StyledDismissButton color={'utility'} onClick={onDismiss}>
                  {dismissLabel}
                </StyledDismissButton>
              )}
              <StyledConfirmButton onClick={onConfirm}>
                {confirmLabel}
              </StyledConfirmButton>
            </ButtonsContainer>
          </ModalContainer>
        </ReactModal>
      )}
    </>
  );
};

export default ConfirmationWindow;
