import axios from "axios";
import authActions from "./authActions";
import { store } from "react-notifications-component";

import { contactsActions } from "../../redux/contacts";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("/users/signup", credentials)
    .then((response) => {
      console.log(response);
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch((error) => {
      dispatch(authActions.registerError(error));
      store.addNotification({
        title: "Error!",
        message: "User with the same email already exists!",
        type: "danger",
        insert: "bottom",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: false,
          showIcon: true,
        },
      });
    });
};

const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/users/login", credentials)
    .then((response) => {
      console.log(response);
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch((error) => {
      dispatch(authActions.loginError(error));
      store.addNotification({
        title: "Error!",
        message: "Invalid email or password!",
        type: "danger",
        insert: "bottom",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: false,
          showIcon: true,
        },
      });
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  axios
    .get("/users/current")
    .then((responese) =>
      dispatch(authActions.getCurrentUserSuccess(responese.data))
    )
    .catch((error) => dispatch(authActions.getCurrentUserError(error)));
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
      dispatch(contactsActions.clearContact());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

export default {
  register,
  logIn,
  getCurrentUser,
  logOut,
};
