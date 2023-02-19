export type User = {
  userName: string;
  password: string;
};
export type State = {
  user: User | {};
  message: string | undefined;
};
