const DateTimeDisplay = ({ value, type, isDanger }: any) => {
  return (
    <>
      <div className={isDanger ? "countdown danger" : "countdown"}>
        <p className="font-bold text-lg text-blue-600/100">{value}</p>
        <span className="font-semibold uppercase text-fuchsia-500">{type}</span>
      </div>
    </>
  );
};

export default DateTimeDisplay;
