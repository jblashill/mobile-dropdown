webpackHotUpdate(4,{

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleSelect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
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

      var value = this.state.value;
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
          optionalBaseClass: _this2.props.optionalBaseClassName
        }); // }
      }),
          optionalDropdownTitle = this.props.optionalDropdownTitle ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: optionsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, this.props.optionalDropdownTitle) : null;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: baseClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: controlClass,
        onClick: this.toggleOpen.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: valueClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.props.placeholder || "Select"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: arrowClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: overlayClass,
        onClick: this.toggleOpen.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: optionsWrapperClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, optionalDropdownTitle, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: optionsClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
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

/***/ })

})
//# sourceMappingURL=4.4ec7e9e9afa986aa52b3.hot-update.js.map