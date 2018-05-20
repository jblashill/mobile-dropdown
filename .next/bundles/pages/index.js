module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([4],{

/***/ "./component/Dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_style_scss__ = __webpack_require__("./css/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_style_scss__);
var _jsxFileName = "/Users/etherlabs/work/mobile-dropdown/component/Dropdown.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "handleChange",
    value: function handleChange(val) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "toggleOpen",
    value: function toggleOpen(e) {
      this.setState({
        isOpen: !this.state.isOpen
      });
      e.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames4,
          _classNames5,
          _this2 = this;

      var value = this.state.value || this.props.defaultValue;
      var baseClass = this.props.optionalBaseClassName,
          controlClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(baseClass, "__control"), true)),
          valueClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(baseClass, "__value"), true)),
          arrowClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(baseClass, "__arrow"), true)),
          overlayClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()((_classNames4 = {}, _defineProperty(_classNames4, "".concat(baseClass, "__overlay"), true), _defineProperty(_classNames4, "".concat(baseClass, "__overlay--visible"), this.state.isOpen), _classNames4)),
          optionsWrapperClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()((_classNames5 = {}, _defineProperty(_classNames5, "".concat(baseClass, "__option-wrapper1"), true), _defineProperty(_classNames5, "".concat(baseClass, "__option-wrapper1--visible"), this.state.isOpen), _classNames5)),
          optionsClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(baseClass, "__option-wrapper"), true)),
          optionsTitle = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(baseClass, "__title"), true)),
          options = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, function (child) {
        // if (defaultValue && defaultValue === child.props.value) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
          selected: value && value === child.props.value,
          optionalBaseClass: _this2.props.optionalBaseClassName,
          handleChange: _this2.handleChange
        }); // }
      }),
          optionalDropdownTitle = this.props.optionalDropdownTitle ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: optionsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.props.optionalDropdownTitle) : null;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: baseClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: controlClass,
        onClick: this.toggleOpen.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: valueClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, this.props.placeholder || "Select"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: arrowClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: overlayClass,
        onClick: this.toggleOpen.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: optionsWrapperClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, optionalDropdownTitle, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: optionsClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, options))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Dropdown.defaultProps = {
  optionalBaseClassName: "dropdown",
  optionalPlaceholder: "Seelct"
};
Dropdown.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  optionalPlaceholder: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  optionalBaseClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  defaultValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  changeHandler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  optionalDropdownTitle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
var _default = Dropdown;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Dropdown, "Dropdown", "/Users/etherlabs/work/mobile-dropdown/component/Dropdown.js");
  reactHotLoader.register(_default, "default", "/Users/etherlabs/work/mobile-dropdown/component/Dropdown.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./component/Option.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_style_scss__ = __webpack_require__("./css/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_style_scss__);
var _jsxFileName = "/Users/etherlabs/work/mobile-dropdown/component/Option.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// export default props => {
//     if (typeof props.children === "string") {
//         return <div >{props.children}</div>;
//     } else {
//         return props.children;
//     }
// };






var Option =
/*#__PURE__*/
function (_Component) {
  _inherits(Option, _Component);

  function Option(props) {
    var _this;

    _classCallCheck(this, Option);

    _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Option, [{
    key: "handleChange",
    value: function handleChange() {
      this.props.handleChange(this.props.value);
    }
  }, {
    key: "render",
    value: function render() {
      var baseClass = this.props.optionalBaseClassName,
          optionClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(baseClass, "__option"), true)); // if (typeof this.props.children === "string") {

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: optionClass,
        onClick: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.props.children); // } else {
      //     return this.props.children;
      // }
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Option;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Option.defaultProps = {
  optionalBaseClassName: "dropdown"
};
Option.propTypes = {
  optionalBaseClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
var _default = Option;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "/Users/etherlabs/work/mobile-dropdown/component/Option.js");
  reactHotLoader.register(_default, "default", "/Users/etherlabs/work/mobile-dropdown/component/Option.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_Dropdown__ = __webpack_require__("./component/Dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_Option__ = __webpack_require__("./component/Option.js");
var _jsxFileName = "/Users/etherlabs/work/mobile-dropdown/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




 // export default () => (
//     <div>
//         <Head>
//             <title>My page title</title>
//             <meta
//                 name="viewport"
//                 content="initial-scale=1.0, width=device-width"
//             />
//         </Head>
//         <Dropdown placeholder="Select Value" changeHandler={this.handleDropdownChange}>
//             <Option value="1">Red</Option>
//             <Option value="2">Pink</Option>
//             <Option value="3">Green</Option>
//             <Option value="4">Blue</Option>
//         </Dropdown>
//     </div>
// );
// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import ReactDOM from "react-dom";
// import classNames from "classnames";
// import "./../css/style.scss";

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Index, [{
    key: "toggleOpen",
    value: function toggleOpen() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "handleDropdownChange",
    value: function handleDropdownChange() {}
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "My page title"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__component_Dropdown__["a" /* default */], {
        placeholder: "Select Value",
        changeHandler: this.handleDropdownChange,
        optionalDropdownTitle: "Choose Color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Red"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Red"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Red"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Red"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Red"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Red"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Red"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Red"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Red"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Pink"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Green"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Blue")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, "Index", "/Users/etherlabs/work/mobile-dropdown/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map