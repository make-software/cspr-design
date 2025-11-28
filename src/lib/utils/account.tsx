import { isObjEmpty } from './object.tsx';
import {AccountInfoResult, GeneralizedAccountInfo} from "../types/types";
import { Conversions, PublicKey as CLPublicKey } from 'casper-js-sdk';

type Input = { base64: string } | { publicKeyHex: string };

export const AccountModel = (input: Input) => {
  const getRawPublicKey = () => {
    let value: CLPublicKey;

    if ('publicKeyHex' in input) {
      value = CLPublicKey.fromHex(input.publicKeyHex);
    } else if ('base64' in input) {
      // TODO: Seems like we are not using 'base64' input
      // TODO: base64 signer account will always use fromEd25519 because there is no prefix available
      // const bytes = Conversions.decodeBase64(input.base64);
      // value = CLPublicKey.fromEd25519(bytes);
    } else {
      throw Error('missing account key');
    }

    // @ts-ignore
    return value;
  };

  const getPublicKey = () => {
    // toAccountHex => sig key prefix + base16 (hex) hash
    return getRawPublicKey().toHex();
  };

  const getBase16AccountHash = () => {
    // toAccountHash => raw hash
    return Conversions.encodeBase16(getRawPublicKey().accountHash().toBytes());
  };

  const getBase64AccountHash = () => {
    // toAccountHash => raw hash
    return Conversions.encodeBase64(getRawPublicKey().accountHash().toBytes());
  };

  return {
    getPublicKey: getPublicKey,
    getAccountHash: getBase16AccountHash,
    getBase64AccountHash: getBase64AccountHash,
  };
};

export const getAccountInfoLogo = (
    accountInfo: AccountInfoResult | null | undefined
): string | null => {
  if (!accountInfo) return null;

  const logo = accountInfo.info?.owner?.branding?.logo;

  if (logo?.svg) {
    return logo?.svg;
  }

  if (logo?.png_256) {
    return logo?.png_256;
  }

  return null;
};

export const getCentralizedAccountInfoLogo = (
    accountInfo: AccountCentralizedInfo | null | undefined
): string | null => {
  if (!accountInfo) return null;

  const logo = accountInfo.avatar_url;

  if (logo) {
    return logo;
  }

  return null;
};

/**
 * Derive account info from accountInfo or centralizedAccountInfo.
 * Reason for doing that, we have different interfaces for those objects.
 * @param accountInfoObj : AccountInfoResult | AccountCentralizedInfo
 */
export const deriveAccountInfo = (
  accountInfoObj: any
): GeneralizedAccountInfo | null => {
  if (accountInfoObj == null) {
    return null;
  }

  const hasInfoStandard = !isObjEmpty(accountInfoObj?.info);

  if (hasInfoStandard) {
    return {
      name: accountInfoObj?.info?.owner?.name,
      logo: getAccountInfoLogo(accountInfoObj),
    };
  }

  return {
    name: accountInfoObj?.name,
    logo: getCentralizedAccountInfoLogo(accountInfoObj),
  };
};
