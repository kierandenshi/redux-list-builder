import {
    reducer,
    initialState,
    LIST_BUILDER_ADD_ITEM,
    LIST_BUILDER_REMOVE_ITEM,
    LIST_BUILDER_CLEAR_LIST,
} from './redux';

describe('Reducer', () => {
    it('return the current state', () => {
        expect(reducer(initialState, { type: 'SOME_ACTION' })).toEqual(initialState);
    });
});
