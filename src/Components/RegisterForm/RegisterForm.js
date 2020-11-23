import React, { Component } from "react";
import { authOperations } from "../../redux/auth";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import css from "./RegisterForm.module.css";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleOnSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          type="text"
          onChange={this.handleOnChange}
          value={name}
          placeholder="Type login"
        />
        <div className={css.inputMargin}></div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          autoComplete="email"
          name="email"
          type="email"
          onChange={this.handleOnChange}
          value={email}
          placeholder="Type email"
        />
        <div className={css.inputMargin}></div>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          onChange={this.handleOnChange}
          value={password}
          placeholder="Type password"
        />
        <div className={css.inputMargin}></div>
        <Button variant="contained" color="primary" type="submit">
          register
        </Button>
      </form>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterForm
);
