import React from 'react';
import { HashLength } from '../../utils/formatters';
import FlexRow from '../flex-row/flex-row';
import Tooltip from '../tooltip/tooltip';
import BodyText from '../body-text/body-text';
import Copy from '../copy/copy';
import NamedKeyValue from '../named-key-value/named-key-value';

interface TableDataNamedKeyProps {
  purse: string;
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  hashLength?: HashLength;
  csprLiveDomainPath: string;
}

export const TableDataNamedKey = ({
  purse,
  fontSize = 'xs',
  hashLength = HashLength.TINY,
  csprLiveDomainPath,
}: TableDataNamedKeyProps) => {
  return (
    <FlexRow itemsSpacing={4}>
      <Tooltip scale={'xs'} lineHeight={'xs'} tooltipContent={purse}>
        <BodyText lineHeight={'xs'} size={3} monotype noWrap scale={fontSize}>
          <NamedKeyValue
            namedKey={purse}
            hashLength={hashLength}
            csprLiveDomainPath={csprLiveDomainPath}
          />
        </BodyText>
      </Tooltip>
      <Copy value={purse} minified />
    </FlexRow>
  );
};
