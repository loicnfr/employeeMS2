import "./App.css";
import { Menu } from "antd";
import Dashboard from "./Dashboard";
import {
  HomeOutlined,
  DashboardOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons/lib/icons";
import { Routes, Route, useNavigate, Router } from "react-router-dom";
import Login from "./Login";

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
            label: "Home",
            key: "/",
            icon: <HomeOutlined />,
          },
          {
            label: "dashboard",
            key: "/Dashboard",
            icon: <DashboardOutlined />,
          },
          {
            label: "User List",
            key: "/usersList",
            icon: <UserOutlined />,
            children: [
              { label: "Active Users", key: "/activerUser" },
              {
                label: "Disable Users",
                key: "./disableUser",
              },
            ],
          },
          {
            label: "User List",
            key: "/usersList",
            icon: <UserOutlined />,
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
        <Route path="/" element={<div>home</div>} />
        <Route path="/project" element={<div>Project</div>} />
        <Route path="/attendance" element={<div>Attendance</div>} />
        <Route path="/manage" element={<div>Manage Employee</div>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userlist" element={<div>User List</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
