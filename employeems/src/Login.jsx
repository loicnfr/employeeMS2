// import { Form, Input, Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const HandleLogin = async (e) => {
    e.preventDefault();
    // Login axios 
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/Auth",
        data
      );

      if (response.status == 200) {
        console.log(response.data);
        toast.success("Successful login");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.msg) {
        toast.error(error.response.data.msg);
      } else {
        toast.error("Error");
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={HandleLogin} method="POST">
        <h1>Login</h1>
        <div className="form-group">
          <label>User Email</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Email"
            onChange={handleInput}
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label>User Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter Password"
            required
            onChange={handleInput}
            name="password"
          />
        </div>
        <input type="submit" className="btn" value="Login"></input>
      </form>
    </div>
  );
};

export default Login;
