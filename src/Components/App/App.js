import React, { Component, Suspense } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import routes from "../../routes";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.css";
import  '../../base.css'

import Loader from "../Loader/Loader";
import Layout from "../Layout/Layout";
import Navigation from "../Navigation/Navigation";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublickRoute/PublicRoute";



class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
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
