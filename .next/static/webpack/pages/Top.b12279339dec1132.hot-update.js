"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Top",{

/***/ "./pages/Top.js":
/*!**********************!*\
  !*** ./pages/Top.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Context */ \"./components/Context.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Top = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var uid = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_3__.Context).uid;\n    //   useEffect(() => {\n    //     if (!uid) {\n    //       router.push(\"/login\");\n    //     }\n    //   }, [uid]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/Top.js\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/Top.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"トップページ\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: logout,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/Top.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"ログアウト\"\n            })\n        ]\n    }));\n};\n_s(Top, \"2moFZHhLPLcFHC1k1tYpspjYycg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Top;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Top);\nvar _c;\n$RefreshReg$(_c, \"Top\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Ub3AuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvRDtBQUNiO0FBQ1E7OztBQUUvQyxHQUFLLENBQUNLLEdBQUcsR0FBRyxRQUNaLEdBRGtCLENBQUM7O0lBQ2pCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUN4QixHQUFLLENBQUdJLEdBQUcsR0FBS0wsaURBQVUsQ0FBQ0Usd0RBQU8sRUFBMUJHLEdBQUc7SUFFYixFQUFzQjtJQUN0QixFQUFrQjtJQUNsQixFQUErQjtJQUMvQixFQUFRO0lBQ1IsRUFBZTtJQUViLE1BQU0sdUVBQ0hDLENBQUc7Ozs7Ozs7O2lGQUNEQyxDQUFFOzs7Ozs7OzBCQUFDLENBQU07O2lGQUNHQyxDQUFOO2dCQUFDQyxPQUFPLEVBQUVDLE1BQU07Ozs7Ozs7MEJBQUUsQ0FBSzs7OztBQUlwQyxDQUFDO0dBakJLUCxHQUFHOztRQUNRRixrREFBUzs7O0tBRHBCRSxHQUFHO0FBbUJULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVG9wLmpzP2VkNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dFwiO1xuXG5jb25zdCBUb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHVpZCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGlmICghdWlkKSB7XG4vLyAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbi8vICAgICB9XG4vLyAgIH0sIFt1aWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+44OI44OD44OX44Oa44O844K4PC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT7jg63jgrDjgqLjgqbjg4g8L2J1dHRvbj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsIkNvbnRleHQiLCJUb3AiLCJyb3V0ZXIiLCJ1aWQiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Top.js\n");

/***/ })

});