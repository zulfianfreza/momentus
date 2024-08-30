'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'aos/dist/aos.css';
import { Danger, TickSquare, Warning2 } from 'iconsax-react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { useState } from 'react';
import { Toaster } from '../ui/sonner';

export default function Provider({ children }: { children: React.ReactNode }) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
      // mutationCache: new MutationCache({
      //   onError: (error) => {
      //     if (axios.isAxiosError(error)) {
      //       toast.error(error.response?.data?.message);
      //     }
      //   },
      // }),
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ProgressBar
        height="4px"
        color="#840ED8"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Toaster
        richColors
        closeButton
        icons={{
          success: <TickSquare />,
          warning: <Warning2 />,
          error: <Danger />,
        }}
      />
    </QueryClientProvider>
  );
}
