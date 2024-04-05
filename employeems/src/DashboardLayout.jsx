import { Outlet } from "react-router-dom";
import { Menu } from "antd";
import Header from "./Components/Header";
import { useNavigate } from "react-router-dom";

import {
  UsergroupAddOutlined,
  FileFilled,
  ProjectFilled,
  UserOutlined,
  DashboardOutlined,
  PieChartFilled,
  PoweroffOutlined,
} from "@ant-design/icons/lib/icons";

const DashboardLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
      }}
    >
      <Header />/{" "}
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;

function Footer() {
  return (
    <>
      <div
        style={{
          height: 60,
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        Footer
        {/* *******footer here ******* */}
      </div>
    </>
  );
}

function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <Menu
        onClick={({ key }) => {
          if (key === "logout") {
            // TODO ************************//
            navigate("/");
          } else {
            navigate(key);
          }
        }}
        items={[
          {
            label: "dashboard",
            key: "/dashboard",
            icon: <DashboardOutlined />,
          },
          {
            label: "Employee",
            key: "/usersList",
            icon: <UserOutlined />,
            children: [
              {
                label: "Add Employee",
                key: "/addemployee",
                icon: <UsergroupAddOutlined />,
              },
              {
                label: "All employee",
                key: "/allemployee",
                icon: <UsergroupAddOutlined />,
              },
            ],
          },
          {
            label: "Project",
            key: "/project",
            icon: <PieChartFilled />,
          },
          {
            label: "Task",
            key: "/task",
            icon: <ProjectFilled />,
          },
          {
            label: "Attendance",
            key: " /attendance",
            icon: <FileFilled />,
          },
          {
            label: "LogOut",
            key: "logout",
            icon: <PoweroffOutlined />,
            danger: true,
          },
        ]}
      ></Menu>
    </>
  );
}
