export declare const mockedAccountInfos: ({
    account_hash: string;
    account_info: null;
    balance: string;
    centralized_account_info: {
        account_hash: string;
        avatar_url: string;
        name: string;
        url: string;
    };
    cspr_name: null;
    deployment_threshold: number;
    genesis_balance: string;
    key_management_threshold: number;
    main_purse_uref: string;
    public_key: string;
    auction_status?: undefined;
    delegated_balance?: undefined;
    staked_balance?: undefined;
    undelegating_balance?: undefined;
} | {
    account_hash: string;
    account_info: {
        account_hash: string;
        created: string;
        deploy_hash: string;
        info: {
            nodes: {
                description: string;
                functionality: string[];
                location: {
                    country: string;
                    latitude: number;
                    longitude: number;
                    name: string;
                };
                public_key: string;
            }[];
            owner: {
                affiliated_accounts: {
                    public_key: string;
                }[];
                branding: {
                    logo: {
                        png_1024: string;
                        png_256: string;
                        svg: string;
                    };
                };
                description: string;
                email: string;
                identity: {
                    casper_association_kyc_onchain: string;
                    casper_association_kyc_url: string;
                    ownership_disclosure_url: string;
                };
                location: {
                    country: string;
                    latitude: number;
                    longitude: number;
                    name: string;
                };
                name: string;
                social: {
                    facebook: string;
                    github: string;
                    keybase: string;
                    medium: string;
                    reddit: string;
                    telegram: string;
                    twitter: string;
                    wechat: string;
                    youtube: string;
                };
                type: string[];
                website: string;
            };
        };
        is_active: boolean;
        updated: string;
        url: string;
        verified_account_hashes: string[];
    };
    balance: string;
    centralized_account_info: null;
    cspr_name: null;
    deployment_threshold: number;
    genesis_balance: null;
    key_management_threshold: number;
    main_purse_uref: string;
    public_key: string;
    auction_status?: undefined;
    delegated_balance?: undefined;
    staked_balance?: undefined;
    undelegating_balance?: undefined;
} | {
    account_hash: string;
    account_info: null;
    auction_status: null;
    balance: string;
    centralized_account_info: {
        account_hash: string;
        avatar_url: string;
        name: string;
        url: string;
    };
    cspr_name: null;
    delegated_balance: null;
    deployment_threshold: number;
    genesis_balance: null;
    key_management_threshold: number;
    main_purse_uref: string;
    public_key: null;
    staked_balance: null;
    undelegating_balance: null;
} | {
    account_hash: string;
    account_info: null;
    auction_status: null;
    balance: string;
    centralized_account_info: null;
    cspr_name: string;
    delegated_balance: null;
    deployment_threshold: number;
    genesis_balance: null;
    key_management_threshold: number;
    main_purse_uref: string;
    public_key: string;
    staked_balance: null;
    undelegating_balance: null;
} | {
    account_hash: string;
    account_info: null;
    balance: string;
    centralized_account_info: null;
    cspr_name: null;
    deployment_threshold: number;
    genesis_balance: null;
    key_management_threshold: number;
    main_purse_uref: string;
    public_key: string;
    auction_status?: undefined;
    delegated_balance?: undefined;
    staked_balance?: undefined;
    undelegating_balance?: undefined;
})[];
export declare const mockedContractPackageInfos: ({
    account_info: null;
    centralized_account_info: null;
    coingecko_data: null;
    coingecko_id: null;
    contract_package_hash: string;
    cspr_name: null;
    description: string;
    friendlymarket_data: null;
    has_ces_events: boolean;
    icon_url: string;
    is_contract_info_approved: boolean;
    latest_version_contract_hash: string;
    latest_version_contract_type_id: number;
    metadata: {
        balances_uref: string;
        decimals: number;
        description: string;
        logo: string;
        name: string;
        symbol: string;
        total_supply_uref: string;
        burn_mode?: undefined;
        events_mode?: undefined;
        holder_mode?: undefined;
        identifier_mode?: undefined;
        metadata_mutability?: undefined;
        minting_mode?: undefined;
        nft_kind?: undefined;
        nft_metadata_kind?: undefined;
        ownership_mode?: undefined;
        whitelist_mode?: undefined;
    };
    name: string;
    owner_hash: string;
    owner_public_key: string;
    timestamp: string;
    website_url: null;
} | {
    account_info: null;
    centralized_account_info: null;
    coingecko_data: null;
    coingecko_id: null;
    contract_package_hash: string;
    cspr_name: null;
    description: string;
    friendlymarket_data: null;
    has_ces_events: boolean;
    icon_url: string;
    is_contract_info_approved: boolean;
    latest_version_contract_hash: string;
    latest_version_contract_type_id: null;
    metadata: {
        balances_uref?: undefined;
        decimals?: undefined;
        description?: undefined;
        logo?: undefined;
        name?: undefined;
        symbol?: undefined;
        total_supply_uref?: undefined;
        burn_mode?: undefined;
        events_mode?: undefined;
        holder_mode?: undefined;
        identifier_mode?: undefined;
        metadata_mutability?: undefined;
        minting_mode?: undefined;
        nft_kind?: undefined;
        nft_metadata_kind?: undefined;
        ownership_mode?: undefined;
        whitelist_mode?: undefined;
    };
    name: string;
    owner_hash: string;
    owner_public_key: string;
    timestamp: string;
    website_url: string;
} | {
    account_info: null;
    centralized_account_info: null;
    coingecko_data: null;
    coingecko_id: null;
    contract_package_hash: string;
    cspr_name: null;
    description: string;
    friendlymarket_data: null;
    has_ces_events: boolean;
    icon_url: string;
    is_contract_info_approved: boolean;
    latest_version_contract_hash: string;
    latest_version_contract_type_id: number;
    metadata: {
        burn_mode: number;
        events_mode: number;
        holder_mode: number;
        identifier_mode: number;
        metadata_mutability: number;
        minting_mode: number;
        name: string;
        nft_kind: number;
        nft_metadata_kind: number;
        ownership_mode: number;
        symbol: string;
        total_supply_uref: string;
        whitelist_mode: number;
        balances_uref?: undefined;
        decimals?: undefined;
        description?: undefined;
        logo?: undefined;
    };
    name: string;
    owner_hash: null;
    owner_public_key: string;
    timestamp: string;
    website_url: null;
} | {
    coingecko_id: null;
    contract_package_hash: string;
    description: string;
    icon_url: string;
    is_contract_info_approved: boolean;
    latest_version_contract_type_id: null;
    metadata: {
        balances_uref?: undefined;
        decimals?: undefined;
        description?: undefined;
        logo?: undefined;
        name?: undefined;
        symbol?: undefined;
        total_supply_uref?: undefined;
        burn_mode?: undefined;
        events_mode?: undefined;
        holder_mode?: undefined;
        identifier_mode?: undefined;
        metadata_mutability?: undefined;
        minting_mode?: undefined;
        nft_kind?: undefined;
        nft_metadata_kind?: undefined;
        ownership_mode?: undefined;
        whitelist_mode?: undefined;
    };
    name: string;
    owner_hash: null;
    owner_public_key: string;
    timestamp: string;
    website_url: string;
    account_info?: undefined;
    centralized_account_info?: undefined;
    coingecko_data?: undefined;
    cspr_name?: undefined;
    friendlymarket_data?: undefined;
    has_ces_events?: undefined;
    latest_version_contract_hash?: undefined;
})[];
export declare const mockedContractInfos: {
    contract_hash: string;
    contract_package_hash: string;
    deploy_hash: string;
    block_height: number;
    contract_type_id: number;
    timestamp: string;
    contract_version: number;
    is_disabled: boolean;
    contract_package: {
        contract_package_hash: string;
        owner_public_key: string;
        owner_hash: string;
        name: string;
        description: string;
        metadata: {
            balances_uref: string;
            decimals: number;
            description: string;
            logo: string;
            name: string;
            symbol: string;
            total_supply_uref: string;
        };
        latest_version_contract_type_id: number;
        timestamp: string;
        icon_url: string;
        website_url: null;
        coingecko_id: null;
        latest_version_contract_hash: null;
        account_info: null;
        centralized_account_info: null;
        coingecko_data: null;
        friendlymarket_data: null;
    };
}[];
export declare const defaultDeploy: {
    deploy_hash: string;
    block_hash: string;
    block_height: number;
    caller_public_key: string;
    caller_hash: string;
    execution_type_id: number;
    contract_package_hash: string;
    contract_hash: string;
    entry_point_id: number;
    args: {
        amount: {
            cl_type: string;
            parsed: string;
        };
        public_key: {
            cl_type: string;
            parsed: string;
        };
    };
    payment_amount: string;
    refund_amount: string;
    cost: string;
    consumed_gas: string;
    error_message: null;
    status: string;
    timestamp: string;
    rate: number;
    account_info: {
        account_hash: string;
        created: string;
        deploy_hash: string;
        info: {
            nodes: {
                description: string;
                functionality: string[];
                location: {
                    country: string;
                    latitude: number;
                    longitude: number;
                    name: string;
                };
                public_key: string;
            }[];
            owner: {
                affiliated_accounts: {
                    public_key: string;
                }[];
                branding: {
                    logo: {
                        png_1024: string;
                        png_256: string;
                        svg: string;
                    };
                };
                description: string;
                email: string;
                identity: {
                    casper_association_kyc_onchain: string;
                    casper_association_kyc_url: string;
                    ownership_disclosure_url: string;
                };
                location: {
                    country: string;
                    latitude: number;
                    longitude: number;
                    name: string;
                };
                name: string;
                resources: {
                    code_of_conduct_url: string;
                    other: {
                        name: string;
                        url: string;
                    }[];
                    privacy_policy_url: string;
                    terms_of_service_url: string;
                };
                social: {
                    discord: string;
                    facebook: string;
                    github: string;
                    keybase: string;
                    medium: string;
                    reddit: string;
                    telegram: string;
                    twitter: string;
                    wechat: string;
                    youtube: string;
                };
                type: string[];
                website: string;
            };
        };
        is_active: boolean;
        updated: string;
        url: string;
        verified_account_hashes: string[];
    };
    centralized_account_info: null;
    contract_package: {
        contract_package_hash: string;
        owner_public_key: null;
        owner_hash: null;
        name: string;
        description: string;
        metadata: {};
        latest_version_contract_type_id: number;
        timestamp: string;
        icon_url: string;
        website_url: string;
        coingecko_id: null;
        latest_version_contract_hash: null;
        account_info: null;
        centralized_account_info: null;
        coingecko_data: null;
        friendlymarket_data: null;
    };
    contract: {
        block_height: number;
        contract_hash: string;
        contract_package_hash: string;
        contract_type_id: number;
        contract_version: number;
        deploy_hash: null;
        is_disabled: boolean;
        major_protocol_version: number;
        timestamp: string;
    };
    contract_entrypoint: {
        action_type_id: null;
        contract_hash: string;
        contract_package_hash: string;
        id: number;
        name: string;
    };
    caller_cspr_name: null;
    transfers: null;
    nft_token_actions: null;
    ft_token_actions: null;
};
export declare const transferDeploy: {
    deploy_hash: string;
    block_hash: string;
    block_height: number;
    caller_public_key: string;
    caller_hash: string;
    execution_type_id: number;
    contract_package_hash: string;
    contract_hash: string;
    entry_point_id: number;
    args: {
        amount: {
            cl_type: string;
            parsed: string;
        };
        id: {
            cl_type: {
                Option: string;
            };
            parsed: null;
        };
        target: {
            cl_type: string;
            parsed: string;
        };
    };
    payment_amount: string;
    refund_amount: string;
    cost: string;
    consumed_gas: string;
    error_message: null;
    status: string;
    timestamp: string;
    rate: number;
    account_info: null;
    centralized_account_info: null;
    contract_package: {
        contract_package_hash: string;
        owner_public_key: null;
        owner_hash: null;
        name: string;
        description: string;
        metadata: {};
        latest_version_contract_type_id: number;
        timestamp: string;
        icon_url: string;
        website_url: string;
        coingecko_id: null;
        latest_version_contract_hash: null;
        account_info: null;
        centralized_account_info: null;
        coingecko_data: null;
        friendlymarket_data: null;
    };
    contract: {
        block_height: number;
        contract_hash: string;
        contract_package_hash: string;
        contract_type_id: number;
        contract_version: number;
        deploy_hash: null;
        is_disabled: boolean;
        major_protocol_version: number;
        timestamp: string;
    };
    contract_entrypoint: {
        action_type_id: null;
        contract_hash: string;
        contract_package_hash: string;
        id: number;
        name: string;
    };
    caller_cspr_name: null;
    transfers: {
        id: number;
        transfer_index: null;
        initiator_account_hash: string;
        from_purse: string;
        to_purse: string;
        to_account_hash: string;
        amount: string;
        from_purse_public_key: string;
        to_purse_public_key: string;
        from_purse_account_info: null;
        to_purse_account_info: null;
        from_purse_centralized_account_info: null;
        to_purse_centralized_account_info: null;
        from_purse_cspr_name: null;
        to_purse_cspr_name: null;
    }[];
    nft_token_actions: null;
    ft_token_actions: null;
};
export declare const csprFunDeploy: {
    deploy_hash: string;
    block_hash: string;
    block_height: number;
    caller_public_key: string;
    caller_hash: string;
    execution_type_id: number;
    contract_package_hash: string;
    contract_hash: string;
    entry_point_id: number;
    args: {
        amount: {
            cl_type: string;
            parsed: string;
        };
        csprfun_contract_hash_key: {
            cl_type: string;
            parsed: string;
        };
        csprfun_contract_package_hash_key: {
            cl_type: string;
            parsed: string;
        };
        is_buy: {
            cl_type: string;
            parsed: boolean;
        };
        min_amount_received: {
            cl_type: string;
            parsed: string;
        };
        recipient: {
            cl_type: string;
            parsed: string;
        };
        token_to_trade_contract_hash_key: {
            cl_type: string;
            parsed: string;
        };
        wcspr_contract_hash_key: {
            cl_type: string;
            parsed: string;
        };
    };
    payment_amount: string;
    refund_amount: string;
    cost: string;
    consumed_gas: string;
    error_message: null;
    status: string;
    timestamp: string;
    rate: number;
    account_info: null;
    centralized_account_info: null;
    contract_package: {
        contract_package_hash: string;
        owner_public_key: string;
        owner_hash: string;
        name: string;
        description: string;
        metadata: {};
        latest_version_contract_type_id: null;
        timestamp: string;
        icon_url: string;
        website_url: string;
        coingecko_id: null;
        latest_version_contract_hash: null;
        account_info: null;
        centralized_account_info: null;
        coingecko_data: null;
        friendlymarket_data: null;
    };
    contract: {
        block_height: number;
        contract_hash: string;
        contract_package_hash: string;
        contract_type_id: null;
        contract_version: number;
        deploy_hash: string;
        is_disabled: boolean;
        major_protocol_version: number;
        timestamp: string;
    };
    contract_entrypoint: {
        action_type_id: null;
        contract_hash: string;
        contract_package_hash: string;
        id: number;
        name: string;
    };
    caller_cspr_name: null;
    transfers: {
        id: number;
        transfer_index: null;
        initiator_account_hash: string;
        from_purse: string;
        to_purse: string;
        to_account_hash: string;
        amount: string;
        from_purse_public_key: null;
        to_purse_public_key: string;
        from_purse_account_info: null;
        to_purse_account_info: null;
        from_purse_centralized_account_info: null;
        to_purse_centralized_account_info: null;
        from_purse_cspr_name: null;
        to_purse_cspr_name: null;
    }[];
    nft_token_actions: null;
    ft_token_actions: ({
        block_height: number;
        contract_package_hash: string;
        transform_idx: number;
        from_type: number;
        from_hash: string;
        to_type: number;
        to_hash: string;
        ft_action_type_id: number;
        amount: string;
        timestamp: null;
        rate: null;
        from_public_key: string;
        to_public_key: null;
        from_account_info: null;
        to_account_info: null;
        caller_account_info: null;
        from_centralized_account_info: null;
        to_centralized_account_info: null;
        caller_centralized_account_info: null;
        contract_package: {
            contract_package_hash: string;
            owner_public_key: string;
            owner_hash: string;
            name: string;
            description: string;
            metadata: {
                balances_uref: string;
                decimals: number;
                description: string;
                logo: string;
                name: string;
                symbol: string;
                total_supply_uref: string;
            };
            latest_version_contract_type_id: number;
            timestamp: string;
            icon_url: string;
            website_url: null;
            coingecko_id: null;
            latest_version_contract_hash: null;
            account_info: null;
            centralized_account_info: null;
            coingecko_data: null;
            friendlymarket_data: null;
        };
        deploy: null;
        from_cspr_name: null;
        to_cspr_name: null;
    } | {
        block_height: number;
        contract_package_hash: string;
        transform_idx: number;
        from_type: number;
        from_hash: string;
        to_type: number;
        to_hash: string;
        ft_action_type_id: number;
        amount: string;
        timestamp: null;
        rate: null;
        from_public_key: null;
        to_public_key: string;
        from_account_info: null;
        to_account_info: null;
        caller_account_info: null;
        from_centralized_account_info: null;
        to_centralized_account_info: null;
        caller_centralized_account_info: null;
        contract_package: {
            contract_package_hash: string;
            owner_public_key: string;
            owner_hash: string;
            name: string;
            description: string;
            metadata: {
                balances_uref: string;
                decimals: number;
                description: string;
                logo: string;
                name: string;
                symbol: string;
                total_supply_uref: string;
            };
            latest_version_contract_type_id: number;
            timestamp: string;
            icon_url: string;
            website_url: null;
            coingecko_id: null;
            latest_version_contract_hash: null;
            account_info: null;
            centralized_account_info: null;
            coingecko_data: null;
            friendlymarket_data: null;
        };
        deploy: null;
        from_cspr_name: null;
        to_cspr_name: null;
    } | {
        block_height: number;
        contract_package_hash: string;
        transform_idx: number;
        from_type: number;
        from_hash: string;
        to_type: number;
        to_hash: string;
        ft_action_type_id: number;
        amount: string;
        timestamp: null;
        rate: null;
        from_public_key: null;
        to_public_key: string;
        from_account_info: null;
        to_account_info: null;
        caller_account_info: null;
        from_centralized_account_info: null;
        to_centralized_account_info: null;
        caller_centralized_account_info: null;
        contract_package: {
            contract_package_hash: string;
            owner_public_key: string;
            owner_hash: null;
            name: string;
            description: string;
            metadata: {
                balances_uref: string;
                decimals: number;
                name: string;
                symbol: string;
                total_supply_uref: string;
                description?: undefined;
                logo?: undefined;
            };
            latest_version_contract_type_id: number;
            timestamp: string;
            icon_url: string;
            website_url: string;
            coingecko_id: null;
            latest_version_contract_hash: null;
            account_info: null;
            centralized_account_info: null;
            coingecko_data: null;
            friendlymarket_data: null;
        };
        deploy: null;
        from_cspr_name: null;
        to_cspr_name: null;
    })[];
};
export declare const auctionDeploy: {
    deploy_hash: string;
    block_hash: string;
    block_height: number;
    caller_public_key: string;
    caller_hash: string;
    execution_type_id: number;
    contract_package_hash: string;
    contract_hash: string;
    entry_point_id: number;
    args: {
        amount: {
            cl_type: string;
            parsed: string;
        };
        delegator: {
            cl_type: string;
            parsed: string;
        };
        validator: {
            cl_type: string;
            parsed: string;
        };
    };
    payment_amount: string;
    refund_amount: string;
    cost: string;
    consumed_gas: string;
    error_message: null;
    status: string;
    timestamp: string;
    rate: number;
    account_info: null;
    centralized_account_info: null;
    contract_package: {
        contract_package_hash: string;
        owner_public_key: null;
        owner_hash: null;
        name: string;
        description: string;
        metadata: {};
        latest_version_contract_type_id: number;
        timestamp: string;
        icon_url: string;
        website_url: string;
        coingecko_id: null;
        latest_version_contract_hash: null;
        account_info: null;
        centralized_account_info: null;
        coingecko_data: null;
        friendlymarket_data: null;
    };
    contract: {
        block_height: number;
        contract_hash: string;
        contract_package_hash: string;
        contract_type_id: number;
        contract_version: number;
        deploy_hash: null;
        is_disabled: boolean;
        major_protocol_version: number;
        timestamp: string;
    };
    contract_entrypoint: {
        action_type_id: null;
        contract_hash: string;
        contract_package_hash: string;
        id: number;
        name: string;
    };
    caller_cspr_name: null;
    transfers: {
        id: number;
        transfer_index: null;
        initiator_account_hash: string;
        from_purse: string;
        to_purse: string;
        to_account_hash: string;
        amount: string;
        from_purse_public_key: string;
        to_purse_public_key: null;
        from_purse_account_info: null;
        to_purse_account_info: null;
        from_purse_centralized_account_info: null;
        to_purse_centralized_account_info: null;
        from_purse_cspr_name: null;
        to_purse_cspr_name: null;
    }[];
    nft_token_actions: null;
    ft_token_actions: null;
};
export declare const associatedKeysDeploy: {
    deploy_hash: string;
    block_hash: string;
    block_height: number;
    caller_public_key: string;
    caller_hash: string;
    execution_type_id: number;
    contract_package_hash: string;
    contract_hash: string;
    entry_point_id: number;
    args: {
        deployment_threshold: {
            cl_type: string;
            parsed: number;
        };
        key_management_threshold: {
            cl_type: string;
            parsed: number;
        };
        keys: {
            cl_type: {
                List: string;
            };
            parsed: string[];
        };
        weights: {
            cl_type: {
                List: string;
            };
            parsed: number[];
        };
    };
    payment_amount: string;
    refund_amount: string;
    cost: string;
    consumed_gas: string;
    error_message: null;
    status: string;
    timestamp: string;
    rate: number;
    account_info: {
        account_hash: string;
        created: string;
        deploy_hash: string;
        info: {
            nodes: {
                description: string;
                functionality: string[];
                location: {
                    country: string;
                    latitude: string;
                    longitude: string;
                    name: string;
                };
                public_key: string;
            }[];
            owner: {
                affiliated_accounts: {
                    public_key: string;
                }[];
                branding: {
                    logo: {
                        png_1024: string;
                        png_256: string;
                        svg: string;
                    };
                };
                description: string;
                email: string;
                identity: {
                    casper_association_kyc_onchain: string;
                    casper_association_kyc_url: string;
                    ownership_disclosure_url: string;
                };
                location: {
                    country: string;
                    latitude: string;
                    longitude: string;
                    name: string;
                };
                name: string;
                resources: {
                    code_of_conduct_url: string;
                    other: {
                        name: string;
                        url: string;
                    }[];
                    privacy_policy_url: string;
                    terms_of_service_url: string;
                };
                social: {
                    facebook: string;
                    github: string;
                    keybase: string;
                    medium: string;
                    reddit: string;
                    telegram: string;
                    twitter: string;
                    wechat: string;
                    youtube: string;
                };
                type: string[];
                website: string;
            };
        };
        is_active: boolean;
        updated: string;
        url: string;
        verified_account_hashes: string[];
    };
    centralized_account_info: null;
    contract_package: {
        contract_package_hash: string;
        owner_public_key: string;
        owner_hash: null;
        name: string;
        description: string;
        metadata: {};
        latest_version_contract_type_id: null;
        timestamp: string;
        icon_url: string;
        website_url: string;
        coingecko_id: null;
        latest_version_contract_hash: null;
        account_info: null;
        centralized_account_info: null;
        coingecko_data: null;
        friendlymarket_data: null;
    };
    contract: {
        block_height: number;
        contract_hash: string;
        contract_package_hash: string;
        contract_type_id: null;
        contract_version: number;
        deploy_hash: string;
        is_disabled: boolean;
        major_protocol_version: number;
        timestamp: string;
    };
    contract_entrypoint: {
        action_type_id: null;
        contract_hash: string;
        contract_package_hash: string;
        id: number;
        name: string;
    };
    caller_cspr_name: null;
    transfers: null;
    nft_token_actions: null;
    ft_token_actions: null;
};
export declare const csprMarketDeploy: {
    deploy_hash: string;
    block_hash: string;
    block_height: number;
    caller_public_key: string;
    caller_hash: string;
    execution_type_id: number;
    contract_package_hash: string;
    contract_hash: string;
    entry_point_id: number;
    args: {
        collection: {
            cl_type: string;
            parsed: string;
        };
        lookup_mode: {
            cl_type: string;
            parsed: number;
        };
        offerer: {
            cl_type: string;
            parsed: string;
        };
        token_id: {
            cl_type: string;
            parsed: string;
        };
    };
    payment_amount: string;
    refund_amount: string;
    cost: string;
    consumed_gas: string;
    error_message: null;
    status: string;
    timestamp: string;
    rate: number;
    account_info: null;
    centralized_account_info: null;
    contract_package: {
        contract_package_hash: string;
        owner_public_key: string;
        owner_hash: null;
        name: string;
        description: string;
        metadata: {};
        latest_version_contract_type_id: null;
        timestamp: string;
        icon_url: string;
        website_url: string;
        coingecko_id: null;
        latest_version_contract_hash: null;
        account_info: null;
        centralized_account_info: null;
        coingecko_data: null;
        friendlymarket_data: null;
    };
    contract: {
        block_height: number;
        contract_hash: string;
        contract_package_hash: string;
        contract_type_id: number;
        contract_version: number;
        deploy_hash: string;
        is_disabled: boolean;
        major_protocol_version: number;
        timestamp: string;
    };
    contract_entrypoint: {
        action_type_id: null;
        contract_hash: string;
        contract_package_hash: string;
        id: number;
        name: string;
    };
    caller_cspr_name: null;
    transfers: ({
        id: number;
        transfer_index: null;
        initiator_account_hash: string;
        from_purse: string;
        to_purse: string;
        to_account_hash: string;
        amount: string;
        from_purse_public_key: null;
        to_purse_public_key: string;
        from_purse_account_info: null;
        to_purse_account_info: null;
        from_purse_centralized_account_info: null;
        to_purse_centralized_account_info: null;
        from_purse_cspr_name: null;
        to_purse_cspr_name: null;
    } | {
        id: number;
        transfer_index: null;
        initiator_account_hash: string;
        from_purse: string;
        to_purse: string;
        to_account_hash: string;
        amount: string;
        from_purse_public_key: null;
        to_purse_public_key: null;
        from_purse_account_info: null;
        to_purse_account_info: null;
        from_purse_centralized_account_info: null;
        to_purse_centralized_account_info: null;
        from_purse_cspr_name: null;
        to_purse_cspr_name: null;
    })[];
    nft_token_actions: {
        contract_package_hash: string;
        token_id: string;
        from_type: number;
        from_hash: string;
        to_type: number;
        to_hash: string;
        nft_action_id: number;
        token_tracking_id: number;
        rate: null;
        from_public_key: string;
        to_public_key: string;
        from_account_info: null;
        caller_account_info: null;
        to_account_info: null;
        from_centralized_account_info: null;
        caller_centralized_account_info: null;
        to_centralized_account_info: null;
        contract_package: {
            contract_package_hash: string;
            owner_public_key: string;
            owner_hash: null;
            name: string;
            description: string;
            metadata: {
                burn_mode: number;
                events_mode: number;
                holder_mode: number;
                identifier_mode: number;
                metadata_mutability: number;
                minting_mode: number;
                name: string;
                nft_kind: number;
                nft_metadata_kind: number;
                ownership_mode: number;
                symbol: string;
                total_supply_uref: string;
                whitelist_mode: number;
            };
            latest_version_contract_type_id: number;
            timestamp: string;
            icon_url: string;
            website_url: null;
            coingecko_id: null;
            latest_version_contract_hash: null;
            account_info: null;
            centralized_account_info: null;
            coingecko_data: null;
            friendlymarket_data: null;
        };
        deploy: null;
        from_cspr_name: null;
        to_cspr_name: string;
    }[];
    ft_token_actions: null;
};
export declare const cep18Deploy: {
    deploy_hash: string;
    block_hash: string;
    block_height: number;
    caller_public_key: string;
    caller_hash: string;
    execution_type_id: number;
    contract_package_hash: string;
    contract_hash: string;
    entry_point_id: number;
    args: {
        amount: {
            cl_type: string;
            parsed: string;
        };
        recipient: {
            cl_type: string;
            parsed: {
                Account: string;
            };
        };
    };
    payment_amount: string;
    refund_amount: string;
    cost: string;
    consumed_gas: string;
    error_message: null;
    status: string;
    timestamp: string;
    rate: number;
    account_info: null;
    centralized_account_info: null;
    contract_package: {
        contract_package_hash: string;
        owner_public_key: string;
        owner_hash: null;
        name: string;
        description: string;
        metadata: {
            balances_uref: string;
            decimals: number;
            name: string;
            symbol: string;
            total_supply_uref: string;
        };
        latest_version_contract_type_id: number;
        timestamp: string;
        icon_url: string;
        website_url: string;
        coingecko_id: null;
        latest_version_contract_hash: null;
        account_info: null;
        centralized_account_info: null;
        coingecko_data: null;
        friendlymarket_data: null;
    };
    contract: {
        block_height: number;
        contract_hash: string;
        contract_package_hash: string;
        contract_type_id: number;
        contract_version: number;
        deploy_hash: string;
        is_disabled: boolean;
        major_protocol_version: number;
        timestamp: string;
    };
    contract_entrypoint: {
        action_type_id: null;
        contract_hash: string;
        contract_package_hash: string;
        id: number;
        name: string;
    };
    caller_cspr_name: null;
    transfers: null;
    nft_token_actions: null;
    ft_token_actions: {
        block_height: number;
        contract_package_hash: string;
        transform_idx: number;
        from_type: number;
        from_hash: string;
        to_type: number;
        to_hash: string;
        ft_action_type_id: number;
        amount: string;
        timestamp: null;
        rate: null;
        from_public_key: string;
        to_public_key: string;
        from_account_info: null;
        to_account_info: null;
        caller_account_info: null;
        from_centralized_account_info: null;
        to_centralized_account_info: null;
        caller_centralized_account_info: null;
        contract_package: {
            contract_package_hash: string;
            owner_public_key: string;
            owner_hash: null;
            name: string;
            description: string;
            metadata: {
                balances_uref: string;
                decimals: number;
                name: string;
                symbol: string;
                total_supply_uref: string;
            };
            latest_version_contract_type_id: number;
            timestamp: string;
            icon_url: string;
            website_url: string;
            coingecko_id: null;
            latest_version_contract_hash: null;
            account_info: null;
            centralized_account_info: null;
            coingecko_data: null;
            friendlymarket_data: null;
        };
        deploy: null;
        from_cspr_name: null;
        to_cspr_name: null;
    }[];
};
export declare const nftDeploy: {
    deploy_hash: string;
    block_hash: string;
    block_height: number;
    caller_public_key: string;
    caller_hash: string;
    execution_type_id: number;
    contract_package_hash: string;
    contract_hash: string;
    entry_point_id: number;
    args: {
        spender: {
            cl_type: string;
            parsed: string;
        };
        token_ids: {
            cl_type: {
                List: string;
            };
            parsed: string[];
        };
    };
    payment_amount: string;
    refund_amount: string;
    cost: string;
    consumed_gas: string;
    error_message: null;
    status: string;
    timestamp: string;
    rate: number;
    account_info: null;
    centralized_account_info: null;
    contract_package: {
        contract_package_hash: string;
        owner_public_key: string;
        owner_hash: null;
        name: string;
        description: null;
        metadata: {
            name: string;
            symbol: string;
        };
        latest_version_contract_type_id: number;
        timestamp: string;
        icon_url: string;
        website_url: string;
        coingecko_id: null;
        latest_version_contract_hash: null;
        account_info: null;
        centralized_account_info: null;
        coingecko_data: null;
        friendlymarket_data: null;
    };
    contract: {
        block_height: number;
        contract_hash: string;
        contract_package_hash: string;
        contract_type_id: number;
        contract_version: number;
        deploy_hash: string;
        is_disabled: boolean;
        major_protocol_version: number;
        timestamp: string;
    };
    contract_entrypoint: {
        action_type_id: null;
        contract_hash: string;
        contract_package_hash: string;
        id: number;
        name: string;
    };
    caller_cspr_name: null;
    transfers: null;
    nft_token_actions: {
        contract_package_hash: string;
        token_id: string;
        from_type: number;
        from_hash: string;
        to_type: number;
        to_hash: string;
        nft_action_id: number;
        token_tracking_id: number;
        rate: null;
        from_public_key: string;
        to_public_key: null;
        from_account_info: null;
        caller_account_info: null;
        to_account_info: null;
        from_centralized_account_info: null;
        caller_centralized_account_info: null;
        to_centralized_account_info: null;
        contract_package: {
            contract_package_hash: string;
            owner_public_key: string;
            owner_hash: null;
            name: string;
            description: null;
            metadata: {
                name: string;
                symbol: string;
            };
            latest_version_contract_type_id: number;
            timestamp: string;
            icon_url: string;
            website_url: string;
            coingecko_id: null;
            latest_version_contract_hash: null;
            account_info: null;
            centralized_account_info: null;
            coingecko_data: null;
            friendlymarket_data: null;
        };
        deploy: null;
        from_cspr_name: null;
        to_cspr_name: null;
    }[];
    ft_token_actions: null;
};
export declare const duplicatedResultsDeploy: {
    deploy_hash: string;
    block_hash: string;
    block_height: number;
    caller_public_key: string;
    caller_hash: string;
    execution_type_id: number;
    contract_package_hash: string;
    contract_hash: string;
    entry_point_id: number;
    args: {
        amount: {
            cl_type: string;
            parsed: string;
        };
        spender: {
            cl_type: string;
            parsed: string;
        };
    };
    payment_amount: string;
    refund_amount: string;
    cost: string;
    consumed_gas: string;
    error_message: null;
    status: string;
    timestamp: string;
    rate: number;
    account_info: null;
    centralized_account_info: null;
    contract_package: {
        contract_package_hash: string;
        owner_public_key: string;
        owner_hash: string;
        name: string;
        description: string;
        metadata: {
            balances_uref: string;
            decimals: number;
            name: string;
            symbol: string;
            total_supply_uref: string;
        };
        latest_version_contract_type_id: number;
        timestamp: string;
        icon_url: string;
        website_url: string;
        coingecko_id: null;
        latest_version_contract_hash: null;
        account_info: null;
        centralized_account_info: null;
        coingecko_data: null;
        friendlymarket_data: null;
        csprtrade_data: null;
    };
    contract: {
        block_height: number;
        contract_hash: string;
        contract_package_hash: string;
        contract_type_id: number;
        contract_version: number;
        deploy_hash: string;
        is_disabled: boolean;
        major_protocol_version: number;
        timestamp: string;
    };
    contract_entrypoint: {
        action_type_id: null;
        contract_hash: string;
        contract_package_hash: string;
        id: number;
        name: string;
    };
    caller_cspr_name: null;
    transfers: null;
    nft_token_actions: null;
    ft_token_actions: {
        block_height: number;
        contract_package_hash: string;
        transform_idx: number;
        from_type: number;
        from_hash: string;
        to_type: number;
        to_hash: string;
        ft_action_type_id: number;
        amount: string;
        timestamp: null;
        rate: null;
        from_public_key: string;
        to_public_key: null;
        from_account_info: null;
        to_account_info: null;
        caller_account_info: null;
        from_centralized_account_info: null;
        to_centralized_account_info: null;
        caller_centralized_account_info: null;
        contract_package: {
            contract_package_hash: string;
            owner_public_key: string;
            owner_hash: string;
            name: string;
            description: string;
            metadata: {
                balances_uref: string;
                decimals: number;
                name: string;
                symbol: string;
                total_supply_uref: string;
            };
            latest_version_contract_type_id: number;
            timestamp: string;
            icon_url: string;
            website_url: string;
            coingecko_id: null;
            latest_version_contract_hash: null;
            account_info: null;
            centralized_account_info: null;
            coingecko_data: null;
            friendlymarket_data: null;
            csprtrade_data: null;
        };
        deploy: null;
        from_cspr_name: null;
        to_cspr_name: null;
    }[];
};
//# sourceMappingURL=mockedDeploys.d.ts.map