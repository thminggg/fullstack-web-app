import groupBy from "lodash/groupBy";
import pickBy from "lodash/pickBy";
import keys from "lodash/keys";

/**
 * Get duplicate values from an array
 * @param {Array<T>} arr Array to be validated
 * @returns {Array<T>}
 */
export const getDuplicates = <T>(arr: Array<T>): Array<T> => {
  return keys(pickBy(groupBy(arr), (x) => x.length > 1));
};
