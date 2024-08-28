"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkredrocks"] = self["webpackChunkredrocks"] || []).push([["src_pages_AuthModalPage_js"],{

/***/ "./src/components/Page.js":
/*!********************************!*\
  !*** ./src/components/Page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/propTypes */ \"./src/utils/propTypes.js\");\n/* harmony import */ var utils_bemnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/bemnames */ \"./src/utils/bemnames.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/Breadcrumb.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/BreadcrumbItem.js\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography */ \"./src/components/Typography.js\");\nvar _excluded = [\"title\", \"breadcrumbs\", \"tag\", \"className\", \"children\"];\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\nfunction _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }\nfunction _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }\n\n\n\n\n\nvar bem = utils_bemnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create('page');\nvar Page = function Page(_ref) {\n  var title = _ref.title,\n    breadcrumbs = _ref.breadcrumbs,\n    Tag = _ref.tag,\n    className = _ref.className,\n    children = _ref.children,\n    restProps = _objectWithoutProperties(_ref, _excluded);\n  var classes = bem.b('px-3', className);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, _extends({\n    className: classes\n  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: bem.e('header')\n  }, title && typeof title === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    type: \"h1\",\n    className: bem.e('title')\n  }, title) : title, breadcrumbs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: bem.e('breadcrumb')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, \"Home\"), breadcrumbs.length && breadcrumbs.map(function (_ref2, index) {\n    var name = _ref2.name,\n      active = _ref2.active;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: index,\n      active: active\n    }, name);\n  }))), children);\n};\nPage.propTypes = {\n  tag: utils_propTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component,\n  title: utils_propTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].oneOfType([utils_propTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].string, utils_propTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].element]),\n  className: utils_propTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].string,\n  children: utils_propTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].node,\n  breadcrumbs: utils_propTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].arrayOf(utils_propTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shape({\n    name: utils_propTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].string,\n    active: utils_propTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bool\n  }))\n};\nPage.defaultProps = {\n  tag: 'div',\n  title: ''\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n//# sourceURL=webpack://redrocks/./src/components/Page.js?");

/***/ }),

/***/ "./src/components/Typography.js":
/*!**************************************!*\
  !*** ./src/components/Typography.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/propTypes */ \"./src/utils/propTypes.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nvar _excluded = [\"tag\", \"className\", \"type\"];\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }\nfunction _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }\n\n\n\nvar tagMap = {\n  h1: 'h1',\n  h2: 'h2',\n  h3: 'h3',\n  h4: 'h4',\n  h5: 'h5',\n  h6: 'h6',\n  'display-1': 'h1',\n  'display-2': 'h1',\n  'display-3': 'h1',\n  'display-4': 'h1',\n  p: 'p',\n  lead: 'p',\n  blockquote: 'blockquote'\n};\nvar types = Object.keys(tagMap);\nvar Typography = function Typography(_ref) {\n  var Tag = _ref.tag,\n    className = _ref.className,\n    type = _ref.type,\n    restProps = _objectWithoutProperties(_ref, _excluded);\n  var classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(_defineProperty({}, type, !!type), className);\n  var TypoComp;\n  if (Tag) {\n    TypoComp = Tag;\n  } else if (!Tag && tagMap[type]) {\n    TypoComp = tagMap[type];\n  } else {\n    TypoComp = 'p';\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(TypoComp, _extends({}, restProps, {\n    className: classes\n  }));\n};\nTypography.propTypes = {\n  tag: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].component,\n  className: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].string,\n  type: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].oneOf(types)\n};\nTypography.defaultProps = {\n  type: 'p'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);\n\n//# sourceURL=webpack://redrocks/./src/components/Typography.js?");

/***/ }),

/***/ "./src/pages/AuthModalPage.js":
/*!************************************!*\
  !*** ./src/pages/AuthModalPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var components_AuthForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/AuthForm */ \"./src/components/AuthForm.js\");\n/* harmony import */ var components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Page */ \"./src/components/Page.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/Row.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/Col.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/Card.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/CardHeader.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/CardBody.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/Button.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/Modal.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/ModalBody.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\nvar AuthModalPage = /*#__PURE__*/function (_React$Component) {\n  function AuthModalPage() {\n    var _this;\n    _classCallCheck(this, AuthModalPage);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _callSuper(this, AuthModalPage, [].concat(args));\n    _defineProperty(_this, \"state\", {\n      show: false,\n      authState: components_AuthForm__WEBPACK_IMPORTED_MODULE_0__.STATE_LOGIN\n    });\n    _defineProperty(_this, \"toggle\", function () {\n      _this.setState({\n        show: !_this.state.show\n      });\n    });\n    _defineProperty(_this, \"handleAuthState\", function (authState) {\n      _this.setState({\n        authState: authState\n      });\n    });\n    return _this;\n  }\n  _inherits(AuthModalPage, _React$Component);\n  return _createClass(AuthModalPage, [{\n    key: \"render\",\n    value: function render() {\n      var externalCloseBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"button\", {\n        className: \"close\",\n        style: {\n          position: 'absolute',\n          top: '15px',\n          right: '20px',\n          fontSize: '3rem'\n        },\n        onClick: this.toggle\n      }, \"\\xD7\");\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(components_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Login Modal\",\n        breadcrumbs: [{\n          name: 'login modal',\n          active: true\n        }]\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        md: \"12\",\n        sm: \"12\",\n        xs: \"12\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, \"Login Modal Example\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        color: \"danger\",\n        onClick: this.toggle\n      }, \"Click to Login\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        isOpen: this.state.show,\n        toggle: this.toggle,\n        size: \"sm\",\n        backdrop: \"static\",\n        backdropClassName: \"modal-backdrop-light\",\n        external: externalCloseBtn,\n        centered: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(components_AuthForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        authState: this.state.authState,\n        onChangeAuthState: this.handleAuthState\n      }))))))));\n    }\n  }]);\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthModalPage);\n\n//# sourceURL=webpack://redrocks/./src/pages/AuthModalPage.js?");

/***/ })

}]);