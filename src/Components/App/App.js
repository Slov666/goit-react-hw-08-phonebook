import React, { Component, Suspense } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import routes from "../../routes";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.css";
import "../../base.css";

import Loader from "../Loader/Loader";
import Layout from "../Layout/Layout";
import Navigation from "../Navigation/Navigation";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublickRoute/PublicRoute";

import { store } from "react-notifications-component";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
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
  }

  render() {
    return (
      <Layout>
        <ReactNotification />
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              )
            )}
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

export default connect(null, {
  getCurrentUser: authOperations.getCurrentUser,
  isAuthenticated: authSelectors.isAuthenticated,
})(App);
