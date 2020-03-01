import React from 'react';
import {
  SimpleShowLayout,
  TextField,
} from 'react-admin';

// Define your custom title of confirm dialog
const DeleteConfirmTitle = "Are you sure you want to delete this tag?";

// Define your custom contents of confirm dialog
const DeleteConfirmContent = props => {
  return (
    <SimpleShowLayout {...props}>
      <TextField source="id" />
      <TextField source="name" />
    </SimpleShowLayout>
  );
};

export { DeleteConfirmTitle, DeleteConfirmContent };
