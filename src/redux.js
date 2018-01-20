const prefix = name => `redux-flash-message/${name}`;
export const LIST_BUILDER_ADD_ITEM = prefix('LIST_BUILDER_ADD_ITEM');
export const LIST_BUILDER_REMOVE_ITEM = prefix('LIST_BUILDER_REMOVE_ITEM');
export const LIST_BUILDER_CLEAR_LIST = prefix('LIST_BUILDER_CLEAR_LIST');

export const initialState = [];

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LIST_BUILDER_ADD_ITEM:
            return state.concat([payload]);

        case LIST_BUILDER_REMOVE_ITEM:
            return state.reduce((memo, item) => {
                item.id !== payload && memo.push(item);
                return memo;
            }, []);

        case LIST_BUILDER_CLEAR_LIST:
            return initialState;

        default:
            return state;
    }
};
