'use client';

import { COOKIE_KEY } from '@/constant/common.constant';
import { setCookie } from '@/utils/cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuLoader2 } from 'react-icons/lu';

type TPageParams = {
  searchParams: {
    access_token: string | undefined;
  };
};

export default function CallbackPage({ searchParams }: TPageParams) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (searchParams.access_token) {
      setCookie(COOKIE_KEY.ACCESS_TOKEN, searchParams.access_token);

      router.replace('/invitation');
    }
  }, [searchParams, router]);

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <LuLoader2
          size={24}
          className=" animate-spin text-blue-500"
        />
        <p>Please wait...</p>
      </div>
    </div>
  );
}
