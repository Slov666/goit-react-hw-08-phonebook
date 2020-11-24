import { React, Component } from "react";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";
import { contactsOperations } from "../redux/contacts";
import PropTypes from "prop-types";

import Loader from "../Components/Loader/Loader";
import ContactForm from "../Components/ContactForm/ContactForm";
import UserMenu from "../Components/UserMenu/UserMenu";
import ContactList from "../Components/ContactList/ContactList";
import Filter from "../Components/FIlter/Filter";

class ContactsViews extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        {this.props.isAuthenticated && (
          <>
            {this.props.loading ? <span>loading user</span> : <UserMenu />}
            <ContactForm />
            {this.props.loading ? <Loader /> : <ContactList />}
            <Filter />
          </>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  loading: authSelectors.getLoading(state),
});

export default connect(mapStateToProps, {
  fetchContacts: contactsOperations.fetchContacts,
})(ContactsViews);

ContactsViews.propTypes = {
  isAuthenticated: PropTypes.node,
  loading: PropTypes.bool,
  fetchContacts: PropTypes.func.isRequired,
};
