import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { productReducer } from "./reducer/productReducers";
const reducer = combineReducers({
  product: productReducer,
});
let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
