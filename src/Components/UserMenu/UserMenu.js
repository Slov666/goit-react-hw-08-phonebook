import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import css from "./UserMenu.module.css";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function UserMenu({ name, onLogout }) {
  return (
    <>
      <div className={css.div}>
        <p className={css.welcome}>
          Welcome, <span className={css.name}>{name}</span>
        </p>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          onClick={onLogout}
        >
          Logout
        </Button>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);

UserMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
  name: PropTypes.string,
};
