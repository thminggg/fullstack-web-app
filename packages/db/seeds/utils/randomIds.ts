import crypto from "crypto";

export const getRandomIds = (num: number = 10) => {
  const ids = [];
  for (let i = 0; i < num; i++) {
    ids.push(crypto.randomUUID());
  }

  return ids;
};
