import React, { useState, useEffect, useContext } from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { HeaderContent } from "./HeaderContent";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "../css/shelfify.css";
import { withAuthenticationCons } from "../hoc/withAuthenticationCons";
import { withFirebase } from "../firebase";
import { GlobalContext } from "../store/GlobalStore";

/**
 * TODO: Add a Switch in MainContent to change into Stats and other pages
 */

export const Shelfify = ({ authUser, firebase }) => {
  const [collapsed, setCollapsedValue] = useState(false);
  const { user, addUser } = useContext(GlobalContext);

  useEffect(() => {
    if (authUser) {
      firebase.user(authUser.uid).on("value", (snap) => {
        console.log(snap);
        const { name, surname, email } = snap.val();
        const { uid } = authUser;
        addUser({ name: name, surname: surname, email: email, uid: uid });
      });
    }
    // eslint-disable-next-line
  }, user);

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

export default withFirebase(withAuthenticationCons(Shelfify));
