module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIST_BUILDER_CREATE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIST_BUILDER_ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIST_BUILDER_REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LIST_BUILDER_CLEAR_LIST; });
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reducer; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = function prefix(name) {
    return 'redux-flash-message/' + name;
};
var LIST_BUILDER_CREATE_LIST = prefix('LIST_BUILDER_CREATE_LIST');
var LIST_BUILDER_ADD_ITEM = prefix('LIST_BUILDER_ADD_ITEM');
var LIST_BUILDER_REMOVE_ITEM = prefix('LIST_BUILDER_REMOVE_ITEM');
var LIST_BUILDER_CLEAR_LIST = prefix('LIST_BUILDER_CLEAR_LIST');

var initialState = {};

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
        case LIST_BUILDER_CREATE_LIST:
            {
                var identifier = payload.identifier;

                return _extends({}, state, _defineProperty({}, identifier, []));
            }

        case LIST_BUILDER_ADD_ITEM:
            {
                var _identifier = payload.identifier,
                    item = payload.item;

                return _extends({}, state, _defineProperty({}, _identifier, state[_identifier].concat([item])));
            }

        case LIST_BUILDER_REMOVE_ITEM:
            {
                var _identifier2 = payload.identifier,
                    id = payload.id;

                return _extends({}, state, _defineProperty({}, _identifier2, state[_identifier2].reduce(function (memo, item) {
                    item.id !== id && memo.push(item);
                    return memo;
                }, [])));
            }

        case LIST_BUILDER_CLEAR_LIST:
            {
                var _identifier3 = payload.identifier;

                return _extends({}, state, _defineProperty({}, _identifier3, []));
            }

        default:
            return state;
    }
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return __WEBPACK_IMPORTED_MODULE_1__redux__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_BUILDER_ADD_ITEM", function() { return __WEBPACK_IMPORTED_MODULE_1__redux__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_BUILDER_REMOVE_ITEM", function() { return __WEBPACK_IMPORTED_MODULE_1__redux__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_BUILDER_CLEAR_LIST", function() { return __WEBPACK_IMPORTED_MODULE_1__redux__["b"]; });



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var defaultStyles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    listItem: {
        backgroundColor: '#333',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '2px'
    },
    itemLabel: {
        padding: '0 5px',
        color: '#fff'
    },
    itemRemove: {
        color: '#333',
        margin: '-3px 0 0'
    }
};

var ListBuilder = function (_Component) {
    _inherits(ListBuilder, _Component);

    function ListBuilder(props) {
        _classCallCheck(this, ListBuilder);

        var _this = _possibleConstructorReturn(this, (ListBuilder.__proto__ || Object.getPrototypeOf(ListBuilder)).call(this, props));

        var dispatch = props.dispatch,
            identifier = props.identifier;

        dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__redux__["c" /* LIST_BUILDER_CREATE_LIST */],
            payload: { identifier: identifier }
        });
        _this.state = { value: '' };
        return _this;
    }

    _createClass(ListBuilder, [{
        key: 'handleSubmit',
        value: function handleSubmit() {
            var _props = this.props,
                dispatch = _props.dispatch,
                validation = _props.validation,
                identifier = _props.identifier;
            var value = this.state.value;

            if (validation(value.trim())) {
                dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_3__redux__["a" /* LIST_BUILDER_ADD_ITEM */],
                    payload: {
                        identifier: identifier,
                        item: {
                            id: '' + new Date().valueOf() + Math.random().toFixed(16).substring(2),
                            value: value
                        }
                    }
                });
                this.setState({ value: '' });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                identifier = _props2.identifier,
                dispatch = _props2.dispatch,
                list = _props2.list,
                inputLabel = _props2.inputLabel,
                buttonLabel = _props2.buttonLabel,
                itemRemoveSymbol = _props2.itemRemoveSymbol,
                _props2$classNames = _props2.classNames,
                formClassName = _props2$classNames.formClassName,
                labelClassName = _props2$classNames.labelClassName,
                wrapperClassName = _props2$classNames.wrapperClassName,
                inputClassName = _props2$classNames.inputClassName,
                submitButtonClassName = _props2$classNames.submitButtonClassName,
                listClassName = _props2$classNames.listClassName,
                itemClassName = _props2$classNames.itemClassName,
                itemLabelClassName = _props2$classNames.itemLabelClassName,
                itemRemoveClassName = _props2$classNames.itemRemoveClassName;
            var wrapper = defaultStyles.wrapper,
                listItem = defaultStyles.listItem,
                itemLabel = defaultStyles.itemLabel,
                itemRemove = defaultStyles.itemRemove;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'form',
                {
                    onSubmit: function onSubmit(e) {
                        e.preventDefault();
                        _this2.handleSubmit();
                    },
                    className: formClassName
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: wrapperClassName, style: !wrapperClassName && _extends({}, wrapper) },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        { htmlFor: 'listItemValue', className: labelClassName },
                        inputLabel,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                            className: inputClassName,
                            id: 'listItemValue',
                            value: this.state.value,
                            onChange: function onChange(e) {
                                _this2.setState({ value: e.target.value });
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'button',
                            {
                                type: 'submit',
                                className: submitButtonClassName
                            },
                            buttonLabel
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    { className: listClassName },
                    list.map(function (item) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            { key: item.id, className: itemClassName, style: !itemClassName && _extends({}, listItem) },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: itemLabelClassName, style: !itemLabelClassName && _extends({}, itemLabel) },
                                item.value
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'button',
                                {
                                    className: itemRemoveClassName,
                                    style: !itemRemoveClassName && _extends({}, itemRemove),
                                    onClick: function onClick() {
                                        dispatch({
                                            type: __WEBPACK_IMPORTED_MODULE_3__redux__["d" /* LIST_BUILDER_REMOVE_ITEM */],
                                            payload: {
                                                id: item.id,
                                                identifier: identifier
                                            }
                                        });
                                    }
                                },
                                itemRemoveSymbol
                            )
                        );
                    })
                )
            );
        }
    }]);

    return ListBuilder;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ListBuilder.defaultProps = {
    validation: function validation(value) {
        return !!value.match(/[^\s]/);
    },
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
        itemRemoveClassName: ''
    }

};

ListBuilder.propTypes = {
    identifier: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    list: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
        id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
    })).isRequired,
    dispatch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    validation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    buttonLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    inputLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    itemRemoveSymbol: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    classNames: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
        formClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        labelClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        wrapperClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        inputClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        submitButtonClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        listClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        itemClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        itemLabelClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        itemRemoveClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
    })
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state, props) {
    return {
        list: state.listBuilder[props.identifier] || []
    };
})(ListBuilder));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })
/******/ ]);