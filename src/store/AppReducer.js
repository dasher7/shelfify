export default (state, action) => {
  switch (action.type) {
    case "DUMMY":
      return {
        ...state,
        placeholder: state.placeholder.concat(action.payload)
      };
    case "ADD_CATEGORY":
      const newArray = state.categories.concat(action.payload);
      return { ...state, categories: newArray };
    case "REMOVE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (el, index) => el !== action.payload
        )
      };
    case "ADD_CATEGORY_ELEMENT":
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.payload.category]: state.cards[
            action.payload.category
          ].concat(action.payload)
        }
      };
    case "ADD_ACTIVE_CATEGORY":
      return { ...state, active: action.payload };
    default:
      return state;
  }
};
