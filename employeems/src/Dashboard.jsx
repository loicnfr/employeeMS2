import { Card, Space, Statistic, Typography } from "antd";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <Card>
          <Space direction="horizontal">
            <ShoppingCartOutlined />
            <Statistic title="Registered Employee" value={4} />
          </Space>
        </Card>

        <Card>
          <Space direction="horizontal">
            <ShoppingCartOutlined />
            <Statistic title="Leave requests" value={12} />
          </Space>
        </Card>
        <Card>
          <Space direction="horizontal">
            <ShoppingCartOutlined />
            <Statistic title="Leave requests" value={12} />
          </Space>
        </Card>
      </Space>
    </div>
  );
};

export default Dashboard;
