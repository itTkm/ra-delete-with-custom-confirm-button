import React from 'react';
import {
  DateField,
  ReferenceField,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

// Define your custom title of confirm dialog
const DeleteConfirmTitle = "Are you sure you want to delete this comment?";

// Define your custom contents of confirm dialog
const DeleteConfirmContent = props => {
  return (
    <SimpleShowLayout {...props}>
      <TextField source="id" />
      <ReferenceField source="post_id" reference="posts">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="author.name" />
      <DateField source="created_at" />
      <TextField source="body" />
    </SimpleShowLayout>
  );
};

export { DeleteConfirmTitle, DeleteConfirmContent };
