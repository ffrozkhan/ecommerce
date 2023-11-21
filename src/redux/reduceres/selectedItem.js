export const selectedItem = (state = {}, action) => {
  if (action.type === "SELECTED_ITEM") {
    return action.data;
  }
  return state;
};
