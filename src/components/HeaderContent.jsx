import React from "react";
import { Avatar, Cascader, Layout, Typography, Row } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { SearchBar } from "./SearchBar";
import { withFirebase } from "../firebase";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../routes/routes";

const { Header } = Layout;
const { Title } = Typography;

const cascadeOptions = [
  {
    value: "settings",
    label: "settings",
  },

  {
    value: "stats",
    label: "stats",
  },

  {
    value: "log out",
    label: "logout",
  },
];

/**
 * TODO: add the search bar at the top, in the middle of the header -- DONE
 * TODO: in order to align it properly, use css and flex -- DONE
 * TODO: move the style into a proper css or use a StyledComponent
 * TODO: the search bar, due to an heavy logic, should go in a proper component -- DONE
 * TODO: add a welcome message to the right of the screen and a link to setting page -- DONE
 * TODO: take care of responsive layout
 * TODO: as I refactored layout, take care of aling item and give them the right class -- DONE
 * TODO: Make the welcome message responsive to the logged user
 * TODO: control the cascade style via CSS
 */

export const HeaderContentBase = ({ collapsed, toggle, firebase, history }) => {
  const handleSelect = async (value, selectedOptions) => {
    switch (value[0]) {
      case "log out":
        try {
          await firebase.doSignOut();
          history.push(ROUTES.LANDING);
        } catch (error) {
          console.error(error);
        }
        break;
      default:
        alert("Error");
    }
  };

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
        <Cascader options={cascadeOptions} onChange={handleSelect}>
          <Avatar style={{ backgroundColor: "blue" }} icon={<UserOutlined />} />
        </Cascader>
      </Row>
    </Header>
  );
};

export const HeaderContent = withRouter(withFirebase(HeaderContentBase));
