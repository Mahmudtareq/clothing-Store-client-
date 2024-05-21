/* eslint-disable react/no-unescaped-entities */

import CountdownTimer from "./CountdownTimer";

const FlashSaleTimer = () => {
  const THREE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterOnedays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div>
      <div className="my-3">
        <h4 className="font-medium text-zinc-700 text-lg">
          Don't Miss Out! Our Flash Sale Ends in Just One Day!
        </h4>
        <p className="text-justify font-normal">
          Hurry up and grab your favorite items at unbeatable prices before the
          clock runs out. This is your last chance to save big!
        </p>
      </div>
      <CountdownTimer targetDate={dateTimeAfterOnedays} />
    </div>
  );
};

export default FlashSaleTimer;
