import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import {
  associatedKeysDeploy,
  auctionDeploy,
  cep18Deploy,
  csprFunDeploy,
  csprMarketDeploy,
  defaultDeploy,
  mockedAccountInfos,
  mockedContractInfos,
  mockedContractPackageInfos,
  nftDeploy,
  transferDeploy,
} from '../deploy-actions/storybook/mockedDeploys';
import { ActivityFeedItem } from './activity-feed-item';
import FlexColumn from '../flex-column/flex-column';
import FlexRow from '../flex-row/flex-row';
import BodyText from '../body-text/body-text';
import { MapDeploy } from '../../utils/deploy-action-helpers';

export default {
  renderComponent: (args) => ActivityFeedItem,
  title: 'Composites/Deploy/ActivityFeedItem',
  args: {
    deploy: MapDeploy(defaultDeploy),
    loading: false,
    actionIdentificationHashes: {
      native_transfer_contract_hash: 'native_transfer_contract_hash',
      auction_manager_contract_hash: 'auction_manager_contract_hash',
      associated_keys_contract_hash: 'associated_keys_contract_hash',
      cspr_market_contract_package_hash: 'cspr_market_contract_package_hash',
    },
    getAccountInfo: (hash) =>
      mockedAccountInfos.filter(
        (account) =>
          account.public_key === hash || account.account_hash === hash,
      )[0],
    getContractPackageInfoByHash: (hash) =>
      mockedContractPackageInfos.filter(
        (contract_package) => contract_package.contract_package_hash === hash,
      )[0],
    getContractInfoByHash: (hash) =>
      mockedContractInfos.filter(
        (contract) => contract.contract_hash === hash,
      )[0],
  },
} as Meta<typeof ActivityFeedItem>;

const exampleComponents = [
  {
    templateLabel: 'Default action feed item:',
    renderComponent: (args) => <ActivityFeedItem {...args} />,
  },
  {
    templateLabel: 'Transfer action feed item:',
    renderComponent: (args) => (
      <ActivityFeedItem {...args} deploy={MapDeploy(transferDeploy)} />
    ),
  },
  {
    templateLabel: 'Cspr.fun action feed item:',
    renderComponent: (args) => (
      <ActivityFeedItem {...args} deploy={MapDeploy(csprFunDeploy)} />
    ),
  },
  {
    templateLabel: 'Auction action feed item:',
    renderComponent: (args) => (
      <ActivityFeedItem {...args} deploy={MapDeploy(auctionDeploy)} />
    ),
  },
  {
    templateLabel: 'Associated keys action feed item:',
    renderComponent: (args) => (
      <ActivityFeedItem {...args} deploy={MapDeploy(associatedKeysDeploy)} />
    ),
  },
  {
    templateLabel: 'Cspr market action feed item:',
    renderComponent: (args) => (
      <ActivityFeedItem {...args} deploy={MapDeploy(csprMarketDeploy)} />
    ),
  },
  {
    templateLabel: 'CEP-18 action feed item:',
    renderComponent: (args) => (
      <ActivityFeedItem {...args} deploy={MapDeploy(cep18Deploy)} />
    ),
  },
  {
    templateLabel: 'Nft action feed item:',
    renderComponent: (args) => (
      <ActivityFeedItem {...args} deploy={MapDeploy(nftDeploy)} />
    ),
  },
];

const TemplateActivityFeedItems: StoryFn<typeof ActivityFeedItem> = (args) => {
  return (
    <FlexColumn>
      {exampleComponents.map((example) => (
        <FlexColumn itemsSpacing={10} style={{ padding: '10px 20px' }}>
          <FlexRow>
            <BodyText size={3} variation={'darkGray'}>
              {example.templateLabel}
            </BodyText>
          </FlexRow>
          <FlexColumn itemsSpacing={10} style={{ padding: '0px 10px' }}>
            {example.renderComponent(args)}
          </FlexColumn>
        </FlexColumn>
      ))}
    </FlexColumn>
  );
};

export const ActivityFeedItems = TemplateActivityFeedItems.bind({});
