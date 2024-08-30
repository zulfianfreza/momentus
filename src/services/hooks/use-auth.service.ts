import { ApiServiceErr, TApiResponse } from '@/types/api.type';
import { TAuthLoginResponse } from '@/types/auth.type';
import { useMutation } from '@tanstack/react-query';
import { authLogin, authRegister } from '../http/auth.service';
import { TUser } from '@/types/user.type';

export const useAuthLogin = () => {
  return useMutation<TApiResponse<TAuthLoginResponse>, ApiServiceErr, unknown>({
    mutationKey: ['login'],
    mutationFn: async (payload) => {
      const res = await authLogin(payload);

      return res;
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });
};

export const useAuthRegister = () => {
  return useMutation<TApiResponse<TUser>, ApiServiceErr, unknown>({
    mutationKey: ['login'],
    mutationFn: async (payload) => {
      const res = await authRegister(payload);

      return res;
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });
};
