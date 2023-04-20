import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const SettingsContainer = styled.div(({ theme }) =>
  theme.withMedia({
    background: theme.styleguideColors.backgroundTertiary,
    height: '40px',
    width: '100%',
    display: 'flex',
  })
);

export interface ContainerProps {}

export const NavigationSettingsContainer = ({
  children,
}: PropsWithChildren<ContainerProps>) => {
  return <SettingsContainer>{children}</SettingsContainer>;
};
