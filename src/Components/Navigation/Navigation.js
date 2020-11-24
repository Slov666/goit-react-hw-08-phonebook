import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { authSelectors } from "../../redux/auth";
import css from "./Navigation.module.css";

function Navigation({ isAuthenticated }) {
  return (
    <nav className={css.nav}>
      {isAuthenticated ? (
        <NavLink className={css.link} to="/contacts">
          Your contacts
        </NavLink>
      ) : (
        <>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
          <NavLink className={css.link} to="/login">
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);

Navigation.propTypes = {
  isAuthenticated: PropTypes.node,
};
