import fs from "fs";
import csv from "csv-parser";
import postgresSQL from "../../db";
import { getRandomTimestamp } from "../utils/randomTimestamp";
import { getRandomHousingType } from "../utils/randomHouseType";

function processData(data) {
  const {
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
        ${city},
        ${province},
        ${zip},
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

async function insertData() {
  const stream = fs.createReadStream("bc.csv").pipe(csv());
  const insertionPromises = [];

  stream.on("data", (data) => {
    insertionPromises.push(processData(data));
  });

  stream.on("end", async () => {
    await Promise.all(insertionPromises);
    console.log("Data Inserted!!");
    process.exit(); // Exit the process after all data is inserted
  });
}

insertData();
