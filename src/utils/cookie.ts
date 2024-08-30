import Cookies from 'js-cookie';

export const getCookie = async (key: string) => {
  if (typeof window === 'undefined') {
    ('use server');
    const { cookies } = await import('next/headers');
    const token = cookies().get(key)?.value;

    return token;
  } else {
    const token = Cookies.get(key);

    return token;
  }
};

export const removeCookie = async (key: string) => {
  if (typeof window === 'undefined') {
    ('use server');
    const { cookies } = await import('next/headers');
    const token = cookies().delete(key);

    return token;
  } else {
    const token = Cookies.remove(key);

    return token;
  }
};

export const setCookie = async (key: string, value: any) => {
  if (typeof window === 'undefined') {
    ('use server');
    const { cookies } = await import('next/headers');
    const token = cookies().set(key, value);

    return token;
  } else {
    const token = Cookies.set(key, value);

    return token;
  }
};
