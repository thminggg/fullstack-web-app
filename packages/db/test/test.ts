import { getUsers } from "../users/getUsers";
import { getProperties } from "../properties/getProperties";

const main = async () => {
  const properties = await getProperties();
  console.log(properties.slice(0, 10));
};

main();
