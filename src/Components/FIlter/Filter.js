import React from "react";
import { connect } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";
import css from "./Filter.module.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "340px",
    },
  },
}));

function Filter({ filter, onFilter }) {
  const classes = useStyles();
  return (
    <div className={css.div}>
      <p className={css.p}>Find contact by name</p>
      <TextField
        className={classes.root}
        id="outlined-basic"
        label="Name"
        variant="outlined"
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

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
