'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Toaster } from '../ui/sonner';
import { Danger, TickSquare, Warning2 } from 'iconsax-react';
import { ClerkProvider } from '@clerk/nextjs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ClerkProvider>
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
    </ClerkProvider>
  );
}
