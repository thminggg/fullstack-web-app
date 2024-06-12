export const randomRangeInArray = <T>(arr: Array<T>, numOfItems: number) => {
  const arrLength = arr.length;
  if (numOfItems >= arrLength) return arr;

  let start = Math.floor(Math.random() * (arrLength - numOfItems)) - numOfItems;
  start = start < 0 ? 0 : start;
  return arr.slice(start, start + numOfItems);
};

/**
 * Return a function that returns a value within range
 * @param min number
 * @param max number
 * @returns
 */
export const clamp = (min: number = 0, max: number = Infinity) => {
  return (value: number) => Math.max(min, Math.min(value, max));
};

/**
 * Captialize the first letter
 * @param str string
 * @returns
 */
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
