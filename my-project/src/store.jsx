import { legacy_createStore as createStore } from 'redux'
import rootred from "./redux/reducers/mains";
// import { legacy_createStore } from "redux";

const store = createStore(
  rootred,
);

export default store;
