export type User = {
  user_id: string;
  email: string;
  username: string;
  access_right?: string;
  broker_id?: string;
};

export type CreateUserParams = Array<
  Omit<User, "user_id" | "access_right" | "broker_id">
>;

export type BeBrokerParams = {
  email: string;
  phone: string;
  brokerCompanyId: string;
};
