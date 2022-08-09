import { combineReducers } from "redux";
import imagesReducer from "./images";
import contactReducer from "./contact";

export default combineReducers({
  images: imagesReducer,
  contact: contactReducer,
});
