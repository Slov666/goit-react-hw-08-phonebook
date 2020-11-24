import contactsActions from "./contactsActions";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const addContact = (name, number) => (dispatch) => {
  dispatch(contactsActions.addContactsRequest());

  axios
    .post("/contacts", { name, number })
    .then((response) =>
      dispatch(contactsActions.addContactsSuccess(response.data))
    )
    .catch((error) => dispatch(contactsActions.addContactsError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactsSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactsError(error)));
};

export default {
  addContact,
  removeContact,
  fetchContacts,
};
