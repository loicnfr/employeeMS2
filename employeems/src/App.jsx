import "./App.css";
import { Menu } from "antd";
import Dashboard from "./Dashboard";
import {
  UsergroupAddOutlined,
  FileFilled,
  ProjectFilled,
  UserOutlined,
  DashboardOutlined,
  PieChartFilled,
  PoweroffOutlined,
} from "@ant-design/icons/lib/icons";
import { Routes, Route, useNavigate, Router } from "react-router-dom";
import Login from "./Login";
import AddEmployee from "./Components/AddEmployee";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
      }}
    >
      <Header />
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <>
      <div
        style={{
          height: 60,
          backgroundColor: "gray",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        Header
      </div>
    </>
  );
}

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
            // TODO
          } else {
            navigate(key);
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          {
            label: "dashboard",
            key: "/Dashboard",
            icon: <DashboardOutlined />,
          },
          {
            label: "Employee",
            key: "/usersList",
            icon: <UserOutlined />,
            children: [
              { label: "Add Employee", key: "/addemployee", icon: <UsergroupAddOutlined />},
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
            key: " /logout",
            icon: <PoweroffOutlined />,
            danger: true,
          },
        ]}
      ></Menu>
    </>
  );
}

function Content() {
  return (
    <>
      <Routes>
        <Route path="/project" element={<div>Project</div>} />
        <Route path="/task" element={<div>task</div>} />
        <Route path="/attendance" element={<div>Attendance</div>} />
        <Route path="/manage" element={<div>Manage Employee</div>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userlist" element={<div>User List</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/addemployee" element={<AddEmployee/>} />
        
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
