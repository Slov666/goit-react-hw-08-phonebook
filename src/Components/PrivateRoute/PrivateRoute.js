import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import routes from "../../routes";
import { authSelectors } from "../../redux/auth";
import PropTypes from "prop-types";

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

PrivateRouter.propTyps = {
  isAuthenticated: PropTypes.node,
  Component: PropTypes.node,
};
