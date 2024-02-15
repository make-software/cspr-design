import React from 'react';
import styled from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import { ThemeModeType } from '../navigation/cspr-products-menu/products-menu-item';
import CloseIcon from '../../assets/icons/ic-close.svg';

const ModalHeaderContainer = styled(FlexRow)<{ marginBottom?: string }>(
  ({ theme, marginBottom }) =>
    theme.withMedia({
      marginBottom: marginBottom ? marginBottom : '40px',
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

export interface ModalHeaderProps {
  onClose?: () => void;
  headerLogo?: React.ReactElement;
  themeMode?: ThemeModeType;
}

export const ModalHeader = ({ onClose, headerLogo }: ModalHeaderProps) => {
  return (
    <ModalHeaderContainer
      justify={headerLogo ? 'space-between' : 'end'}
      align="center"
    >
      {headerLogo && headerLogo}
      {onClose && (
        <CloseButton onClick={onClose}>
          <StyledSvgIcon src={CloseIcon} size={20} />
        </CloseButton>
      )}
    </ModalHeaderContainer>
  );
};
export default ModalHeader;
