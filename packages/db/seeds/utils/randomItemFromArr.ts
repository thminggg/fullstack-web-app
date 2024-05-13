export const getRandomItemFromArr = (arr: Array<any>) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
