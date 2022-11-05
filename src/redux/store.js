import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import rpm from "redux-promise-middleware";
import counterReducer from "./reducers/counter";
import productReducer from "./reducers/products";
import profileReducer from "./reducers/profile";

const middleware = applyMiddleware(rpm);
const reducers = combineReducers({
  counter: counterReducer,
  products: productReducer,
  profile: profileReducer,
});
const store = createStore(reducers, middleware);

export default store;
