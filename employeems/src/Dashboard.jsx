
import { FaUsers } from "react-icons/fa";
import StatisticCard from "./components/StatisticCard";

const Dashboard = () => {
  return (
    <div className="pl-20">
      <h1 className=" text-3xl mt-1">Dashboard</h1>
      <div className="grid grid-cols-3 mt-4 gap-20 ">
        <StatisticCard
          text="Registered Employees"
          total="5"
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
          total="5"
          iconBgColor="bg-red-600"
          icon={<FaUsers />}
        />
      </div>
      <div className="flex h-[70px] mt-10 justify-center items-center border-t-2 border-b-2">
        <h1>Leaves Details</h1>
      </div>
      <div className="grid grid-cols-2 gap-8 pt-8">
        <StatisticCard
          text="Leaves Applied"
          total="5"
          iconBgColor="bg-blue-600"
          icon={<FaUsers />}
        />
        <StatisticCard
          text="New Leave Requests"
          total="5"
          iconBgColor="bg-yellow-400"
          icon={<FaUsers />}
        />
        <StatisticCard
          text="RejectedLeave Requests"
          total="5"
          iconBgColor="bg-red-600"
          icon={<FaUsers />}
        />
        <StatisticCard
          text="Approved Leave Requests"
          total="5"
          iconBgColor="bg-green-600"
          icon={<FaUsers />}
        />
      </div>
export default Dashboard;
