import React from "react";
import { connect } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import { contactsSelectors } from "../../redux/contacts";
import PropTypes from "prop-types";

function ContactList({ contacts }) {
  return (
    <>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} id={contact.id} />
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array,
};
