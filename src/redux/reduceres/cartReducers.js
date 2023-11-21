export const cartReducer = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    return [...state, { ...action.data, unique: state.length }];
  } else if (action.type === "REMOVE_FROM_CART") {
    const newCartItems = state.filter(
      (item) => item.unique !== action.data.unique
    );
    return newCartItems;
  }
  return state;
};
