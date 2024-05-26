import csv from "csv-parser";
import fs from "fs";
import path from "path";
import postgresSQL from "../../db";
import { getRandomItemFromArr } from "../utils/randomItemFromArr";
import { getRandomPhoneNumber } from "../utils/randomPhoneNumber";

const processData = (data, brokerCompanyId) => {
  const { name } = data;

  return postgresSQL`
    INSERT INTO public.broker (
      broker_id,
      name,
      phone,
      broker_company_id
    )
    VALUES (
        gen_random_uuid(),
        ${name},
        ${getRandomPhoneNumber()},
        ${brokerCompanyId}
      );
  `;
};

const getBrokerCompany = () => {
  return postgresSQL`SELECT broker_company_id FROM public.broker_company`;
};

const insertData = async () => {
  const numOfRecords = 100;
  const [province] = process.argv.slice(2);
  const stream = fs
    .createReadStream(
      path.join(__dirname, `../data/${province.toLocaleLowerCase()}.csv`)
    )
    .pipe(csv());
  const insertionPromises = [];
  const brokerCompanyIds = await getBrokerCompany();

  stream.on("data", (data) => {
    if (insertionPromises.length < numOfRecords) {
      insertionPromises.push(
        processData(
          data,
          getRandomItemFromArr(brokerCompanyIds).broker_company_id
        )
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
