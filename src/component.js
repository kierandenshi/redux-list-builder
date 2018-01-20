import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    LIST_BUILDER_CREATE_LIST,
    LIST_BUILDER_ADD_ITEM,
    LIST_BUILDER_REMOVE_ITEM,
} from './redux';

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

export class ListBuilder extends Component {
    constructor(props) {
        super(props);
        const { dispatch, identifier } = props;
        dispatch({
            type: LIST_BUILDER_CREATE_LIST,
            payload: { identifier },
        });
        this.state = { value: '' };
    }

    handleSubmit() {
        const { dispatch, validation, identifier } = this.props;
        const { value } = this.state;
        if (validation(value.trim())) {
            dispatch({
                type: LIST_BUILDER_ADD_ITEM,
                payload: {
                    identifier,
                    item: {
                        id: `${new Date().valueOf()}${Math.random().toFixed(16).substring(2)}`,
                        value,
                    },
                },
            });
            this.setState({ value: '' });
        }
    }

    render() {
        const {
            identifier,
            dispatch,
            list,
            inputLabel,
            buttonLabel,
            itemRemoveSymbol,
            classNames: {
                formClassName,
                labelClassName,
                wrapperClassName,
                inputClassName,
                submitButtonClassName,
                listClassName,
                itemClassName,
                itemLabelClassName,
                itemRemoveClassName,
            },
        } = this.props;

        const {
            wrapper,
            listItem,
            itemLabel,
            itemRemove,
        } = defaultStyles;

        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    this.handleSubmit();
                }}
                className={formClassName}
            >
                <div className={wrapperClassName} style={!wrapperClassName && { ...wrapper }}>
                    <label htmlFor={'listItemValue'} className={labelClassName}>
                        {inputLabel}
                        <input
                            className={inputClassName}
                            id={'listItemValue'}
                            value={this.state.value}
                            onChange={(e) => { this.setState({ value: e.target.value }); }}
                        />
                        <button
                            type={'submit'}
                            className={submitButtonClassName}
                        >{buttonLabel}
                        </button>
                    </label>
                </div>
                <ul className={listClassName}>
                    {list.map(item => (
                        <li key={item.id} className={itemClassName} style={!itemClassName && { ...listItem }}>
                            <span className={itemLabelClassName} style={!itemLabelClassName && { ...itemLabel }}>{item.value}</span>
                            <button
                                className={itemRemoveClassName}
                                style={!itemRemoveClassName && { ...itemRemove }}
                                onClick={() => {
                                    dispatch({
                                        type: LIST_BUILDER_REMOVE_ITEM,
                                        payload: {
                                            id: item.id,
                                            identifier,
                                        },
                                    });
                                }}
                            >{itemRemoveSymbol}
                            </button>
                        </li>
                    ))}
                </ul>
            </form>
        );
    }
}

ListBuilder.defaultProps = {
    validation: value => !!value.match(/[^\s]/),
    buttonLabel: 'Add',
    inputLabel: 'Item value',
    itemRemoveSymbol: 'X',
    classNames: {
        formClassName: '',
        labelClassName: '',
        wrapperClassName: '',
        inputClassName: '',
        submitButtonClassName: '',
        listClassName: '',
        itemClassName: '',
        itemLabelClassName: '',
        itemRemoveClassName: '',
    },
};

ListBuilder.propTypes = {
    identifier: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string,
    })).isRequired,
    dispatch: PropTypes.func.isRequired,
    validation: PropTypes.func,
    buttonLabel: PropTypes.string,
    inputLabel: PropTypes.string,
    itemRemoveSymbol: PropTypes.string,
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
    }),
};

export default connect(
    (state, props) => ({
        list: state.listBuilder[props.identifier] || [],
    }),
)(ListBuilder);
