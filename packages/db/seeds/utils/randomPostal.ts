export const getRandomPostalCode = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  let postalCode = "";

  // Add the first letter
  postalCode += letters.charAt(Math.floor(Math.random() * letters.length));

  // Add the first digit
  postalCode += numbers.charAt(Math.floor(Math.random() * numbers.length));

  // Add the second letter
  postalCode += letters.charAt(Math.floor(Math.random() * letters.length));

  // Add a space
  postalCode += " ";

  // Add the second digit
  postalCode += numbers.charAt(Math.floor(Math.random() * numbers.length));

  // Add the third letter
  postalCode += letters.charAt(Math.floor(Math.random() * letters.length));

  // Add the third digit
  postalCode += numbers.charAt(Math.floor(Math.random() * numbers.length));

  return postalCode;
};
