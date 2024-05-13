"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#db2777"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
