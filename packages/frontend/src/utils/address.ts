/**
 * Get random address in a province
 * @param province
 * @returns
 */
export const randomAddressInProvince = async (province: string) => {
  const provinceAddresses: string[] = Object.values(
    await import(`../data/${province.toLocaleLowerCase()}-addresses.json`)
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

/**
 * Fetch addresses from a given province
 * @param setAddresses
 */
export const fetchAddresses = async (
  province: string,
  setAddresses: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const addresses = await randomAddressInProvince(province);
  setAddresses(addresses);
};
