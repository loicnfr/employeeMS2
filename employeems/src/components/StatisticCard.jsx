const StatisticCard = ({ icon, text, total, iconBgColor }) => {
  return (
    <div className="flex  h-[70px]  items-center border-2 shadow-md rounded-lg">
      <div
        className={`${iconBgColor} text-[50px] p-2 text-white flex justify-center items-center w-[50px] h-[70px] `}
      >
        {icon}
      </div>
      <div className=" p-2 gap-">
        <h2 className="text-xl">{text}</h2>
        <h1 className="text-3xl">{total}</h1>
      </div>
    </div>
  );
};

export default StatisticCard;
