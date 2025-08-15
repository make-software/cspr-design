import styled from 'styled-components';

export const StyledHeaderWrapper = styled.span(({}) => ({
  '& h1': {
    color: '#F5F5F7',
  },
}));

export const StyledWrapper = styled.div(({}) => ({
  backgroundColor: '#181D40',
  width: '100%',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff !important',
}));
