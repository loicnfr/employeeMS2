import { GrStatusGood } from "react-icons/gr";
import { FaRegCalendar } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";

const ProjectPage = () => {
  return (
    <div className="w-full gap-8  grid grid-cols-3">
      <div className="  px-3">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">New Projects</h1>
          <h2>3 projects</h2>
        </div>
        <div className="border-2 rounded-md p-2 gap-y-2">
          <h3 className="flex items-center text-2xl">
            <GrStatusGood />
            <span className="pl-1 ">ERP System</span>
          </h3>
          <div className="flex justify-between items-center ">
            <p className="text-gray-600">12 open task</p>
            <p className="p-1 text-white cursor-pointer flex justify-center items-center bg-green-500 rounded-md">
              Testing
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
            eos cupiditate non perspiciatis quidem pariatur?
          </p>
          <div className="flex flex-col gap-y-2">
            <div className="grid grid-cols-2">
              <div>Created:</div>
              <div className="flex items-center">
                <FaRegCalendar />
                <span>Jan 11, 2024</span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>Team Leader:</div>
              <div>Jens Berserker</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Team Leader:</div>
              <div className="flex items-center text-green-500">
                <FaArrowDownLong />
                <span>Low</span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>Deadline:</div>
              <div className="flex items-center">
                <FaRegCalendar />
                <span>Jan 11, 2024</span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>Comments:</div>
              <div>10</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Bugs:</div>
              <div>5</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Progress:</div>
              <div className="text-green-500">65%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">Running</h1>
          <h2>2 projects</h2>
        </div>
        <div className="border-2 rounded-md p-2 gap-y-2">
          <h3 className="flex items-center text-2xl">
            <GrStatusGood />
            <span className="pl-1 ">Shopping Application</span>
          </h3>
          <div className="flex justify-between items-center ">
            <p className="text-gray-600">22 open task</p>
            <p className="p-1 text-white cursor-pointer flex justify-center items-center bg-red-500 rounded-md">
              Android
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
            eos cupiditate non perspiciatis quidem pariatur?
          </p>
          <div className="flex flex-col gap-y-2">
            <div className="grid grid-cols-2">
              <div>Created:</div>
              <div className="flex items-center">
                <FaRegCalendar />
                <span>Jan 11, 2024</span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>Team Leader:</div>
              <div>Jens Berserker</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Team Leader:</div>
              <div className="flex items-center text-red-500">
                <FaLongArrowAltUp />
                <span>High</span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>Deadline:</div>
              <div className="flex items-center">
                <FaRegCalendar />
                <span>Jan 11, 2024</span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>Comments:</div>
              <div>10</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Bugs:</div>
              <div>5</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Progress:</div>
              <div className="text-green-500">85%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">Finished</h1>
          <h2>1 project</h2>
        </div>
        <div className="border-2 rounded-md p-2 gap-y-2">
          <h3 className="flex items-center text-2xl">
            <GrStatusGood />
            <span className="pl-1 ">Video Streaming App</span>
          </h3>
          <div className="flex justify-between items-center ">
            <p className="text-gray-600">22 open task</p>
            <p className="p-1 text-white cursor-pointer flex justify-center items-center bg-black rounded-md">
              Iphone
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
            eos cupiditate non perspiciatis quidem pariatur?
          </p>
          <div className="flex flex-col gap-y-2">
            <div className="grid grid-cols-2">
              <div>Created:</div>
              <div className="flex items-center">
                <FaRegCalendar />
                <span>Jan 11, 2024</span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>Team Leader:</div>
              <div>Jens Berserker</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Team Leader:</div>
              <div className="flex items-center text-red-500">
                <FaLongArrowAltUp />
                <span>High</span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>Deadline:</div>
              <div className="flex items-center">
                <FaRegCalendar />
                <span>Jan 11, 2024</span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>Comments:</div>
              <div>10</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Bugs:</div>
              <div>5</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Progress:</div>
              <div className="text-green-500">85%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
