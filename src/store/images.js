import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "images",
  initialState: {
    list: [],
    lastFetch: null,
  },
  reducers: {
    imagesReceived: (images, action) => {
      images.list = action.payload;
      images.lastFetch = Date.now();
    },
  },
});

export const { imagesReceived } = slice.actions;

export default slice.reducer;

// Action Creators
const url = "/photos";
export const loadImages = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.images;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onSuccess: imagesReceived.type,
    })
  );
};

//Memoization
export const getSpecifiedNumberOfImages = (start, end) =>
  createSelector(
    (state) => state.entities.images,
    (images) => images.list.slice(start, end)
  );
