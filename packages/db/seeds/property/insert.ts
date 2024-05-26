import csv from "csv-parser";
import fs from "fs";
import path from "path";
import { Property } from "../../@types";
import postgresSQL from "../../db";
import { getRandomCity } from "../utils/randomCity";
import { getRandomHousingType } from "../utils/randomHouseType";
import { getRandomItemFromArr } from "../utils/randomItemFromArr";
import { getRandomPostalCode } from "../utils/randomPostal";
import { getRandomTimestamp } from "../utils/randomTimestamp";

const processData = (
  data: Property,
  province: string,
  country: string,
  brokerId: string
) => {
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
      type,
      broker_id
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
        ${getRandomHousingType()},
        ${brokerId}
      );
  `;
};

const getBrokerIds = () => {
  return postgresSQL`SELECT broker_id FROM public.broker`;
};

const insertData = async () => {
  const [province, country = "Canada"] = process.argv.slice(2);
  const brokerIds = await getBrokerIds();
  const stream = fs
    .createReadStream(
      path.join(__dirname, `../data/${province.toLocaleLowerCase()}.csv`)
    )
    .pipe(csv());
  const insertionPromises = [];

  stream.on("data", (data) => {
    console.log(data, province, country);
    insertionPromises.push(
      processData(
        data,
        province,
        country.toUpperCase(),
        getRandomItemFromArr(brokerIds).broker_id
      )
    );
  });

  stream.on("end", async () => {
    await Promise.all(insertionPromises).catch((err) => {
      console.log(err);
      process.exit(1);
    });
    console.log("Data Inserted!!");
    process.exit(); // Exit the process after all data is inserted
  });
};

insertData();
