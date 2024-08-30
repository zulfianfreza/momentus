'use server';

import axiosInstance from '@/lib/axios-instance';
import { TApiResponse } from '@/types/api.type';
import { TUser } from '@/types/user.type';

export const getUsers = async () => {
  const { data } = await axiosInstance.get<TApiResponse<TUser[]>>('/users');

  return data;
};
