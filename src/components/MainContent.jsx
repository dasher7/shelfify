import React, { useContext, useState } from "react";
import { Layout, Row } from "antd";
import { ShelfCard } from "./ShelfCard";
import { ShelfCardForm } from "./ShelfCardForm";
import { GlobalContext } from "../store/GlobalStore";

import { AppstoreAddOutlined } from "@ant-design/icons";

const { Content } = Layout;

/**
 * TODO: print a row after evey N (probably 5) cards
 * TODO: show only the cards of the active category -- DONE
 * TODO: use a custom card in order to add carts -- DONE
 * TODO: pass down category prop to ShelfCard -- DONE
 */

export const MainContent = () => {
  const { categoryContent, activeCategory } = useContext(GlobalContext);
  const [showAddCardForm, setShowAddCardForm] = useState(false);

  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      {/** ADD IMAGE AND UPDATE KEY*/}
      <Row>
        {categoryContent[activeCategory].map((content, index) => (
          <ShelfCard
            title={content.title}
            description={content.description}
            key={index}
          />
        ))}
        <ShelfCard
          title={`add a new ${activeCategory} card`}
          description="Click to open the form"
          category={activeCategory}
          image={<AppstoreAddOutlined />}
          onclick={() => setShowAddCardForm(true)}
        />
      </Row>
      {/*<Row>
        <ShelfCard />
        <ShelfCard />
      </Row>*/}
      {showAddCardForm && (
        <ShelfCardForm
          category={activeCategory}
          showForm={showAddCardForm}
          closeForm={() => setShowAddCardForm(false)}
        />
      )}
    </Content>
  );
};
