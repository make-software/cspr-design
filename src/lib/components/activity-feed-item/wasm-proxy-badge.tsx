import React from 'react';
import { useTheme } from 'styled-components';
import {BadgeProps} from "@make-software/cspr.design";
import {TFunction} from "i18next";
import Tooltip from "../tooltip/tooltip";
import FlexRow from "../flex-row/flex-row";
import Badge from "../badge/badge";

export const WasmProxyBadge = ({
  lineHeight,
                                 i18n
}: {
  lineHeight?: Pick<BadgeProps, 'lineHeight'>['lineHeight'];
  i18n?: TFunction
}) => {
  const theme = useTheme();

  return (
    <Tooltip
      tooltipContent={i18n(
        'This WASM transaction ran the code from the identified smart contract.'
      )}
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
