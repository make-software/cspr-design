import React from 'react';
import styled from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import Button from '../button/button';
import BodyText from '../body-text/body-text';
import ReactModal from 'react-modal';
import ModalHeader from './modal-header';
import SubtitleText from '../subtitle-text/subtitle-text';

export interface ConfirmationWindowSceneProps {
  isOpen: boolean;
  title: string;
  withHeader?: boolean;
  headerLogoSrc?: string;
  information?: string;
  confirmLabel: string;
  onConfirm: () => void;
  confirmColor?: string;
  dismissLabel?: string;
  onDismiss: () => void;
}

const ModalContainer = styled(FlexColumn)(({ theme }) =>
  theme.withMedia({
    width: ['311px', '400px', '462px'],
  })
);

const StyledCaption = styled.div(({ theme }) =>
  theme.withMedia({
    textAlign: 'center',
    marginBottom: '16px',
  })
);

const StyledCaptionText = styled(SubtitleText)(({ theme }) =>
  theme.withMedia({
    fontWeight: [600, 600, 700],
  })
);

const InformationText = styled(BodyText)(({ theme }) =>
  theme.withMedia({
    textAlign: 'center',
    color: theme.styleguideColors.contentSecondary,
  })
);

const ButtonsContainer = styled(FlexRow)(({ theme }) =>
  theme.withMedia({
    marginTop: ['32px', '32px', '56px'],
    flexDirection: ['column', 'row', 'row'],
  })
);

export const ConfirmationWindow = ({
  isOpen,
  title,
  withHeader,
  headerLogoSrc,
  information,
  confirmLabel,
  confirmColor,
  onConfirm,
  dismissLabel,
  onDismiss,
}: ConfirmationWindowSceneProps) => {
  const modalStyle = {
    overlay: {
      backgroundColor: '#0E1126A0',
    },
    content: {
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      borderRadius: '12px',
      padding: '32px 16px 16px',
      top: '50%',
      transform: 'translate(-50%, -50%)',
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
          portalClassName={'cspr'}
        >
          <ModalContainer>
            {withHeader && (
              <ModalHeader
                headerLogoSrc={headerLogoSrc}
                onDismiss={onDismiss}
              />
            )}
            <StyledCaption>
              <StyledCaptionText size={1} scale="lg">
                {title}
              </StyledCaptionText>
            </StyledCaption>
            <FlexRow>
              <InformationText size={3} scale="sm">
                {information}
              </InformationText>
            </FlexRow>
            <ButtonsContainer gap={'16px'} justify={'space-between'}>
              {dismissLabel && (
                <Button color={'secondaryBlue'} onClick={onDismiss}>
                  {dismissLabel}
                </Button>
              )}
              <Button
                color={confirmColor === 'red' ? 'primaryRed' : 'primaryBlue'}
                onClick={onConfirm}
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

export default ConfirmationWindow;
