import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
function UserMenu({ name, onLogout }) {
  return (
    <>
      <div>
        <p>
          Welcome <span>{name}</span>
        </p>
      </div>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </>
  );
}
const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);
