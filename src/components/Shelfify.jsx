import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { HeaderContent } from "./HeaderContent";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "../css/shelfify.css";

export const Shelfify = () => {
  const [collapsed, setCollapsedValue] = useState(false);

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderContent
          collapsed={collapsed}
          toggle={() => setCollapsedValue(!collapsed)}
        />
        <MainContent />
      </Layout>
    </Layout>
  );
};
