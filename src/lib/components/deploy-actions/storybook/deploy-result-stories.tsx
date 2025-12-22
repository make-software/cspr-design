import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlexRow from '../../flex-row/flex-row';
import FlexColumn from '../../flex-column/flex-column';
import {
  associatedKeysDeploy,
  auctionDeploy,
  csprFunDeploy,
  defaultDeploy,
  mockedAccountInfos,
  mockedContractInfos,
  mockedContractPackageInfos,
  transferDeploy,
  csprMarketDeploy,
  cep18Deploy,
  nftDeploy, duplicatedResultsDeploy,
} from './mockedDeploys';
import BodyText from '../../body-text/body-text';
import { DeployResultRow, ResultRowVariation } from '../deploy-result-row';
import {MapDeploy} from "../../../utils/deploy-action-helpers";

export default {
  renderComponent: (args) => DeployResultRow,
  title: 'Composites/Deploy/DeployResultRow',
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
} as Meta<typeof DeployResultRow>;

const exampleComponents = [
  {
    templateLabel: 'Transfer deploy results message:',
    renderComponent: (args) => (
      <DeployResultRow {...args} deploy={MapDeploy(transferDeploy)} />
    ),
  },
  {
    templateLabel: 'Cspr.fun deploy results message:',
    renderComponent: (args) => (
      <DeployResultRow {...args} deploy={MapDeploy(csprFunDeploy)} />
    ),
  },
  {
    templateLabel: 'Auction deploy results message:',
    renderComponent: (args) => (
      <DeployResultRow {...args} deploy={MapDeploy(auctionDeploy)} />
    ),
  },
  {
    templateLabel: 'Associated keys deploy results message:',
    renderComponent: (args) => (
      <DeployResultRow {...args} deploy={MapDeploy(associatedKeysDeploy)} />
    ),
  },
  {
    templateLabel: 'Cspr market deploy results message:',
    renderComponent: (args) => (
      <DeployResultRow {...args} deploy={MapDeploy(csprMarketDeploy)} />
    ),
  },
  {
    templateLabel: 'CEP-18 deploy results message:',
    renderComponent: (args) => (
      <DeployResultRow {...args} deploy={MapDeploy(cep18Deploy)} />
    ),
  },
  {
    templateLabel: 'CEP-18 deploy with duplicated results message:',
    renderComponent: (args) => (
        <DeployResultRow {...args} deploy={MapDeploy(duplicatedResultsDeploy)} shouldCollapse/>
    ),
  },
  {
    templateLabel: 'Nft deploy results message:',
    renderComponent: (args) => (
      <DeployResultRow {...args} deploy={MapDeploy(nftDeploy)} />
    ),
  },
];

const TemplateDeployDefaultResults: StoryFn<typeof DeployResultRow> = (
  args,
) => {
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

export const DeployDefaultResults = TemplateDeployDefaultResults.bind({});

const TemplateDeployGreyBgResults: StoryFn<typeof DeployResultRow> = (args) => {
  const styledArgs = {
    ...args,
    variation: ResultRowVariation.gray,
  };
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
            {example.renderComponent(styledArgs)}
          </FlexColumn>
        </FlexColumn>
      ))}
    </FlexColumn>
  );
};

export const DeployGreyResults = TemplateDeployGreyBgResults.bind({});
