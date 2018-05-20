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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import classNames from "classnames";
// const DEFAULT_PLACEHOLDER_STRING = "Select...";
// class Dropdown extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selected: props.value || {
//         label:
//           typeof props.placeholder === "undefined"
//             ? DEFAULT_PLACEHOLDER_STRING
//             : props.placeholder,
//         value: ""
//       },
//       isOpen: false
//     };
//     this.mounted = true;
//     this.handleDocumentClick = this.handleDocumentClick.bind(this);
//     this.fireChangeEvent = this.fireChangeEvent.bind(this);
//   }
//   componentWillReceiveProps(newProps) {
//     if (newProps.value && newProps.value !== this.state.selected) {
//       this.setState({ selected: newProps.value });
//     } else if (!newProps.value) {
//       this.setState({
//         selected: {
//           label:
//             typeof newProps.placeholder === "undefined"
//               ? DEFAULT_PLACEHOLDER_STRING
//               : newProps.placeholder,
//           value: ""
//         }
//       });
//     }
//   }
//   componentDidMount() {
//     document.addEventListener("click", this.handleDocumentClick, false);
//     document.addEventListener("touchend", this.handleDocumentClick, false);
//   }
//   componentWillUnmount() {
//     this.mounted = false;
//     document.removeEventListener("click", this.handleDocumentClick, false);
//     document.removeEventListener("touchend", this.handleDocumentClick, false);
//   }
//   handleMouseDown(event) {
//     if (this.props.onFocus && typeof this.props.onFocus === "function") {
//       this.props.onFocus(this.state.isOpen);
//     }
//     if (event.type === "mousedown" && event.button !== 0) return;
//     event.stopPropagation();
//     event.preventDefault();
//     if (!this.props.disabled) {
//       this.setState({
//         isOpen: !this.state.isOpen
//       });
//     }
//   }
//   setValue(value, label) {
//     let newState = {
//       selected: {
//         value,
//         label
//       },
//       isOpen: false
//     };
//     this.fireChangeEvent(newState);
//     this.setState(newState);
//   }
//   fireChangeEvent(newState) {
//     if (newState.selected !== this.state.selected && this.props.onChange) {
//       this.props.onChange(newState.selected);
//     }
//   }
//   renderOption(option) {
//     const classes = {
//       [`${this.props.baseClassName}-option`]: true,
//       [option.className]: !!option.className,
//       "is-selected": option === this.state.selected
//     };
//     const optionClass = classNames(classes);
//     let value = option.value;
//     if (typeof value === "undefined") {
//       value = option.label || option;
//     }
//     let label = option.label || option.value || option;
//     return (
//       <div
//         key={value}
//         className={optionClass}
//         onMouseDown={this.setValue.bind(this, value, label)}
//         onClick={this.setValue.bind(this, value, label)}
//       >
//         {label}
//       </div>
//     );
//   }
//   buildMenu() {
//     let { options, baseClassName } = this.props;
//     let ops = options.map(option => {
//       if (option.type === "group") {
//         let groupTitle = (
//           <div className={`${baseClassName}-title`}>{option.name}</div>
//         );
//         let _options = option.items.map(item => this.renderOption(item));
//         return (
//           <div className={`${baseClassName}-group`} key={option.name}>
//             {groupTitle}
//             {_options}
//           </div>
//         );
//       } else {
//         return this.renderOption(option);
//       }
//     });
//     return ops.length ? (
//       ops
//     ) : (
//       <div className={`${baseClassName}-noresults`}>No options found</div>
//     );
//   }
//   handleDocumentClick(event) {
//     if (this.mounted) {
//       if (!ReactDOM.findDOMNode(this).contains(event.target)) {
//         if (this.state.isOpen) {
//           this.setState({ isOpen: false });
//         }
//       }
//     }
//   }
//   render() {
//     const {
//       baseClassName,
//       controlClassName,
//       placeholderClassName,
//       menuClassName,
//       arrowClassName,
//       className
//     } = this.props;
//     const disabledClass = this.props.disabled ? "Dropdown-disabled" : "";
//     const placeHolderValue =
//       typeof this.state.selected === "string"
//         ? this.state.selected
//         : this.state.selected.label;
//     const dropdownClass = classNames({
//       [`${baseClassName}-root`]: true,
//       [className]: !!className,
//       "is-open": this.state.isOpen
//     });
//     const controlClass = classNames({
//       [`${baseClassName}-control`]: true,
//       [controlClassName]: !!controlClassName,
//       [disabledClass]: !!disabledClass
//     });
//     const placeholderClass = classNames({
//       [`${baseClassName}-placeholder`]: true,
//       [placeholderClassName]: !!placeholderClassName
//     });
//     const menuClass = classNames({
//       [`${baseClassName}-menu`]: true,
//       [menuClassName]: !!menuClassName
//     });
//     const arrowClass = classNames({
//       [`${baseClassName}-arrow`]: true,
//       [arrowClassName]: !!arrowClassName
//     });
//     const value = <div className={placeholderClass}>{placeHolderValue}</div>;
//     const menu = this.state.isOpen ? (
//       <div className={menuClass}>{this.buildMenu()}</div>
//     ) : null;
//     return (
//       <div className={dropdownClass}>
//         <div
//           className={controlClass}
//           onMouseDown={this.handleMouseDown.bind(this)}
//           onTouchEnd={this.handleMouseDown.bind(this)}
//         >
//           {value}
//           <span className={arrowClass} />
//         </div>
//         {menu}
//       </div>
//     );
//   }
// }
// Dropdown.defaultProps = { baseClassName: "Dropdown" };
// export default Dropdown;






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
          controlClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(baseClass, "__control"), true)),
          arrowClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(baseClass, "__arrow"), true)),
          overlayClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(baseClass, "__overlay"), true)),
          optionsClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(baseClass, "__options-wrapper"), true));
      var options;

      if (this.state.isOpen) {
        options = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: overlayClass,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: optionsClass,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          }
        }, this.props.children)];
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: baseClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: controlClass,
        onClick: this.toggleOpen.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, this.props.placeholder || "Select", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: arrowClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      })), options);
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
  optionalBaseClassName: "dropdown"
};
Dropdown.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  optionalBaseClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  defaultValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  changeHandler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
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

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })

})
//# sourceMappingURL=4.b3d4439afded8d96eea8.hot-update.js.map