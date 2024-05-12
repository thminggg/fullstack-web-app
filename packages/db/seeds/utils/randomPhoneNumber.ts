export const getRandomPhoneNumber = () => {
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const areaCode = getRandomNumber(100, 999);
  const firstPart = getRandomNumber(100, 999);
  const secondPart = getRandomNumber(1000, 9999);

  return `(${areaCode}) ${firstPart}-${secondPart}`;
};
