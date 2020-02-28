import RichTextInput from 'ra-input-rich-text';
import React from 'react';
import {
    TopToolbar,
    AutocompleteArrayInput,
    AutocompleteInput,
    ArrayInput,
    BooleanInput,
    CheckboxGroupInput,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    CloneButton,
    ShowButton,
    EditButton,
    FormTab,
    ImageField,
    ImageInput,
    NumberInput,
    ReferenceArrayInput,
    ReferenceManyField,
    ReferenceInput,
    SelectInput,
    SimpleFormIterator,
    TabbedForm,
    TextField,
    TextInput,
    minValue,
    number,
    required,
    FormDataConsumer,
} from 'react-admin'; // eslint-disable-line import/no-unresolved
import DeleteWithCustomConfirmButton from "ra-delete-with-custom-confirm-button";
import PostTitle from './PostTitle';

const EditActions = ({ basePath, data, hasShow }) => (
    <TopToolbar>
        <CloneButton
            className="button-clone"
            basePath={basePath}
            record={data}
        />
        {hasShow && <ShowButton basePath={basePath} record={data} />}
    </TopToolbar>
);

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

const CustomToolbar = props => (
    <Toolbar {...props}>
        <div style={{ width: "100%", position: "relative" }}>
            <SaveButton />
            <span style={{ position: "absolute", right: 0 }}>
                <DeleteWithCustomConfirmButton
                    {...props}
                    confirmTitle={DeleteConfirmTitle}
                    confirmContent={DeleteConfirmContent}
                    style={{ float: "right" }}
                />
            </span>
        </div>
    </Toolbar>
);

const PostEdit = ({ permissions, ...props }) => (
    <Edit title={<PostTitle />} actions={<EditActions />} {...props}>
        <TabbedForm defaultValue={{ average_note: 0 }}>
            <FormTab label="post.form.summary">
                <TextInput disabled source="id" />
                <TextInput source="title" validate={required()} resettable />
                <TextInput
                    multiline={true}
                    fullWidth={true}
                    source="teaser"
                    validate={required()}
                    resettable
                />
                <CheckboxGroupInput
                    source="notifications"
                    choices={[
                        { id: 12, name: 'Ray Hakt' },
                        { id: 31, name: 'Ann Gullar' },
                        { id: 42, name: 'Sean Phonee' },
                    ]}
                />
                <ImageInput multiple source="pictures" accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>
                {permissions === 'admin' && (
                    <ArrayInput source="authors">
                        <SimpleFormIterator>
                            <ReferenceInput
                                label="User"
                                source="user_id"
                                reference="users"
                            >
                                <AutocompleteInput />
                            </ReferenceInput>
                            <FormDataConsumer>
                                {({
                                    formData,
                                    scopedFormData,
                                    getSource,
                                    ...rest
                                }) =>
                                    scopedFormData && scopedFormData.user_id ? (
                                        <SelectInput
                                            label="Role"
                                            source={getSource('role')}
                                            choices={[
                                                {
                                                    id: 'headwriter',
                                                    name: 'Head Writer',
                                                },
                                                {
                                                    id: 'proofreader',
                                                    name: 'Proof reader',
                                                },
                                                {
                                                    id: 'cowriter',
                                                    name: 'Co-Writer',
                                                },
                                            ]}
                                            {...rest}
                                        />
                                    ) : null
                                }
                            </FormDataConsumer>
                        </SimpleFormIterator>
                    </ArrayInput>
                )}
            </FormTab>
            <FormTab label="post.form.body">
                <RichTextInput
                    source="body"
                    label=""
                    validate={required()}
                    addLabel={false}
                />
            </FormTab>
            <FormTab label="post.form.miscellaneous">
                <ReferenceArrayInput
                    reference="tags"
                    source="tags"
                    filter={{ published: true }}
                >
                    <AutocompleteArrayInput fullWidth />
                </ReferenceArrayInput>
                <ArrayInput source="backlinks">
                    <SimpleFormIterator>
                        <DateInput source="date" />
                        <TextInput source="url" />
                    </SimpleFormIterator>
                </ArrayInput>
                <DateInput source="published_at" options={{ locale: 'pt' }} />
                <SelectInput
                    allowEmpty
                    resettable
                    source="category"
                    choices={[
                        { name: 'Tech', id: 'tech' },
                        { name: 'Lifestyle', id: 'lifestyle' },
                    ]}
                />
                <NumberInput
                    source="average_note"
                    validate={[required(), number(), minValue(0)]}
                />
                <BooleanInput source="commentable" defaultValue />
                <TextInput disabled source="views" />
            </FormTab>
            <FormTab label="post.form.comments">
                <ReferenceManyField
                    reference="comments"
                    target="post_id"
                    addLabel={false}
                    fullWidth
                >
                    <Datagrid>
                        <DateField source="created_at" />
                        <TextField source="author.name" />
                        <TextField source="body" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default PostEdit;
