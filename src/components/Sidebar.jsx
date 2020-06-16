import React, { useContext, useState } from "react";

import CategoryForm from "./CategoryForm";
import { GlobalContext } from "../store/GlobalStore";

import { Button, Layout, Menu } from "antd";

import {
  DeleteOutlined,
  UserOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

/**
 * TODO: add the modal in order to add the category -- DONE
 * TODO: the modal should go in a proper component -- DONE
 * TODO: retrieve the category via global store -- DONE
 * TODO: actually add the new category in the store -- DONE
 * TODO: when click a category, make the active one -- DONE
 * TODO: the delete icon should appear just on the hovered one -- DONE
 * TODO: delete categoryContent when a category got deleted (see reducer) -- DONE
 * TODO: when a category got deleted, set another one to the active one -- DONE
 */

export const Sidebar = ({ collapsed }) => {
  const { categories, setActiveCategory, deleteCategory } = useContext(
    GlobalContext
  );

  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [showDeleteCategoryIcon, setShowDeleteCategoryIcon] = useState("");

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {categories.map((category, index) => (
          <Menu.Item
            key={category}
            icon={<UserOutlined />}
            onClick={() => setActiveCategory(category.toLowerCase())}
            onMouseEnter={() => setShowDeleteCategoryIcon(category)}
            onMouseLeave={() => setShowDeleteCategoryIcon("")}
          >
            {category}
            {showDeleteCategoryIcon === category && (
              <Button
                style={{ border: "none", marginLeft: 10 }}
                danger={true}
                ghost={true}
                icon={<DeleteOutlined />}
                onClick={(event) => {
                  setActiveCategory(categories[1].toLowerCase());
                  deleteCategory(category);
                  event.stopPropagation();
                }}
              />
            )}
          </Menu.Item>
        ))}
        <Menu.Item
          key="4"
          icon={<AppstoreAddOutlined />}
          onClick={() => {
            setShowAddCategoryForm(true);
          }}
        >
          Add Category
        </Menu.Item>
      </Menu>
      {showAddCategoryForm && (
        <CategoryForm
          visible={showAddCategoryForm}
          setVisibile={() => setShowAddCategoryForm(false)}
        />
      )}
    </Sider>
  );
};
