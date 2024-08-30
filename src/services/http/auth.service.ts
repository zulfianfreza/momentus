import { COOKIE_KEY } from '@/constant/common.constant';
import axiosInstance from '@/lib/axios-instance';
import { TApiResponse } from '@/types/api.type';
import { TAuthLoginResponse } from '@/types/auth.type';
import { TUser } from '@/types/user.type';
import { removeCookie } from '@/utils/cookie';

export const authLogin = async (payload: unknown) => {
  const { data } = await axiosInstance.post<TApiResponse<TAuthLoginResponse>>(
    '/auth/login',
    payload,
  );

  return data;
};

export const authRegister = async (payload: unknown) => {
  const { data } = await axiosInstance.post<TApiResponse<TUser>>(
    '/auth/register',
    payload,
  );

  return data;
};

export const authGoogleRedirect = async () => {
  const { data } = await axiosInstance.get('/auth/google');

  return data;
};

export const getMe = async () => {
  const { data } = await axiosInstance.get<TApiResponse<TUser>>('/me');

  return data;
};

export const logout = async () => {
  removeCookie(COOKIE_KEY.ACCESS_TOKEN);
};
