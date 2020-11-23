import { createSelector } from "@reduxjs/toolkit";
const getContact = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getElementByID = (state, id) => {
  const contacts = getContact(state);
  return contacts.find((item) => item.id === id);
};
const getVisibleContacts = createSelector(
  [getFilter, getContact],
  (filter, contacts) =>
    contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
);
export default {
  getContact,
  getElementByID,
  getFilter,
  getVisibleContacts,
};
