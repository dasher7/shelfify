/**
 * TODO: create the reducer -- DONE
 * TODO: refactor the cases in order to a better reading and code cleaning
 * TODO: delete categoryContent -- DONE
 * TODO: in DELETE_CATEGORY when a category got deleted make another category the active one -- DONE
 * TODO: maybe, refactor DELETE_CATEGORY
 */

export default (state, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload],
        categoryContent: { ...state.categoryContent, [action.payload]: [] },
      };
    case "DELETE_CATEGORY":
      let newCategoryContent = {};
      Object.keys(state.categoryContent).forEach((el, index) => {
        if (el.toLowerCase() !== action.payload.toLowerCase()) {
          newCategoryContent = {
            ...newCategoryContent,
            [el]: [...state.categoryContent[el]],
          };
        }
      });
      console.log(newCategoryContent);

      return {
        ...state,
        categories: state.categories.filter(
          (el, index) => el !== action.payload
        ),
        categoryContent: { ...newCategoryContent },
      };
    case "SET_ACTIVE_CATEGORY":
      return { ...state, activeCategory: action.payload };
    case "ADD_CATEGORY_CONTENT":
      return {
        ...state,
        categoryContent: {
          ...state.categoryContent,
          [action.payload.category]: state.categoryContent[
            action.payload.category
          ].concat(action.payload),
        },
      };
    default:
      return state;
  }
};
