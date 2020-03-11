import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-admin';
import {
  translate,
  crudDelete,
  startUndoable,
} from 'ra-core';
import CustomConfirm from 'ra-custom-confirm';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ActionDelete from '@material-ui/icons/Delete';
import AlertError from '@material-ui/icons/ErrorOutline';

const styles = (theme) => ({
  deleteButton: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.error.main, 0.12),
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }
});

class DeleteWithCustomConfirmButton extends Component {
  state = {
    showDialog: false
  };

  handleClick = (event) => {
    event.stopPropagation();
    this.setState({ showDialog: true });
  };

  handleDialogClose = () => {
    this.setState({ showDialog: false });
  };

  handleDelete = (event) => {
    event.stopPropagation();
    event.preventDefault();
    this.setState({ showDialog: false });
    const {
      dispatchCrudDelete,
      startUndoable,
      resource,
      record,
      basePath,
      redirect,
      undoable,
    } = this.props;
    if (undoable) {
      startUndoable(crudDelete(resource, record.id, record, basePath, redirect));
    } else {
      dispatchCrudDelete(resource, record.id, record, basePath, redirect);
    }
  };

  render() {
    const { showDialog } = this.state;
    const {
      cancel,
      CancelIcon,
      classes,
      className,
      content,
      confirmColor,
      DeleteIcon,
      label,
      title,
    } = this.props;

    return (
      <Fragment>
        <Button
          label={label}
          onClick={this.handleClick}
          className={classnames('ra-delete-button', classes.deleteButton, className)}
        >
          <DeleteIcon />
        </Button>
        <CustomConfirm {...this.props}
          isOpen={showDialog}
          title={title}                   // your custom title of confirm dialog
          content={content}               // your custom contents of confirm dialog
          confirm={label}                 // label of confirm button (default: 'Confirm')
          confirmColor={confirmColor}     // color of confirm button ('primary' or 'warning', default: 'primary')
          ConfirmIcon={DeleteIcon}        // icon of confirm button (default: 'ActionCheck')
          cancel={cancel}                 // label of cancel button (default: 'Cancel')
          CancelIcon={CancelIcon}         // icon of cancel button (default: 'AlertError')
          onConfirm={this.handleDelete}
          onClose={this.handleDialogClose}
        />
      </Fragment>
    );
  }
}

DeleteWithCustomConfirmButton.propTypes = {
  basePath: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string,
  confirmColor: PropTypes.string.isRequired,
  cancel: PropTypes.string,
  CancelIcon: PropTypes.elementType,
  content: PropTypes.element.isRequired,
  dispatchCrudDelete: PropTypes.func.isRequired,
  DeleteIcon: PropTypes.elementType,
  label: PropTypes.string,
  record: PropTypes.object,
  redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.func]),
  resource: PropTypes.string.isRequired,
  startUndoable: PropTypes.func,
  title: PropTypes.string.isRequired,
  translate: PropTypes.func,
  undoable: PropTypes.bool
};

DeleteWithCustomConfirmButton.defaultProps = {
  cancel: 'ra.action.cancel',
  CancelIcon: AlertError,
  confirmColor: 'warning',
  DeleteIcon: ActionDelete,
  label: 'ra.action.delete',
  redirect: 'list',
  startUndoable: startUndoable,
  undoable: true,
};

export default compose(
  connect(
    null,
    { startUndoable, dispatchCrudDelete: crudDelete }
  ),
  translate,
  withStyles(styles)
)(DeleteWithCustomConfirmButton);
