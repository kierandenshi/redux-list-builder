import {
    reducer,
    initialState,
    LIST_BUILDER_CREATE_LIST,
    LIST_BUILDER_ADD_ITEM,
    LIST_BUILDER_REMOVE_ITEM,
    LIST_BUILDER_CLEAR_LIST,
} from './redux';

const firstList = [
    { id: 'a1', value: 'firstval' },
    { id: 'a2', value: 'secondval' },
    { id: 'a3', value: 'thirdval' },
];

const secondList = [
    { id: 'b1', value: 'firstval' },
    { id: 'b2', value: 'secondval' },
    { id: 'b3', value: 'thirdval' },
];

describe('Reducer', () => {
    it('should return the current state', () => {
        expect(reducer(initialState, { type: 'SOME_ACTION' })).toEqual(initialState);
    });

    it('should return state with first list', () => {
        expect(reducer(initialState, {
            type: LIST_BUILDER_CREATE_LIST,
            payload: { identifier: 'firstList' },
        })).toEqual({
            firstList: [],
        });
    });

    it('should return state with a second list', () => {
        expect(reducer({ firstList }, {
            type: LIST_BUILDER_CREATE_LIST,
            payload: { identifier: 'secondList' },
        })).toEqual({
            firstList,
            secondList: [],
        });
    });

    it('should return state with an item added to first list', () => {
        expect(reducer({ firstList, secondList }, {
            type: LIST_BUILDER_ADD_ITEM,
            payload: {
                identifier: 'firstList',
                item: {
                    id: 'a4',
                    value: 'fourthval',
                },
            },
        })).toEqual({
            firstList: [
                ...firstList,
                { id: 'a4', value: 'fourthval' },
            ],
            secondList,
        });
    });

    it('should return state with an item removed from second list', () => {
        expect(reducer({ firstList, secondList }, {
            type: LIST_BUILDER_REMOVE_ITEM,
            payload: {
                identifier: 'secondList',
                id: 'b2',
            },
        })).toEqual({
            firstList,
            secondList: [
                { id: 'b1', value: 'firstval' },
                { id: 'b3', value: 'thirdval' },
            ],
        });
    });

    it('should return state with an empty second list', () => {
        expect(reducer({ firstList, secondList }, {
            type: LIST_BUILDER_CLEAR_LIST,
            payload: { identifier: 'secondList' },
        })).toEqual({
            firstList,
            secondList: [],
        });
    });
});
