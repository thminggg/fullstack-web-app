/**
 * Get random address in a province
 * @param province
 * @returns
 */
export const randomAddressInProvince = async (province: string) => {
  const provinceAddresses = await import(
    `../data/${province.toLocaleLowerCase()}-addresses.json`
  );
  return provinceAddresses;
};

/**
 * Get random address in a given list of addresses
 * @param addresses List of addresses
 * @returns
 */
export const randomAddress = (addresses: string[]) => {
  const randomIndex = Math.floor(Math.random() * addresses.length);
  return addresses[randomIndex];
};
