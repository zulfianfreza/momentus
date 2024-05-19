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
    <div>
      {days}:{hours}:{minutes}:{seconds}
    </div>
  );
}

export default React.memo(CountdownDisplay);
