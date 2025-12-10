import React from 'react';
import { useTheme } from 'styled-components';
import Tooltip from '../tooltip/tooltip';
import FlexRow from '../flex-row/flex-row';
import Badge, { BadgeProps } from '../badge/badge';

export const WasmProxyBadge = ({
  lineHeight,
}: {
  lineHeight?: Pick<BadgeProps, 'lineHeight'>['lineHeight'];
}) => {
  const theme = useTheme();

  return (
    <Tooltip
      tooltipContent={
        'This WASM transaction ran the code from the identified smart contract.'
      }
    >
      <FlexRow gap={3} align={'center'}>
        <Badge
          lineHeight={lineHeight}
          label={'WASM'}
          variation={theme.styleguideColors.contentLightBlue}
        />
      </FlexRow>
    </Tooltip>
  );
};
