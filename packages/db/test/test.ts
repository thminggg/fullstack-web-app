import { getUsers } from "../sql/users/getUsers";
import { getProperties } from "../sql/properties/getProperties";

const main = async () => {
  const properties = await getProperties();
  console.log(properties);
};

main();
