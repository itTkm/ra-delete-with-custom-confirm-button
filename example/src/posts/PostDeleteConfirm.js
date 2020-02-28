// Define your custom title of confirm dialog
const DeleteConfirmTitle = "Are you sure you want to delete this post?";

// Define your custom contents of confirm dialog
const DeleteConfirmContent = props => {
  return (
    <SimpleShowLayout {...props}>
      <TextField source="id" />
      <TextField source="title" />
      <DateField
        source="published_at"
      />
      <ReferenceArrayField
        label="Tags"
        reference="tags"
        source="tags"
        sortBy="tags.name"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
    </SimpleShowLayout>
  );
};

export { DeleteConfirmTitle, DeleteConfirmContent }