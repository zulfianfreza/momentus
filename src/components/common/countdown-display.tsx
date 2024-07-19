'use client';

import React from 'react';

type TProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function CountdownDisplay({ days, hours, minutes, seconds }: TProps) {
  return (
    <div className=" bg-primary flex h-8 items-center rounded-lg px-4 text-white">
      <p className=" text-xs text-white">
        <span className=" font-semibold">{days}</span> Hari :{' '}
        <span className=" font-semibold">{hours}</span> Jam :{' '}
        <span className=" font-semibold">{minutes}</span> Menit :{' '}
        <span className=" font-semibold">{seconds}</span> Detik tersisa
      </p>
    </div>
  );
}

export default React.memo(CountdownDisplay);
