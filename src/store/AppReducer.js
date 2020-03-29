export default (state, action) => {
  switch (action.type) {
    case "DUMMY":
      return {
        ...state,
        placeholder: state.placeholder.concat(action.payload)
      };
    default:
      return state;
  }
};
