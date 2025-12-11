import { Args, Approval as ApprovalSDK, Approval } from 'casper-js-sdk';
import {
  CLType,
  CLTypeParsedListResult,
  CLTypeParsedResult,
  CLTypeTypeResult,
} from '../types/CLType';

export const stringifyCLTypeType = (
  type: string | CLType | CLTypeTypeResult,
): string => {
  const getTypeFromNestedObj = (type) =>
    typeof type === 'object' ? Object.keys(type)[0] : type;

  const clValueType = getTypeFromNestedObj(type);
  const clValueInnerType = getTypeFromNestedObj(type[clValueType]);

  const clValueListInnerType =
    clValueType === CLType.List && clValueInnerType === CLType.Option
      ? stringifyCLTypeType(type[clValueType])
      : clValueInnerType;

  switch (clValueType) {
    case CLType.ByteArray:
    case CLType.List:
      return `${clValueType}[${clValueListInnerType}]`;
    case CLType.Tuple1:
    case CLType.Tuple2:
    case CLType.Tuple3:
    case CLType.Map:
    case CLType.Key:
      return `${clValueType}`;
    case CLType.Option:
      return `${clValueType}(${clValueInnerType})`;

    default:
      return `${clValueType}`;
  }
};

export const stringifyCLTypeValue = ({
  type,
  value,
  balance,
}: {
  type?: CLTypeTypeResult | string;
  value: CLTypeParsedResult | null;
  balance?: string | null;
}) => {
  if (!type) {
    return Array.isArray(value)
      ? value.join(', ')
      : typeof value === 'object'
        ? JSON.stringify(value)
        : value;
  }

  const getTypeFromNestedObj = (type) =>
    typeof type === 'object' ? Object.keys(type)[0] : type;

  const clValueType = getTypeFromNestedObj(type);
  const clValueInnerType = getTypeFromNestedObj(type[clValueType]);

  switch (clValueType) {
    case CLType.Unit:
      return balance;

    case CLType.List:
      return (value as CLTypeParsedListResult)
        ?.map((listItem) =>
          stringifyCLTypeValue({
            type: clValueInnerType,
            value: listItem,
          }),
        )
        .join(', ');

    case CLType.Tuple1:
    case CLType.Tuple2:
    case CLType.Tuple3:
      return (value as CLTypeParsedListResult)?.join(', ');

    case CLType.Option:
      return stringifyCLTypeValue({
        type: clValueInnerType,
        value: value,
      });
    case CLType.Result:
    case CLType.Map:
      return JSON.stringify(value);

    case CLType.Bool:
      return value !== null && value !== undefined ? value.toString() : null;

    default:
      return value;
  }
};

export const convertTransactionArgsToObj = (
  args: Args,
): Record<string, any> => {
  if (!args) {
    return {};
  }

  const argsKeys = [...args.args.keys()];

  return argsKeys.reduce((prev, curr) => {
    return {
      ...prev,
      [curr]: args.getByName(curr).toJSON(),
    };
  }, {});
};

export const convertApprovalsFromBytesToString = (
  approvals: ApprovalSDK[],
): Approval[] => {
  if (!approvals || !approvals.length) {
    return [];
  }

  return approvals.map((approval) => {
    return {
      signer: approval.signer.toHex(),
      signature: approval.signature.toJSON(),
    };
  }) as Approval[];
};
