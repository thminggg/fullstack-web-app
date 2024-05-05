import csv from "csv-parser";
import fs from "fs";
import postgresSQL from "../../db";
import { getRandomCity } from "../utils/randomCity";
import { getRandomPostalCode } from "../utils/randomPostal";
import { getRandomPhoneNumber } from "../utils/randomPhoneNumber";

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
    .createReadStream(`${province.toLocaleLowerCase()}.csv`)
    .pipe(csv());
  const insertionPromises = [];
  let counter = 0;

  stream.on("data", (data) => {
    insertionPromises.push(processData(data, province, country.toUpperCase()));
    counter++;

    if (counter === numOfRecords) stream.destroy();
  });

  stream.on("close", async (err) => {
    await Promise.all(insertionPromises).catch((err) => {
      console.log(err);
      process.exit(1);
    });
    console.log("Data Inserted!!");
    console.log(`${counter} ${province} records inserted!`);
    process.exit(0);
  });
};

insertData();
