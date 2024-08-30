export type TApiResponse<D> = {
  success: boolean;
  message: string;
  statusCode: number;
  data: D;
};

export type ApiServiceErr = any;
