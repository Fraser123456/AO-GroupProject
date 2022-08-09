import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "contact",
  initialState: {
    contactInfo: { name: "", email: "", phoneNumber: "" },
    showContactModal: false,
  },
  reducers: {
    saveUserContactInfo: (contact, action) => {
      contact.contactInfo.name = action.payload.name;
      contact.contactInfo.email = action.payload.email;
      contact.contactInfo.phoneNumber = action.payload.phoneNumber;
      contact.showContactModal = false;
    },
    shouldShowContactModal: (contact, action) => {
      contact.showContactModal = action.payload;
    },
  },
});

export const { saveUserContactInfo, shouldShowContactModal } = slice.actions;

export default slice.reducer;

//Action Creators
export const loadUserContactInfo = () => (dispatch, getState) => {
  let contactData = null;
  const stateContactData = getState().entities.contact.contactInfo;
  if (
    stateContactData.name === "" ||
    stateContactData.email === "" ||
    stateContactData.phoneNumber === ""
  )
    contactData = JSON.parse(localStorage.getItem("userContactInfo"));

  if (contactData) return dispatch(saveUserContactInfo(contactData));

  return;
};

export const sendUserContactMessage = (data) => (dispatch, getState) => {
  localStorage.setItem("userContactInfo", JSON.stringify(data));

  //apiCallBegan to call the server and post the info

  /*
        return dispatch(apiCallBegan({
        url: '/user',
        method: 'POST',
        data: data,
        onSuccess: saveUserContactInfo.type
        }))
    */
  dispatch(saveUserContactInfo(data));
};

//Memoization
export const getUserInfo = () =>
  createSelector(
    (state) => state.entities.contact,
    (contact) => contact.contactInfo
  );

export const showContactModal = () =>
  createSelector(
    (state) => state.entities.contact,
    (contact) => contact.showContactModal
  );
