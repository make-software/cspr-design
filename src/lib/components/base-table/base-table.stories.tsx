import React from 'react';
import { BaseTable, BaseTableProps } from './base-table';
import { Meta, StoryFn } from '@storybook/react';
import TableDataHeader from '../table-data-header/table-data-header';
import TableRow from '../table-row/table-row';
import TableData from '../table-data/table-data';
import BodyText from '../body-text/body-text';
import { PrecisionCase } from '../../utils/currency';
import Cspr from '../cspr/cspr';
import PageTile from '../page-tile/page-tile';

const mockedData = [
  { rank: 1, motes: '50000000000000', owner: 'konrad.cspr' },
  { rank: 2, motes: '482900000000000', owner: 'victoria.cspr' },
  { rank: 3, motes: '1000000', owner: 'ab.cspr' },
];

export default {
  component: BaseTable,
  title: 'Components/Table/Base Table',
  args: {
    renderDataHeaders: () => (
      <TableRow>
        <TableDataHeader>Rank</TableDataHeader>
        <TableDataHeader align={'right'}>Balance</TableDataHeader>{' '}
        <TableDataHeader>Owner</TableDataHeader>
      </TableRow>
    ),
    renderData: () => (
      <>
        {mockedData.map((data) => (
          <TableRow>
            <TableData>
              <BodyText size={3}>{data.rank}</BodyText>
            </TableData>
            <TableData align={'right'}>
              <BodyText size={3}>
                <Cspr
                  motes={data.motes}
                  precisionCase={PrecisionCase.deployCost}
                />
              </BodyText>
            </TableData>
            <TableData>
              <BodyText size={3}>{data.owner}</BodyText>
            </TableData>
          </TableRow>
        ))}
      </>
    ),
  },
} as Meta<typeof BaseTable>;

const Template: StoryFn<typeof BaseTable> = (args: BaseTableProps) => {
  return (
    <PageTile>
      <BaseTable
        renderDataHeaders={args.renderDataHeaders}
        renderData={args.renderData}
        renderFooter={args.renderFooter}
      />
    </PageTile>
  );
};

export const Primary = Template.bind({});
