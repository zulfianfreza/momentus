import { TUser } from './user.type';

export type TAuthLoginResponse = {
  user: TUser;
  access_token: string;
};
