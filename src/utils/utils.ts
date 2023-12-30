export const randomRangeInArray = <T>(arr: Array<T>, numOfItems: number) => {
  const arrLength = arr.length;
  if (numOfItems >= arrLength) return arr;

  let start = Math.floor(Math.random() * (arrLength - numOfItems)) - numOfItems;
  start = start < 0 ? 0 : start;
  return arr.slice(start, start + numOfItems);
};
