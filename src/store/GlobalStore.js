import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// !initial state
const initialState = {
  categories: ["multimedia", "music"]
};

// !create context
export const GlobalContext = createContext(initialState);

// !provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //?Actions

  /**
   * * ADD CATEGORY
   * @param newCategory is a String which defines the new cateogry you mat want to add
   */
  function addCategory(newCategory) {
    dispatch({
      type: "ADD_CATEGORY",
      payload: newCategory
    });
  }

  /**
   * * REMOVE CATEGORY
   * @param toDelete category to remove (as string)
   */
  function removeCategory(deleteCategory) {
    dispatch({
      type: "REMOVE_CATEGORY",
      payload: deleteCategory
    });
  }

  /**
   * * ADD A CATEGORY ELEMENT (CARD)
   * @param all the info passed through the creation form
   */
  function addCategoryElement(newCategoryElement) {
    dispatch({ type: "ADD_CATEGORY_ELEMENT", payload: newCategoryElement });
  }

  return (
    <GlobalContext.Provider
      value={{
        categories: state.categories,
        addCategory,
        removeCategory,
        addCategoryElement
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
