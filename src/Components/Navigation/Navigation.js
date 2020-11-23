import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import css from "./Navigation.module.css";

function Navigation({ isAuthenticated }) {
  return (
    <nav className={css.nav}>
      {isAuthenticated ? (
        <NavLink classNames={css.link} to="/contacts">
          test contacts
        </NavLink>
      ) : (
        <>
          <NavLink classNames={css.link} to="/register">
            Register
          </NavLink>
          <NavLink classNames={css.link} to="/login">
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
