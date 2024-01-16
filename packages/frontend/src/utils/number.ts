/**
 * Format a number into a currency as per a locale
 * @param amount
 * @returns {string}
 */
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 0,
  }).format(amount);
};
