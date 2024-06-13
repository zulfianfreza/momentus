'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Toaster } from '../ui/sonner';
import { Danger, TickSquare, Warning2 } from 'iconsax-react';
import { ClerkProvider } from '@clerk/nextjs';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      {children}
      <ProgressBar
        height="4px"
        color="#db2777"
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
