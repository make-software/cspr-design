export enum CLType {
  /** A boolean value */
  Bool = 'Bool',
  /** A 32-bit signed integer */
  I32 = 'I32',
  /** A 64-bit signed integer */
  I64 = 'I64',
  /** An 8-bit unsigned integer (a byte) */
  U8 = 'U8',
  /** A 32-bit unsigned integer */
  U32 = 'U32',
  /** A 64-bit unsigned integer */
  U64 = 'U64',
  /** A 128-bit unsigned integer */
  U128 = 'U128',
  /** A 256-bit unsigned integer */
  U256 = 'U256',
  /** A 512-bit unsigned integer */
  U512 = 'U512',
  /** A unit type, i.e. type with no values (analogous to `void` in C and `()` in Rust) */
  Unit = 'Unit',
  /** A string of characters */
  String = 'String',
  /** A key in the global state - URef/hash/etc. */
  Key = 'Key',
  /** An Unforgeable Reference (URef) */
  URef = 'URef',
  /** An [[Option]], i.e. a type that can contain a value or nothing at all */
  Option = 'Option',
  /** A list of values */
  List = 'List',
  /** A fixed-length array of bytes */
  ByteArray = 'ByteArray',
  /**
   * A [[Result]], i.e. a type that can contain either a value representing success or one representing failure.
   */
  Result = 'Result',
  /** A key-value map. */
  Map = 'Map',
  /** A 1-value tuple. */
  Tuple1 = 'Tuple1',
  /** A 2-value tuple, i.e. a pair of values. */
  Tuple2 = 'Tuple2',
  /** A 3-value tuple. */
  Tuple3 = 'Tuple3',
  /** A value of any type. */
  Any = 'Any',
  /** A value of public key type. */
  PublicKey = 'PublicKey',
}

type CLTypeMapResult = {
  Map: {
    key: string;
    value: string;
  };
};

type CLTypeMapParsedResult = {
  key: string;
  value: string;
};

type CLTypeOptionResult = {
  Option: string;
};

export type CLTypeParsedAccountResult = {
  Account: string;
};

export type CLTypeParsedListResult = (CLTypeMapParsedResult | string)[];

export type CLTypeTypeResult = CLTypeMapResult | CLTypeOptionResult | string;

export type CLTypeParsedResult =
  | CLTypeParsedListResult
  | CLTypeParsedAccountResult
  | CLTypeMapParsedResult
  | string
  | number;
