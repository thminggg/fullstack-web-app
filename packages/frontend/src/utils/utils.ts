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
export const capFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Return number of day between epoch and today
 * @param {number} epoch
 * @returns
 */
export const daysBetween = (epoch: number) => {
  // Get today's date
  const today = new Date();

  // Convert epoch to a Date object
  const epochDate = new Date(epoch * 1000);

  // Calculate the difference in time
  const diffTime = today.getTime() - epochDate.getTime();

  // Calculate the difference in days
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

/**
 * Get a random number from 1 to {max}
 * @param {number} max Max number to be returned
 * @returns
 */
export const getRandomNumber = (max: number) => {
  // Ensure max is at least 1
  max = Math.max(1, max);

  // Generate a random number between 1 and max (both inclusive)
  return Math.floor(Math.random() * max) + 1;
};

export const isEmptyObj = (obj: Object) => {
  if (!obj || Object.keys(obj).length === 0) return true;
};
