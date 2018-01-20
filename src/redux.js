const prefix = name => `redux-flash-message/${name}`;
export const LIST_BUILDER_CREATE_LIST = prefix('LIST_BUILDER_CREATE_LIST');
export const LIST_BUILDER_ADD_ITEM = prefix('LIST_BUILDER_ADD_ITEM');
export const LIST_BUILDER_REMOVE_ITEM = prefix('LIST_BUILDER_REMOVE_ITEM');
export const LIST_BUILDER_CLEAR_LIST = prefix('LIST_BUILDER_CLEAR_LIST');

export const initialState = {};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LIST_BUILDER_CREATE_LIST: {
            const { identifier } = payload;
            return {
                ...state,
                [identifier]: [],
            };
        }

        case LIST_BUILDER_ADD_ITEM: {
            const { identifier, item } = payload;
            return {
                ...state,
                [identifier]: state[identifier].concat([item]),
            };
        }

        case LIST_BUILDER_REMOVE_ITEM: {
            const { identifier, id } = payload;
            return {
                ...state,
                [identifier]: state[identifier].reduce((memo, item) => {
                    item.id !== id && memo.push(item);
                    return memo;
                }, []),
            };
        }

        case LIST_BUILDER_CLEAR_LIST: {
            const { identifier } = payload;
            return {
                ...state,
                [identifier]: [],
            };
        }

        default:
            return state;
    }
};
