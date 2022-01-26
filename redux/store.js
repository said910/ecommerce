import { createStore, combineReducers } from "redux";
import reducerCourses from "./reducers/reducerCourses";

const routReducer = combineReducers({
  coures: reducerCourses,
});
const store = createStore(routReducer);

export default store;
