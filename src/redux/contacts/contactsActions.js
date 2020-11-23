import { createAction } from "@reduxjs/toolkit";

const addContactsRequest = createAction("contact/addRequest");
const addContactsSuccess = createAction("contact/addSuccess");
const addContactsError = createAction("contact/addError");

const fetchContactsRequest = createAction("contact/fetchRequest");
const fetchContactsSuccess = createAction("contact/fetchSuccess");
const fetchContactsError = createAction("contact/fetchError");

const removeContactsRequest = createAction("contact/removeRequest");
const removeContactsSuccess = createAction("contact/removeSuccess");
const removeContactsError = createAction("contact/removeError");

const filter = createAction("contact/filter");
const clearContact = createAction("contact/clear");

export default {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,

  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,

  filter,
  clearContact,
};
