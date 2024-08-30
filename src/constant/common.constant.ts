export const COOKIE_KEY = {
  ACCESS_TOKEN: '_majoola_invitation_access_token',
  REFRESH_TOKEN: '_majoola_invitation_refresh_token',
} as const;

export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
} as const;
