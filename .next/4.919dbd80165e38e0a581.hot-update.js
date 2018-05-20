webpackHotUpdate(4,{

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
    key: "toggleOpen",
    value: function toggleOpen() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var baseClass = this.props.optionalBaseClassName,
          optionClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(baseClass, "__option"), true)); // if (typeof this.props.children === "string") {

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: optionClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
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

/***/ })

})
//# sourceMappingURL=4.919dbd80165e38e0a581.hot-update.js.map