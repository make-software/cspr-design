import React from 'react';
import styled from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import CSPRLiveLogo from '../../assets/icons/logos/cspr-live-full.svg';
import CloseIcon from '../../assets/icons/ic-close.svg';

const ModalHeaderContainer = styled(FlexRow)(({ theme }) =>
  theme.withMedia({
    marginBottom: ['40px', '46px', '46px'],
  })
);

const CloseButton = styled.div(() => ({
  cursor: 'pointer',
  padding: '0 10px',
}));

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  path: {
    stroke: theme.styleguideColors.contentBlue,
  },
}));

const StyledImg = styled.img(() => ({
  marginLeft: '4px',
}));

interface ModalHeaderProps {
  onDismiss: () => void;
  headerLogoSrc?: string;
}

const ModalHeader = ({ onDismiss, headerLogoSrc }: ModalHeaderProps) => {
  return (
    <ModalHeaderContainer justify="space-between" align="center">
      <StyledImg
        src={headerLogoSrc ? headerLogoSrc : CSPRLiveLogo}
        alt="CSPR logo"
      />
      <CloseButton onClick={onDismiss}>
        <StyledSvgIcon src={CloseIcon} size={16} />
      </CloseButton>
    </ModalHeaderContainer>
  );
};
export default ModalHeader;
