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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), uid = ref[0], setUid = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref2[0], setPassword = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged(function(user) {\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            } else {\n                router.push(\"/login\");\n            }\n        });\n    }, []);\n    //googleログイン\n    var googleLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_3__.googleProvider).then(function(res) {\n            // 初めてのユーザーなのか確認している。\n            var firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n        router.push(\"/Top\");\n    };\n    //emailログイン\n    var emailLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithEmailAndPassword(email, password).then(function() {\n            alert(\"ログインに成功しました！\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }).catch(function() {\n            alert(\"ログインに失敗しました。。\");\n        });\n    };\n    //   emailアカウントを作成する\n    var createEmailUser = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.createUserWithEmailAndPassword(email, password).then(function(res) {\n            alert(\"アカウントを作成しました！\");\n            setEmail(\"\");\n            setPassword(\"\");\n        });\n    };\n    var logout = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signOut().then(function() {\n            alert(\"ログアウトしました\");\n            router.push(\"/Login\");\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin: googleLogin,\n            emailLogin: emailLogin,\n            logout: logout,\n            uid: uid,\n            email: email,\n            setEmail: setEmail,\n            password: password,\n            setPassword: setPassword\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 69,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s(ContextProvider, \"yBz9BBqoX7oh/a1jBjJdIDymfPg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixRQUFRO1FBQ2ZDLEtBQUssRUFBRSxDQUFDO1lBQ05oQixXQUFXLEVBQVhBLFdBQVc7WUFDWFEsVUFBVSxFQUFWQSxVQUFVO1lBQ1ZLLE1BQU0sRUFBTkEsTUFBTTtZQUNOdkIsR0FBRyxFQUFIQSxHQUFHO1lBQ0hFLEtBQUssRUFBTEEsS0FBSztZQUNMQyxRQUFRLEVBQVJBLFFBQVE7WUFDUkMsUUFBUSxFQUFSQSxRQUFRO1lBQ1JDLFdBQVcsRUFBWEEsV0FBVztRQUNiLENBQUM7Ozs7Ozs7a0JBRUFOLFFBQVE7O0FBR2YsQ0FBQztHQTdFS0QsZUFBZTs7UUFJSkwsa0RBQVM7OztLQUpwQkssZUFBZTtBQStFckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRleHQuanM/ZWQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBhdXRoLCBkYiwgZ29vZ2xlUHJvdmlkZXIgfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdWlkLCBzZXRVaWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIC8vIOiHquWIhuOBruOCouOCq+OCpuODs+ODiOOBrnVpZOOCknN0YXRl44Gn566h55CG44GZ44KLXG4gICAgICAgIHNldFVpZCh1c2VyLnVpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vZ29vZ2xl44Ot44Kw44Kk44OzXG4gIGNvbnN0IGdvb2dsZUxvZ2luID0gKCkgPT4ge1xuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKGdvb2dsZVByb3ZpZGVyKS50aGVuKChyZXMpID0+IHtcbiAgICAgIC8vIOWIneOCgeOBpuOBruODpuODvOOCtuODvOOBquOBruOBi+eiuuiqjeOBl+OBpuOBhOOCi+OAglxuICAgICAgY29uc3QgZmlyc3RMb2dpbiA9IHJlcy5hZGRpdGlvbmFsVXNlckluZm8uaXNOZXdVc2VyO1xuICAgICAgaWYgKGZpcnN0TG9naW4pIHtcbiAgICAgICAgYWxlcnQoXCLliJ3jgoHjgabjga7jg6bjg7zjgrbjg7zjga7jg63jgrDjgqTjg7PjgpLnorroqo3jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIuaXouWtmOOBruODpuODvOOCtuODvOODreOCsOOCpOODs+OCkueiuuiqjeOBl+OBvuOBl+OBn++8gVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByb3V0ZXIucHVzaChcIi9Ub3BcIik7XG4gIH07XG5cbiAgLy9lbWFpbOODreOCsOOCpOODs1xuICBjb25zdCBlbWFpbExvZ2luID0gKCkgPT4ge1xuICAgIGF1dGhcbiAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwi44Ot44Kw44Kk44Oz44Gr5oiQ5Yqf44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgICBzZXRFbWFpbChcIlwiKTtcbiAgICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCLjg63jgrDjgqTjg7PjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjgIJcIik7XG4gICAgICB9KTtcbiAgfTtcbi8vICAgZW1haWzjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJDjgZnjgotcbmNvbnN0IGNyZWF0ZUVtYWlsVXNlciA9KCk9PntcbiAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBhbGVydChcIuOCouOCq+OCpuODs+ODiOOCkuS9nOaIkOOBl+OBvuOBl+OBn++8gVwiKTtcbiBcbiAgICAgICAgc2V0RW1haWwoXCJcIik7XG4gICAgICAgIHNldFBhc3N3b3JkKFwiXCIpO1xuICAgICAgfSk7XG59XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xuICAgICAgYWxlcnQoXCLjg63jgrDjgqLjgqbjg4jjgZfjgb7jgZfjgZ9cIik7XG4gICAgICByb3V0ZXIucHVzaChcIi9Mb2dpblwiKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBnb29nbGVMb2dpbixcbiAgICAgICAgZW1haWxMb2dpbixcbiAgICAgICAgbG9nb3V0LFxuICAgICAgICB1aWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBzZXRFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIHNldFBhc3N3b3JkLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFByb3ZpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXV0aCIsImRiIiwiZ29vZ2xlUHJvdmlkZXIiLCJDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1aWQiLCJzZXRVaWQiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJwdXNoIiwiZ29vZ2xlTG9naW4iLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzIiwiZmlyc3RMb2dpbiIsImFkZGl0aW9uYWxVc2VySW5mbyIsImlzTmV3VXNlciIsImFsZXJ0IiwiZW1haWxMb2dpbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY2F0Y2giLCJjcmVhdGVFbWFpbFVzZXIiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJsb2dvdXQiLCJzaWduT3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ })

});