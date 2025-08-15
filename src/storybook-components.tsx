import styled from 'styled-components';
import FlexRow from './lib/components/flex-row/flex-row';
import FlexColumn from './lib/components/flex-column/flex-column';
import CsprDesignLogo from './static/cspr-design-logo.svg';
import SvgIcon from './lib/components/svg-icon/svg-icon';

// @ts-ignore
const StyledCard = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100px',
  height: '100%',
  minWidth: '200px',
  minHeight: '200px',
  overflow: 'hidden',
  borderRadius: '12px',
  backgroundColor: '#F2F3F5',
  boxShadow: '0px 2px 4px rgba(143, 144, 152, 0.45)',
}));

const StyledContainer = styled.div(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
}));

const StyledCardText = styled.div(() => ({
  color: '#0B120E',
  lineHeight: '24px',
  fontWeight: 600,
  fontFamily: 'Inter',
}));

export const StyledHeaderWrapper = styled.span(({}) => ({
  '& h1': {
    color: '#F5F5F7',
  },
}));

export const StyledWrapper = styled.div(({}) => ({
  backgroundColor: '#181D40',
  width: '100%',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff !important',
}));

interface MenuBlockProps {
  items: Array<{ label: string; link: string }>;
}

export const MenuBlocks = ({ items }: MenuBlockProps) => {
  return (
    <FlexColumn>
      <FlexRow gap={14} wrap={'wrap'} style={{ flex: 1 }}>
        {items.map((item) => {
          return (
            <StyledCard>
              <StyledContainer>
                <SvgIcon
                  size={75}
                  src={CsprDesignLogo}
                  style={{ opacity: 0.25 }}
                />
              </StyledContainer>
              <StyledContainer>
                <StyledCardText>
                  <a href={item.link}>{item.label}</a>
                </StyledCardText>
              </StyledContainer>
            </StyledCard>
          );
        })}
      </FlexRow>
    </FlexColumn>
  );
};
