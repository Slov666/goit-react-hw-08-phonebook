import React from "react";
import { connect } from "react-redux";
import { contactsSelectors, contactsOperations } from "../../redux/contacts";
import Button from "@material-ui/core/Button";
import css from "./ContactListItem.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    position: "absolute",
    right: "0",
    top: "10px",
  },
}));

function ContactListItem({ name, number, onRemove }) {
  const classes = useStyles();
  return (
    <div className={css.div}>
      <div>
        <p className={css.content}>Name: {name}</p>
        <p className={css.content}>Number: {number}</p>
      </div>

      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        type="button"
        onClick={onRemove}
      >
        remove
      </Button>
    </div>
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
