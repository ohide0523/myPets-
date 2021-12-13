"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Context.js":
/*!*******************************!*\
  !*** ./components/Context.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    con;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged(function(user) {\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            }\n        });\n    }, []);\n    var googleLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_2__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_2__.googleProvider).then(function(res) {\n            // 初めてのユーザーなのか確認している。\n            var firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin: googleLogin\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 30,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s(ContextProvider, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUU7QUFDWjs7O0FBRTlDLEdBQUssQ0FBQ08sT0FBTyxpQkFBR04sb0RBQWE7QUFFcEMsR0FBSyxDQUFDTyxlQUFlLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDL0JDLEdBQUc7SUFDTFAsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZkMsOERBQXVCLENBQUMsUUFBUSxDQUFQUSxJQUFJLEVBQUssQ0FBQztZQUNqQyxFQUFFLEVBQUVBLElBQUksRUFBRSxDQUFDO2dCQUNULEVBQTBCO2dCQUNJQyxNQUF4QixDQUFDRCxJQUFJLENBQUNFLEdBQUc7WUFDakIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztRQUN6QlgsMkRBQW9CLENBQUNFLHFEQUFjLEVBQUVXLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO1lBQ2xELEVBQXFCO1lBQ2UsR0FBL0IsQ0FBQ0MsVUFBVSxHQUFHRCxHQUFHLENBQUNFLGtCQUFrQixDQUFDQyxTQUFTO1lBQ25ELEVBQUUsRUFBRUYsVUFBVSxFQUFFLENBQUM7Z0JBQ2ZHLEtBQUssQ0FBQyxDQUF1QjtZQUNXLENBQXpDLE1BQU0sQ0FBQztnQkFDTkEsS0FBSyxDQUFDLENBQXFCO1lBQzdCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sc0VBQ0hmLE9BQU8sQ0FBQ2dCLFFBQVE7UUFDZkMsS0FBSyxFQUFFLENBQUM7WUFDTlQsV0FBVyxFQUFYQSxXQUFXO1FBQ2IsQ0FBQzs7Ozs7OztrQkFFQU4sUUFBUTs7QUFHZixDQUFDO0dBaENLRCxlQUFlO0tBQWZBLGVBQWU7QUFrQ3JCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250ZXh0LmpzP2VkMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGF1dGgsIGRiLCBnb29nbGVQcm92aWRlciB9IGZyb20gXCIuL2ZpcmViYXNlXCI7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIC8vIOiHquWIhuOBruOCouOCq+OCpuODs+ODiOOBrnVpZOOCknN0YXRl44Gn566h55CG44GZ44KLXG4gICAgICAgIHNldFVpZCh1c2VyLnVpZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnb29nbGVMb2dpbiA9ICgpID0+IHtcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChnb29nbGVQcm92aWRlcikudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyDliJ3jgoHjgabjga7jg6bjg7zjgrbjg7zjgarjga7jgYvnorroqo3jgZfjgabjgYTjgovjgIJcbiAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSByZXMuYWRkaXRpb25hbFVzZXJJbmZvLmlzTmV3VXNlcjtcbiAgICAgIGlmIChmaXJzdExvZ2luKSB7XG4gICAgICAgIGFsZXJ0KFwi5Yid44KB44Gm44Gu44Om44O844K244O844Gu44Ot44Kw44Kk44Oz44KS56K66KqN44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCLml6LlrZjjga7jg6bjg7zjgrbjg7zjg63jgrDjgqTjg7PjgpLnorroqo3jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZ29vZ2xlTG9naW4sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhdXRoIiwiZGIiLCJnb29nbGVQcm92aWRlciIsIkNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNvbiIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJzZXRVaWQiLCJ1aWQiLCJnb29nbGVMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXMiLCJmaXJzdExvZ2luIiwiYWRkaXRpb25hbFVzZXJJbmZvIiwiaXNOZXdVc2VyIiwiYWxlcnQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ })

});