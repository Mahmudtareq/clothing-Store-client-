/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import { useCountdown } from "../hooks/useCountdown";
import ShowCounter from "./ShowCounter";

const CountdownTimer = ({ targetDate }: any) => {
  const [isClient, setIsClient] = useState(false);
  const [initialTime, setInitialTime] = useState(() => new Date().getTime());
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setInitialTime(new Date().getTime());
  }, [targetDate]);

  if (!isClient) {
    return null;
  }

  if (days + hours + minutes + seconds <= 0) {
    return (
      <h1 className="text-red-500 text-md font-semibold">
        Time's Up! Please Stay Tuned for Our Next Exciting Offer!
      </h1>
    );
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
