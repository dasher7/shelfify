import React from "react";
import { AutoComplete, Input } from "antd";
import "../css/searchbar.css";

/**
 * TODO: it likely that retrieveTitles won't work on new cards, it may be in useEffects or some sort of hook/lifecycle
 */

export const SearchBar = () => {
  return (
    <AutoComplete className="searchbar">
      <Input.Search size="large" placeholder="search here" />
    </AutoComplete>
  );
};
