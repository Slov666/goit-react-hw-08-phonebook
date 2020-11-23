import React, { Component } from "react";
import { connect } from "react-redux";
import { contactsOperations } from "../../redux/contacts";

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
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.onHandleChange}
            placeholder="Type name contact"
          />
        </label>
        <label>
          Number
          <input
            name="number"
            type="number"
            value={number}
            onChange={this.onHandleChange}
            placeholder="Type number contact"
          />
        </label>
        <button type="submit">save contact</button>
      </form>
    );
  }
}

export default connect(null, { addContact: contactsOperations.addContact })(
  ContactForm
);
