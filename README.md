# ra-delete-with-custom-confirm-button

[![npm version](https://img.shields.io/npm/v/ra-delete-with-custom-confirm-button.svg)](https://www.npmjs.com/package/ra-delete-with-custom-confirm-button)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](./LICENSE)
[![Build Status](https://travis-ci.org/itTkm/ra-delete-with-custom-confirm-button.svg?branch=master)](https://travis-ci.org/itTkm/ra-delete-with-custom-confirm-button)

Delete button with your custom confirm dialog for React-admin.

## Installation

```bash
# via npm
npm install --save ra-delete-with-custom-confirm-button

# via yarn
yarn add ra-delete-with-custom-confirm-button
```

## Usage

```js
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';

// Define your custom title of confirm dialog
const DeleteConfirmTitle = 'Are you sure you want to delete this post?';

// Define your custom contents of confirm dialog
const DeleteConfirmContent = props => {
  return (
    <SimpleShowLayout {...props} >
      <TextField source='title' label='title' />
      <TextField source='user' label='user' />
      <TextField source='date' label='date' />
      <RichTextField source='description' label='description' />
    </SimpleShowLayout>
  );
};

const InformationList = props => {
  const translate = useTranslate();
  return (
    <List {...props} >
      <Datagrid>
        <TextField source='title' label='title' />
        <TextField source='date' label='date' />
        <TextField source='user' label='user' />
        <DeleteWithCustomConfirmButton {...props}
          confirmTitle={DeleteConfirmTitle}
          confirmContent={DeleteConfirmContent}
        />
      </Datagrid>
    </List>
  );
};

export default InformationList;
```

## License

This library is licensed under the [MIT License](./LICENSE).
