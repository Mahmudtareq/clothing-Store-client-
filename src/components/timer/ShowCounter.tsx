import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="flex items-center gap-4">
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 1} />
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

export default ShowCounter;
