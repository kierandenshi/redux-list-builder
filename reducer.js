import {
  LIST_BUILDER_ADD_ITEM,
  LIST_BUILDER_REMOVE_ITEM,
  LIST_BUILDER_CLEAR_LIST,
} from './actions.js';

const initialState = [];

export default (state = initialState, { type, value })=>{
  switch(type) {

  case LIST_BUILDER_ADD_ITEM:
    return state.concat([value]);

  case LIST_BUILDER_REMOVE_ITEM:
    return state.reduce((memo, item, index) => {
      if(index !== value) { memo.push(item); }
      return memo;
    }, []);

  case LIST_BUILDER_CLEAR_LIST:
    return initialState;

  default:
    return state;

  }
};
