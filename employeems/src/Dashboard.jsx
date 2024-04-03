import { Card, Space, Statistic, Typography } from "antd";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons/lib/icons";

const Dashboard = () => {
  return (
    <>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <Card>
          <Space direction="horizontal">
            <ShoppingCartOutlined />
            <Statistic title="Orders" value={1234} />
          </Space>
        </Card>
      </Space>
    </>
  );
};

export default Dashboard;
