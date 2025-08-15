import React, { useEffect, useMemo, useState } from 'react';
import { Table, TableProps } from './table';
import { Meta, StoryFn } from '@storybook/react';
import HeaderText from '../header-text/header-text';
import TableDataHeader from '../table-data-header/table-data-header';
import TableRow from '../table-row/table-row';
import TableData from '../table-data/table-data';
import BodyText from '../body-text/body-text';
import { PrecisionCase } from '../../utils/currency';
import CSPR from '../cspr/cspr';
import PageTile from '../page-tile/page-tile';
import FlexRow from '../flex-row/flex-row';

export default {
  component: Table,
  title: 'Components/Display/Table with pagination',
  args: {
    renderHeader: () => (
      <HeaderText size={2} tag={'h1'} scale={'xs'}>
        Table with pagination
      </HeaderText>
    ),
    renderDataHeaders: () => (
      <TableRow>
        <TableDataHeader>Rank</TableDataHeader>
        <TableDataHeader align={'right'}>Balance</TableDataHeader>{' '}
        <TableDataHeader>Owner</TableDataHeader>
      </TableRow>
    ),
    renderPaginatedData: (data: any[]) => (
      <>
        {data.map((data) => (
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

const getRandomBalance = () => {
  const min = 100000000000;
  const max = 10000000000000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MOCKED_OWNERS = [
  'Alice',
  'Bob',
  'Charlie',
  'Diana',
  'Ethan',
  'Fiona',
  'Gabe',
  'Hana',
  'Ivan',
  'Jules',
  'Kira',
  'Liam',
  'Mona',
  'Noah',
  'Olga',
  'Pavel',
  'Quinn',
  'Ravi',
  'Sara',
  'Tara',
  'Uma',
  'Vik',
  'Walt',
  'Xena',
  'Yara',
  'Zane',
];

const MOCK_DATA = Array.from({ length: 87 }, (_, i) => {
  const rank = i + 1;
  const owner = MOCKED_OWNERS[i % MOCKED_OWNERS.length];
  const csprName = `${owner.toLowerCase()}.cspr`;
  const motes = getRandomBalance();
  return { rank, owner: csprName, motes };
});

const emulateGetTableDataRequest = (url: string) => {
  const u = new URL(url, 'https://example.local');
  const page = Math.max(parseInt(u.searchParams.get('page') || '1', 10), 1);
  const pageSize = Math.max(
    parseInt(u.searchParams.get('page_size') || '10', 10),
    1,
  );

  const items_count = MOCK_DATA.length;
  const page_count = Math.max(1, Math.ceil(items_count / pageSize));

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const data = MOCK_DATA.slice(start, end);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data, page_count, items_count });
    }, 400);
  });
};

const Template: StoryFn<typeof Table> = (args: TableProps) => {
  const [data, setData] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
  });

  const requestPath = useMemo(
    () =>
      `/api/table?page=${pagination.currentPage}&page_size=${pagination.pageSize}`,
    [pagination.currentPage, pagination.pageSize],
  );

  useEffect(() => {
    (async () => {
      const res = await emulateGetTableDataRequest(requestPath);
      setData(res);
    })();
  }, [requestPath]);

  const handleCurrentPage = (page: number) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: page,
    }));
  };
  const handlePerPage = (pageSize: number) => {
    setPagination((prev) => ({
      ...prev,
      pageSize: pageSize,
    }));
  };
  return (
    <PageTile>
      <FlexRow style={{ padding: '20px' }}>
        <BodyText size={3} variation={'darkGray'}>
          Emulated api request: {requestPath}
        </BodyText>
      </FlexRow>
      <Table
        data={data?.data}
        renderDataHeaders={args.renderDataHeaders}
        renderPaginatedData={() => args.renderPaginatedData(data?.data)}
        itemCount={data?.items_count}
        pageCount={data?.page_count}
        currentPage={pagination.currentPage}
        perPage={pagination.pageSize}
        setCurrentPage={handleCurrentPage}
        setPerPage={handlePerPage}
      />
    </PageTile>
  );
};

export const Primary = Template.bind({});
