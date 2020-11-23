import React from "react";
import { connect } from "react-redux";
import { contactsSelectors, contactsOperations } from "../../redux/contacts";

function ContactListItem({ name, number, onRemove }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button type='button' onClick={onRemove}>remove</button>
    </>
  );
}
const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getElementByID(state, ownProps.id);
  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
