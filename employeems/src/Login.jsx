import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  const onFinish = (values) => {
    console.log("Received values:", values);

    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Navigate to="/employeems/src/Dashboard.jsx" />;
  }

  return (
    <>
      <div className="App">
        <div></div>
        <header className="App-header">
          <Form onFinish={onFinish}>
            <Form.Item label="User Email" name="username">
              <Input placeholder="User Email " required />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password placeholder="Enter Password" required />
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Log In
              </Button>
            </Form.Item>
          </Form>
        </header>
      </div>
    </>
  );
};

export default Login;
