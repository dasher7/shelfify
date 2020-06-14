import React from "react";
import { Avatar, Layout, Typography, Row } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { SearchBar } from "./SearchBar";

const { Header } = Layout;
const { Title } = Typography;

/**
 * TODO: add the search bar at the top, in the middle of the header -- DONE
 * TODO: in order to align it properly, use css and flex -- DONE
 * TODO: move the style into a proper css or use a StyledComponent
 * TODO: the search bar, due to an heavy logic, should go in a proper component -- DONE
 * TODO: add a welcome message to the right of the screen and a link to setting page -- DONE
 * TODO: take care of responsive layout
 * TODO: as I refactored layout, take care of aling item and give them the right class -- DONE
 * TODO: Make the welcome message responsive to the logged user
 */

export const HeaderContent = ({ collapsed, toggle }) => {
  return (
    <Header
      style={{
        display: "flex",
        margin: 2,
        textAlign: "center",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <Row style={{ display: "flex", alignItems: "center" }}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: toggle,
          }
        )}
        <Title level={2}>Shelfify</Title>
      </Row>
      <SearchBar />
      <Row>
        <Title level={3} style={{ marginRight: 15 }}>
          Welcome, Andrea
        </Title>
        <Avatar style={{ backgroundColor: "blue" }} icon={<UserOutlined />} />
      </Row>
    </Header>
  );
};
