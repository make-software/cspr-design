import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {DeployActionRow} from "../deploy-action-row";
import FlexRow from "../../flex-row/flex-row";
import FlexColumn from "../../flex-column/flex-column";
import {
    associatedKeysDeploy,
    auctionDeploy,
    csprFunDeploy,
    defaultDeploy,
    mockedAccountInfos, mockedContractInfos,
    mockedContractPackageInfos,
    transferDeploy, csprMarketDeploy, cep18Deploy, nftDeploy, mockedCsprMarketContractPackageInfo
} from "./mockedDeploys";
import {MapDeploy} from "../utils/deploy-action-helpers";
import BodyText from "../../body-text/body-text";

export default {
    renderComponent: (args) =>  DeployActionRow,
    title: 'Components/Deploy/DeployActionRow',
    args: {
        deploy: MapDeploy(defaultDeploy),
        loading: false,
        actionIdentificationHashes: {
            native_transfer_contract_hash: 'native_transfer_contract_hash',
            auction_manager_contract_hash: 'auction_manager_contract_hash',
            associated_keys_contract_hash: 'associated_keys_contract_hash',
            cspr_market_contract_package_hash: 'cspr_market_contract_package_hash',
        },
        getAccountInfo: (hash) =>  mockedAccountInfos.filter(account => account.public_key === hash || account.account_hash === hash)[0],
        getContractPackageInfoByHash: (hash) => mockedContractPackageInfos.filter(contract_package => contract_package.contract_package_hash === hash)[0],
        getContractInfoByHash: (hash) => mockedContractInfos.filter(contract => contract.contract_hash === hash)[0],
        getAccountPath: (hash) => `https://cspr.live/account/${hash}`,
        getContractPackagePath: (hash) => `https://cspr.live/contract-package/${hash}`,
        getNftPath: (collectionId, nftId) => `https://cspr.live/contracts/${collectionId}/nfts/${nftId}`,
        formatCurrency: (amount, precision) => `$${Number(amount).toFixed(precision)}`
    },
} as Meta<typeof DeployActionRow>;

const exampleComponents = [
    {
        templateLabel: 'Default deploy action message:',
        renderComponent: (args) => <DeployActionRow {...args} />
    },
    {
        templateLabel: 'Transfer deploy action message:',
        renderComponent: (args) =>  <DeployActionRow {...args} deploy={MapDeploy(transferDeploy)} />
    },{
        templateLabel: 'Cspr.fun deploy action message:',
        renderComponent: (args) =>  <DeployActionRow {...args} deploy={MapDeploy(csprFunDeploy)} />
    },
    {
        templateLabel: 'Auction deploy action message:',
        renderComponent: (args) =>  <DeployActionRow {...args} deploy={MapDeploy(auctionDeploy)} />
    },
    {
        templateLabel: 'Associated keys deploy action message:',
        renderComponent: (args) =>  <DeployActionRow {...args} deploy={MapDeploy(associatedKeysDeploy)} />
    },{
        templateLabel: 'Cspr market deploy action message:',
        renderComponent: (args) =>  <DeployActionRow {...args} deploy={MapDeploy(csprMarketDeploy)} />
    },{
        templateLabel: 'CEP-18 deploy action message:',
        renderComponent: (args) =>  <DeployActionRow {...args} deploy={MapDeploy(cep18Deploy)} />
    },{
        templateLabel: 'Nft deploy action message:',
        renderComponent: (args) =>  <DeployActionRow {...args} deploy={MapDeploy(nftDeploy)} />
    },
];

const TemplateDeployActions: StoryFn<typeof DeployActionRow> = (args) => {
    return (
        <FlexColumn>
            {exampleComponents.map(example => (<FlexColumn itemsSpacing={10} style={{ padding: '10px 20px' }}>
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
}

export const DeployActions = TemplateDeployActions.bind({});
