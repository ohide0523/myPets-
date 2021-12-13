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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ \"./components/Context.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar login = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_4__.Context), uid = ref.uid, email = ref.email, setEmail = ref.setEmail, password = ref.password, setPassword = ref.setPassword, newEmail = ref.newEmail, setNewEmail = ref.setNewEmail, newPassword = ref.newPassword, setNewPassword = ref.setNewPassword, emailLogin = ref.emailLogin, createEmailUsergoogleLogin = ref.createEmailUsergoogleLogin;\n    var onClickTop = function() {\n        if (uid) {\n            router.push(\"/Top\");\n        } else {\n            alert(\"ログインしてください。。\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"ログインページ\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: googleLogin,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Googleログイン\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailログインはこちら\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"email\",\n                value: email,\n                onChange: function(e) {\n                    return setEmail(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"password\",\n                value: password,\n                onChange: function(e) {\n                    return setPassword(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: emailLogin,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailログインする\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailアカウント作成はこちら\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"newEmail\",\n                value: newEmail,\n                onChange: function(e) {\n                    return setNewEmail(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"newPassword\",\n                value: newPassword,\n                onChange: function(e) {\n                    return setNewPassword(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailアカウント作成する\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                onClick: onClickTop,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"トップページへ\"\n            })\n        ]\n    }));\n};\n_s(login, \"VaAVNKMAjUIGO3azh/iJVnp6gv8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0XCI7XG5cbmNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1aWQsZW1haWwsc2V0RW1haWwscGFzc3dvcmQsc2V0UGFzc3dvcmQsbmV3RW1haWwsc2V0TmV3RW1haWwsbmV3UGFzc3dvcmQsc2V0TmV3UGFzc3dvcmQsZW1haWxMb2dpbixjcmVhdGVFbWFpbFVzZXJnb29nbGVMb2dpbiB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBvbkNsaWNrVG9wID0gKCkgPT4ge1xuICAgIGlmICh1aWQpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1RvcFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCLjg63jgrDjgqTjg7PjgZfjgabjgY/jgaDjgZXjgYTjgILjgIJcIik7XG4gICAgfVxuICB9O1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+44Ot44Kw44Kk44Oz44Oa44O844K4PC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17Z29vZ2xlTG9naW59Pkdvb2dsZeODreOCsOOCpOODszwvYnV0dG9uPlxuICAgICAgPGRpdj5lbWFpbOODreOCsOOCpOODs+OBr+OBk+OBoeOCiTwvZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2U9PnNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2U9PnNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlbWFpbExvZ2lufT5lbWFpbOODreOCsOOCpOODs+OBmeOCizwvYnV0dG9uPlxuXG4gICAgICA8ZGl2PmVtYWls44Ki44Kr44Km44Oz44OI5L2c5oiQ44Gv44GT44Gh44KJPC9kaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cIm5ld0VtYWlsXCIgdmFsdWU9e25ld0VtYWlsfSBvbkNoYW5nZT17ZT0+c2V0TmV3RW1haWwoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICA8aW5wdXQgdHlwZT1cIm5ld1Bhc3N3b3JkXCIgdmFsdWU9e25ld1Bhc3N3b3JkfSBvbkNoYW5nZT17ZT0+c2V0TmV3UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICA8YnV0dG9uPmVtYWls44Ki44Kr44Km44Oz44OI5L2c5oiQ44GZ44KLPC9idXR0b24+XG5cbiAgICAgIDxkaXYgb25DbGljaz17b25DbGlja1RvcH0+44OI44OD44OX44Oa44O844K444G4PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsImxvZ2luIiwicm91dGVyIiwidWlkIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJuZXdFbWFpbCIsInNldE5ld0VtYWlsIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsImVtYWlsTG9naW4iLCJjcmVhdGVFbWFpbFVzZXJnb29nbGVMb2dpbiIsIm9uQ2xpY2tUb3AiLCJwdXNoIiwiYWxlcnQiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJnb29nbGVMb2dpbiIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});