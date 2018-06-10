# redux-list-builder

[![Greenkeeper badge](https://badges.greenkeeper.io/kierandenshi/redux-list-builder.svg)](https://greenkeeper.io/)

redux-list-builder works with react-redux to build lists of strings in Redux. 

## Install

```sh
yarn add redux-list-builder
```

## Basic usage

Add `listBuilder` to the root reducer

```js
import { combineReducers } from 'redux';
import { reducer as listBuilder } from 'redux-list-builder';

export default combineReducers({
    listBuilder,
});
```

Add the component where list building is needed. Supply a unique `identifier` prop for each `ListBuilder`. 

```js
import React from 'react';
import ListBuilder from 'react-list-builder';

export default MyComponent = () => (
    <ListBuilder identifier={'myList'} />
);
```

Find the list in state
```js
const myList = state.listBuilder.myList;
```

## Component props

`identifier: PropTypes.string.isRequired`
Each ListBuilder instance should have a unique identifier.

`validation: PropTypes.func`
The default validation will test for the presence of non whitespace characters before saving input. Supply this property to override this.

`buttonLabel: PropTypes.string`
The text for the input submit button. Defaults to "Add".

`inputLabel: PropTypes.string`
The text for the `<label>` wrapping the input. Defaults to "Item Value".

`itemRemoveSymbol: PropTypes.string`
The symbol to be displayed on the item remove buttons. Defaults to "X".

```js
classNames: PropTypes.shape({
    formClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    wrapperClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    submitButtonClassName: PropTypes.string,
    listClassName: PropTypes.string,
    itemClassName: PropTypes.string,
    itemLabelClassName: PropTypes.string,
    itemRemoveClassName: PropTypes.string,
    })
```
An object to supply class names to the component's html elements. 

## Styling

These inline styles are applied by default. Supplying a class name for an element via the `classNames` prop will prevent the corresponding inline style being applied.

```js
const defaultStyles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    listItem: {
        backgroundColor: '#333',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '2px',
    },
    itemLabel: {
        padding: '0 5px',
        color: '#fff',
    },
    itemRemove: {
        color: '#333',
        margin: '-3px 0 0',
    },
};
```


