import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import css from "./LoginForm.module.css";
class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };
  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });

    this.setState({ email: "", password: "" });
  };
  render() {
    const { email, password } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleOnSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={this.handleOnChange}
          placeholder="Your email"
        />
        <div className={css.inputMargin}></div>

        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={this.handleOnChange}
          placeholder="Your password"
        />
        <div className={css.inputMargin}></div>
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    );
  }
}
export default connect(null, { onLogin: authOperations.logIn })(LoginForm);

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
