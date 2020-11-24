import React, { Component } from "react";
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { store } from "react-notifications-component";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();
    const includes = this.props.contacts.some(
      (contact) => contact.name === this.state.name
    );

    if (includes) {
      store.addNotification({
        title: "Error!",
        message: "There is already a contact with this name",
        type: "danger",
        insert: "bottom",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: false,
          showIcon: true,
        },
      });
      this.setState({ name: "", number: "" });
      return;
    }
    this.props.addContact(name, number);
    this.setState({ name: "", number: "" });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.onHandleSubmit}>
        <TextField
          name="name"
          type="text"
          value={name}
          onChange={this.onHandleChange}
          placeholder="Type name contact"
        />
        <div className={css.inputMargin}></div>
        <TextField
          name="number"
          type="number"
          value={number}
          onChange={this.onHandleChange}
          placeholder="Type number contact"
        />
        <div className={css.inputMargin}></div>
        <Button variant="contained" color="primary" type="submit">
          save contact
        </Button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContact(state),
});

export default connect(mapStateToProps, {
  addContact: contactsOperations.addContact,
})(ContactForm);

ContactForm.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func,
};
