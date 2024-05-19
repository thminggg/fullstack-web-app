import csv from "csv-parser";
import fs from "fs";
import path from "path";
import postgresSQL from "../../db";
import { getRandomCity } from "../utils/randomCity";
import { getRandomPhoneNumber } from "../utils/randomPhoneNumber";
import { getRandomPostalCode } from "../utils/randomPostal";

const processData = (data, province, country) => {
  const { name, address } = data;

  return postgresSQL`
    INSERT INTO public.broker_company (
      broker_company_id,
      name,
      phone,
      address,
      city,
      province,
      zip,
      country
    )
    VALUES (
        gen_random_uuid(),
        ${name},
        ${getRandomPhoneNumber()},
        ${address},
        ${getRandomCity(province)},
        ${province},
        ${getRandomPostalCode()},
        ${country}
      );
  `;
};

const insertData = () => {
  const numOfRecords = 100;
  const [province, country = "Canada"] = process.argv.slice(2);
  const stream = fs
    .createReadStream(
      path.join(__dirname, `../data/${province.toLocaleLowerCase()}.csv`)
    )
    .pipe(csv());
  const insertionPromises = [];

  stream.on("data", (data) => {
    if (insertionPromises.length < numOfRecords) {
      insertionPromises.push(
        processData(data, province, country.toUpperCase())
      );
    } else {
      stream.destroy();
    }
  });

  stream.on("close", async (err) => {
    await Promise.all(insertionPromises).catch((err) => {
      console.log(err);
      process.exit(1);
    });
    console.log("Data Inserted!!");
    console.log(`${insertionPromises.length} ${province} records inserted!`);
    process.exit(0);
  });
};

insertData();
