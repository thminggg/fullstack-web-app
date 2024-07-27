import { getProperties } from "../sql/properties/getProperties";
import { createProperties } from "../sql/properties/createProperties";
import groupBy from "lodash/groupBy";
import pickBy from "lodash/pickBy";
import keys from "lodash/keys";

const main = async () => {
  // const properties = await getProperties();
  // console.log(properties);
  // const insert = await createProperties([
  //   {
  //     name: "test",
  //     address: "test",
  //     city: "test",
  //     province: "test",
  //     zip: "test",
  //     country: "test",
  //     listing_price: 100,
  //     num_of_bathroom: 100,
  //     num_of_bedroom: 100,
  //     num_of_view: 100,
  //     listed_timestamp: 100,
  //     size: 100,
  //     type: "test",
  //     overview: "test",
  //     broker_id: "b484c6b0-3d21-4592-aba4-df417b4234c6",
  //   },
  //   {
  //     name: "test",
  //     address: "test",
  //     city: "test",
  //     province: "test",
  //     zip: "test",
  //     country: "test",
  //     listing_price: 100,
  //     num_of_bathroom: 100,
  //     num_of_bedroom: 100,
  //     num_of_view: 100,
  //     listed_timestamp: 100,
  //     size: 100,
  //     type: "test",
  //     overview: "test",
  //     broker_id: "b484c6b0-3d21-4592-aba4-df417b4234c6",
  //   },
  // ]);
  // console.log(insert);
  // process.exit(1);
  const getDuplicates = (arr: Array<any>) => {
    return keys(pickBy(groupBy(arr), (x) => x.length > 1));
  };
  console.log(getDuplicates([1, 2, 3]));
};

main();
