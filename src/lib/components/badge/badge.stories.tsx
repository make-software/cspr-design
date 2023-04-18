import React from 'react';
import { Badge } from './badge';
import Link from "../link/link";
import TruncateBox from "../truncate-box/truncate-box";

export default {
    component: Badge,
    title: 'Badge',
};

export const badgeWithNumber = () => (
    <Badge label={35} variation={'green'}/>
);
export const badgeWithText = () => (
    <Badge label='Casper' variation={'violet'}/>
);
export const badgeWithLink = () => (
    <Badge
        label={
            <TruncateBox
                size={1}
                style={{ verticalAlign: 'middle' }}
            >
                <Link color={'inherit'} href={'./'}>
                    Link
                </Link>
            </TruncateBox>}
        variation={'blue'}
    />
);