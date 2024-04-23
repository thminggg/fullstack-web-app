export const getRandomTimestamp = () => {
  // Get current timestamp
  const now = Date.now();

  // Calculate timestamp from two years ago (in milliseconds)
  const twoYearsAgo = now - 2 * 365 * 24 * 60 * 60 * 1000;

  // Generate a random timestamp between two years ago and now
  const randomTimestamp =
    Math.floor(Math.random() * (now - twoYearsAgo + 1)) + twoYearsAgo;

  return randomTimestamp;
};
