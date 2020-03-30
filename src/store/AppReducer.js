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
      console.log(action.payload);
      return {
        ...state,
        categories: state.categories.filter(
          (el, index) => el !== action.payload
        )
      };
    case "ADD_CATEGORY_ELEMENT":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
