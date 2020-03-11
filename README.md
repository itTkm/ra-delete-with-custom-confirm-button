# ra-delete-with-custom-confirm-button

[![npm version](https://img.shields.io/npm/v/ra-delete-with-custom-confirm-button.svg)](https://www.npmjs.com/package/ra-delete-with-custom-confirm-button)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](./LICENSE)
[![Build Status](https://travis-ci.org/itTkm/ra-delete-with-custom-confirm-button.svg?branch=master)](https://travis-ci.org/itTkm/ra-delete-with-custom-confirm-button)

Delete button with your custom confirm dialog for [React-admin](https://marmelab.com/react-admin/).

![Demo](img/ra-delete-with-custom-confirm-button.gif?raw=true "Demo")

## Installation

```bash
# via npm
npm install --save ra-delete-with-custom-confirm-button

# via yarn
yarn add ra-delete-with-custom-confirm-button
```

## Demo

After having cloned this repository, run the following commands:

```bash
cd example/
yarn install
yarn start
```

And then browse to [http://localhost:8080/](http://localhost:8080/).

The credentials are *login/password*

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
        <DeleteWithCustomConfirmButton
          title={DeleteConfirmTitle}      // your custom title of delete confirm dialog
          content={DeleteConfirmContent}  // your custom contents of delete confirm dialog
          label='Delete'                  // label of delete button (default: 'Delete')
          confirmColor='warning'          // color of delete button ('warning' or 'primary', default: 'warning')
          ConfirmIcon={ActionDelete}      // icon of delete button (default: 'ActionDelete')
          cancel='Cancel'                 // label of cancel button (default: 'Cancel')
          CancelIcon={CancelIcon}         // icon of cancel button (default: 'AlertError')
          undoable={true}                 // undoable (default: true)
        />
      </Datagrid>
    </List>
  );
};

export default InformationList;
```

## License

This library is licensed under the [MIT License](./LICENSE).
