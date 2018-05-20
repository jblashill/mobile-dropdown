webpackHotUpdate(4,{

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
      }, "Pink"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Green"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__component_Option__["a" /* default */], {
        value: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
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

/***/ })

})
//# sourceMappingURL=4.4b097442be4c20df8d9b.hot-update.js.map