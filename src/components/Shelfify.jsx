import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { HeaderContent } from "./HeaderContent";
import { Layout, Row } from "antd";
import "antd/dist/antd.css";
import "../css/shelfify.css";
import { AuthUserContext } from "../auth";
import { Landing } from "./Landing";

export const Shelfify = () => {
  const [collapsed, setCollapsedValue] = useState(false);

  return (
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
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
        ) : (
          <Row>
            <Landing />
          </Row>
        )
      }
    </AuthUserContext.Consumer>
  );
};
