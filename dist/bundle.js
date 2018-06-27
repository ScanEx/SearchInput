(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SearchInput"] = factory();
	else
		root["SearchInput"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CadastreDataProvider = exports.CoordinatesDataProvider = exports.OsmDataProvider = exports.SearchControl = exports.SearchWidget = undefined;

var _SearchWidget = __webpack_require__(/*! ./src/SearchWidget.js */ "./src/SearchWidget.js");

var _SearchWidget2 = _interopRequireDefault(_SearchWidget);

var _SearchControl = __webpack_require__(/*! ./src/SearchControl.js */ "./src/SearchControl.js");

var _SearchControl2 = _interopRequireDefault(_SearchControl);

var _OsmDataProvider = __webpack_require__(/*! ./src/DataProviders/OsmDataProvider.js */ "./src/DataProviders/OsmDataProvider.js");

var _OsmDataProvider2 = _interopRequireDefault(_OsmDataProvider);

var _CoordinatesDataProvider = __webpack_require__(/*! ./src/DataProviders/CoordinatesDataProvider.js */ "./src/DataProviders/CoordinatesDataProvider.js");

var _CoordinatesDataProvider2 = _interopRequireDefault(_CoordinatesDataProvider);

var _CadastreDataProvider = __webpack_require__(/*! ./src/DataProviders/CadastreDataProvider.js */ "./src/DataProviders/CadastreDataProvider.js");

var _CadastreDataProvider2 = _interopRequireDefault(_CadastreDataProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SearchWidget = _SearchWidget2.default;
exports.SearchControl = _SearchControl2.default;
exports.OsmDataProvider = _OsmDataProvider2.default;
exports.CoordinatesDataProvider = _CoordinatesDataProvider2.default;
exports.CadastreDataProvider = _CadastreDataProvider2.default;

/***/ }),

/***/ "./node_modules/scanex-async/index.js":
/*!********************************************!*\
  !*** ./node_modules/scanex-async/index.js ***!
  \********************************************/
/*! exports provided: chain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
const chain = (tasks, state) => {
    return tasks.reduce(
        (prev, next) => prev.then(next),
        new Promise ((resolve, reject) => resolve (state))
    );
};



/***/ }),

/***/ "./node_modules/scanex-event-target/dist/bundle.js":
/*!*********************************************************!*\
  !*** ./node_modules/scanex-event-target/dist/bundle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventTarget = function () {
    function EventTarget() {
        _classCallCheck(this, EventTarget);

        this.listeners = {};
    }

    _createClass(EventTarget, [{
        key: 'addEventListener',
        value: function addEventListener(type, callback) {
            if (!(type in this.listeners)) {
                this.listeners[type] = [];
            }
            this.listeners[type].push(callback);
        }
    }, {
        key: 'removeEventListener',
        value: function removeEventListener(type, callback) {
            if (!(type in this.listeners)) {
                return;
            }
            var stack = this.listeners[type];
            for (var i = 0, l = stack.length; i < l; i++) {
                if (stack[i] === callback) {
                    stack.splice(i, 1);
                    return this.removeEventListener(type, callback);
                }
            }
        }
    }, {
        key: 'dispatchEvent',
        value: function dispatchEvent(event) {
            if (!(event.type in this.listeners)) {
                return;
            }
            var stack = this.listeners[event.type];
            Object.defineProperty(event, 'target', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: this
            });
            for (var i = 0, l = stack.length; i < l; i++) {
                stack[i].call(this, event);
            }
        }
    }]);

    return EventTarget;
}();

exports.default = EventTarget;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FdmVudFRhcmdldC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRXZlbnRUYXJnZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRXZlbnRUYXJnZXQvLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJFdmVudFRhcmdldCIsImxpc3RlbmVycyIsInR5cGUiLCJjYWxsYmFjayIsInB1c2giLCJzdGFjayIsImkiLCJsIiwibGVuZ3RoIiwic3BsaWNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsVztBQUNGLDJCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNIOzs7O3lDQUNnQkMsSSxFQUFNQyxRLEVBQVU7QUFDN0IsZ0JBQUcsRUFBRUQsUUFBUSxLQUFLRCxTQUFmLENBQUgsRUFBOEI7QUFDMUIscUJBQUtBLFNBQUwsQ0FBZUMsSUFBZixJQUF1QixFQUF2QjtBQUNIO0FBQ0QsaUJBQUtELFNBQUwsQ0FBZUMsSUFBZixFQUFxQkUsSUFBckIsQ0FBMEJELFFBQTFCO0FBQ0g7Ozs0Q0FDb0JELEksRUFBTUMsUSxFQUFVO0FBQ2pDLGdCQUFHLEVBQUVELFFBQVEsS0FBS0QsU0FBZixDQUFILEVBQThCO0FBQzFCO0FBQ0g7QUFDRCxnQkFBSUksUUFBUSxLQUFLSixTQUFMLENBQWVDLElBQWYsQ0FBWjtBQUNBLGlCQUFJLElBQUlJLElBQUksQ0FBUixFQUFXQyxJQUFJRixNQUFNRyxNQUF6QixFQUFpQ0YsSUFBSUMsQ0FBckMsRUFBd0NELEdBQXhDLEVBQTZDO0FBQ3pDLG9CQUFHRCxNQUFNQyxDQUFOLE1BQWFILFFBQWhCLEVBQXlCO0FBQ3JCRSwwQkFBTUksTUFBTixDQUFhSCxDQUFiLEVBQWdCLENBQWhCO0FBQ0EsMkJBQU8sS0FBS0ksbUJBQUwsQ0FBeUJSLElBQXpCLEVBQStCQyxRQUEvQixDQUFQO0FBQ0g7QUFDSjtBQUNKOzs7c0NBQ2FRLEssRUFBTztBQUNqQixnQkFBRyxFQUFFQSxNQUFNVCxJQUFOLElBQWMsS0FBS0QsU0FBckIsQ0FBSCxFQUFvQztBQUNoQztBQUNIO0FBQ0QsZ0JBQUlJLFFBQVEsS0FBS0osU0FBTCxDQUFlVSxNQUFNVCxJQUFyQixDQUFaO0FBQ0hVLG1CQUFPQyxjQUFQLENBQXNCRixLQUF0QixFQUE2QixRQUE3QixFQUF1QztBQUNoQ0csNEJBQVksS0FEb0I7QUFFaENDLDhCQUFjLEtBRmtCO0FBR2hDQywwQkFBVSxLQUhzQjtBQUloQ0MsdUJBQU87QUFKeUIsYUFBdkM7QUFNRyxpQkFBSSxJQUFJWCxJQUFJLENBQVIsRUFBV0MsSUFBSUYsTUFBTUcsTUFBekIsRUFBaUNGLElBQUlDLENBQXJDLEVBQXdDRCxHQUF4QyxFQUE2QztBQUN6Q0Qsc0JBQU1DLENBQU4sRUFBU1ksSUFBVCxDQUFjLElBQWQsRUFBb0JQLEtBQXBCO0FBQ0g7QUFDSjs7Ozs7O2tCQUdVWCxXIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkV2ZW50VGFyZ2V0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkV2ZW50VGFyZ2V0XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgRXZlbnRUYXJnZXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcclxuICAgIH1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZighKHR5cGUgaW4gdGhpcy5saXN0ZW5lcnMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lciAodHlwZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZighKHR5cGUgaW4gdGhpcy5saXN0ZW5lcnMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0YWNrID0gdGhpcy5saXN0ZW5lcnNbdHlwZV07XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHN0YWNrLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZihzdGFja1tpXSA9PT0gY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgc3RhY2suc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgaWYoIShldmVudC50eXBlIGluIHRoaXMubGlzdGVuZXJzKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdGFjayA9IHRoaXMubGlzdGVuZXJzW2V2ZW50LnR5cGVdO1xyXG5cdCAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHN0YWNrLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBzdGFja1tpXS5jYWxsKHRoaXMsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50VGFyZ2V0OyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./src/DataProviders/CadastreDataProvider.js":
/*!***************************************************!*\
  !*** ./src/DataProviders/CadastreDataProvider.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scanexEventTarget = __webpack_require__(/*! scanex-event-target */ "./node_modules/scanex-event-target/dist/bundle.js");

var _scanexEventTarget2 = _interopRequireDefault(_scanexEventTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CadastreDataProvider = function (_EventTarget) {
    _inherits(CadastreDataProvider, _EventTarget);

    function CadastreDataProvider(_ref) {
        var serverBase = _ref.serverBase,
            tolerance = _ref.tolerance;

        _classCallCheck(this, CadastreDataProvider);

        var _this = _possibleConstructorReturn(this, (CadastreDataProvider.__proto__ || Object.getPrototypeOf(CadastreDataProvider)).call(this));

        _this._serverBase = serverBase;
        _this._tolerance = tolerance;
        _this.showSuggestion = true;
        _this.showOnSelect = false;
        _this.showOnEnter = true;
        _this._cadastreLayers = [{ id: 1, title: 'Участок', reg: /^\d\d:\d+:\d+:\d+$/ }, { id: 2, title: 'Квартал', reg: /^\d\d:\d+:\d+$/ }, { id: 3, title: 'Район', reg: /^\d\d:\d+$/ }, { id: 4, title: 'Округ', reg: /^\d\d$/ }, { id: 5, title: 'ОКС', reg: /^\d\d:\d+:\d+:\d+:\d+$/ }, { id: 10, title: 'ЗОУИТ', reg: /^\d+\.\d+\.\d+/
            // ,
            // {id: 7, title: 'Границы', 	reg: /^\w+$/},
            // {id: 6, title: 'Тер.зоны', 	reg: /^\w+$/},
            // {id: 12, title: 'Лес', 		reg: /^\w+$/},
            // {id: 13, title: 'Красные линии', 		reg: /^\w+$/},
            // {id: 15, title: 'СРЗУ', 	reg: /^\w+$/},
            // {id: 16, title: 'ОЭЗ', 		reg: /^\w+$/},
            // {id: 9, title: 'ГОК', 		reg: /^\w+$/},
            // {id: 10, title: 'ЗОУИТ', 	reg: /^\w+$/}
            // /[^\d\:]/g,
            // /\d\d:\d+$/,
            // /\d\d:\d+:\d+$/,
            // /\d\d:\d+:\d+:\d+$/
        }];
        return _this;
    }

    _createClass(CadastreDataProvider, [{
        key: 'getCadastreLayer',
        value: function getCadastreLayer(str, type) {
            str = str.trim();
            for (var i = 0, len = this._cadastreLayers.length; i < len; i++) {
                var it = this._cadastreLayers[i];
                if (it.id === type) {
                    return it;
                }
                if (it.reg.exec(str)) {
                    return it;
                }
            }
            return this._cadastreLayers[0];
        }
    }, {
        key: 'find',
        value: function find(value, limit, strong, retrieveGeometry) {
            var _this2 = this;

            var cadastreLayer = this.getCadastreLayer(value);
            return new Promise(function (resolve) {
                // let req = new Request(`${this._serverBase}/typeahead?limit=${limit}&skip=0&text=${value}&type=${cadastreLayer.id}`);
                var req = new Request(_this2._serverBase + '/features/' + cadastreLayer.id + '?text=' + value + '&tolerance=' + _this2._tolerance + '&limit=' + limit);
                var headers = new Headers();
                headers.append('Content-Type', 'application/json');
                var init = {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
                };
                fetch(req, init).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    // if(json.status === 200){
                    var rs = json.features.map(function (x) {
                        return {
                            name: x.attrs.name || x.attrs.cn || x.attrs.id,
                            properties: x,
                            provider: _this2,
                            query: value
                        };
                    });
                    resolve(rs);
                    // }
                    // else {
                    // resolve(json);
                    // }                                       
                });
            });
        }
    }, {
        key: 'fetch',
        value: function (_fetch) {
            function fetch(_x) {
                return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
                return _fetch.toString();
            };

            return fetch;
        }(function (obj) {
            var _this3 = this;

            var text = obj.attrs.name || obj.attrs.cn || obj.attrs.id;
            var cadastreLayer = this.getCadastreLayer(text, obj.type);
            return new Promise(function (resolve) {
                if (cadastreLayer) {
                    // let req = new Request(`${this._serverBase}/features/${cadastreLayer.id}?tolerance=${this._tolerance}&limit=1&text=${obj.value}`);
                    var req = new Request(_this3._serverBase + '/features/' + cadastreLayer.id + '?tolerance=' + _this3._tolerance + '&limit=1&text=' + text);
                    var headers = new Headers();
                    headers.append('Content-Type', 'application/json');
                    var init = {
                        method: 'GET',
                        mode: 'cors',
                        cache: 'default'
                    };
                    fetch(req, init).then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        if (json.status === 200) {
                            var event = document.createEvent('Event');
                            event.initEvent('fetch', false, false);
                            event.detail = json;
                            _this3.dispatchEvent(event);

                            var rs = json.features.map(function (x) {
                                return {
                                    name: x.attrs.name || x.attrs.cn || x.attrs.id,
                                    properties: x,
                                    provider: _this3,
                                    query: obj
                                };
                            });
                            resolve(rs);
                        } else {
                            resolve(json);
                        }
                    });
                } else {
                    resolve([]);
                }
            });
        })
    }]);

    return CadastreDataProvider;
}(_scanexEventTarget2.default);

exports.default = CadastreDataProvider;

/***/ }),

/***/ "./src/DataProviders/CoordinatesDataProvider.js":
/*!******************************************************!*\
  !*** ./src/DataProviders/CoordinatesDataProvider.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scanexEventTarget = __webpack_require__(/*! scanex-event-target */ "./node_modules/scanex-event-target/dist/bundle.js");

var _scanexEventTarget2 = _interopRequireDefault(_scanexEventTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoordinatesDataProvider = function (_EventTarget) {
    _inherits(CoordinatesDataProvider, _EventTarget);

    function CoordinatesDataProvider() {
        _classCallCheck(this, CoordinatesDataProvider);

        var _this = _possibleConstructorReturn(this, (CoordinatesDataProvider.__proto__ || Object.getPrototypeOf(CoordinatesDataProvider)).call(this));

        _this.showSuggestion = false;
        _this.showOnSelect = false;
        _this.showOnEnter = true;
        _this.fetch = _this.fetch.bind(_this);
        _this.find = _this.find.bind(_this);

        _this.rxF = new RegExp('^\\s*\\-?(\\d+(\\.\\d+)?)(\\s+[N|S])?(,\\s*|\\s+)\\-?(\\d+(\\.\\d+)?)(\\s+[E|W])?');
        _this.rxD = new RegExp('^\\s*(\\d{1,2})[\\s|\\u00b0](\\d{1,2})[\\s|\\u0027](\\d{1,2}\\.\\d+)\\u0022?(\\s+[N|S])?,?\\s+(\\d{1,2})[\\s|\\u00b0](\\d{1,2})[\\s|\\u0027](\\d{1,2}\\.\\d+)\\u0022?(\\s+[E|W])?');
        return _this;
    }

    _createClass(CoordinatesDataProvider, [{
        key: '_parseCoordinates',
        value: function _parseCoordinates(value) {
            var m = this.rxD.exec(value);
            if (Array.isArray(m) && m.length === 9) {
                return this._parseDegrees([m[1], m[2], m[3], m[5], m[6], m[7]].map(function (x) {
                    return parseFloat(x);
                }));
            }
            m = this.rxF.exec(value);
            if (Array.isArray(m) && m.length === 8) {
                return { type: 'Point', coordinates: [parseFloat(m[5]), parseFloat(m[1])] };
            }

            return null;
        }
    }, {
        key: '_parseDegrees',
        value: function _parseDegrees(_ref) {
            var _ref2 = _slicedToArray(_ref, 6),
                latDeg = _ref2[0],
                latMin = _ref2[1],
                latSec = _ref2[2],
                lngDeg = _ref2[3],
                lngMin = _ref2[4],
                lngSec = _ref2[5];

            return { type: 'Point', coordinates: [lngDeg + lngMin / 60 + lngSec / 3600, latDeg + latMin / 60 + latSec / 3600] };
        }
    }, {
        key: 'fetch',
        value: function fetch(value) {
            return new Promise(function (resolve) {
                return resolve([]);
            });
        }
    }, {
        key: 'find',
        value: function find(value, limit, strong, retrieveGeometry) {
            var _this2 = this;

            var g = this._parseCoordinates(value);
            return new Promise(function (resolve) {
                var result = { feature: { type: 'Feature', geometry: g, properties: {} }, provider: _this2, query: value };
                if (g) {
                    var event = document.createEvent('Event');
                    event.initEvent('fetch', false, false);
                    event.detail = result;
                    _this2.dispatchEvent(event);
                }
                resolve(g ? [result] : []);
            });
        }
    }]);

    return CoordinatesDataProvider;
}(_scanexEventTarget2.default);

exports.default = CoordinatesDataProvider;

/***/ }),

/***/ "./src/DataProviders/OsmDataProvider.js":
/*!**********************************************!*\
  !*** ./src/DataProviders/OsmDataProvider.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scanexEventTarget = __webpack_require__(/*! scanex-event-target */ "./node_modules/scanex-event-target/dist/bundle.js");

var _scanexEventTarget2 = _interopRequireDefault(_scanexEventTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OsmDataProvider = function (_EventTarget) {
    _inherits(OsmDataProvider, _EventTarget);

    function OsmDataProvider(_ref) {
        var serverBase = _ref.serverBase;

        _classCallCheck(this, OsmDataProvider);

        var _this = _possibleConstructorReturn(this, (OsmDataProvider.__proto__ || Object.getPrototypeOf(OsmDataProvider)).call(this));

        _this._serverBase = serverBase;
        _this.showSuggestion = true;
        _this.showOnSelect = true;
        _this.showOnEnter = true;
        _this.find = _this.find.bind(_this);
        _this.fetch = _this.fetch.bind(_this);
        _this._convertGeometry = _this._convertGeometry.bind(_this);

        _this._key = window.KOSMOSNIMKI_SESSION_KEY == null || window.KOSMOSNIMKI_SESSION_KEY == 'INVALID' ? '' : '&key=' + window.KOSMOSNIMKI_SESSION_KEY;
        return _this;
    }

    _createClass(OsmDataProvider, [{
        key: '_convertGeometry',
        value: function _convertGeometry(geometry) {
            switch (geometry.type.toUpperCase()) {
                case 'POINT':
                    geometry.type = 'Point';
                    break;
                case 'POLYGON':
                    geometry.type = 'Polygon';
                    break;
                case 'MULTIPOLYGON':
                    geometry.type = 'MultiPolygon';
                    break;
                case 'LINESTRING':
                case 'POLYLINE':
                    geometry.type = 'LineString';
                    break;
                case 'MULTILINESTRING':
                    geometry.type = 'MultiLineString';
                    break;
                default:
                    throw 'Unknown WKT type';
            }
            return geometry;
        }
    }, {
        key: 'fetch',
        value: function (_fetch) {
            function fetch(_x) {
                return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
                return _fetch.toString();
            };

            return fetch;
        }(function (obj) {
            var _this2 = this;

            var query = 'WrapStyle=None&RequestType=ID&ID=' + obj.ObjCode + '&TypeCode=' + obj.TypeCode + '&UseOSM=1';
            var req = new Request(this._serverBase + '/SearchObject/SearchAddress.ashx?' + query + this._key);
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            var init = {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                cache: 'default'
            };
            return new Promise(function (resolve, reject) {
                fetch(req, init).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    if (json.Status === 'ok') {
                        var rs = json.Result.reduce(function (a, x) {
                            return a.concat(x.SearchResult);
                        }, []).map(function (x) {
                            var g = _this2._convertGeometry(x.Geometry);
                            var props = Object.keys(x).filter(function (k) {
                                return k !== 'Geometry';
                            }).reduce(function (a, k) {
                                a[k] = x[k];
                                return a;
                            }, {});
                            return {
                                feature: {
                                    type: 'Feature',
                                    geometry: g,
                                    properties: props
                                },
                                provider: _this2,
                                query: obj
                            };
                        });
                        var event = document.createEvent('Event');
                        event.initEvent('fetch', false, false);
                        event.detail = rs;
                        _this2.dispatchEvent(event);
                        resolve(rs);
                    } else {
                        reject(json);
                    }
                }).catch(function (response) {
                    return reject(response);
                });
            });
        })
    }, {
        key: 'find',
        value: function find(value, limit, strong, retrieveGeometry) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                if (value || value.trim()) {
                    var _strong = Boolean(strong) ? 1 : 0;
                    var _withoutGeometry = Boolean(retrieveGeometry) ? 0 : 1;
                    var query = 'WrapStyle=None&RequestType=SearchObject&IsStrongSearch=' + _strong + '&WithoutGeometry=' + _withoutGeometry + '&UseOSM=1&Limit=' + limit + '&SearchString=' + encodeURIComponent(value);
                    var req = new Request(_this3._serverBase + '/SearchObject/SearchAddress.ashx?' + query + _this3._key);
                    var headers = new Headers();
                    headers.append('Content-Type', 'application/json');
                    var init = {
                        method: 'GET',
                        mode: 'cors',
                        credentials: 'include',
                        cache: 'default'
                    };
                    fetch(req, init).then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        if (json.Status === 'ok') {
                            var rs = json.Result.reduce(function (a, x) {
                                return a.concat(x.SearchResult);
                            }, []).map(function (x) {
                                if (retrieveGeometry && x.Geometry) {
                                    var g = _this3._convertGeometry(x.Geometry);
                                    var props = Object.keys(x).filter(function (k) {
                                        return k !== 'Geometry';
                                    }).reduce(function (a, k) {
                                        a[k] = x[k];
                                        return a;
                                    }, {});
                                    return {
                                        name: x.ObjNameShort,
                                        feature: {
                                            type: 'Feature',
                                            geometry: g,
                                            properties: props
                                        },
                                        properties: props,
                                        provider: _this3,
                                        query: value
                                    };
                                } else {
                                    return {
                                        name: x.ObjNameShort,
                                        properties: x,
                                        provider: _this3,
                                        query: value
                                    };
                                }
                            });
                            if (strong && retrieveGeometry) {
                                var event = document.createEvent('Event');
                                event.initEvent('fetch', false, false);
                                event.detail = rs;
                                _this3.dispatchEvent(event);
                            }
                            resolve(rs);
                        } else {
                            reject(json);
                        }
                    }).catch(function (response) {
                        return reject(response);
                    });
                } else {
                    reject('Empty string');
                }
            });
        }
    }]);

    return OsmDataProvider;
}(_scanexEventTarget2.default);

exports.default = OsmDataProvider;

/***/ }),

/***/ "./src/ResultView.js":
/*!***************************!*\
  !*** ./src/ResultView.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scanexEventTarget = __webpack_require__(/*! scanex-event-target */ "./node_modules/scanex-event-target/dist/bundle.js");

var _scanexEventTarget2 = _interopRequireDefault(_scanexEventTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultView = function (_EventTarget) {
    _inherits(ResultView, _EventTarget);

    function ResultView(_ref) {
        var input = _ref.input,
            _ref$replaceInput = _ref.replaceInput,
            replaceInput = _ref$replaceInput === undefined ? false : _ref$replaceInput;

        _classCallCheck(this, ResultView);

        var _this = _possibleConstructorReturn(this, (ResultView.__proto__ || Object.getPrototypeOf(ResultView)).call(this));

        _this._input = input;
        _this.index = -1;
        _this.count = 0;
        _this._item = null;
        _this._inputText = '';
        _this._replaceInput = replaceInput;
        _this._list = L.DomUtil.create('div');
        _this._list.setAttribute('class', 'leaflet-ext-search-list noselect');

        _this.allowNavigation = true;

        _this._list.style.top = _this._input.offsetTop + _this._input.offsetHeight + 2 + 'px';
        _this._list.style.left = _this._input.offsetLeft + 'px';

        _this._handleKey = _this._handleKey.bind(_this);
        _this._input.addEventListener('keydown', _this._handleKey);

        _this._handleInputClick = _this._handleInputClick.bind(_this);
        _this._input.addEventListener('click', _this._handleInputClick);

        _this._handleFocus = _this._handleFocus.bind(_this);
        _this._input.addEventListener('focus', _this._handleFocus);
        _this._list.addEventListener('keydown', _this._handleKey);

        _this._handleWheel = _this._handleWheel.bind(_this);
        _this._list.addEventListener('wheel', _this._handleWheel);
        L.DomEvent.disableClickPropagation(_this._list).disableScrollPropagation(_this._list);
        // this._list.addEventListener('mousewheel', this._handleWheel.bind(this));
        // this._list.addEventListener('MozMousePixelScroll', this._handleWheel.bind(this));       
        _this._input.parentElement.appendChild(_this._list);

        _this._handleChange = _this._handleChange.bind(_this);
        _this._input.addEventListener('input', _this._handleChange);
        return _this;
    }

    _createClass(ResultView, [{
        key: '_handleInputClick',
        value: function _handleInputClick(e) {
            e.stopPropagation();
        }
    }, {
        key: '_handleFocus',
        value: function _handleFocus(e) {
            if (this.index >= 0) {
                var el = this._list.querySelector('[tabindex="' + this.index + '"]');
                L.DomUtil.removeClass(el, 'leaflet-ext-search-list-selected');
            }
            this.index = -1;
            this._item = null;
        }
    }, {
        key: '_handleChange',
        value: function _handleChange(e) {
            this._inputText = this._input.value;
        }
    }, {
        key: '_handleWheel',
        value: function _handleWheel(e) {
            e.stopPropagation();
        }
    }, {
        key: '_handleKey',
        value: function _handleKey(e) {
            if (this.listVisible()) {
                switch (e.keyCode) {
                    // ArroLeft / ArrowRight
                    case 37:
                    case 39:
                        e.stopPropagation();
                        break;
                    // ArrowDown
                    case 40:
                        e.preventDefault();
                        e.stopPropagation();
                        if (this.allowNavigation) {
                            if (this.index < 0) {
                                this.index = 0;
                            } else if (0 <= this.index && this.index < this.count - 1) {
                                var _el = this._list.querySelector('[tabindex="' + this.index + '"]');
                                L.DomUtil.removeClass(_el, 'leaflet-ext-search-list-selected');
                                ++this.index;
                            } else {
                                var _el2 = this._list.querySelector('[tabindex="' + this.index + '"]');
                                L.DomUtil.removeClass(_el2, 'leaflet-ext-search-list-selected');
                                this.index = this.count - 1;
                            }
                            var el = this._list.querySelector('[tabindex="' + this.index + '"]');
                            L.DomUtil.addClass(el, 'leaflet-ext-search-list-selected');
                            this.selectItem(this.index);
                            el.focus();
                        }
                        break;
                    // ArrowUp
                    case 38:
                        e.preventDefault();
                        e.stopPropagation();
                        if (this.allowNavigation) {
                            if (this.index > 0) {
                                var _el3 = this._list.querySelector('[tabindex="' + this.index + '"]');
                                L.DomUtil.removeClass(_el3, 'leaflet-ext-search-list-selected');
                                --this.index;
                                _el3 = this._list.querySelector('[tabindex="' + this.index + '"]');
                                L.DomUtil.addClass(_el3, 'leaflet-ext-search-list-selected');
                                this.selectItem(this.index);
                                _el3.focus();
                            } else if (this.index === 0) {
                                this._input.focus();
                                this._input.value = this._inputText;
                            }
                        }
                        break;
                    // Enter
                    case 13:
                        if (this.index < 0 && this._input.value) {
                            var text = this._input.value;
                            this._input.focus();
                            this._input.setSelectionRange(text.length, text.length);
                            this.hide();

                            var event = document.createEvent('Event');
                            event.initEvent('suggestions:confirm', false, false);
                            event.detail = text;
                            this.dispatchEvent(event);
                        } else {
                            this.complete(this.index);
                        }
                        break;
                    // Escape
                    case 27:
                        if (this.index < 0) {
                            this.hide();
                        }
                        this._input.focus();
                        this._input.value = this._inputText;
                        break;
                    default:
                        break;
                }
            } else {
                if (e.keyCode === 13 && this._input.value) {
                    var _text = this._input.value;
                    this._input.setSelectionRange(_text.length, _text.length);

                    var _event = document.createEvent('Event');
                    _event.initEvent('suggestions:confirm', false, false);
                    _event.detail = _text;
                    this.dispatchEvent(_event);
                } else if (e.keyCode === 27) {
                    this._input.value = '';
                    this.index = -1;
                    this._input.focus();
                }
            }
        }
    }, {
        key: 'listVisible',
        value: function listVisible() {
            return this.count > 0 && this._list.style.display !== 'none';
        }
    }, {
        key: 'selectItem',
        value: function selectItem(i) {
            this._item = this._items[i];
            var text = this._item.name;
            if (this._replaceInput) {
                this._input.value = text;
                this._input.setSelectionRange(text.length, text.length);
            }
        }
    }, {
        key: '_handleClick',
        value: function _handleClick(i, e) {
            e.preventDefault();
            this.complete(i);
        }
    }, {
        key: 'complete',
        value: function complete(i) {
            var item = i >= 0 ? this._items[i] : this._item ? this._item : null;
            if (item) {
                this._item = item;
                this.index = -1;
                var text = item.name;
                if (this._replaceInput) {
                    this._input.value = text;
                    this._input.setSelectionRange(text.length, text.length);
                }
                this._input.focus();
                this.hide();

                var event = document.createEvent('Event');
                event.initEvent('suggestions:select', false, false);
                event.detail = item;
                this.dispatchEvent(event);
            }
        }
    }, {
        key: 'show',
        value: function show(items, highlight) {
            if (items.length) {
                this._item = null;
                this.index = -1;
                this._items = items;
                var html = '<ul>' + this._items.filter(function (x) {
                    return x.name && x.name.length;
                }).map(function (x, i) {
                    var name = '<span class="leaflet-ext-search-list-item-normal">' + x.name + '</span>';
                    if (highlight && highlight.length) {
                        var start = x.name.toLowerCase().indexOf(highlight.toLowerCase());
                        if (start != -1) {
                            var head = x.name.substr(0, start);
                            if (head.length) {
                                head = '<span class="leaflet-ext-search-list-item-normal">' + head + '</span>';
                            }
                            var tail = x.name.substr(start + highlight.length);
                            if (tail.length) {
                                tail = '<span class="leaflet-ext-search-list-item-normal">' + tail + '</span>';
                            }
                            name = head + '<span class="leaflet-ext-search-list-item-highlight">' + highlight + '</span>' + tail;
                        }
                    }
                    return '<li tabindex=' + i + '>' + name + '</li>';
                }, []).join('') + '</ul>';

                this._list.innerHTML = html;
                var elements = this._list.querySelectorAll('li');
                for (var i = 0; i < elements.length; ++i) {
                    elements[i].addEventListener('click', this._handleClick.bind(this, i));
                }

                this.count = elements.length;
                this._list.style.display = 'block';
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            this._list.style.display = 'none';
        }
    }]);

    return ResultView;
}(_scanexEventTarget2.default);

exports.default = ResultView;

/***/ }),

/***/ "./src/SearchControl.js":
/*!******************************!*\
  !*** ./src/SearchControl.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SearchWidget = __webpack_require__(/*! ./SearchWidget.js */ "./src/SearchWidget.js");

var _SearchWidget2 = _interopRequireDefault(_SearchWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchControl = L.Control.extend({
    includes: L.Evented ? L.Evented.prototype : L.Mixin.Events,
    initialize: function initialize(options) {
        L.setOptions(this, options);
        this._allowSuggestion = true;
        this.options.suggestionTimeout = this.options.suggestionTimeout || 1000;
        this.options.suggestionLimit = this.options.suggestionLimit || 10;
    },
    onAdd: function onAdd(map) {
        this._container = L.DomUtil.create('div', 'leaflet-ext-search');
        this._widget = new _SearchWidget2.default(this._container, this.options);
        map.on('click', this._widget.results.hide.bind(this._widget.results));
        map.on('dragstart', this._widget.results.hide.bind(this._widget.results));
        return this._container;
    },
    addTo: function addTo(map) {
        L.Control.prototype.addTo.call(this, map);
        if (this.options.addBefore) {
            this.addBefore(this.options.addBefore);
        }
        return this;
    },

    addBefore: function addBefore(id) {
        var parentNode = this._parent && this._parent._container;
        if (!parentNode) {
            parentNode = this._map && this._map._controlCorners[this.getPosition()];
        }
        if (!parentNode) {
            this.options.addBefore = id;
        } else {
            for (var i = 0, len = parentNode.childNodes.length; i < len; i++) {
                var it = parentNode.childNodes[i];
                if (id === it._id) {
                    parentNode.insertBefore(this._container, it);
                    break;
                }
            }
        }
        return this;
    },

    setText: function setText(text) {
        this._widget.setText(text);
    },
    setPlaceHolder: function setPlaceHolder(value) {
        this._widget.setPlaceHolder(value);
    }
});

exports.default = SearchControl;

/***/ }),

/***/ "./src/SearchWidget.css":
/*!******************************!*\
  !*** ./src/SearchWidget.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/SearchWidget.js":
/*!*****************************!*\
  !*** ./src/SearchWidget.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! ./SearchWidget.css */ "./src/SearchWidget.css");

var _ResultView = __webpack_require__(/*! ./ResultView.js */ "./src/ResultView.js");

var _ResultView2 = _interopRequireDefault(_ResultView);

var _scanexEventTarget = __webpack_require__(/*! scanex-event-target */ "./node_modules/scanex-event-target/dist/bundle.js");

var _scanexEventTarget2 = _interopRequireDefault(_scanexEventTarget);

var _scanexAsync = __webpack_require__(/*! scanex-async */ "./node_modules/scanex-async/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchWidget = function (_EventTarget) {
    _inherits(SearchWidget, _EventTarget);

    function SearchWidget(container, _ref) {
        var placeHolder = _ref.placeHolder,
            providers = _ref.providers,
            _ref$suggestionTimeou = _ref.suggestionTimeout,
            suggestionTimeout = _ref$suggestionTimeou === undefined ? 1000 : _ref$suggestionTimeou,
            _ref$suggestionLimit = _ref.suggestionLimit,
            suggestionLimit = _ref$suggestionLimit === undefined ? 10 : _ref$suggestionLimit,
            _ref$fuzzySearchLimit = _ref.fuzzySearchLimit,
            fuzzySearchLimit = _ref$fuzzySearchLimit === undefined ? 1000 : _ref$fuzzySearchLimit,
            _ref$retrieveManyOnEn = _ref.retrieveManyOnEnter,
            retrieveManyOnEnter = _ref$retrieveManyOnEn === undefined ? false : _ref$retrieveManyOnEn,
            _ref$replaceInputOnEn = _ref.replaceInputOnEnter,
            replaceInputOnEnter = _ref$replaceInputOnEn === undefined ? false : _ref$replaceInputOnEn;

        _classCallCheck(this, SearchWidget);

        var _this = _possibleConstructorReturn(this, (SearchWidget.__proto__ || Object.getPrototypeOf(SearchWidget)).call(this));

        _this._container = container;
        _this._allowSuggestion = true;
        _this._providers = providers;
        _this._suggestionTimeout = suggestionTimeout;
        _this._suggestionLimit = suggestionLimit;
        _this._fuzzySearchLimit = fuzzySearchLimit;
        _this._retrieveManyOnEnter = retrieveManyOnEnter;
        _this._replaceInputOnEnter = replaceInputOnEnter;

        _this._container.classList.add('leaflet-ext-search');
        _this._container.innerHTML = '<input type="text" value="" placeholder="' + placeHolder + '" /><span class="leaflet-ext-search-button"></span>';
        _this._input = _this._container.querySelector('input');

        _this._handleChange = _this._handleChange.bind(_this);
        _this._input.addEventListener('input', _this._handleChange);

        _this._handleMouseMove = _this._handleMouseMove.bind(_this);
        _this._input.addEventListener('mousemove', _this._handleMouseMove);
        _this._input.addEventListener('dragstart', _this._handleMouseMove);
        _this._input.addEventListener('drag', _this._handleMouseMove);

        _this._handleSearch = _this._handleSearch.bind(_this);

        _this._button = _this._container.querySelector('.leaflet-ext-search-button');
        _this._button.addEventListener('click', _this._handleSearch);

        _this.results = new _ResultView2.default({ input: _this._input, replaceInput: _this._replaceInputOnEnter });

        _this._search = _this._search.bind(_this);
        _this._selectItem = _this._selectItem.bind(_this);

        _this.results.addEventListener('suggestions:confirm', function (e) {
            var event = document.createEvent('Event');
            event.initEvent('suggestions:confirm', false, false);
            event.detail = e.detail;
            _this.dispatchEvent(event);
            _this._search(e);
        });
        _this.results.addEventListener('suggestions:select', _this._selectItem);

        // map.on ('click', this.results.hide.bind(this.results));
        // map.on ('dragstart', this.results.hide.bind(this.results));
        return _this;
    }

    _createClass(SearchWidget, [{
        key: '_suggest',
        value: function _suggest(text) {
            var _this2 = this;

            this.results.allowNavigation = false;
            var tasks = this._providers.filter(function (provider) {
                return provider.showSuggestion;
            }).map(function (provider) {
                return function (state) {
                    return new Promise(function (resolve) {
                        if (state.completed) {
                            resolve(state);
                        } else {
                            provider.find(text, _this2._suggestionLimit, false, false).then(function (response) {
                                state.completed = response.length > 0;
                                state.response = state.response.concat(response);
                                resolve(state);
                            }).catch(function (e) {
                                return console.log(e);
                            });
                        }
                    });
                };
            });
            (0, _scanexAsync.chain)(tasks, { completed: false, response: [] }).then(function (state) {
                _this2.results.show(state.response, text.trim());
                _this2.results.allowNavigation = true;
            });
        }
    }, {
        key: '_handleChange',
        value: function _handleChange(e) {
            var _this3 = this;

            if (this._input.value.length) {
                if (this._allowSuggestion) {
                    this._allowSuggestion = false;
                    this._timer = setTimeout(function () {
                        clearTimeout(_this3._timer);
                        _this3._allowSuggestion = true;
                        var text = _this3._input.value;
                        _this3._suggest(text);
                    }, this._suggestionTimeout);
                }
            } else {
                this.results.hide();
            }
        }
    }, {
        key: '_handleMouseMove',
        value: function _handleMouseMove(e) {
            e.stopPropagation();
            e.preventDefault();
        }
    }, {
        key: '_search',
        value: function _search(e) {
            var _this4 = this;

            var text = e.detail;
            var tasks = this._providers.filter(function (provider) {
                return provider.showOnEnter;
            }).map(function (provider) {
                return function (state) {
                    return new Promise(function (resolve) {
                        if (state.completed) {
                            resolve(state);
                        } else {
                            provider.find(text, _this4._retrieveManyOnEnter ? _this4._fuzzySearchLimit : 1, true, true).then(function (response) {
                                state.completed = response.length > 0;
                                state.response = state.response.concat(response);
                                resolve(state);
                            }).catch(function (e) {
                                console.log(e);
                                resolve(state);
                            });
                        }
                    });
                };
            });

            (0, _scanexAsync.chain)(tasks, { completed: false, response: [] }).then(function (state) {
                // if(state.response.length > 0 && !this._retrieveManyOnEnter){
                //     let item = state.response[0];
                //     item.provider
                //     .fetch(item.properties)
                //     .then(response => {});                    
                // }
            });

            this.results && this.results.hide();
        }
    }, {
        key: '_selectItem',
        value: function _selectItem(e) {
            var item = e.detail;
            return item.provider.fetch(item.properties);
        }
    }, {
        key: '_handleSearch',
        value: function _handleSearch(e) {
            e.stopPropagation();
            this._search({ detail: this._input.value });
        }
    }, {
        key: 'setText',
        value: function setText(text) {
            this._input.value = text;
        }
    }, {
        key: 'setPlaceHolder',
        value: function setPlaceHolder(value) {
            this._input.placeholder = value;
        }
    }]);

    return SearchWidget;
}(_scanexEventTarget2.default);

exports.default = SearchWidget;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TZWFyY2hJbnB1dC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU2VhcmNoSW5wdXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU2VhcmNoSW5wdXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9TZWFyY2hJbnB1dC8uL25vZGVfbW9kdWxlcy9zY2FuZXgtYXN5bmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU2VhcmNoSW5wdXQvLi9ub2RlX21vZHVsZXMvc2NhbmV4LWV2ZW50LXRhcmdldC9kaXN0L2J1bmRsZS5qcyIsIndlYnBhY2s6Ly9TZWFyY2hJbnB1dC8uL3NyYy9EYXRhUHJvdmlkZXJzL0NhZGFzdHJlRGF0YVByb3ZpZGVyLmpzIiwid2VicGFjazovL1NlYXJjaElucHV0Ly4vc3JjL0RhdGFQcm92aWRlcnMvQ29vcmRpbmF0ZXNEYXRhUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vU2VhcmNoSW5wdXQvLi9zcmMvRGF0YVByb3ZpZGVycy9Pc21EYXRhUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vU2VhcmNoSW5wdXQvLi9zcmMvUmVzdWx0Vmlldy5qcyIsIndlYnBhY2s6Ly9TZWFyY2hJbnB1dC8uL3NyYy9TZWFyY2hDb250cm9sLmpzIiwid2VicGFjazovL1NlYXJjaElucHV0Ly4vc3JjL1NlYXJjaFdpZGdldC5jc3M/M2FkMiIsIndlYnBhY2s6Ly9TZWFyY2hJbnB1dC8uL3NyYy9TZWFyY2hXaWRnZXQuanMiXSwibmFtZXMiOlsiU2VhcmNoV2lkZ2V0IiwiU2VhcmNoQ29udHJvbCIsIk9zbURhdGFQcm92aWRlciIsIkNvb3JkaW5hdGVzRGF0YVByb3ZpZGVyIiwiQ2FkYXN0cmVEYXRhUHJvdmlkZXIiLCJzZXJ2ZXJCYXNlIiwidG9sZXJhbmNlIiwiX3NlcnZlckJhc2UiLCJfdG9sZXJhbmNlIiwic2hvd1N1Z2dlc3Rpb24iLCJzaG93T25TZWxlY3QiLCJzaG93T25FbnRlciIsIl9jYWRhc3RyZUxheWVycyIsImlkIiwidGl0bGUiLCJyZWciLCJzdHIiLCJ0eXBlIiwidHJpbSIsImkiLCJsZW4iLCJsZW5ndGgiLCJpdCIsImV4ZWMiLCJ2YWx1ZSIsImxpbWl0Iiwic3Ryb25nIiwicmV0cmlldmVHZW9tZXRyeSIsImNhZGFzdHJlTGF5ZXIiLCJnZXRDYWRhc3RyZUxheWVyIiwiUHJvbWlzZSIsInJlcSIsIlJlcXVlc3QiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImluaXQiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJycyIsImZlYXR1cmVzIiwibWFwIiwibmFtZSIsIngiLCJhdHRycyIsImNuIiwicHJvcGVydGllcyIsInByb3ZpZGVyIiwicXVlcnkiLCJyZXNvbHZlIiwib2JqIiwidGV4dCIsInN0YXR1cyIsImV2ZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudFRhcmdldCIsImJpbmQiLCJmaW5kIiwicnhGIiwiUmVnRXhwIiwicnhEIiwibSIsIkFycmF5IiwiaXNBcnJheSIsIl9wYXJzZURlZ3JlZXMiLCJwYXJzZUZsb2F0IiwiY29vcmRpbmF0ZXMiLCJsYXREZWciLCJsYXRNaW4iLCJsYXRTZWMiLCJsbmdEZWciLCJsbmdNaW4iLCJsbmdTZWMiLCJnIiwiX3BhcnNlQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJmZWF0dXJlIiwiZ2VvbWV0cnkiLCJfY29udmVydEdlb21ldHJ5IiwiX2tleSIsIndpbmRvdyIsIktPU01PU05JTUtJX1NFU1NJT05fS0VZIiwidG9VcHBlckNhc2UiLCJPYmpDb2RlIiwiVHlwZUNvZGUiLCJjcmVkZW50aWFscyIsInJlamVjdCIsIlN0YXR1cyIsIlJlc3VsdCIsInJlZHVjZSIsImEiLCJjb25jYXQiLCJTZWFyY2hSZXN1bHQiLCJHZW9tZXRyeSIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImsiLCJjYXRjaCIsIl9zdHJvbmciLCJCb29sZWFuIiwiX3dpdGhvdXRHZW9tZXRyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsIk9iak5hbWVTaG9ydCIsIlJlc3VsdFZpZXciLCJpbnB1dCIsInJlcGxhY2VJbnB1dCIsIl9pbnB1dCIsImluZGV4IiwiY291bnQiLCJfaXRlbSIsIl9pbnB1dFRleHQiLCJfcmVwbGFjZUlucHV0IiwiX2xpc3QiLCJMIiwiRG9tVXRpbCIsImNyZWF0ZSIsInNldEF0dHJpYnV0ZSIsImFsbG93TmF2aWdhdGlvbiIsInN0eWxlIiwidG9wIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwibGVmdCIsIm9mZnNldExlZnQiLCJfaGFuZGxlS2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVJbnB1dENsaWNrIiwiX2hhbmRsZUZvY3VzIiwiX2hhbmRsZVdoZWVsIiwiRG9tRXZlbnQiLCJkaXNhYmxlQ2xpY2tQcm9wYWdhdGlvbiIsImRpc2FibGVTY3JvbGxQcm9wYWdhdGlvbiIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIl9oYW5kbGVDaGFuZ2UiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlQ2xhc3MiLCJsaXN0VmlzaWJsZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZENsYXNzIiwic2VsZWN0SXRlbSIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJoaWRlIiwiY29tcGxldGUiLCJkaXNwbGF5IiwiX2l0ZW1zIiwiaXRlbSIsIml0ZW1zIiwiaGlnaGxpZ2h0IiwiaHRtbCIsInN0YXJ0IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiaGVhZCIsInN1YnN0ciIsInRhaWwiLCJqb2luIiwiaW5uZXJIVE1MIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2hhbmRsZUNsaWNrIiwiQ29udHJvbCIsImV4dGVuZCIsImluY2x1ZGVzIiwiRXZlbnRlZCIsInByb3RvdHlwZSIsIk1peGluIiwiRXZlbnRzIiwiaW5pdGlhbGl6ZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiX2FsbG93U3VnZ2VzdGlvbiIsInN1Z2dlc3Rpb25UaW1lb3V0Iiwic3VnZ2VzdGlvbkxpbWl0Iiwib25BZGQiLCJfY29udGFpbmVyIiwiX3dpZGdldCIsIm9uIiwicmVzdWx0cyIsImFkZFRvIiwiY2FsbCIsImFkZEJlZm9yZSIsInBhcmVudE5vZGUiLCJfcGFyZW50IiwiX21hcCIsIl9jb250cm9sQ29ybmVycyIsImdldFBvc2l0aW9uIiwiY2hpbGROb2RlcyIsIl9pZCIsImluc2VydEJlZm9yZSIsInNldFRleHQiLCJzZXRQbGFjZUhvbGRlciIsImNvbnRhaW5lciIsInBsYWNlSG9sZGVyIiwicHJvdmlkZXJzIiwiZnV6enlTZWFyY2hMaW1pdCIsInJldHJpZXZlTWFueU9uRW50ZXIiLCJyZXBsYWNlSW5wdXRPbkVudGVyIiwiX3Byb3ZpZGVycyIsIl9zdWdnZXN0aW9uVGltZW91dCIsIl9zdWdnZXN0aW9uTGltaXQiLCJfZnV6enlTZWFyY2hMaW1pdCIsIl9yZXRyaWV2ZU1hbnlPbkVudGVyIiwiX3JlcGxhY2VJbnB1dE9uRW50ZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJfaGFuZGxlTW91c2VNb3ZlIiwiX2hhbmRsZVNlYXJjaCIsIl9idXR0b24iLCJfc2VhcmNoIiwiX3NlbGVjdEl0ZW0iLCJ0YXNrcyIsInN0YXRlIiwiY29tcGxldGVkIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJfdGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiX3N1Z2dlc3QiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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T0FBT2hCLEVBQUVwRixNQUFiO0FBQ0EsbUJBQU9vRyxLQUFLOUcsUUFBTCxDQUFjWixLQUFkLENBQW9CMEgsS0FBSy9HLFVBQXpCLENBQVA7QUFDSDs7O3NDQUNjK0YsQyxFQUFHO0FBQ2JBLGNBQUVDLGVBQUY7QUFDQSxpQkFBSzhFLE9BQUwsQ0FBYyxFQUFDbkssUUFBUSxLQUFLdUQsTUFBTCxDQUFZN0YsS0FBckIsRUFBZDtBQUNKOzs7Z0NBQ1FnQyxJLEVBQU07QUFDWCxpQkFBSzZELE1BQUwsQ0FBWTdGLEtBQVosR0FBb0JnQyxJQUFwQjtBQUNIOzs7dUNBQ2VoQyxLLEVBQU87QUFDbkIsaUJBQUs2RixNQUFMLENBQVl3SCxXQUFaLEdBQTBCck4sS0FBMUI7QUFDSDs7OztFQXBKc0J3QywyQjs7a0JBdUpaaEUsWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTZWFyY2hJbnB1dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTZWFyY2hJbnB1dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBTZWFyY2hXaWRnZXQgZnJvbSAnLi9zcmMvU2VhcmNoV2lkZ2V0LmpzJztcclxuaW1wb3J0IFNlYXJjaENvbnRyb2wgZnJvbSAnLi9zcmMvU2VhcmNoQ29udHJvbC5qcyc7XHJcbmltcG9ydCBPc21EYXRhUHJvdmlkZXIgZnJvbSAnLi9zcmMvRGF0YVByb3ZpZGVycy9Pc21EYXRhUHJvdmlkZXIuanMnO1xyXG5pbXBvcnQgQ29vcmRpbmF0ZXNEYXRhUHJvdmlkZXIgZnJvbSAnLi9zcmMvRGF0YVByb3ZpZGVycy9Db29yZGluYXRlc0RhdGFQcm92aWRlci5qcyc7XHJcbmltcG9ydCBDYWRhc3RyZURhdGFQcm92aWRlciBmcm9tICcuL3NyYy9EYXRhUHJvdmlkZXJzL0NhZGFzdHJlRGF0YVByb3ZpZGVyLmpzJztcclxuXHJcbmV4cG9ydCB7IFNlYXJjaFdpZGdldCwgU2VhcmNoQ29udHJvbCwgT3NtRGF0YVByb3ZpZGVyLCBDb29yZGluYXRlc0RhdGFQcm92aWRlciwgQ2FkYXN0cmVEYXRhUHJvdmlkZXIgfTsiLCJjb25zdCBjaGFpbiA9ICh0YXNrcywgc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB0YXNrcy5yZWR1Y2UoXHJcbiAgICAgICAgKHByZXYsIG5leHQpID0+IHByZXYudGhlbihuZXh0KSxcclxuICAgICAgICBuZXcgUHJvbWlzZSAoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVzb2x2ZSAoc3RhdGUpKVxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNoYWluIH07IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcclxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XHJcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXHJcblx0XHRleHBvcnRzW1wiRXZlbnRUYXJnZXRcIl0gPSBmYWN0b3J5KCk7XHJcblx0ZWxzZVxyXG5cdFx0cm9vdFtcIkV2ZW50VGFyZ2V0XCJdID0gZmFjdG9yeSgpO1xyXG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xyXG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxyXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcclxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXHJcbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXHJcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xyXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcclxuLyoqKioqKi8gXHRcdH1cclxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXHJcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XHJcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxyXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcclxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cclxuLyoqKioqKi8gXHRcdH07XHJcbi8qKioqKiovXHJcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cclxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxyXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcclxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcclxuLyoqKioqKi8gXHR9XHJcbi8qKioqKiovXHJcbi8qKioqKiovXHJcbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXHJcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcclxuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcclxuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XHJcbi8qKioqKiovIFx0XHR9XHJcbi8qKioqKiovIFx0fTtcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXHJcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xyXG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XHJcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xyXG4vKioqKioqLyBcdFx0fVxyXG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqKioqKi8gXHR9O1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxyXG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxyXG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xyXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxyXG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xyXG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XHJcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xyXG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcclxuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xyXG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xyXG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xyXG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xyXG4vKioqKioqLyBcdH07XHJcbi8qKioqKiovXHJcbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xyXG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxyXG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xyXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xyXG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcclxuLyoqKioqKi8gXHR9O1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxyXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xyXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XHJcbi8qKioqKiovXHJcbi8qKioqKiovXHJcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXHJcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xyXG4vKioqKioqLyB9KVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqLyAoe1xyXG5cclxuLyoqKi8gXCIuL2luZGV4LmpzXCI6XHJcbi8qISoqKioqKioqKioqKioqKioqKiEqXFxcclxuICAhKioqIC4vaW5kZXguanMgKioqIVxyXG4gIFxcKioqKioqKioqKioqKioqKioqL1xyXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuXHJcbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XHJcblxyXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxyXG5cclxudmFyIEV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnRUYXJnZXQoKSB7XHJcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlQ2xhc3MoRXZlbnRUYXJnZXQsIFt7XHJcbiAgICAgICAga2V5OiAnYWRkRXZlbnRMaXN0ZW5lcicsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKCEodHlwZSBpbiB0aGlzLmxpc3RlbmVycykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ3JlbW92ZUV2ZW50TGlzdGVuZXInLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghKHR5cGUgaW4gdGhpcy5saXN0ZW5lcnMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5saXN0ZW5lcnNbdHlwZV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3RhY2subGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhY2tbaV0gPT09IGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2suc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ2Rpc3BhdGNoRXZlbnQnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghKGV2ZW50LnR5cGUgaW4gdGhpcy5saXN0ZW5lcnMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5saXN0ZW5lcnNbZXZlbnQudHlwZV07XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ3RhcmdldCcsIHtcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0YWNrLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc3RhY2tbaV0uY2FsbCh0aGlzLCBldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XSk7XHJcblxyXG4gICAgcmV0dXJuIEV2ZW50VGFyZ2V0O1xyXG59KCk7XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBFdmVudFRhcmdldDtcclxuXHJcbi8qKiovIH0pXHJcblxyXG4vKioqKioqLyB9KVtcImRlZmF1bHRcIl07XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlGZG1WdWRGUmhjbWRsZEM5M1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENKM1pXSndZV05yT2k4dlJYWmxiblJVWVhKblpYUXZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2UlhabGJuUlVZWEpuWlhRdkxpOXBibVJsZUM1cWN5SmRMQ0p1WVcxbGN5STZXeUpGZG1WdWRGUmhjbWRsZENJc0lteHBjM1JsYm1WeWN5SXNJblI1Y0dVaUxDSmpZV3hzWW1GamF5SXNJbkIxYzJnaUxDSnpkR0ZqYXlJc0lta2lMQ0pzSWl3aWJHVnVaM1JvSWl3aWMzQnNhV05sSWl3aWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpSXNJbVYyWlc1MElpd2lUMkpxWldOMElpd2laR1ZtYVc1bFVISnZjR1Z5ZEhraUxDSmxiblZ0WlhKaFlteGxJaXdpWTI5dVptbG5kWEpoWW14bElpd2lkM0pwZEdGaWJHVWlMQ0oyWVd4MVpTSXNJbU5oYkd3aVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUkVGQk1FTXNaME5CUVdkRE8wRkJRekZGTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBWQlFYZEVMR3RDUVVGclFqdEJRVU14UlR0QlFVTkJMSGxFUVVGcFJDeGpRVUZqTzBGQlF5OUVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBSRUZCZVVNc2FVTkJRV2xETzBGQlF6RkZMSGRJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRCUVVOeVNUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0SlEyeEdUVUVzVnp0QlFVTkdMREpDUVVGak8wRkJRVUU3TzBGQlExWXNZVUZCUzBNc1UwRkJUQ3hIUVVGcFFpeEZRVUZxUWp0QlFVTklPenM3TzNsRFFVTm5Ra01zU1N4RlFVRk5ReXhSTEVWQlFWVTdRVUZETjBJc1owSkJRVWNzUlVGQlJVUXNVVUZCVVN4TFFVRkxSQ3hUUVVGbUxFTkJRVWdzUlVGQk9FSTdRVUZETVVJc2NVSkJRVXRCTEZOQlFVd3NRMEZCWlVNc1NVRkJaaXhKUVVGMVFpeEZRVUYyUWp0QlFVTklPMEZCUTBRc2FVSkJRVXRFTEZOQlFVd3NRMEZCWlVNc1NVRkJaaXhGUVVGeFFrVXNTVUZCY2tJc1EwRkJNRUpFTEZGQlFURkNPMEZCUTBnN096czBRMEZEYjBKRUxFa3NSVUZCVFVNc1VTeEZRVUZWTzBGQlEycERMR2RDUVVGSExFVkJRVVZFTEZGQlFWRXNTMEZCUzBRc1UwRkJaaXhEUVVGSUxFVkJRVGhDTzBGQlF6RkNPMEZCUTBnN1FVRkRSQ3huUWtGQlNVa3NVVUZCVVN4TFFVRkxTaXhUUVVGTUxFTkJRV1ZETEVsQlFXWXNRMEZCV2p0QlFVTkJMR2xDUVVGSkxFbEJRVWxKTEVsQlFVa3NRMEZCVWl4RlFVRlhReXhKUVVGSlJpeE5RVUZOUnl4TlFVRjZRaXhGUVVGcFEwWXNTVUZCU1VNc1EwRkJja01zUlVGQmQwTkVMRWRCUVhoRExFVkJRVFpETzBGQlEzcERMRzlDUVVGSFJDeE5RVUZOUXl4RFFVRk9MRTFCUVdGSUxGRkJRV2hDTEVWQlFYbENPMEZCUTNKQ1JTd3dRa0ZCVFVrc1RVRkJUaXhEUVVGaFNDeERRVUZpTEVWQlFXZENMRU5CUVdoQ08wRkJRMEVzTWtKQlFVOHNTMEZCUzBrc2JVSkJRVXdzUTBGQmVVSlNMRWxCUVhwQ0xFVkJRU3RDUXl4UlFVRXZRaXhEUVVGUU8wRkJRMGc3UVVGRFNqdEJRVU5LT3pzN2MwTkJRMkZSTEVzc1JVRkJUenRCUVVOcVFpeG5Ra0ZCUnl4RlFVRkZRU3hOUVVGTlZDeEpRVUZPTEVsQlFXTXNTMEZCUzBRc1UwRkJja0lzUTBGQlNDeEZRVUZ2UXp0QlFVTm9RenRCUVVOSU8wRkJRMFFzWjBKQlFVbEpMRkZCUVZFc1MwRkJTMG9zVTBGQlRDeERRVUZsVlN4TlFVRk5WQ3hKUVVGeVFpeERRVUZhTzBGQlEwaFZMRzFDUVVGUFF5eGpRVUZRTEVOQlFYTkNSaXhMUVVGMFFpeEZRVUUyUWl4UlFVRTNRaXhGUVVGMVF6dEJRVU5vUTBjc05FSkJRVmtzUzBGRWIwSTdRVUZGYUVORExEaENRVUZqTEV0QlJtdENPMEZCUjJoRFF5d3dRa0ZCVlN4TFFVaHpRanRCUVVsb1EwTXNkVUpCUVU4N1FVRktlVUlzWVVGQmRrTTdRVUZOUnl4cFFrRkJTU3hKUVVGSldDeEpRVUZKTEVOQlFWSXNSVUZCVjBNc1NVRkJTVVlzVFVGQlRVY3NUVUZCZWtJc1JVRkJhVU5HTEVsQlFVbERMRU5CUVhKRExFVkJRWGREUkN4SFFVRjRReXhGUVVFMlF6dEJRVU42UTBRc2MwSkJRVTFETEVOQlFVNHNSVUZCVTFrc1NVRkJWQ3hEUVVGakxFbEJRV1FzUlVGQmIwSlFMRXRCUVhCQ08wRkJRMGc3UVVGRFNqczdPenM3TzJ0Q1FVZFZXQ3hYSWl3aVptbHNaU0k2SW1KMWJtUnNaUzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGdGRMQ0JtWVdOMGIzSjVLVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwWlhod2IzSjBjMXRjSWtWMlpXNTBWR0Z5WjJWMFhDSmRJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0lrVjJaVzUwVkdGeVoyVjBYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVmU2tvZDJsdVpHOTNMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlBaUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdYQ0l1TDJsdVpHVjRMbXB6WENJcE8xeHVJaXdpWTJ4aGMzTWdSWFpsYm5SVVlYSm5aWFFnZTF4eVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTWdQU0I3ZlR0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdGa1pFVjJaVzUwVEdsemRHVnVaWElvZEhsd1pTd2dZMkZzYkdKaFkyc3BJSHRjY2x4dUlDQWdJQ0FnSUNCcFppZ2hLSFI1Y0dVZ2FXNGdkR2hwY3k1c2FYTjBaVzVsY25NcEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YkdsemRHVnVaWEp6VzNSNWNHVmRJRDBnVzEwN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpXM1I1Y0dWZExuQjFjMmdvWTJGc2JHSmhZMnNwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnY21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lBb2RIbHdaU3dnWTJGc2JHSmhZMnNwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaWdoS0hSNWNHVWdhVzRnZEdocGN5NXNhWE4wWlc1bGNuTXBLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJSE4wWVdOcklEMGdkR2hwY3k1c2FYTjBaVzVsY25OYmRIbHdaVjA3WEhKY2JpQWdJQ0FnSUNBZ1ptOXlLR3hsZENCcElEMGdNQ3dnYkNBOUlITjBZV05yTG14bGJtZDBhRHNnYVNBOElHdzdJR2tyS3lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaHpkR0ZqYTF0cFhTQTlQVDBnWTJGc2JHSmhZMnNwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUmhZMnN1YzNCc2FXTmxLR2tzSURFcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2loMGVYQmxMQ0JqWVd4c1ltRmpheWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNiaUFnSUNCa2FYTndZWFJqYUVWMlpXNTBLR1YyWlc1MEtTQjdYSEpjYmlBZ0lDQWdJQ0FnYVdZb0lTaGxkbVZ1ZEM1MGVYQmxJR2x1SUhSb2FYTXViR2x6ZEdWdVpYSnpLU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0J6ZEdGamF5QTlJSFJvYVhNdWJHbHpkR1Z1WlhKelcyVjJaVzUwTG5SNWNHVmRPMXh5WEc1Y2RDQWdJQ0JQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYWmxiblFzSUNkMFlYSm5aWFFuTENCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklHWmhiSE5sTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1bWFXZDFjbUZpYkdVNklHWmhiSE5sTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IzY21sMFlXSnNaVG9nWm1Gc2MyVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsT2lCMGFHbHpYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdabTl5S0d4bGRDQnBJRDBnTUN3Z2JDQTlJSE4wWVdOckxteGxibWQwYURzZ2FTQThJR3c3SUdrckt5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkR0ZqYTF0cFhTNWpZV3hzS0hSb2FYTXNJR1YyWlc1MEtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVWMlpXNTBWR0Z5WjJWME95SmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD0iLCJpbXBvcnQgRXZlbnRUYXJnZXQgZnJvbSAnc2NhbmV4LWV2ZW50LXRhcmdldCc7XHJcblxyXG5jbGFzcyBDYWRhc3RyZURhdGFQcm92aWRlciBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKHtzZXJ2ZXJCYXNlLCB0b2xlcmFuY2V9KXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZlckJhc2UgPSBzZXJ2ZXJCYXNlOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fdG9sZXJhbmNlID0gdG9sZXJhbmNlOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93U3VnZ2VzdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93T25TZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dPbkVudGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jYWRhc3RyZUxheWVycyA9IFtcclxuXHRcdFx0e2lkOiAxLCB0aXRsZTogJ9Cj0YfQsNGB0YLQvtC6JywgXHRyZWc6IC9eXFxkXFxkOlxcZCs6XFxkKzpcXGQrJC99LFxyXG5cdFx0XHR7aWQ6IDIsIHRpdGxlOiAn0JrQstCw0YDRgtCw0LsnLFx0cmVnOiAvXlxcZFxcZDpcXGQrOlxcZCskL30sXHJcblx0XHRcdHtpZDogMywgdGl0bGU6ICfQoNCw0LnQvtC9JywgXHRyZWc6IC9eXFxkXFxkOlxcZCskL30sXHJcblx0XHRcdHtpZDogNCwgdGl0bGU6ICfQntC60YDRg9CzJywgXHRyZWc6IC9eXFxkXFxkJC99LFxyXG4gICAgICAgICAgICB7aWQ6IDUsIHRpdGxlOiAn0J7QmtChJywgXHRcdHJlZzogL15cXGRcXGQ6XFxkKzpcXGQrOlxcZCs6XFxkKyQvfSxcclxuXHRcdFx0e2lkOiAxMCwgdGl0bGU6ICfQl9Ce0KPQmNCiJywgXHRyZWc6IC9eXFxkK1xcLlxcZCtcXC5cXGQrL31cclxuXHRcdFx0Ly8gLFxyXG5cdFx0XHQvLyB7aWQ6IDcsIHRpdGxlOiAn0JPRgNCw0L3QuNGG0YsnLCBcdHJlZzogL15cXHcrJC99LFxyXG5cdFx0XHQvLyB7aWQ6IDYsIHRpdGxlOiAn0KLQtdGALtC30L7QvdGLJywgXHRyZWc6IC9eXFx3KyQvfSxcclxuXHRcdFx0Ly8ge2lkOiAxMiwgdGl0bGU6ICfQm9C10YEnLCBcdFx0cmVnOiAvXlxcdyskL30sXHJcblx0XHRcdC8vIHtpZDogMTMsIHRpdGxlOiAn0JrRgNCw0YHQvdGL0LUg0LvQuNC90LjQuCcsIFx0XHRyZWc6IC9eXFx3KyQvfSxcclxuXHRcdFx0Ly8ge2lkOiAxNSwgdGl0bGU6ICfQodCg0JfQoycsIFx0cmVnOiAvXlxcdyskL30sXHJcblx0XHRcdC8vIHtpZDogMTYsIHRpdGxlOiAn0J7QrdCXJywgXHRcdHJlZzogL15cXHcrJC99LFxyXG5cdFx0XHQvLyB7aWQ6IDksIHRpdGxlOiAn0JPQntCaJywgXHRcdHJlZzogL15cXHcrJC99LFxyXG5cdFx0XHQvLyB7aWQ6IDEwLCB0aXRsZTogJ9CX0J7Qo9CY0KInLCBcdHJlZzogL15cXHcrJC99XHJcblx0XHRcdC8vIC9bXlxcZFxcOl0vZyxcclxuXHRcdFx0Ly8gL1xcZFxcZDpcXGQrJC8sXHJcblx0XHRcdC8vIC9cXGRcXGQ6XFxkKzpcXGQrJC8sXHJcblx0XHRcdC8vIC9cXGRcXGQ6XFxkKzpcXGQrOlxcZCskL1xyXG5cdFx0XTtcclxuICAgIH0gICAgXHJcbiAgICBnZXRDYWRhc3RyZUxheWVyIChzdHIsIHR5cGUpIHtcclxuICAgICAgICBzdHIgPSBzdHIudHJpbSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLl9jYWRhc3RyZUxheWVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaXQgPSB0aGlzLl9jYWRhc3RyZUxheWVyc1tpXTtcclxuICAgICAgICAgICAgaWYgKGl0LmlkID09PSB0eXBlKSB7IHJldHVybiBpdDsgfVxyXG4gICAgICAgICAgICBpZiAoaXQucmVnLmV4ZWMoc3RyKSkgeyByZXR1cm4gaXQ7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhZGFzdHJlTGF5ZXJzWzBdO1xyXG4gICAgfVxyXG4gICAgZmluZCh2YWx1ZSwgbGltaXQsIHN0cm9uZywgcmV0cmlldmVHZW9tZXRyeSl7ICAgXHJcbiAgICAgICAgY29uc3QgY2FkYXN0cmVMYXllciA9IHRoaXMuZ2V0Q2FkYXN0cmVMYXllcih2YWx1ZSk7ICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgLy8gbGV0IHJlcSA9IG5ldyBSZXF1ZXN0KGAke3RoaXMuX3NlcnZlckJhc2V9L3R5cGVhaGVhZD9saW1pdD0ke2xpbWl0fSZza2lwPTAmdGV4dD0ke3ZhbHVlfSZ0eXBlPSR7Y2FkYXN0cmVMYXllci5pZH1gKTtcclxuICAgICAgICAgICAgbGV0IHJlcSA9IG5ldyBSZXF1ZXN0KGAke3RoaXMuX3NlcnZlckJhc2V9L2ZlYXR1cmVzLyR7Y2FkYXN0cmVMYXllci5pZH0/dGV4dD0ke3ZhbHVlfSZ0b2xlcmFuY2U9JHt0aGlzLl90b2xlcmFuY2V9JmxpbWl0PSR7bGltaXR9YCk7XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb24nKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGluaXQgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NvcnMnLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhY2hlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZldGNoIChyZXEsIGluaXQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZihqc29uLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcnMgPSBqc29uLmZlYXR1cmVzLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHguYXR0cnMubmFtZSB8fCB4LmF0dHJzLmNuIHx8IHguYXR0cnMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShycyk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXNvbHZlKGpzb24pO1xyXG4gICAgICAgICAgICAgICAgLy8gfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmZXRjaChvYmopIHtcclxuXHRcdHZhciB0ZXh0ID0gb2JqLmF0dHJzLm5hbWUgfHwgb2JqLmF0dHJzLmNuIHx8IG9iai5hdHRycy5pZDtcclxuICAgICAgICBjb25zdCBjYWRhc3RyZUxheWVyID0gdGhpcy5nZXRDYWRhc3RyZUxheWVyKHRleHQsIG9iai50eXBlKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNhZGFzdHJlTGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCByZXEgPSBuZXcgUmVxdWVzdChgJHt0aGlzLl9zZXJ2ZXJCYXNlfS9mZWF0dXJlcy8ke2NhZGFzdHJlTGF5ZXIuaWR9P3RvbGVyYW5jZT0ke3RoaXMuX3RvbGVyYW5jZX0mbGltaXQ9MSZ0ZXh0PSR7b2JqLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcSA9IG5ldyBSZXF1ZXN0KGAke3RoaXMuX3NlcnZlckJhc2V9L2ZlYXR1cmVzLyR7Y2FkYXN0cmVMYXllci5pZH0/dG9sZXJhbmNlPSR7dGhpcy5fdG9sZXJhbmNlfSZsaW1pdD0xJnRleHQ9JHt0ZXh0fWApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbml0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2NvcnMnLCAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGU6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmZXRjaCAocmVxLCBpbml0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoanNvbi5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuaW5pdEV2ZW50KCdmZXRjaCcsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmRldGFpbCA9IGpzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcnMgPSBqc29uLmZlYXR1cmVzLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogeC5hdHRycy5uYW1lIHx8IHguYXR0cnMuY24gfHwgeC5hdHRycy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhZGFzdHJlRGF0YVByb3ZpZGVyOyIsImltcG9ydCBFdmVudFRhcmdldCBmcm9tICdzY2FuZXgtZXZlbnQtdGFyZ2V0JztcclxuXHJcbmNsYXNzIENvb3JkaW5hdGVzRGF0YVByb3ZpZGVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93U3VnZ2VzdGlvbiA9IGZhbHNlOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93T25TZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dPbkVudGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZldGNoID0gdGhpcy5mZXRjaC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZmluZCA9IHRoaXMuZmluZC5iaW5kKHRoaXMpOyAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMucnhGID0gbmV3IFJlZ0V4cCgnXlxcXFxzKlxcXFwtPyhcXFxcZCsoXFxcXC5cXFxcZCspPykoXFxcXHMrW058U10pPygsXFxcXHMqfFxcXFxzKylcXFxcLT8oXFxcXGQrKFxcXFwuXFxcXGQrKT8pKFxcXFxzK1tFfFddKT8nKTtcclxuICAgICAgICB0aGlzLnJ4RCA9IG5ldyBSZWdFeHAoJ15cXFxccyooXFxcXGR7MSwyfSlbXFxcXHN8XFxcXHUwMGIwXShcXFxcZHsxLDJ9KVtcXFxcc3xcXFxcdTAwMjddKFxcXFxkezEsMn1cXFxcLlxcXFxkKylcXFxcdTAwMjI/KFxcXFxzK1tOfFNdKT8sP1xcXFxzKyhcXFxcZHsxLDJ9KVtcXFxcc3xcXFxcdTAwYjBdKFxcXFxkezEsMn0pW1xcXFxzfFxcXFx1MDAyN10oXFxcXGR7MSwyfVxcXFwuXFxcXGQrKVxcXFx1MDAyMj8oXFxcXHMrW0V8V10pPycpO1xyXG4gICAgfVxyXG4gICAgX3BhcnNlQ29vcmRpbmF0ZXModmFsdWUpIHtcclxuICAgICAgICBsZXQgbSA9IHRoaXMucnhELmV4ZWModmFsdWUpO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID09PSA5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJzZURlZ3JlZXMgKFttWzFdLG1bMl0sbVszXSxtWzVdLG1bNl0sbVs3XV0ubWFwKHggPT4gcGFyc2VGbG9hdCh4KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtID0gdGhpcy5yeEYuZXhlYyh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkgKG0pICYmIG0ubGVuZ3RoID09PSA4KXtcclxuICAgICAgICAgICAgcmV0dXJuIHt0eXBlOiAnUG9pbnQnLCBjb29yZGluYXRlczogW1xyXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChtWzVdKSxcclxuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQobVsxXSlcclxuICAgICAgICAgICAgXX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBudWxsOyAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgX3BhcnNlRGVncmVlcyAoW2xhdERlZywgbGF0TWluLCBsYXRTZWMsIGxuZ0RlZywgbG5nTWluLCBsbmdTZWNdKSB7ICAgIFxyXG4gICAgICAgIHJldHVybiB7dHlwZTogJ1BvaW50JywgY29vcmRpbmF0ZXM6IFtcclxuICAgICAgICAgICAgbG5nRGVnICsgbG5nTWluIC8gNjAgKyBsbmdTZWMgLyAzNjAwLFxyXG4gICAgICAgICAgICBsYXREZWcgKyBsYXRNaW4gLyA2MCArIGxhdFNlYyAvIDM2MDBcclxuICAgICAgICBdfTtcclxuICAgIH1cclxuICAgIGZldGNoICh2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gcmVzb2x2ZShbXSkpO1xyXG4gICAgfVxyXG4gICAgZmluZCh2YWx1ZSwgbGltaXQsIHN0cm9uZywgcmV0cmlldmVHZW9tZXRyeSl7ICAgICAgICBcclxuICAgICAgICBsZXQgZyA9IHRoaXMuX3BhcnNlQ29vcmRpbmF0ZXModmFsdWUpOyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge2ZlYXR1cmU6IHsgdHlwZTogJ0ZlYXR1cmUnLCBnZW9tZXRyeTogZywgcHJvcGVydGllczoge30gfSwgcHJvdmlkZXI6IHRoaXMsIHF1ZXJ5OiB2YWx1ZX07XHJcbiAgICAgICAgICAgIGlmIChnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmluaXRFdmVudCgnZmV0Y2gnLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGV0YWlsID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzb2x2ZShnID8gW3Jlc3VsdF0gOiBbXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvb3JkaW5hdGVzRGF0YVByb3ZpZGVyOyIsIlxyXG5pbXBvcnQgRXZlbnRUYXJnZXQgZnJvbSAnc2NhbmV4LWV2ZW50LXRhcmdldCc7XHJcblxyXG5jbGFzcyBPc21EYXRhUHJvdmlkZXIgZXh0ZW5kcyBFdmVudFRhcmdldCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7c2VydmVyQmFzZX0pe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc2VydmVyQmFzZSA9IHNlcnZlckJhc2U7ICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2hvd1N1Z2dlc3Rpb24gPSB0cnVlOyAgICBcclxuICAgICAgICB0aGlzLnNob3dPblNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93T25FbnRlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5maW5kID0gdGhpcy5maW5kLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5mZXRjaCA9IHRoaXMuZmV0Y2guYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9jb252ZXJ0R2VvbWV0cnkgPSB0aGlzLl9jb252ZXJ0R2VvbWV0cnkuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fa2V5ID0gd2luZG93LktPU01PU05JTUtJX1NFU1NJT05fS0VZID09IG51bGwgfHwgd2luZG93LktPU01PU05JTUtJX1NFU1NJT05fS0VZID09ICdJTlZBTElEJyA/ICcnIDogYCZrZXk9JHt3aW5kb3cuS09TTU9TTklNS0lfU0VTU0lPTl9LRVl9YDtcclxuICAgIH1cclxuICAgIF9jb252ZXJ0R2VvbWV0cnkoZ2VvbWV0cnkpIHsgICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAoZ2VvbWV0cnkudHlwZS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1BPSU5UJzpcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5LnR5cGUgPSAnUG9pbnQnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1BPTFlHT04nOlxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnkudHlwZSA9ICdQb2x5Z29uJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdNVUxUSVBPTFlHT04nOlxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnkudHlwZSA9ICdNdWx0aVBvbHlnb24nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0xJTkVTVFJJTkcnOlxyXG4gICAgICAgICAgICBjYXNlICdQT0xZTElORSc6XHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeS50eXBlID0gJ0xpbmVTdHJpbmcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ01VTFRJTElORVNUUklORyc6XHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeS50eXBlID0gJ011bHRpTGluZVN0cmluZyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93ICdVbmtub3duIFdLVCB0eXBlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdlb21ldHJ5O1xyXG4gICAgfVxyXG4gICAgZmV0Y2ggKG9iaikge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYFdyYXBTdHlsZT1Ob25lJlJlcXVlc3RUeXBlPUlEJklEPSR7b2JqLk9iakNvZGV9JlR5cGVDb2RlPSR7b2JqLlR5cGVDb2RlfSZVc2VPU009MWA7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVxID0gbmV3IFJlcXVlc3QoYCR7dGhpcy5fc2VydmVyQmFzZX0vU2VhcmNoT2JqZWN0L1NlYXJjaEFkZHJlc3MuYXNoeD8ke3F1ZXJ5fSR7dGhpcy5fa2V5fWApO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbicpOyAgICAgICAgXHJcbiAgICAgICAgbGV0IGluaXQgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJywgICAgICAgIFxyXG4gICAgICAgICAgICBjYWNoZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2ggKHJlcSwgaW5pdClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGpzb24uU3RhdHVzID09PSAnb2snKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBycyA9IGpzb24uUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYSx4KSA9PiBhLmNvbmNhdCh4LlNlYXJjaFJlc3VsdCksIFtdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnID0gdGhpcy5fY29udmVydEdlb21ldHJ5ICh4Lkdlb21ldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmtleXMoeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihrID0+IGsgIT09ICdHZW9tZXRyeScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGEsaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtrXSA9IHhba107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogb2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmluaXRFdmVudCgnZmV0Y2gnLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRldGFpbCA9IHJzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoanNvbik7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2gocmVzcG9uc2UgPT4gcmVqZWN0KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmaW5kKHZhbHVlLCBsaW1pdCwgc3Ryb25nLCByZXRyaWV2ZUdlb21ldHJ5KXsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlIHx8IHZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX3N0cm9uZyA9IEJvb2xlYW4oc3Ryb25nKSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX3dpdGhvdXRHZW9tZXRyeSA9IEJvb2xlYW4ocmV0cmlldmVHZW9tZXRyeSkgPyAwIDogMTsgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IGBXcmFwU3R5bGU9Tm9uZSZSZXF1ZXN0VHlwZT1TZWFyY2hPYmplY3QmSXNTdHJvbmdTZWFyY2g9JHtfc3Ryb25nfSZXaXRob3V0R2VvbWV0cnk9JHtfd2l0aG91dEdlb21ldHJ5fSZVc2VPU009MSZMaW1pdD0ke2xpbWl0fSZTZWFyY2hTdHJpbmc9JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWA7ICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCByZXEgPSBuZXcgUmVxdWVzdChgJHt0aGlzLl9zZXJ2ZXJCYXNlfS9TZWFyY2hPYmplY3QvU2VhcmNoQWRkcmVzcy5hc2h4PyR7cXVlcnl9JHt0aGlzLl9rZXl9YCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbicpOyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5pdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICdjb3JzJywgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGZldGNoIChyZXEsIGluaXQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoanNvbi5TdGF0dXMgPT09ICdvaycpeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJzID0ganNvbi5SZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYSx4KSA9PiBhLmNvbmNhdCh4LlNlYXJjaFJlc3VsdCksIFtdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJpZXZlR2VvbWV0cnkgJiYgeC5HZW9tZXRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnID0gdGhpcy5fY29udmVydEdlb21ldHJ5ICh4Lkdlb21ldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBPYmplY3Qua2V5cyh4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoayA9PiBrICE9PSAnR2VvbWV0cnknKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGEsaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW2tdID0geFtrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHguT2JqTmFtZVNob3J0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnRmVhdHVyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHByb3BzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHguT2JqTmFtZVNob3J0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3Ryb25nICYmIHJldHJpZXZlR2VvbWV0cnkpIHsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuaW5pdEV2ZW50KCdmZXRjaCcsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kZXRhaWwgPSBycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChyZXNwb25zZSA9PiByZWplY3QocmVzcG9uc2UpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoJ0VtcHR5IHN0cmluZycpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9zbURhdGFQcm92aWRlcjsiLCJpbXBvcnQgRXZlbnRUYXJnZXQgZnJvbSAnc2NhbmV4LWV2ZW50LXRhcmdldCc7XHJcblxyXG5jbGFzcyBSZXN1bHRWaWV3IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xyXG4gICAgY29uc3RydWN0b3Ioe2lucHV0LCByZXBsYWNlSW5wdXQgPSBmYWxzZX0pe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5faW5wdXQgPSBpbnB1dDsgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLmluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5faXRlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5faW5wdXRUZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fcmVwbGFjZUlucHV0ID0gcmVwbGFjZUlucHV0O1xyXG4gICAgICAgIHRoaXMuX2xpc3QgPSBMLkRvbVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgICB0aGlzLl9saXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGVhZmxldC1leHQtc2VhcmNoLWxpc3Qgbm9zZWxlY3QnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxvd05hdmlnYXRpb24gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLl9saXN0LnN0eWxlLnRvcCA9IGAke3RoaXMuX2lucHV0Lm9mZnNldFRvcCArIHRoaXMuX2lucHV0Lm9mZnNldEhlaWdodCArIDJ9cHhgO1xyXG4gICAgICAgIHRoaXMuX2xpc3Quc3R5bGUubGVmdCA9IGAke3RoaXMuX2lucHV0Lm9mZnNldExlZnR9cHhgO1xyXG5cclxuICAgICAgICB0aGlzLl9oYW5kbGVLZXkgPSB0aGlzLl9oYW5kbGVLZXkuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5faGFuZGxlSW5wdXRDbGljayA9IHRoaXMuX2hhbmRsZUlucHV0Q2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2spO1xyXG5cclxuICAgICAgICB0aGlzLl9oYW5kbGVGb2N1cyA9IHRoaXMuX2hhbmRsZUZvY3VzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9oYW5kbGVGb2N1cyk7XHJcbiAgICAgICAgdGhpcy5fbGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5faGFuZGxlV2hlZWwgPSB0aGlzLl9oYW5kbGVXaGVlbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2xpc3QuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9oYW5kbGVXaGVlbCk7XHJcbiAgICAgICAgTC5Eb21FdmVudC5kaXNhYmxlQ2xpY2tQcm9wYWdhdGlvbih0aGlzLl9saXN0KS5kaXNhYmxlU2Nyb2xsUHJvcGFnYXRpb24odGhpcy5fbGlzdCk7XHJcbiAgICAgICAgLy8gdGhpcy5fbGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5faGFuZGxlV2hlZWwuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gdGhpcy5fbGlzdC5hZGRFdmVudExpc3RlbmVyKCdNb3pNb3VzZVBpeGVsU2Nyb2xsJywgdGhpcy5faGFuZGxlV2hlZWwuYmluZCh0aGlzKSk7ICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2lucHV0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fbGlzdCk7IFxyXG5cclxuICAgICAgICB0aGlzLl9oYW5kbGVDaGFuZ2UgPSB0aGlzLl9oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2hhbmRsZUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZUlucHV0Q2xpY2sgKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVGb2N1cyhlKXsgICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBsZXQgZWwgPSB0aGlzLl9saXN0LnF1ZXJ5U2VsZWN0b3IoYFt0YWJpbmRleD1cIiR7dGhpcy5pbmRleH1cIl1gKTsgXHJcbiAgICAgICAgICAgIEwuRG9tVXRpbC5yZW1vdmVDbGFzcyAoZWwsICdsZWFmbGV0LWV4dC1zZWFyY2gtbGlzdC1zZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5faXRlbSA9IG51bGw7XHJcbiAgICB9IFxyXG5cclxuICAgIF9oYW5kbGVDaGFuZ2UoZSl7XHJcbiAgICAgICAgdGhpcy5faW5wdXRUZXh0ID0gdGhpcy5faW5wdXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZVdoZWVsIChlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgICAgICAgIFxyXG4gICAgfSBcclxuXHJcbiAgICBfaGFuZGxlS2V5KGUpeyAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5saXN0VmlzaWJsZSgpKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKXtcclxuICAgICAgICAgICAgICAgIC8vIEFycm9MZWZ0IC8gQXJyb3dSaWdodFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIEFycm93RG93blxyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFsbG93TmF2aWdhdGlvbikgeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbmRleCA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoMCA8PSB0aGlzLmluZGV4ICYmIHRoaXMuaW5kZXggPCB0aGlzLmNvdW50IC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWwgPSB0aGlzLl9saXN0LnF1ZXJ5U2VsZWN0b3IoYFt0YWJpbmRleD1cIiR7dGhpcy5pbmRleH1cIl1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEwuRG9tVXRpbC5yZW1vdmVDbGFzcyAoZWwsICdsZWFmbGV0LWV4dC1zZWFyY2gtbGlzdC1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyt0aGlzLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsID0gdGhpcy5fbGlzdC5xdWVyeVNlbGVjdG9yKGBbdGFiaW5kZXg9XCIke3RoaXMuaW5kZXh9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMLkRvbVV0aWwucmVtb3ZlQ2xhc3MgKGVsLCAnbGVhZmxldC1leHQtc2VhcmNoLWxpc3Qtc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLmNvdW50IC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWwgPSB0aGlzLl9saXN0LnF1ZXJ5U2VsZWN0b3IoYFt0YWJpbmRleD1cIiR7dGhpcy5pbmRleH1cIl1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTC5Eb21VdGlsLmFkZENsYXNzIChlbCwgJ2xlYWZsZXQtZXh0LXNlYXJjaC1saXN0LXNlbGVjdGVkJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0odGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gQXJyb3dVcFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFsbG93TmF2aWdhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmluZGV4ID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWwgPSB0aGlzLl9saXN0LnF1ZXJ5U2VsZWN0b3IoYFt0YWJpbmRleD1cIiR7dGhpcy5pbmRleH1cIl1gKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMLkRvbVV0aWwucmVtb3ZlQ2xhc3MgKGVsLCAnbGVhZmxldC1leHQtc2VhcmNoLWxpc3Qtc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tdGhpcy5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsID0gdGhpcy5fbGlzdC5xdWVyeVNlbGVjdG9yKGBbdGFiaW5kZXg9XCIke3RoaXMuaW5kZXh9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMLkRvbVV0aWwuYWRkQ2xhc3MgKGVsLCAnbGVhZmxldC1leHQtc2VhcmNoLWxpc3Qtc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbSh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmZvY3VzKCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pbmRleCA9PT0gMCkgeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dC5mb2N1cygpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0LnZhbHVlID0gdGhpcy5faW5wdXRUZXh0OyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyBFbnRlclxyXG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbmRleCA8IDAgJiYgdGhpcy5faW5wdXQudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5faW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0LnNldFNlbGVjdGlvblJhbmdlKHRleHQubGVuZ3RoLCB0ZXh0Lmxlbmd0aCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuaW5pdEV2ZW50KCdzdWdnZXN0aW9uczpjb25maXJtJywgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGV0YWlsID0gdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUgKHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyBFc2NhcGVcclxuICAgICAgICAgICAgICAgIGNhc2UgMjc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dC52YWx1ZSA9IHRoaXMuX2lucHV0VGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgdGhpcy5faW5wdXQudmFsdWUpeyBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLl9pbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0LnNldFNlbGVjdGlvblJhbmdlKHRleHQubGVuZ3RoLCB0ZXh0Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5pbml0RXZlbnQoJ3N1Z2dlc3Rpb25zOmNvbmZpcm0nLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGV0YWlsID0gdGV4dDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0LmZvY3VzKCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBsaXN0VmlzaWJsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ID4gMCAmJiB0aGlzLl9saXN0LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RJdGVtKGkpeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5faXRlbSA9IHRoaXMuX2l0ZW1zW2ldOyAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuX2l0ZW0ubmFtZTtcclxuICAgICAgICBpZiAodGhpcy5fcmVwbGFjZUlucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lucHV0LnZhbHVlID0gdGV4dDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5faW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UodGV4dC5sZW5ndGgsIHRleHQubGVuZ3RoKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlQ2xpY2sgKGksIGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlIChpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wbGV0ZShpKXtcclxuICAgICAgICBsZXQgaXRlbSA9IGkgPj0gMCA/IHRoaXMuX2l0ZW1zW2ldIDogdGhpcy5faXRlbSA/IHRoaXMuX2l0ZW0gOiBudWxsO1xyXG4gICAgICAgIGlmKGl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5faXRlbSA9IGl0ZW07ICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5pbmRleCA9IC0xOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gaXRlbS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVwbGFjZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dC52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSh0ZXh0Lmxlbmd0aCwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2lucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICAgICAgICAgIGV2ZW50LmluaXRFdmVudCgnc3VnZ2VzdGlvbnM6c2VsZWN0JywgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgZXZlbnQuZGV0YWlsID0gaXRlbTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTsgICAgICAgICAgICBcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzaG93KGl0ZW1zLCBoaWdobGlnaHQpIHsgICAgICAgIFxyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5faXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcclxuICAgICAgICAgICAgY29uc3QgaHRtbCA9ICc8dWw+JyArIHRoaXMuX2l0ZW1zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHgubmFtZSAmJiB4Lm5hbWUubGVuZ3RoKVxyXG4gICAgICAgICAgICAubWFwKCh4LGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gYDxzcGFuIGNsYXNzPVwibGVhZmxldC1leHQtc2VhcmNoLWxpc3QtaXRlbS1ub3JtYWxcIj4ke3gubmFtZX08L3NwYW4+YDtcclxuICAgICAgICAgICAgICAgIGlmIChoaWdobGlnaHQgJiYgaGlnaGxpZ2h0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB4Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mIChoaWdobGlnaHQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoZWFkID0gIHgubmFtZS5zdWJzdHIoMCwgc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihoZWFkLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkID0gYDxzcGFuIGNsYXNzPVwibGVhZmxldC1leHQtc2VhcmNoLWxpc3QtaXRlbS1ub3JtYWxcIj4ke2hlYWR9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhaWwgPSB4Lm5hbWUuc3Vic3RyKHN0YXJ0ICsgaGlnaGxpZ2h0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRhaWwubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhaWwgPSBgPHNwYW4gY2xhc3M9XCJsZWFmbGV0LWV4dC1zZWFyY2gtbGlzdC1pdGVtLW5vcm1hbFwiPiR7dGFpbH08L3NwYW4+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYCR7aGVhZH08c3BhbiBjbGFzcz1cImxlYWZsZXQtZXh0LXNlYXJjaC1saXN0LWl0ZW0taGlnaGxpZ2h0XCI+JHtoaWdobGlnaHR9PC9zcGFuPiR7dGFpbH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8bGkgdGFiaW5kZXg9JHtpfT4ke25hbWV9PC9saT5gOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LCBbXSkuam9pbignJykgKyAnPC91bD4nO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbGlzdC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLl9saXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyArK2kpe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDbGljay5iaW5kKHRoaXMsIGkpKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGVsZW1lbnRzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5fbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoaWRlKCkgeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgICAgICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0VmlldzsiLCJpbXBvcnQgU2VhcmNoV2lkZ2V0IGZyb20gJy4vU2VhcmNoV2lkZ2V0LmpzJztcclxuXHJcbmxldCBTZWFyY2hDb250cm9sID0gTC5Db250cm9sLmV4dGVuZCh7XHJcbiAgICBpbmNsdWRlczogTC5FdmVudGVkID8gTC5FdmVudGVkLnByb3RvdHlwZSA6IEwuTWl4aW4uRXZlbnRzLFxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIEwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLl9hbGxvd1N1Z2dlc3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5zdWdnZXN0aW9uVGltZW91dCA9IHRoaXMub3B0aW9ucy5zdWdnZXN0aW9uVGltZW91dCB8fCAxMDAwO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5zdWdnZXN0aW9uTGltaXQgPSB0aGlzLm9wdGlvbnMuc3VnZ2VzdGlvbkxpbWl0IHx8IDEwO1xyXG4gICAgfSxcclxuICAgIG9uQWRkOiBmdW5jdGlvbihtYXApIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBMLkRvbVV0aWwuY3JlYXRlKCdkaXYnLCAnbGVhZmxldC1leHQtc2VhcmNoJyk7XHJcbiAgICAgICAgdGhpcy5fd2lkZ2V0ID0gbmV3IFNlYXJjaFdpZGdldCh0aGlzLl9jb250YWluZXIsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgbWFwLm9uKCdjbGljaycsIHRoaXMuX3dpZGdldC5yZXN1bHRzLmhpZGUuYmluZCh0aGlzLl93aWRnZXQucmVzdWx0cykpO1xyXG4gICAgICAgIG1hcC5vbignZHJhZ3N0YXJ0JywgdGhpcy5fd2lkZ2V0LnJlc3VsdHMuaGlkZS5iaW5kKHRoaXMuX3dpZGdldC5yZXN1bHRzKSk7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgfSxcclxuICAgIGFkZFRvOiBmdW5jdGlvbihtYXApIHtcclxuICAgICAgICBMLkNvbnRyb2wucHJvdG90eXBlLmFkZFRvLmNhbGwodGhpcywgbWFwKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFkZEJlZm9yZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJlZm9yZSh0aGlzLm9wdGlvbnMuYWRkQmVmb3JlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZEJlZm9yZTogZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQuX2NvbnRhaW5lcjtcclxuICAgICAgICBpZiAoIXBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuX21hcCAmJiB0aGlzLl9tYXAuX2NvbnRyb2xDb3JuZXJzW3RoaXMuZ2V0UG9zaXRpb24oKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYWRkQmVmb3JlID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXQgPSBwYXJlbnROb2RlLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT09IGl0Ll9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuX2NvbnRhaW5lciwgaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRUZXh0ICh0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5fd2lkZ2V0LnNldFRleHQgKHRleHQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRQbGFjZUhvbGRlciAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl93aWRnZXQuc2V0UGxhY2VIb2xkZXIgKHZhbHVlKTtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ29udHJvbDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL1NlYXJjaFdpZGdldC5jc3MnO1xyXG5pbXBvcnQgUmVzdWx0VmlldyBmcm9tICcuL1Jlc3VsdFZpZXcuanMnO1xyXG5pbXBvcnQgRXZlbnRUYXJnZXQgZnJvbSAnc2NhbmV4LWV2ZW50LXRhcmdldCc7XHJcbmltcG9ydCB7IGNoYWluIH0gZnJvbSAnc2NhbmV4LWFzeW5jJztcclxuXHJcbmNsYXNzIFNlYXJjaFdpZGdldCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwge3BsYWNlSG9sZGVyLCBwcm92aWRlcnMsIHN1Z2dlc3Rpb25UaW1lb3V0ID0gMTAwMCwgc3VnZ2VzdGlvbkxpbWl0ID0gMTAsIGZ1enp5U2VhcmNoTGltaXQgPSAxMDAwLCByZXRyaWV2ZU1hbnlPbkVudGVyID0gZmFsc2UsIHJlcGxhY2VJbnB1dE9uRW50ZXIgPSBmYWxzZX0pe1xyXG4gICAgICAgIHN1cGVyICgpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLl9hbGxvd1N1Z2dlc3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3Byb3ZpZGVycyA9IHByb3ZpZGVycztcclxuICAgICAgICB0aGlzLl9zdWdnZXN0aW9uVGltZW91dCA9IHN1Z2dlc3Rpb25UaW1lb3V0O1xyXG4gICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25MaW1pdCA9IHN1Z2dlc3Rpb25MaW1pdDtcclxuICAgICAgICB0aGlzLl9mdXp6eVNlYXJjaExpbWl0ID0gZnV6enlTZWFyY2hMaW1pdDtcclxuICAgICAgICB0aGlzLl9yZXRyaWV2ZU1hbnlPbkVudGVyID0gcmV0cmlldmVNYW55T25FbnRlcjtcclxuICAgICAgICB0aGlzLl9yZXBsYWNlSW5wdXRPbkVudGVyID0gcmVwbGFjZUlucHV0T25FbnRlcjtcclxuXHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xlYWZsZXQtZXh0LXNlYXJjaCcpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIiR7cGxhY2VIb2xkZXJ9XCIgLz48c3BhbiBjbGFzcz1cImxlYWZsZXQtZXh0LXNlYXJjaC1idXR0b25cIj48L3NwYW4+YDtcclxuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICB0aGlzLl9oYW5kbGVDaGFuZ2UgPSB0aGlzLl9oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2hhbmRsZUNoYW5nZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlTW92ZSA9IHRoaXMuX2hhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZU1vdXNlTW92ZSk7ICAgICAgICBcclxuICAgICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9oYW5kbGVNb3VzZU1vdmUpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWcnLCB0aGlzLl9oYW5kbGVNb3VzZU1vdmUpO1xyXG5cclxuICAgICAgICB0aGlzLl9oYW5kbGVTZWFyY2ggPSB0aGlzLl9oYW5kbGVTZWFyY2guYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWFmbGV0LWV4dC1zZWFyY2gtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlU2VhcmNoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gbmV3IFJlc3VsdFZpZXcoeyBpbnB1dDogdGhpcy5faW5wdXQsIHJlcGxhY2VJbnB1dDogdGhpcy5fcmVwbGFjZUlucHV0T25FbnRlcn0pO1xyXG5cclxuICAgICAgICB0aGlzLl9zZWFyY2ggPSB0aGlzLl9zZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RJdGVtID0gdGhpcy5fc2VsZWN0SXRlbS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3VsdHMuYWRkRXZlbnRMaXN0ZW5lcignc3VnZ2VzdGlvbnM6Y29uZmlybScsIGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgICAgICAgICAgZXZlbnQuaW5pdEV2ZW50KCdzdWdnZXN0aW9uczpjb25maXJtJywgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgZXZlbnQuZGV0YWlsID0gZS5kZXRhaWw7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlYXJjaChlKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlc3VsdHMuYWRkRXZlbnRMaXN0ZW5lcignc3VnZ2VzdGlvbnM6c2VsZWN0JywgdGhpcy5fc2VsZWN0SXRlbSk7XHJcblxyXG4gICAgICAgIC8vIG1hcC5vbiAoJ2NsaWNrJywgdGhpcy5yZXN1bHRzLmhpZGUuYmluZCh0aGlzLnJlc3VsdHMpKTtcclxuICAgICAgICAvLyBtYXAub24gKCdkcmFnc3RhcnQnLCB0aGlzLnJlc3VsdHMuaGlkZS5iaW5kKHRoaXMucmVzdWx0cykpO1xyXG4gICAgfVxyXG4gICAgX3N1Z2dlc3QgKHRleHQpe1xyXG4gICAgICAgIHRoaXMucmVzdWx0cy5hbGxvd05hdmlnYXRpb24gPSBmYWxzZTtcclxuICAgICAgICBsZXQgdGFza3MgPVxyXG4gICAgICAgICAgICB0aGlzLl9wcm92aWRlcnNcclxuICAgICAgICAgICAgLmZpbHRlciAocHJvdmlkZXIgPT4gcHJvdmlkZXIuc2hvd1N1Z2dlc3Rpb24pXHJcbiAgICAgICAgICAgIC5tYXAocHJvdmlkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kICh0ZXh0LCB0aGlzLl9zdWdnZXN0aW9uTGltaXQsIGZhbHNlLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jb21wbGV0ZWQgPSByZXNwb25zZS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnJlc3BvbnNlID0gc3RhdGUucmVzcG9uc2UuY29uY2F0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNoYWluICh0YXNrcywgeyBjb21wbGV0ZWQ6IGZhbHNlLCByZXNwb25zZTogW10gfSlcclxuICAgICAgICAudGhlbihzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0cy5zaG93KHN0YXRlLnJlc3BvbnNlLCB0ZXh0LnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0cy5hbGxvd05hdmlnYXRpb24gPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2hhbmRsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0LnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYWxsb3dTdWdnZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGxvd1N1Z2dlc3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0ICh0aGlzLl90aW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWxsb3dTdWdnZXN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5faW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3VnZ2VzdCh0ZXh0KTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuX3N1Z2dlc3Rpb25UaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRzLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaGFuZGxlTW91c2VNb3ZlKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgX3NlYXJjaCAoZSkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZS5kZXRhaWw7XHJcbiAgICAgICAgbGV0IHRhc2tzID0gdGhpcy5fcHJvdmlkZXJzXHJcbiAgICAgICAgICAgIC5maWx0ZXIgKHByb3ZpZGVyID0+IHByb3ZpZGVyLnNob3dPbkVudGVyKVxyXG4gICAgICAgICAgICAubWFwKHByb3ZpZGVyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCAodGV4dCwgdGhpcy5fcmV0cmlldmVNYW55T25FbnRlciA/IHRoaXMuX2Z1enp5U2VhcmNoTGltaXQgOiAxLCB0cnVlLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbXBsZXRlZCA9IHJlc3BvbnNlLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucmVzcG9uc2UgPSBzdGF0ZS5yZXNwb25zZS5jb25jYXQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNoYWluICh0YXNrcywge2NvbXBsZXRlZDogZmFsc2UsIHJlc3BvbnNlOiBbXX0pXHJcbiAgICAgICAgICAgIC50aGVuKHN0YXRlID0+IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBpZihzdGF0ZS5yZXNwb25zZS5sZW5ndGggPiAwICYmICF0aGlzLl9yZXRyaWV2ZU1hbnlPbkVudGVyKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgaXRlbSA9IHN0YXRlLnJlc3BvbnNlWzBdO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGl0ZW0ucHJvdmlkZXJcclxuICAgICAgICAgICAgICAgIC8vICAgICAuZmV0Y2goaXRlbS5wcm9wZXJ0aWVzKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHt9KTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0cyAmJiB0aGlzLnJlc3VsdHMuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgX3NlbGVjdEl0ZW0gKGUpe1xyXG4gICAgICAgIGxldCBpdGVtID0gZS5kZXRhaWw7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdmlkZXIuZmV0Y2goaXRlbS5wcm9wZXJ0aWVzKTtcclxuICAgIH1cclxuICAgIF9oYW5kbGVTZWFyY2ggKGUpIHtcclxuICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgdGhpcy5fc2VhcmNoICh7ZGV0YWlsOiB0aGlzLl9pbnB1dC52YWx1ZX0pO1xyXG4gICAgfVxyXG4gICAgc2V0VGV4dCAodGV4dCkge1xyXG4gICAgICAgIHRoaXMuX2lucHV0LnZhbHVlID0gdGV4dDtcclxuICAgIH1cclxuICAgIHNldFBsYWNlSG9sZGVyICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2lucHV0LnBsYWNlaG9sZGVyID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFdpZGdldDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==