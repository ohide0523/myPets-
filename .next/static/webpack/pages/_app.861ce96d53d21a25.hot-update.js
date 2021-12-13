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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), uid = ref[0], setUid = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), nemail = ref1[0], setNewEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref2[0], setPassword = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged(function(user) {\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            } else {\n                router.push(\"/login\");\n            }\n        });\n    }, []);\n    //googleログイン\n    var googleLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_3__.googleProvider).then(function(res) {\n            // 初めてのユーザーなのか確認している。\n            var firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n        router.push(\"/Top\");\n    };\n    //emailログイン\n    var emailLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithEmailAndPassword(email, password).then(function() {\n            alert(\"ログインに成功しました！\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }).catch(function() {\n            alert(\"ログインに失敗しました。。\");\n        });\n    };\n    //   emailアカウントを作成する\n    var createEmailUser = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.createUserWithEmailAndPassword(newEmail, newPassword).then(function() {\n            alert(\"アカウントを作成しました！\");\n            setNewEmail(\"\");\n            setNewPassword(\"\");\n        });\n    };\n    var logout = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signOut().then(function() {\n            alert(\"ログアウトしました\");\n            router.push(\"/Login\");\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin: googleLogin,\n            emailLogin: emailLogin,\n            createEmailUser: createEmailUser,\n            logout: logout,\n            uid: uid,\n            email: email,\n            setEmail: setEmail,\n            password: password,\n            setPassword: setPassword\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 68,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s(ContextProvider, \"yBz9BBqoX7oh/a1jBjJdIDymfPg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7UUFDZkMsS0FBSyxFQUFFLENBQUM7WUFDTnJCLFdBQVcsRUFBWEEsV0FBVztZQUNYUSxVQUFVLEVBQVZBLFVBQVU7WUFDVkssZUFBZSxFQUFmQSxlQUFlO1lBQ2ZLLE1BQU0sRUFBTkEsTUFBTTtZQUNONUIsR0FBRyxFQUFIQSxHQUFHO1lBQ0hvQixLQUFLLEVBQUxBLEtBQUs7WUFDTEMsUUFBUSxFQUFSQSxRQUFRO1lBQ1JqQixRQUFRLEVBQVJBLFFBQVE7WUFDUkMsV0FBVyxFQUFYQSxXQUFXO1FBQ2IsQ0FBQzs7Ozs7OztrQkFFQU4sUUFBUTs7QUFHZixDQUFDO0dBN0VLRCxlQUFlOztRQUlKTCxrREFBUzs7O0tBSnBCSyxlQUFlO0FBK0VyQiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGV4dC5qcz9lZDA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGF1dGgsIGRiLCBnb29nbGVQcm92aWRlciB9IGZyb20gXCIuL2ZpcmViYXNlXCI7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1aWQsIHNldFVpZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW25lbWFpbCwgc2V0TmV3RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIC8vIOiHquWIhuOBruOCouOCq+OCpuODs+ODiOOBrnVpZOOCknN0YXRl44Gn566h55CG44GZ44KLXG4gICAgICAgIHNldFVpZCh1c2VyLnVpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vZ29vZ2xl44Ot44Kw44Kk44OzXG4gIGNvbnN0IGdvb2dsZUxvZ2luID0gKCkgPT4ge1xuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKGdvb2dsZVByb3ZpZGVyKS50aGVuKChyZXMpID0+IHtcbiAgICAgIC8vIOWIneOCgeOBpuOBruODpuODvOOCtuODvOOBquOBruOBi+eiuuiqjeOBl+OBpuOBhOOCi+OAglxuICAgICAgY29uc3QgZmlyc3RMb2dpbiA9IHJlcy5hZGRpdGlvbmFsVXNlckluZm8uaXNOZXdVc2VyO1xuICAgICAgaWYgKGZpcnN0TG9naW4pIHtcbiAgICAgICAgYWxlcnQoXCLliJ3jgoHjgabjga7jg6bjg7zjgrbjg7zjga7jg63jgrDjgqTjg7PjgpLnorroqo3jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIuaXouWtmOOBruODpuODvOOCtuODvOODreOCsOOCpOODs+OCkueiuuiqjeOBl+OBvuOBl+OBn++8gVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByb3V0ZXIucHVzaChcIi9Ub3BcIik7XG4gIH07XG5cbiAgLy9lbWFpbOODreOCsOOCpOODs1xuICBjb25zdCBlbWFpbExvZ2luID0gKCkgPT4ge1xuICAgIGF1dGhcbiAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwi44Ot44Kw44Kk44Oz44Gr5oiQ5Yqf44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgICBzZXRFbWFpbChcIlwiKTtcbiAgICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCLjg63jgrDjgqTjg7PjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjgIJcIik7XG4gICAgICB9KTtcbiAgfTtcbi8vICAgZW1haWzjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJDjgZnjgotcbmNvbnN0IGNyZWF0ZUVtYWlsVXNlciA9KCk9PntcbiAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChuZXdFbWFpbCwgbmV3UGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xuICAgICAgICBhbGVydChcIuOCouOCq+OCpuODs+ODiOOCkuS9nOaIkOOBl+OBvuOBl+OBn++8gVwiKTsgXG4gICAgICAgIHNldE5ld0VtYWlsKFwiXCIpO1xuICAgICAgICBzZXROZXdQYXNzd29yZChcIlwiKTtcbiAgICAgIH0pO1xufVxuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcbiAgICAgIGFsZXJ0KFwi44Ot44Kw44Ki44Km44OI44GX44G+44GX44GfXCIpO1xuICAgICAgcm91dGVyLnB1c2goXCIvTG9naW5cIik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZ29vZ2xlTG9naW4sXG4gICAgICAgIGVtYWlsTG9naW4sXG4gICAgICAgIGNyZWF0ZUVtYWlsVXNlcixcbiAgICAgICAgbG9nb3V0LFxuICAgICAgICB1aWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBzZXRFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIHNldFBhc3N3b3JkLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFByb3ZpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXV0aCIsImRiIiwiZ29vZ2xlUHJvdmlkZXIiLCJDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1aWQiLCJzZXRVaWQiLCJuZW1haWwiLCJzZXROZXdFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwicHVzaCIsImdvb2dsZUxvZ2luIiwic2lnbkluV2l0aFBvcHVwIiwidGhlbiIsInJlcyIsImZpcnN0TG9naW4iLCJhZGRpdGlvbmFsVXNlckluZm8iLCJpc05ld1VzZXIiLCJhbGVydCIsImVtYWlsTG9naW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwic2V0RW1haWwiLCJjYXRjaCIsImNyZWF0ZUVtYWlsVXNlciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsIm5ld0VtYWlsIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsImxvZ291dCIsInNpZ25PdXQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ })

});