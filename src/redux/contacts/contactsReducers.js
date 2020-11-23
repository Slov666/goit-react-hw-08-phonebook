import { combineReducers, createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContact = (state, action) => {
  const contact = action.payload;
  return [...state, contact];
};
const removeContact = (state, { payload: id }) => {
  console.log(state);
  return state.filter((item) => item.id !== id);
};
const items = createReducer([], {
  [contactsActions.addContactsSuccess]: addContact,
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.removeContactsSuccess]: removeContact,
  [contactsActions.clearContact]: () => [],
});
const filter = createReducer("", {
  [contactsActions.filter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
