import csv from "csv-parser";
import fs from "fs";
import postgresSQL from "../../db";
import { getRandomPhoneNumber } from "../utils/randomPhoneNumber";
import { getRandomItemFromArr } from "../utils/randomItemFromArr";

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
  return postgresSQL`SELECT broker_company_id FROM public.broker`;
};

const insertData = async () => {
  const numOfRecords = 50;
  const [province, country = "Canada"] = process.argv.slice(2);
  const stream = fs
    .createReadStream(`${province.toLocaleLowerCase()}.csv`)
    .pipe(csv());
  const insertionPromises = [];
  const brokerCompanyIds = await getBrokerCompany();

  let counter = 0;

  stream.on("data", (data) => {
    insertionPromises.push(
      processData(data, getRandomItemFromArr(brokerCompanyIds))
    );
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
