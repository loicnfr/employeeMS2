import { FaUsers } from "react-icons/fa";
import { MdOutlineCardTravel } from "react-icons/md";
import StatisticCard from "./Components/StatisticCard";
import { CgDanger } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="pl-20">
      <h1 className=" text-3xl mt-1">Dashboard</h1>
      <div className="grid grid-cols-3 mt-4 gap-20 ">
        <StatisticCard
          text="Registered Employees"
          total="4"
          iconBgColor="bg-green-600"
          icon={<FaUsers />}
        />
        <StatisticCard
          text="Listed Departments"
          total="5"
          iconBgColor="bg-yellow-400"
          icon={<FaUsers />}
        />
        <StatisticCard
          text="Listed Leave Type"
          total="8"
          iconBgColor="bg-red-600"
          icon={<FaUsers />}
        />
      </div>
      <div className="flex h-[70px] mt-10 justify-center items-center border-t-2 border-b-2">
        <h1>Details</h1>
      </div>
      <div className="grid grid-cols-2 gap-8 pt-8">
        <StatisticCard
          text="Total Users"
          total="1"
          iconBgColor="bg-blue-600"
          icon={<MdOutlineCardTravel />}
        />
        <StatisticCard
          text="Total leaves"
          total="6"
          iconBgColor="bg-yellow-400"
          icon={<FaRegNewspaper />}
        />
        <StatisticCard
          text="Total Tasks"
          total="5"
          iconBgColor="bg-red-600"
          icon={<CgDanger />}
        />
        <StatisticCard
          text="Ongoing projects"
          total="3"
          iconBgColor="bg-green-600"
          icon={<FaUsers />}
        />
      </div>
    </div>
  );
};

export default Dashboard;
