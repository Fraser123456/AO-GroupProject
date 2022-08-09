import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";
import thunk from "redux-thunk";

export default function () {
  return configureStore({
    reducer,
    middleware: [thunk, api],
  });
}
