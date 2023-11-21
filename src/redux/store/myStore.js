import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ecommerceReducer } from "../reduceres/ecommerceReducer";
import { productsReducer } from "../reduceres/productsReducer";
import { selectedItem } from "../reduceres/selectedItem";
import { cartReducer } from "../reduceres/cartReducers";

export const myStore = () => {
  const store = createStore(
    combineReducers({
      ecommerceReducer,
      productsReducer,
      selectedItem,
      cartReducer,
    }),
    composeWithDevTools()
  );
  return store;
};
