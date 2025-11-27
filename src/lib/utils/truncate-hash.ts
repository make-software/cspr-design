export const SHORTENED_ENTRY_TYPE_LENGTH = 20;
export const SHORTENED_CONTRACT_NAME_LENGTH = 20;

export const truncateName = (name, limit) =>
    name && name.length > limit ? name.substring(0, limit - 1) + '...' : name;
