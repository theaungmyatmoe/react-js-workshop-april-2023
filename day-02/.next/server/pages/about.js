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
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./contexts/UsernameContext.js":
/*!*************************************!*\
  !*** ./contexts/UsernameContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UsernameContextProvider\": () => (/* binding */ UsernameContextProvider),\n/* harmony export */   \"useUsername\": () => (/* binding */ useUsername)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UsernameContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    username: \"\",\n    changeUsername: (name)=>{}\n});\nconst useUsername = ()=>{\n    const { username , changeUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UsernameContext);\n    return {\n        username,\n        changeUsername\n    };\n};\nconst UsernameContextProvider = ({ children  })=>{\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const changeUsername = (name)=>setUsername(name);\n    const value = {\n        username,\n        changeUsername\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UsernameContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbook/workshop/lectures/day-02/contexts/UsernameContext.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9Vc2VybmFtZUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUUxRCxNQUFNRyxnQ0FBa0JILG9EQUFhQSxDQUFDO0lBQ2xDSSxVQUFVO0lBQ1ZDLGdCQUFnQixDQUFDQyxPQUFTLENBQzFCO0FBQ0o7QUFFTyxNQUFNQyxjQUFjLElBQU07SUFDN0IsTUFBTSxFQUFDSCxTQUFRLEVBQUVDLGVBQWMsRUFBQyxHQUFHSixpREFBVUEsQ0FBQ0U7SUFDOUMsT0FBTztRQUNIQztRQUNBQztJQUNKO0FBQ0osRUFBQztBQUVNLE1BQU1HLDBCQUEwQixDQUFDLEVBQUNDLFNBQVEsRUFBQyxHQUFLO0lBQ25ELE1BQU0sQ0FBQ0wsVUFBVU0sWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNRyxpQkFBaUIsQ0FBQ0MsT0FBU0ksWUFBWUo7SUFFN0MsTUFBTUssUUFBUTtRQUNWUDtRQUNBQztJQUNKO0lBRUEscUJBQ0ksOERBQUNGLGdCQUFnQlMsUUFBUTtRQUFDRCxPQUFPQTtrQkFDNUJGOzs7Ozs7QUFHYixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF5LTAyLy4vY29udGV4dHMvVXNlcm5hbWVDb250ZXh0LmpzPzE4NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFVzZXJuYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICAgIHVzZXJuYW1lOiAnJyxcbiAgICBjaGFuZ2VVc2VybmFtZTogKG5hbWUpID0+IHtcbiAgICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IHVzZVVzZXJuYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHt1c2VybmFtZSwgY2hhbmdlVXNlcm5hbWV9ID0gdXNlQ29udGV4dChVc2VybmFtZUNvbnRleHQpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGNoYW5nZVVzZXJuYW1lLFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFVzZXJuYW1lQ29udGV4dFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSAobmFtZSkgPT4gc2V0VXNlcm5hbWUobmFtZSlcblxuICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgY2hhbmdlVXNlcm5hbWUsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFVzZXJuYW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1VzZXJuYW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlVzZXJuYW1lQ29udGV4dCIsInVzZXJuYW1lIiwiY2hhbmdlVXNlcm5hbWUiLCJuYW1lIiwidXNlVXNlcm5hbWUiLCJVc2VybmFtZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwic2V0VXNlcm5hbWUiLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/UsernameContext.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_UsernameContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/UsernameContext */ \"./contexts/UsernameContext.js\");\n\n\n\n\nconst About = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { username , changeUsername  } = (0,_contexts_UsernameContext__WEBPACK_IMPORTED_MODULE_3__.useUsername)();\n    console.log(username);\n    console.log(username);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"About page\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>router.back(),\n                    className: \"px-3 py-2 bg-zinc-900 text-white\",\n                    children: \"Go back\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/workshop/lectures/day-02/pages/about.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbook/workshop/lectures/day-02/pages/about.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/workshop/lectures/day-02/pages/about.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRDtBQUNpQjtBQUV2RCxNQUFNSSxRQUFRLElBQU07SUFDaEIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCLE1BQU0sRUFBQ0ksU0FBUSxFQUFFQyxlQUFjLEVBQUMsR0FBR0osc0VBQVdBO0lBRTlDSyxRQUFRQyxHQUFHLENBQUNIO0lBRVpFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixxQkFDSSw4REFBQ0k7O1lBQUk7MEJBRUQsOERBQUNBOzBCQUNHLDRFQUFDQztvQkFDR0MsU0FBUyxJQUFNUCxPQUFPUSxJQUFJO29CQUMxQkMsV0FBVTs4QkFBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pFO0FBRUEsaUVBQWVWLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXktMDIvLi9wYWdlcy9hYm91dC5qcz8wYzQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHt1c2VVc2VybmFtZX0gZnJvbSBcIkAvY29udGV4dHMvVXNlcm5hbWVDb250ZXh0XCI7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCB7dXNlcm5hbWUsIGNoYW5nZVVzZXJuYW1lfSA9IHVzZVVzZXJuYW1lKClcblxuICAgIGNvbnNvbGUubG9nKHVzZXJuYW1lKVxuXG4gICAgY29uc29sZS5sb2codXNlcm5hbWUpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgQWJvdXQgcGFnZVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMiBiZy16aW5jLTkwMCB0ZXh0LXdoaXRlXCI+R28gYmFja1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZVVzZXJuYW1lIiwiQWJvdXQiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsImNoYW5nZVVzZXJuYW1lIiwiY29uc29sZSIsImxvZyIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/about.js"));
module.exports = __webpack_exports__;

})();