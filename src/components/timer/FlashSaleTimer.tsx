"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

const FlashSaleTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + 30); // 30 minutes from now
    const now = new Date().getTime(); // Current time in milliseconds
    const difference = endTime.getTime() - now; // Difference in milliseconds

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures the effect runs only once, on mount

  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString();
  };

  return (
    <div>
      {`${formatTime(timeLeft.hours)} hr : ${formatTime(
        timeLeft.minutes
      )} min : ${formatTime(timeLeft.seconds)} sec`}
    </div>
  );
};

export default FlashSaleTimer;
