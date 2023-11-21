export const productsReducer = (
  state = { allProducts: [], currentProducts: [], category: [] },
  action
) => {
  if (action.type === "ALL_PRODUCTS") {
    return {
      ...state,
      allProducts: action.data,
      currentProducts: action.data,
      category: action.data,
    };
  } else if (action.type === "CATEGORY") {
    if (action.data === "all") {
      return {
        ...state,
        currentProducts: state.allProducts,
        category: state.allProducts,
      };
    } else {
      const filterCategory = state.allProducts.filter(
        (item) => item.category === action.data
      );
      return {
        ...state,
        currentProducts: filterCategory,
        category: filterCategory,
      };
    }
  } else if (action.type === "SEARCH") {
    const newSearch = state.category.filter((item) => {
      return item.title.toLowerCase().includes(action.data.toLowerCase());
    });
    return { ...state, currentProducts: newSearch };
  }
  return state;
};
