# redux-list-builder

redux-list-builder works with react-redux to build lists of strings in Redux. 

## Install

```sh
yarn add redux-list-builder
```

## Usage

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
