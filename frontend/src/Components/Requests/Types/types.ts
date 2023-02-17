export type Request = {
  id?: number;
  name: string;
  email: string;
  phone: string;
  data: string;
  comment: string;
  status?: string;
};

export type State = {
  requests: Request[];
};
