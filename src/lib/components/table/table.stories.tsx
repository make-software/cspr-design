import React from 'react';
import { Table } from './table';
import { Meta } from '@storybook/react';
import TableDataHeader from '../table-data-header/table-data-header';
import TableRow from '../table-row/table-row';
import TableData from '../table-data/table-data';
import BodyText from '../body-text/body-text';
import { PrecisionCase } from '../../utils/currency';
import CSPR from '../cspr/cspr';
import PageTile from '../page-tile/page-tile';
import TableHead from '../table-head/table-head';
import { StoryObj } from '@storybook/react-vite';
import { TableLoader } from '../paginated-table/table-loader';

const mockedData = [
  { rank: 1, motes: '50000000000000', owner: 'konrad.cspr' },
  { rank: 2, motes: '482900000000000', owner: 'victoria.cspr' },
  { rank: 3, motes: '1000000', owner: 'ab.cspr' },
];

const meta = {
  component: Table,
  title: 'Components/Display/Table',
  subcomponents: { TableDataHeader, TableRow, TableData, TableHead },
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
                <CSPR
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
} as Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <PageTile>
      <Table {...args} />
    </PageTile>
  ),
};

export const WithHeader: Story = {
  render: (args) => (
    <PageTile>
      <Table
        {...args}
        renderDataHeaders={args.renderDataHeaders}
        renderData={args.renderData}
        renderFooter={args.renderFooter}
        renderHeader={() => <h3>Main table header</h3>}
      />
    </PageTile>
  ),
};

export const WithFooter: Story = {
  render: (args) => (
    <PageTile>
      <Table
        {...args}
        renderDataHeaders={args.renderDataHeaders}
        renderData={args.renderData}
        renderFooter={() => <h4>Main table gooter</h4>}
        renderHeader={() => <h3>Main table header</h3>}
      />
    </PageTile>
  ),
};

export const Loading: Story = {
  render: (args) => (
    <PageTile>
      <Table
        {...args}
        renderDataHeaders={args.renderDataHeaders}
        renderFooter={args.renderFooter}
        renderData={() => <TableLoader columnsLength={3} rowsLength={3} />}
      />
    </PageTile>
  ),
};
