"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/theme";
exports.ids = ["pages/theme"];
exports.modules = {

/***/ "./contexts/ThemeContext.js":
/*!**********************************!*\
  !*** ./contexts/ThemeContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider),\n/* harmony export */   \"useCurrentTheme\": () => (/* binding */ useCurrentTheme),\n/* harmony export */   \"useThemeToggle\": () => (/* binding */ useThemeToggle)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    currentTheme: \"light\",\n    toggleTheme: ()=>{}\n});\nconst useTheme = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n    if (!context) {\n        throw new Error(\"Theme context does not exist\");\n    }\n    return context;\n};\nconst useCurrentTheme = ()=>{\n    const { currentTheme  } = useTheme();\n    return {\n        currentTheme\n    };\n};\nconst useThemeToggle = ()=>{\n    const { toggleTheme  } = useTheme();\n    return {\n        toggleTheme\n    };\n};\nconst ThemeProvider = ({ children  })=>{\n    const [currentTheme, setCurrentTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const toggleTheme = ()=>{\n        console.log(\"toggle clicked\");\n        if (currentTheme === \"light\") setCurrentTheme(\"dark\");\n        else if (currentTheme === \"dark\") setCurrentTheme(\"light\");\n        else setCurrentTheme(\"light\");\n    };\n    const value = {\n        currentTheme,\n        toggleTheme\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbook/workshop/lectures/day-02/contexts/ThemeContext.js\",\n        lineNumber: 47,\n        columnNumber: 12\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9UaGVtZUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEQ7QUFFMUQsTUFBTUcsNkJBQWVILG9EQUFhQSxDQUFDO0lBQzNCSSxjQUFjO0lBQ2RDLGFBQWEsSUFBTSxDQUNuQjtBQUNKO0FBR0osTUFBTUMsV0FBVyxJQUFNO0lBQ25CLE1BQU1DLFVBQVVOLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJLENBQUNJLFNBQVM7UUFDVixNQUFPLElBQUlDLE1BQU0sZ0NBQStCO0lBQ3BELENBQUM7SUFFRCxPQUFPRDtBQUNYO0FBRU8sTUFBTUUsa0JBQWtCLElBQU07SUFDakMsTUFBTSxFQUFDTCxhQUFZLEVBQUMsR0FBR0U7SUFDdkIsT0FBTztRQUNIRjtJQUNKO0FBQ0osRUFBQztBQUNNLE1BQU1NLGlCQUFpQixJQUFNO0lBQ2hDLE1BQU0sRUFBQ0wsWUFBVyxFQUFDLEdBQUdDO0lBQ3RCLE9BQU87UUFDSEQ7SUFDSjtBQUNKLEVBQUM7QUFFTSxNQUFNTSxnQkFBZ0IsQ0FBQyxFQUFDQyxTQUFRLEVBQUMsR0FBSztJQUN6QyxNQUFNLENBQUNSLGNBQWNTLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNRyxjQUFjLElBQU07UUFDdEJTLFFBQVFDLEdBQUcsQ0FBQztRQUNaLElBQUlYLGlCQUFpQixTQUFTUyxnQkFBZ0I7YUFDekMsSUFBSVQsaUJBQWlCLFFBQVFTLGdCQUFnQjthQUM3Q0EsZ0JBQWdCO0lBQ3pCO0lBRUEsTUFBTUcsUUFBUTtRQUNWWjtRQUNBQztJQUNKO0lBRUEscUJBQU8sOERBQUNGLGFBQWFjLFFBQVE7UUFBQ0QsT0FBT0E7a0JBQVFKOzs7Ozs7QUFDakQsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RheS0wMi8uL2NvbnRleHRzL1RoZW1lQ29udGV4dC5qcz9iNzM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICAgICAgY3VycmVudFRoZW1lOiAnbGlnaHQnLFxuICAgICAgICB0b2dnbGVUaGVtZTogKCkgPT4ge1xuICAgICAgICB9XG4gICAgfVxuKVxuXG5jb25zdCB1c2VUaGVtZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJUaGVtZSBjb250ZXh0IGRvZXMgbm90IGV4aXN0XCIpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUN1cnJlbnRUaGVtZSA9ICgpID0+IHtcbiAgICBjb25zdCB7Y3VycmVudFRoZW1lfSA9IHVzZVRoZW1lKClcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50VGhlbWUsXG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lVG9nZ2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IHt0b2dnbGVUaGVtZX0gPSB1c2VUaGVtZSgpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlVGhlbWUsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRUaGVtZSwgc2V0Q3VycmVudFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpXG5cbiAgICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZ2dsZSBjbGlja2VkJylcbiAgICAgICAgaWYgKGN1cnJlbnRUaGVtZSA9PT0gJ2xpZ2h0Jykgc2V0Q3VycmVudFRoZW1lKCdkYXJrJylcbiAgICAgICAgZWxzZSBpZiAoY3VycmVudFRoZW1lID09PSAnZGFyaycpIHNldEN1cnJlbnRUaGVtZSgnbGlnaHQnKVxuICAgICAgICBlbHNlIHNldEN1cnJlbnRUaGVtZSgnbGlnaHQnKVxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgICBjdXJyZW50VGhlbWUsXG4gICAgICAgIHRvZ2dsZVRoZW1lLFxuICAgIH1cblxuICAgIHJldHVybiA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJUaGVtZUNvbnRleHQiLCJjdXJyZW50VGhlbWUiLCJ0b2dnbGVUaGVtZSIsInVzZVRoZW1lIiwiY29udGV4dCIsIkVycm9yIiwidXNlQ3VycmVudFRoZW1lIiwidXNlVGhlbWVUb2dnbGUiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRDdXJyZW50VGhlbWUiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/ThemeContext.js\n");

/***/ }),

/***/ "./pages/theme.js":
/*!************************!*\
  !*** ./pages/theme.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/ThemeContext */ \"./contexts/ThemeContext.js\");\n\n\n\nconst Theme = ()=>{\n    const { currentTheme  } = (0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useCurrentTheme)();\n    const { toggleTheme  } = (0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useThemeToggle)();\n    const onThemeChange = ()=>{\n        toggleTheme();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Current Theme - \",\n            currentTheme,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onThemeChange,\n                    children: \"Toggle Theme\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/workshop/lectures/day-02/pages/theme.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbook/workshop/lectures/day-02/pages/theme.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/workshop/lectures/day-02/pages/theme.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQzhDO0FBRXhFLE1BQU1HLFFBQVEsSUFBTTtJQUNoQixNQUFNLEVBQUNDLGFBQVksRUFBQyxHQUFHSCx1RUFBZUE7SUFDdEMsTUFBTSxFQUFDSSxZQUFXLEVBQUMsR0FBR0gsc0VBQWNBO0lBRXBDLE1BQU1JLGdCQUFnQixJQUFNO1FBQ3pCRDtJQUNIO0lBR0EscUJBQ0ksOERBQUNFOztZQUFJO1lBQ2dCSDswQkFDakIsOERBQUNHOzBCQUNHLDRFQUFDQztvQkFBT0MsU0FBU0g7OEJBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhEO0FBRUEsaUVBQWVILEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXktMDIvLi9wYWdlcy90aGVtZS5qcz83MmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUN1cnJlbnRUaGVtZSwgdXNlVGhlbWVUb2dnbGV9IGZyb20gXCJAL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xuXG5jb25zdCBUaGVtZSA9ICgpID0+IHtcbiAgICBjb25zdCB7Y3VycmVudFRoZW1lfSA9IHVzZUN1cnJlbnRUaGVtZSgpXG4gICAgY29uc3Qge3RvZ2dsZVRoZW1lfSA9IHVzZVRoZW1lVG9nZ2xlKClcblxuICAgIGNvbnN0IG9uVGhlbWVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgdG9nZ2xlVGhlbWUoKVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEN1cnJlbnQgVGhlbWUgLSB7Y3VycmVudFRoZW1lfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uVGhlbWVDaGFuZ2V9PlRvZ2dsZSBUaGVtZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaGVtZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUN1cnJlbnRUaGVtZSIsInVzZVRoZW1lVG9nZ2xlIiwiVGhlbWUiLCJjdXJyZW50VGhlbWUiLCJ0b2dnbGVUaGVtZSIsIm9uVGhlbWVDaGFuZ2UiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/theme.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/theme.js"));
module.exports = __webpack_exports__;

})();