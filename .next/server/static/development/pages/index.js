module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CSVAdd.tsx":
/*!*******************************!*\
  !*** ./components/CSVAdd.tsx ***!
  \*******************************/
/*! exports provided: CSVAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CSVAdd\", function() { return CSVAdd; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/patrickmoody/Dev/cashflow/components/CSVAdd.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction CSVAdd({\n  onChange\n}) {\n  function handleChange(event) {\n    const reader = new FileReader();\n\n    reader.onload = function (ev) {\n      const {\n        result\n      } = ev.target;\n\n      if (typeof result !== 'string') {\n        throw new Error('CSV did not produce string');\n      }\n\n      const rows = result.split('\\n').map(r => r.split(','));\n      onChange(rows);\n    };\n\n    reader.readAsText(event.target.files[0]);\n  }\n\n  return __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, \"Add CSV\"), __jsx(\"input\", {\n    type: \"file\",\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NTVkFkZC50c3g/NjM4MiJdLCJuYW1lcyI6WyJDU1ZBZGQiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2IiwicmVzdWx0IiwidGFyZ2V0IiwiRXJyb3IiLCJyb3dzIiwic3BsaXQiLCJtYXAiLCJyIiwicmVhZEFzVGV4dCIsImZpbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRU8sU0FBU0EsTUFBVCxDQUFnQjtBQUFFQztBQUFGLENBQWhCLEVBQStFO0FBQ3BGLFdBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTREO0FBQzFELFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7O0FBQ0FELFVBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFVQyxFQUFWLEVBQXlDO0FBQ3ZELFlBQU07QUFBRUM7QUFBRixVQUFhRCxFQUFFLENBQUNFLE1BQXRCOztBQUNBLFVBQUksT0FBT0QsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QixjQUFNLElBQUlFLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0Q7O0FBQ0QsWUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNJLEtBQVAsQ0FBYSxJQUFiLEVBQW1CQyxHQUFuQixDQUF3QkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNGLEtBQUYsQ0FBUSxHQUFSLENBQTlCLENBQWI7QUFDQVgsY0FBUSxDQUFDVSxJQUFELENBQVI7QUFDRCxLQVBEOztBQVFBUCxVQUFNLENBQUNXLFVBQVAsQ0FBa0JaLEtBQUssQ0FBQ00sTUFBTixDQUFhTyxLQUFiLENBQW1CLENBQW5CLENBQWxCO0FBQ0Q7O0FBQ0QsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFRLEVBQUVkLFlBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NTVkFkZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gQ1NWQWRkKHsgb25DaGFuZ2UgfTogeyBvbkNoYW5nZTogKHJvd3M6IEFycmF5PEFycmF5PGFueT4+KSA9PiB2b2lkIH0pIHtcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2OiBQcm9ncmVzc0V2ZW50PEZpbGVSZWFkZXI+KSB7XG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gZXYudGFyZ2V0XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDU1YgZGlkIG5vdCBwcm9kdWNlIHN0cmluZycpXG4gICAgICB9XG4gICAgICBjb25zdCByb3dzID0gcmVzdWx0LnNwbGl0KCdcXG4nKS5tYXAoKHIpID0+IHIuc3BsaXQoJywnKSlcbiAgICAgIG9uQ2hhbmdlKHJvd3MpXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGV2ZW50LnRhcmdldC5maWxlc1swXSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxsYWJlbD5cbiAgICAgIDxkaXY+QWRkIENTVjwvZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICA8L2xhYmVsPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CSVAdd.tsx\n");

/***/ }),

/***/ "./components/Chart.tsx":
/*!******************************!*\
  !*** ./components/Chart.tsx ***!
  \******************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Chart\", function() { return Chart; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"recharts\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/patrickmoody/Dev/cashflow/components/Chart.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // const data = [\n//   {\n//     name: 'Page A',\n//     uv: 4000,\n//     pv: 2400,\n//     amt: 2400,\n//   },\n//   {\n//     name: 'Page B',\n//     uv: 3000,\n//     pv: 1398,\n//     amt: 2210,\n//   },\n//   {\n//     name: 'Page C',\n//     uv: 2000,\n//     pv: 9800,\n//     amt: 2290,\n//   },\n//   {\n//     name: 'Page D',\n//     uv: 2780,\n//     pv: 3908,\n//     amt: 2000,\n//   },\n//   {\n//     name: 'Page E',\n//     uv: 1890,\n//     pv: 4800,\n//     amt: 2181,\n//   },\n//   {\n//     name: 'Page F',\n//     uv: 2390,\n//     pv: 3800,\n//     amt: 2500,\n//   },\n//   {\n//     name: 'Page G',\n//     uv: 3490,\n//     pv: 4300,\n//     amt: 2100,\n//   },\n// ]\n\nfunction Chart({\n  data\n}) {\n  return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"BarChart\"], {\n    width: 500,\n    height: 300,\n    data: data,\n    margin: {\n      top: 5,\n      right: 30,\n      left: 20,\n      bottom: 5\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"CartesianGrid\"], {\n    strokeDasharray: \"3 3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"XAxis\"], {\n    dataKey: \"0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"YAxis\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Bar\"], {\n    dataKey: \"5\",\n    name: \"Amount\",\n    fill: \"#8884d8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0LnRzeD9lYzI2Il0sIm5hbWVzIjpbIkNoYXJ0IiwiZGF0YSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0NBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNTyxTQUFTQSxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQWdDO0FBQ3JDLFNBQ0UsTUFBQyxpREFBRDtBQUNFLFNBQUssRUFBRSxHQURUO0FBRUUsVUFBTSxFQUFFLEdBRlY7QUFHRSxRQUFJLEVBQUVBLElBSFI7QUFJRSxVQUFNLEVBQUU7QUFDTkMsU0FBRyxFQUFFLENBREM7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsVUFBSSxFQUFFLEVBSEE7QUFJTkMsWUFBTSxFQUFFO0FBSkYsS0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQyxzREFBRDtBQUFlLG1CQUFlLEVBQUMsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUUsTUFBQyw4Q0FBRDtBQUFPLFdBQU8sRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWFFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLEVBY0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsRUFlRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixFQWdCRSxNQUFDLDRDQUFEO0FBQUssV0FBTyxFQUFDLEdBQWI7QUFBaUIsUUFBSSxFQUFDLFFBQXRCO0FBQStCLFFBQUksRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLENBREY7QUFvQkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXJ0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhckNoYXJ0LCBCYXIsIENlbGwsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgTGVnZW5kIH0gZnJvbSAncmVjaGFydHMnXG4vLyBjb25zdCBkYXRhID0gW1xuLy8gICB7XG4vLyAgICAgbmFtZTogJ1BhZ2UgQScsXG4vLyAgICAgdXY6IDQwMDAsXG4vLyAgICAgcHY6IDI0MDAsXG4vLyAgICAgYW10OiAyNDAwLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogJ1BhZ2UgQicsXG4vLyAgICAgdXY6IDMwMDAsXG4vLyAgICAgcHY6IDEzOTgsXG4vLyAgICAgYW10OiAyMjEwLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogJ1BhZ2UgQycsXG4vLyAgICAgdXY6IDIwMDAsXG4vLyAgICAgcHY6IDk4MDAsXG4vLyAgICAgYW10OiAyMjkwLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogJ1BhZ2UgRCcsXG4vLyAgICAgdXY6IDI3ODAsXG4vLyAgICAgcHY6IDM5MDgsXG4vLyAgICAgYW10OiAyMDAwLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogJ1BhZ2UgRScsXG4vLyAgICAgdXY6IDE4OTAsXG4vLyAgICAgcHY6IDQ4MDAsXG4vLyAgICAgYW10OiAyMTgxLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogJ1BhZ2UgRicsXG4vLyAgICAgdXY6IDIzOTAsXG4vLyAgICAgcHY6IDM4MDAsXG4vLyAgICAgYW10OiAyNTAwLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogJ1BhZ2UgRycsXG4vLyAgICAgdXY6IDM0OTAsXG4vLyAgICAgcHY6IDQzMDAsXG4vLyAgICAgYW10OiAyMTAwLFxuLy8gICB9LFxuLy8gXVxuXG50eXBlIFByb3BzID0ge1xuICBkYXRhOiBhbnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoYXJ0KHsgZGF0YSB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxCYXJDaGFydFxuICAgICAgd2lkdGg9ezUwMH1cbiAgICAgIGhlaWdodD17MzAwfVxuICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIG1hcmdpbj17e1xuICAgICAgICB0b3A6IDUsXG4gICAgICAgIHJpZ2h0OiAzMCxcbiAgICAgICAgbGVmdDogMjAsXG4gICAgICAgIGJvdHRvbTogNSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgLz5cbiAgICAgIDxYQXhpcyBkYXRhS2V5PVwiMFwiIC8+XG4gICAgICA8WUF4aXMgLz5cbiAgICAgIDxUb29sdGlwIC8+XG4gICAgICA8TGVnZW5kIC8+XG4gICAgICA8QmFyIGRhdGFLZXk9XCI1XCIgbmFtZT1cIkFtb3VudFwiIGZpbGw9XCIjODg4NGQ4XCIgLz5cbiAgICA8L0JhckNoYXJ0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Chart.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CSVAdd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CSVAdd */ \"./components/CSVAdd.tsx\");\n/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Chart */ \"./components/Chart.tsx\");\nvar _jsxFileName = \"/Users/patrickmoody/Dev/cashflow/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Home() {\n  const [rows, setRows] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([[]]);\n\n  function handleCSVChange(rows) {\n    setRows(rows);\n  }\n\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"Cashflow\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"/base.css\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, \"Welcome\"), __jsx(_components_CSVAdd__WEBPACK_IMPORTED_MODULE_2__[\"CSVAdd\"], {\n    onChange: handleCSVChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }), rows.length > 0 && __jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_3__[\"Chart\"], {\n    data: rows,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 29\n    }\n  }), __jsx(\"table\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"tbody\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, rows.map(r => __jsx(\"tr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 15\n    }\n  }, r.map(cell => __jsx(\"td\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 19\n    }\n  }, cell))))))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwicm93cyIsInNldFJvd3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ1NWQ2hhbmdlIiwibGVuZ3RoIiwibWFwIiwiciIsImNlbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsUUFBTSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsSUFBa0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFDLEVBQUQsQ0FBZixDQUF4Qjs7QUFDQSxXQUFTQyxlQUFULENBQXlCSixJQUF6QixFQUFrRDtBQUNoREMsV0FBTyxDQUFDRCxJQUFELENBQVA7QUFDRDs7QUFDRCxTQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxVQUE1QjtBQUF1QyxRQUFJLEVBQUMsV0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUUsTUFBQyx5REFBRDtBQUFRLFlBQVEsRUFBRUksZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0dKLElBQUksQ0FBQ0ssTUFBTCxHQUFjLENBQWQsSUFBbUIsTUFBQyx1REFBRDtBQUFPLFFBQUksRUFBRUwsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSHRCLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFBSSxDQUFDTSxHQUFMLENBQVVDLENBQUQsSUFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLENBQUMsQ0FBQ0QsR0FBRixDQUFPRSxJQUFELElBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxJQUFMLENBREQsQ0FESCxDQURELENBREgsQ0FERixDQUpGLENBUEYsQ0FERjtBQTBCRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENTVkFkZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ1NWQWRkJ1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcm93cywgc2V0Um93c10gPSBSZWFjdC51c2VTdGF0ZShbW11dKVxuICBmdW5jdGlvbiBoYW5kbGVDU1ZDaGFuZ2Uocm93czogQXJyYXk8QXJyYXk8YW55Pj4pIHtcbiAgICBzZXRSb3dzKHJvd3MpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DYXNoZmxvdzwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvYmFzZS5jc3NcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPldlbGNvbWU8L2gxPlxuICAgICAgICA8Q1NWQWRkIG9uQ2hhbmdlPXtoYW5kbGVDU1ZDaGFuZ2V9IC8+XG4gICAgICAgIHtyb3dzLmxlbmd0aCA+IDAgJiYgPENoYXJ0IGRhdGE9e3Jvd3N9IC8+fVxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3Jvd3MubWFwKChyKSA9PiAoXG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICB7ci5tYXAoKGNlbGwpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ZD57Y2VsbH08L3RkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/patrickmoody/Dev/cashflow/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recharts\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWNoYXJ0c1wiPzg1ZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVjaGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWNoYXJ0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///recharts\n");

/***/ })

/******/ });