import React from "react";
import { connect } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";

function Filter({ filter, onFilter }) {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        value={filter}
        type="text"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  filter: contactsSelectors.getFilter(state),
});

export default connect(mapStateToProps, { onFilter: contactsActions.filter })(
  Filter
);
