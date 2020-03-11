/* eslint react/jsx-key: off */
import React from 'react';
import {
  Edit,
  SaveButton,
  SimpleForm,
  TextField,
  TextInput,
  Toolbar,
  required
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import DeleteWithCustomConfirmButton from "ra-delete-with-custom-confirm-button";
import {
  DeleteConfirmTitle,
  DeleteConfirmContent
} from './TagDeleteConfirm';

const useToolbarStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const CustomToolbar = props => {
  const classes = useToolbarStyles();
  return (
    <Toolbar {...props} classes={classes}>
      <SaveButton />
      <DeleteWithCustomConfirmButton
        title={DeleteConfirmTitle}
        content={DeleteConfirmContent}
      />
    </Toolbar>
  );
};

const TagEdit = props => (
  <Edit {...props}>
    <SimpleForm
      redirect="list"
      toolbar={<CustomToolbar />}
    >
      <TextField source="id" />
      <TextInput source="name" validate={[required()]} />
    </SimpleForm>
  </Edit>
);

export default TagEdit;
