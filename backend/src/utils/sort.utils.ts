/**
 * @description
 * This is a sort comparator function that can be used to sort strings in ascending or descending order.
 * It can also be used to sort strings based on a custom order.
 *
 * @param {string} a - string to compare
 * @param {string} b - string to compare
 * @param order - 'asc' | 'desc'
 * @param customArr - array of strings to compare
 *
 * @returns {number} -
 * negative value if a should come before b,
 * positive value if a should come after b,
 * zero if the order of a and b should remain unchanged
 */
export const customStringComparator = (
  a: string,
  b: string,
  options?: {
    order?: 'asc' | 'desc';
    customArr?: string[];
  },
) => {
  // return negative value if a should come before b
  // return positive value if a should come after b
  // return zero if the order of a and b should remain unchanged
  // a - b === -1 => a should come before b "ASC"
  // b - a === -1 => b should come before a "DESC"

  const customArr = options?.customArr?.map((el) => el.toLocaleLowerCase());

  if (customArr) {
    if (customArr.includes(a.toLocaleLowerCase()) && customArr.includes(b.toLocaleLowerCase())) {
      return customArr.indexOf(a.toLocaleLowerCase()) - customArr.indexOf(b.toLocaleLowerCase());
    }
    if (customArr.includes(a.toLocaleLowerCase())) {
      return -1;
    }
    if (customArr.includes(b.toLocaleLowerCase())) {
      return 1;
    }
  }

  if (options?.order === 'desc') {
    if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) return 1;
    if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) return -1;
  }
  if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) return -1;
  if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) return 1;

  return 0;
};
