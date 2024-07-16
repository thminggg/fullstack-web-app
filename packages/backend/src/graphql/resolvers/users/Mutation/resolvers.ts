import { BeBrokerParams, CreateUserParams, brokers, users } from "@thminggg/db";
import { GraphQLError } from "graphql";
import intersectionWith from "lodash/intersectionWith";
import { getDuplicates } from "../../../../utils/utils";

export default {
  Mutation: {
    users: async (_, { userData }: { userData: CreateUserParams }) => {
      const userEmails = userData.map((user) => user.email);
      const userNames = userData.map((user) => user.username);

      // Validate user emails from request
      const duplicateEmails = getDuplicates(userEmails);
      if (duplicateEmails.length !== 0) {
        throw new GraphQLError(
          `Error Duplicate email(s) found in user data "${duplicateEmails.join(
            ","
          )}"`
        );
      }

      // Validate user emails from DB
      const { data } = await users.getUsers({
        emails: userEmails,
        usernames: userNames,
      });
      const duplicateEmailsFromDB = intersectionWith(
        data.map((user) => user.email),
        userEmails
      );
      if (duplicateEmailsFromDB.length > 0) {
        throw new GraphQLError(
          `Error Duplicate email(s) found in database "${duplicateEmailsFromDB.join(
            ","
          )}"`
        );
      }

      const userRecords = await users.createUsers(userData);
      return {
        data: userRecords.map((user) => user["user_id"]),
      };
    },
    beBroker: async (_, { beBrokerData }: { beBrokerData: BeBrokerParams }) => {
      const { email, phone, brokerCompanyId } = beBrokerData;

      // Get user_id by email
      const { data } = await users.getUsers({
        emails: [email],
      });
      const user = data?.[0];
      const { broker_id } = user;

      if (broker_id) {
        throw new GraphQLError("User is already a broker");
      }

      if (user && !broker_id) {
        // Create a new broker
        const brokerIds = await brokers.createBrokers([
          {
            name: user.username,
            phone,
            broker_company_id: brokerCompanyId,
          },
        ]);
        const { broker_id } = brokerIds?.[0];
        await users.beBroker({
          userId: user.user_id,
          brokerId: broker_id,
        });
        return broker_id;
      }
    },
  },
};
