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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), uid = ref[0], setUid = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref2[0], setPassword = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newPassword = ref3[0], setNewPassword = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newEmail = ref4[0], setNewEmail = ref4[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged(function(user) {\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            } else {\n                router.push(\"/login\");\n            }\n        });\n    }, []);\n    //googleログイン\n    var googleLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_3__.googleProvider).then(function(res) {\n            // 初めてのユーザーなのか確認している。\n            var firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n        router.push(\"/Top\");\n    };\n    //emailログイン\n    var emailLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithEmailAndPassword(email, password).then(function() {\n            alert(\"ログインに成功しました！\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }).catch(function() {\n            alert(\"ログインに失敗しました。。\");\n        });\n    };\n    //   emailアカウントを作成する\n    var createEmailUser = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.createUserWithEmailAndPassword(newEmail, newPassword).then(function() {\n            alert(\"アカウントを作成しました！\");\n            setNewEmail(\"\");\n            setNewPassword(\"\");\n        }).catch(function() {\n            alert(\"失敗しました\");\n        });\n    };\n    var logout = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signOut().then(function() {\n            alert(\"ログアウトしました\");\n            router.push(\"/Login\");\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin: googleLogin,\n            emailLogin: emailLogin,\n            createEmailUser: createEmailUser,\n            logout: logout,\n            uid: uid,\n            email: email,\n            setEmail: setEmail,\n            password: password,\n            setPassword: setPassword,\n            newEmail: newEmail,\n            setNewEmail: setNewEmail,\n            newPassword: newPassword,\n            setNewPassword: setNewPassword\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 72,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s(ContextProvider, \"zJb9UqJWdvOytFbXFYvygGSmT2A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxHQURlLENBQUM7WUFDVkgsS0FBSyxDQUFDLENBQVE7UUFDTixDQUFYO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ00sTUFBTSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7UUFDcEJqQyxtREFBWSxHQUFHc0IsSUFBSSxDQUFDLFFBQ3hCLEdBRDhCLENBQUM7WUFDekJLLEtBQUssQ0FBQyxDQUFXO1lBQ2pCWCxNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFRO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxzRUFDSGhCLE9BQU8sQ0FBQ2dDLFFBQVE7UUFDZkMsS0FBSyxFQUFFLENBQUM7WUFDTmhCLFdBQVcsRUFBWEEsV0FBVztZQUNYUSxVQUFVLEVBQVZBLFVBQVU7WUFDVkcsZUFBZSxFQUFmQSxlQUFlO1lBQ2ZFLE1BQU0sRUFBTkEsTUFBTTtZQUNOM0IsR0FBRyxFQUFIQSxHQUFHO1lBQ0hFLEtBQUssRUFBTEEsS0FBSztZQUNMQyxRQUFRLEVBQVJBLFFBQVE7WUFDUkMsUUFBUSxFQUFSQSxRQUFRO1lBQ1JDLFdBQVcsRUFBWEEsV0FBVztZQUNYRyxRQUFRLEVBQVJBLFFBQVE7WUFDUkMsV0FBVyxFQUFYQSxXQUFXO1lBQ1hILFdBQVcsRUFBWEEsV0FBVztZQUNYQyxjQUFjLEVBQWRBLGNBQWM7UUFDaEIsQ0FBQzs7Ozs7OztrQkFFQVIsUUFBUTs7QUFHZixDQUFDO0dBckZLRCxlQUFlOztRQU1KTCxrREFBUzs7O0tBTnBCSyxlQUFlO0FBdUZyQiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGV4dC5qcz9lZDA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGF1dGgsIGRiLCBnb29nbGVQcm92aWRlciB9IGZyb20gXCIuL2ZpcmViYXNlXCI7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1aWQsIHNldFVpZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2VtYWlsLHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtwYXNzd29yZCxzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbmV3UGFzc3dvcmQsc2V0TmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW25ld0VtYWlsLCBzZXROZXdFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgLy8g6Ieq5YiG44Gu44Ki44Kr44Km44Oz44OI44GudWlk44KSc3RhdGXjgafnrqHnkIbjgZnjgotcbiAgICAgICAgc2V0VWlkKHVzZXIudWlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy9nb29nbGXjg63jgrDjgqTjg7NcbiAgY29uc3QgZ29vZ2xlTG9naW4gPSAoKSA9PiB7XG4gICAgYXV0aC5zaWduSW5XaXRoUG9wdXAoZ29vZ2xlUHJvdmlkZXIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgLy8g5Yid44KB44Gm44Gu44Om44O844K244O844Gq44Gu44GL56K66KqN44GX44Gm44GE44KL44CCXG4gICAgICBjb25zdCBmaXJzdExvZ2luID0gcmVzLmFkZGl0aW9uYWxVc2VySW5mby5pc05ld1VzZXI7XG4gICAgICBpZiAoZmlyc3RMb2dpbikge1xuICAgICAgICBhbGVydChcIuWIneOCgeOBpuOBruODpuODvOOCtuODvOOBruODreOCsOOCpOODs+OCkueiuuiqjeOBl+OBvuOBl+OBn++8gVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwi5pei5a2Y44Gu44Om44O844K244O844Ot44Kw44Kk44Oz44KS56K66KqN44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJvdXRlci5wdXNoKFwiL1RvcFwiKTtcbiAgfTtcblxuICAvL2VtYWls44Ot44Kw44Kk44OzXG4gIGNvbnN0IGVtYWlsTG9naW4gPSAoKSA9PiB7XG4gICAgYXV0aFxuICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCLjg63jgrDjgqTjg7PjgavmiJDlip/jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBhbGVydChcIuODreOCsOOCpOODs+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAguOAglwiKTtcbiAgICAgIH0pO1xuICB9O1xuICAvLyAgIGVtYWls44Ki44Kr44Km44Oz44OI44KS5L2c5oiQ44GZ44KLXG4gIGNvbnN0IGNyZWF0ZUVtYWlsVXNlciA9ICgpID0+IHtcbiAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChuZXdFbWFpbCwgbmV3UGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xuICAgICAgYWxlcnQoXCLjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJDjgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICBzZXROZXdFbWFpbChcIlwiKTtcbiAgICAgIHNldE5ld1Bhc3N3b3JkKFwiXCIpO1xuICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICAgIGFsZXJ0KFwi5aSx5pWX44GX44G+44GX44GfXCIpXG4gICAgfSlcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XG4gICAgICBhbGVydChcIuODreOCsOOCouOCpuODiOOBl+OBvuOBl+OBn1wiKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL0xvZ2luXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGdvb2dsZUxvZ2luLFxuICAgICAgICBlbWFpbExvZ2luLFxuICAgICAgICBjcmVhdGVFbWFpbFVzZXIsXG4gICAgICAgIGxvZ291dCxcbiAgICAgICAgdWlkLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgc2V0RW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBzZXRQYXNzd29yZCxcbiAgICAgICAgbmV3RW1haWwsXG4gICAgICAgIHNldE5ld0VtYWlsLFxuICAgICAgICBuZXdQYXNzd29yZCxcbiAgICAgICAgc2V0TmV3UGFzc3dvcmQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwiZGIiLCJnb29nbGVQcm92aWRlciIsIkNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVpZCIsInNldFVpZCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsIm5ld0VtYWlsIiwic2V0TmV3RW1haWwiLCJyb3V0ZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwicHVzaCIsImdvb2dsZUxvZ2luIiwic2lnbkluV2l0aFBvcHVwIiwidGhlbiIsInJlcyIsImZpcnN0TG9naW4iLCJhZGRpdGlvbmFsVXNlckluZm8iLCJpc05ld1VzZXIiLCJhbGVydCIsImVtYWlsTG9naW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImNhdGNoIiwiY3JlYXRlRW1haWxVc2VyIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibG9nb3V0Iiwic2lnbk91dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ })

});