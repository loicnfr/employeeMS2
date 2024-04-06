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
    <div className="flex rounded-md cursor bg-gray-100 justify-center items-center min-h-screen">
      <form
        className="w-96 p-4  shadow flex flex-col justify-center items-center gap-5"
        onSubmit={HandleLogin}
        method="POST"
      >
        <h1 className="text-3xl">Login</h1>
        <div className="flex flex-col">
          <label className="">User Email</label>

          <input
            className="pl-2"
            type="text"
            placeholder="Enter Email"
            onChange={handleInput}
            name="email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>User Password</label>
          <input
            className="pl-2"
            type="password"
            placeholder="Enter Password"
            required
            onChange={handleInput}
            name="password"
          />
        </div>
        <div className="border-2 text-white bg-black hover:bg-white hover:text-black rounded-[300px]">
          <input
            type="submit"
            className="btn cursor-pointer"
            value="Login"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Login;
