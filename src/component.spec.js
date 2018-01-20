import React from 'react';
import { shallow } from 'enzyme';
import { getProps } from '../test/helpers';
import { ListBuilder } from './component';

const props = {
    identifier: 'listID',
    dispatch: jest.fn(),
    list: [],
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

describe('ListBuilder component', () => {
    const wrapper = shallow(<ListBuilder {...getProps(props)} />);

    it('should render', () => {
        expect(wrapper.find('form')).toMatchSnapshot();
    });
});
