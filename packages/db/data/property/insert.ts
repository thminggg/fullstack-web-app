import csv from "csv-parser";
import fs from "fs";
import postgresSQL from "../../db";
import { getRandomCity } from "../utils/randomCity";
import { getRandomHousingType } from "../utils/randomHouseType";
import { getRandomPostalCode } from "../utils/randomPostal";
import { getRandomTimestamp } from "../utils/randomTimestamp";

function processData(data, province, country) {
  const {
    name,
    address,
    listing_price,
    num_of_bathroom,
    num_of_bedroom,
    num_of_view,
    size,
  } = data;

  return postgresSQL`
    INSERT INTO public.property (
      property_id,
      name,
      address,
      city,
      province,
      zip,
      country,
      listing_price,
      num_of_bathroom,
      num_of_bedroom,
      num_of_view,
      listed_timestamp,
      size,
      type
    )
    VALUES (
        gen_random_uuid(),
        ${name},
        ${address},
        ${getRandomCity(province)},
        ${province},
        ${getRandomPostalCode()},
        ${country},
        ${listing_price},
        ${num_of_bathroom},
        ${num_of_bedroom},
        ${num_of_view},
        ${Math.floor(getRandomTimestamp() / 1000)},
        ${size},
        ${getRandomHousingType()}
      );
  `;
}

const insertData = () => {
  const [province, country = "Canada"] = process.argv.slice(2);
  const stream = fs
    .createReadStream(`${province.toLocaleLowerCase()}.csv`)
    .pipe(csv());
  const insertionPromises = [];

  stream.on("data", (data) => {
    console.log(data, province, country);
    insertionPromises.push(processData(data, province, country.toUpperCase()));
  });

  stream.on("end", async () => {
    await Promise.all(insertionPromises);
    console.log("Data Inserted!!");
    process.exit(); // Exit the process after all data is inserted
  });
};

insertData();
