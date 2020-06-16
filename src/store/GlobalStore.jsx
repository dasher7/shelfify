import React, { createContext, useReducer } from "react";
import appReducer from "./appReducer";

// ! INITIAL STATE - GLOBAL APP CONTEXT

const initialState = {
  user: {},
  categories: ["games", "books", "films", "music"],
  activeCategory: "games",
  categoryContent: {
    games: [
      {
        title: "Half-Life: Alyx",
        description: "New Half-Life.",
        category: "games",
      },
      {
        title: "BioShock",
        description: "Steampunk FTW.",
        category: "games",
      },
    ],
    music: [
      {
        title: "Trench",
        author: "TwentyOne Pilots",
        category: "music",
      },
    ],
    books: [],
    films: [],
  },
};

// ! CREATE THE ACTUAL CONTEXT
export const GlobalContext = createContext(initialState);

// ! PROVIDE AN HOC IN ORDER TO WRAP THE ALL APP AND GIVE IT ACCESS TO THE STORE
export const GlobalStore = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(appReducer, initialState);

  // ? DEFINE ALL THE ACTIONS BELOW

  function dummyAction() {
    dispatch({
      type: "DUMMY",
      payload: "Dummy action worked",
    });
  }

  function addCategory(newCategory) {
    dispatch({
      type: "ADD_CATEGORY",
      payload: newCategory,
    });
  }

  // this one also delete all the content of that category
  function deleteCategory(category) {
    dispatch({
      type: "DELETE_CATEGORY",
      payload: category,
    });
  }

  function setActiveCategory(activeCategory) {
    dispatch({
      type: "SET_ACTIVE_CATEGORY",
      payload: activeCategory,
    });
  }

  function addCategoryContent(newContent) {
    dispatch({
      type: "ADD_CATEGORY_CONTENT",
      payload: newContent,
    });
  }

  function addUser(user) {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  }

  // ? RETURN AN ACTUAL HOC

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        categories: state.categories,
        activeCategory: state.activeCategory,
        categoryContent: state.categoryContent,
        dummyAction,
        addCategory,
        setActiveCategory,
        addCategoryContent,
        deleteCategory,
        addUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
