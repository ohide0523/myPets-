"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ \"./components/Context.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar login = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_4__.Context), googleLogin = ref.googleLogin, logout = ref.logout;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var uid = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_4__.Context).uid;\n    var onClickTop = function() {\n        if (uid) {\n            router.push(\"/Top\");\n        } else {\n            alert(\"ログインしてください。。\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"ログインページ\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: googleLogin,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Googleログイン\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: logout,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"ログアウト\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                onClick: onClickTop,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 27,\n                    columnNumber: 16\n                },\n                __self: _this,\n                children: \"トップページへ\"\n            })\n        ]\n    }));\n};\n_s(login, \"X3UoNO/kaIlEM1sxmYpcUOE7URY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDVTtBQUNBO0FBRU87OztBQUU3QyxHQUFLLENBQUNLLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7O0lBQ3JCLEdBQUssQ0FBd0JGLEdBQW1CLEdBQW5CQSxpREFBVSxDQUFDQyx3REFBTyxHQUF4Q0UsV0FBVyxHQUFXSCxHQUFtQixDQUF6Q0csV0FBVyxFQUFDQyxNQUFNLEdBQUlKLEdBQW1CLENBQTdCSSxNQUFNO0lBQ3pCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHUCxzREFBUztJQUN4QixHQUFLLENBQUVRLEdBQUcsR0FBSU4saURBQVUsQ0FBQ0Msd0RBQU8sRUFBekJLLEdBQUc7SUFFVixHQUFLLENBQUNDLFVBQVUsR0FBQyxRQUNmLEdBRG1CLENBQUM7UUFDbEIsRUFBRSxFQUFDRCxHQUFHLEVBQUMsQ0FBQztZQUNKRCxNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFNO1FBQ3RCLENBQUMsTUFBSSxDQUFDO1lBQ0ZDLEtBQUssQ0FBQyxDQUFjO1FBQ0EsQ0FBdkI7SUFDTCxDQUFDO0lBR0csTUFBTSx1RUFDREMsQ0FBRzs7Ozs7Ozs7aUZBQ0NDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBTzs7aUZBQ0lDLENBQVI7Z0JBQUNDLE9BQU8sRUFBRVYsV0FBVzs7Ozs7OzswQkFBRSxDQUFVOztpRkFDL0JTLENBQUY7Z0JBQUNDLE9BQU8sRUFBRVQsTUFBTTs7Ozs7OzswQkFBRSxDQUFLOztpRkFFaEJNLENBQVA7Z0JBQUNHLE9BQU8sRUFBRU4sVUFBVTs7Ozs7OzswQkFBRSxDQUFPOzs7O0FBSWhELENBQUM7R0F4QktMLEtBQUs7O1FBRUlKLGtEQUFTOzs7QUF3QnhCLCtEQUFlSSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge3VzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgUmVhY3Qse3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge0NvbnRleHR9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHRcIlxuXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcbmNvbnN0IHtnb29nbGVMb2dpbixsb2dvdXR9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbmNvbnN0IHt1aWR9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuXG5jb25zdCBvbkNsaWNrVG9wPSgpPT57XG4gICAgaWYodWlkKXtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvVG9wXCIpXG4gICAgfWVsc2V7XG4gICAgICAgIGFsZXJ0KFwi44Ot44Kw44Kk44Oz44GX44Gm44GP44Gg44GV44GE44CC44CCXCIpXG4gICAgfVxufVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPuODreOCsOOCpOODs+ODmuODvOOCuDwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvb2dsZUxvZ2lufT5Hb29nbGXjg63jgrDjgqTjg7M8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT7jg63jgrDjgqLjgqbjg4g8L2J1dHRvbj5cbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tUb3B9PuODiOODg+ODl+ODmuODvOOCuOOBuDwvZGl2PlxuICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpblxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwibG9naW4iLCJnb29nbGVMb2dpbiIsImxvZ291dCIsInJvdXRlciIsInVpZCIsIm9uQ2xpY2tUb3AiLCJwdXNoIiwiYWxlcnQiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});