import axiosInstance from '@/lib/axios-instance';
import React from 'react';

export default async function UsersPage() {
  const res = await axiosInstance.get('/users');
  return <div>{JSON.stringify(res.data)}</div>;
}
