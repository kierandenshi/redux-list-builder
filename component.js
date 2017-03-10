import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  LIST_BUILDER_ADD_ITEM,
  LIST_BUILDER_REMOVE_ITEM,
} from './actions';

import './index.scss';

class ListBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  validateInput(value) {
    const { validation } = this.props;
    return validation ? validation(value) : true;
  }

  handleSubmit() {
    const { value } = this.state;
    if(this.validateInput(value.trim())) {
      this.props.dispatch({
        type: LIST_BUILDER_ADD_ITEM,
        value,
      });
      this.setState({ value: '' });
    }
  }

  render() {

    const {
      dispatch,
      list,
      inputLabel,
      buttonLabel,
      formClassName,
      listClassName,
    } = this.props;

    return (

      <form onSubmit={(e) => {
        e.preventDefault();
        this.handleSubmit();
      }} className={formClassName || 'redux-list-builder'}>
        <div className={'form-group form-group-combined'}>
          <label htmlFor={'listItemValue'}>{inputLabel || 'Item value'}</label>
          <div className={'form-control-wrapper'}>
            <input
              className={'form-control'}
              name={'listItemValue'}
              value={this.state.value}
              onChange={(e) => {this.setState({ value: e.target.value });}}
              onBlur={() => {this.handleSubmit();}}
            />
            <button
              type={'button'}
              className={'btn btn-primary'}
            >{buttonLabel || 'Add'}</button>
          </div>

          <ul className={listClassName || ''}>
            {list.map((item, index) => {
              return (
                <li>
                    <span className={'list-item-label'}>{item}</span>
                    <button
                      className={'btn btn-transparent list-item-remove'}
                      onClick={() => {
                        dispatch({
                          type: LIST_BUILDER_REMOVE_ITEM,
                          value: index,
                        });
                      }}
                    >x</button>
                </li>
              );
            })}
          </ul>

        </div>
      </form>

    );

  }

}

ListBuilder.propTypes = {
  list: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
  validation: PropTypes.func,
  buttonLabel: PropTypes.string,
  inputLabel: PropTypes.string,
  formClassName: PropTypes.string,
  listClassName: PropTypes.string,
};

export default connect(
  (state) => ({
    list: state.listBuilder,
  })
)(ListBuilder);
