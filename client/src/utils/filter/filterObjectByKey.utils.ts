type ObjectDataType = {
  [key: string]: unknown;
};

export const filterObjectByKey = <T extends ObjectDataType>(obj: T, searchText: string): T => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (key.toLowerCase().startsWith(searchText.toLowerCase())) {
      acc[key] = value;
    }
    return acc;
  }, {} as ObjectDataType) as T;
};
