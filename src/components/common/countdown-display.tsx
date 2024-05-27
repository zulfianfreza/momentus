"use client";

import React from "react";

type TProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function CountdownDisplay({ days, hours, minutes, seconds }: TProps) {
  return (
    <div className=" h-8 px-4 flex items-center bg-pink-600 rounded-lg text-white">
      <p className=" text-xs text-white">
        <span className=" font-semibold">{days}</span> Hari :{" "}
        <span className=" font-semibold">{hours}</span> Jam :{" "}
        <span className=" font-semibold">{minutes}</span> Menit :{" "}
        <span className=" font-semibold">{seconds}</span> Detik tersisa
      </p>
    </div>
  );
}

export default React.memo(CountdownDisplay);
