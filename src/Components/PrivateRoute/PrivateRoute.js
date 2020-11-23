import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import routes from "../../routes";
import { authSelectors } from "../../redux/auth";

const PrivateRouter = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={routes[2].path} />
      )
    }
  />
);
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRouter);
