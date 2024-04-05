import "./App.css";

import Dashboard from "./Dashboard";
import "./search.css";

import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import AddEmployee from "./Components/AddEmployee";
import DashboardLayout from "./DashboardLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project" element={<div>Project</div>} />
          <Route path="/task" element={<div>task</div>} />
          <Route path="/attendance" element={<div>Attendance</div>} />
          <Route path="/manage" element={<div>Manage Employee</div>} />
          <Route path="/userlist" element={<div>User List</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/allemployee" element={<div>all employee</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
