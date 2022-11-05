import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import rpm from "redux-promise-middleware";
import counterReducer from "./reducers/counter";
import productReducer from "./reducers/products";
import profileReducer from "./reducers/profile";
import profileReducer2 from "./reducers/profile2";

const middleware = applyMiddleware(rpm);
const reducers = combineReducers({
  counter: counterReducer,
  products: productReducer,
  profile: profileReducer,
  profile2: profileReducer2,
});
const store = createStore(reducers, middleware);

export default store;
