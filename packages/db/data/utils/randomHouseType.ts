export const getRandomHousingType = () => {
  const housingTypes = [
    "Condo",
    "House",
    "Townhouse",
    "Duplex",
    "Semi-detached house",
  ];

  // Generate a random index to select a housing type
  const randomIndex = Math.floor(Math.random() * housingTypes.length);

  // Return the randomly selected housing type
  return housingTypes[randomIndex];
};
