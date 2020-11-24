import React, { Component } from "react";
import { connect } from "react-redux";
import { contactsOperations } from "../../redux/contacts";
import css from "./ContactForm.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

export default connect(null, { addContact: contactsOperations.addContact })(
  ContactForm
);
