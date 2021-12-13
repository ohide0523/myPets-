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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), uid = ref[0], setUid = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var _useState = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState, 2), newPassword = _useState[0], setPassword = _useState[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newEmail = ref2[0], setNewEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newPassword = ref3[0], setNewPassword = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged(function(user) {\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            } else {\n                router.push(\"/login\");\n            }\n        });\n    }, []);\n    //googleログイン\n    var googleLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_3__.googleProvider).then(function(res) {\n            // 初めてのユーザーなのか確認している。\n            var firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n        router.push(\"/Top\");\n    };\n    //emailログイン\n    var emailLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithEmailAndPassword(email, password).then(function() {\n            alert(\"ログインに成功しました！\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }).catch(function() {\n            alert(\"ログインに失敗しました。。\");\n        });\n    };\n    //   emailアカウントを作成する\n    var createEmailUser = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.createUserWithEmailAndPassword(newEmail, newPassword).then(function() {\n            alert(\"アカウントを作成しました！\");\n            setNewEmail(\"\");\n            setNewPassword(\"\");\n        });\n    };\n    var logout = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signOut().then(function() {\n            alert(\"ログアウトしました\");\n            router.push(\"/Login\");\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin: googleLogin,\n            emailLogin: emailLogin,\n            createEmailUser: createEmailUser,\n            logout: logout,\n            uid: uid,\n            email: email,\n            setEmail: setEmail,\n            password: password,\n            setPassword: setPassword,\n            newEmail: newEmail,\n            setNewEmail: setNewEmail,\n            newPassword: newPassword,\n            setNewPassword: setNewPassword\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 70,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s1(ContextProvider, \"BgEyIUqjg8IsR7drTsFpn7y2pQs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ21CLE1BQU0sR0FBRyxRQUNqQixHQUR1QixDQUFDO1FBQ3BCakMsbURBQVksR0FBR3FCLElBQUksQ0FBQyxRQUN4QixHQUQ4QixDQUFDO1lBQ3pCSyxLQUFLLENBQUMsQ0FBVztZQUNqQlgsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBUTtRQUN0QixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sc0VBQ0hmLE9BQU8sQ0FBQ2dDLFFBQVE7UUFDZkMsS0FBSyxFQUFFLENBQUM7WUFDTmpCLFdBQVcsRUFBWEEsV0FBVztZQUNYUSxVQUFVLEVBQVZBLFVBQVU7WUFDVkksZUFBZSxFQUFmQSxlQUFlO1lBQ2ZFLE1BQU0sRUFBTkEsTUFBTTtZQUNOM0IsR0FBRyxFQUFIQSxHQUFHO1lBQ0hFLEtBQUssRUFBTEEsS0FBSztZQUNMQyxRQUFRLEVBQVJBLFFBQVE7WUFDUm9CLFFBQVEsRUFBUkEsUUFBUTtZQUNSbEIsV0FBVyxFQUFYQSxXQUFXO1lBQ1hDLFFBQVEsRUFBUkEsUUFBUTtZQUNSQyxXQUFXLEVBQVhBLFdBQVc7WUFDWEgsV0FBVyxFQUFYQSxXQUFXO1lBQ1hJLGNBQWMsRUFBZEEsY0FBYztRQUNoQixDQUFDOzs7Ozs7O2tCQUVBVCxRQUFROztBQUdmLENBQUM7SUFuRktELGVBQWU7O1FBTUpMLGtEQUFTOzs7S0FOcEJLLGVBQWU7QUFxRnJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250ZXh0LmpzP2VkMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgYXV0aCwgZGIsIGdvb2dsZVByb3ZpZGVyIH0gZnJvbSBcIi4vZmlyZWJhc2VcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VpZCwgc2V0VWlkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZW1haWwsc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW25ld1Bhc3N3b3JkLHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlXG4gIGNvbnN0IFtuZXdFbWFpbCwgc2V0TmV3RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuZXdQYXNzd29yZCwgc2V0TmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIC8vIOiHquWIhuOBruOCouOCq+OCpuODs+ODiOOBrnVpZOOCknN0YXRl44Gn566h55CG44GZ44KLXG4gICAgICAgIHNldFVpZCh1c2VyLnVpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vZ29vZ2xl44Ot44Kw44Kk44OzXG4gIGNvbnN0IGdvb2dsZUxvZ2luID0gKCkgPT4ge1xuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKGdvb2dsZVByb3ZpZGVyKS50aGVuKChyZXMpID0+IHtcbiAgICAgIC8vIOWIneOCgeOBpuOBruODpuODvOOCtuODvOOBquOBruOBi+eiuuiqjeOBl+OBpuOBhOOCi+OAglxuICAgICAgY29uc3QgZmlyc3RMb2dpbiA9IHJlcy5hZGRpdGlvbmFsVXNlckluZm8uaXNOZXdVc2VyO1xuICAgICAgaWYgKGZpcnN0TG9naW4pIHtcbiAgICAgICAgYWxlcnQoXCLliJ3jgoHjgabjga7jg6bjg7zjgrbjg7zjga7jg63jgrDjgqTjg7PjgpLnorroqo3jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIuaXouWtmOOBruODpuODvOOCtuODvOODreOCsOOCpOODs+OCkueiuuiqjeOBl+OBvuOBl+OBn++8gVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByb3V0ZXIucHVzaChcIi9Ub3BcIik7XG4gIH07XG5cbiAgLy9lbWFpbOODreOCsOOCpOODs1xuICBjb25zdCBlbWFpbExvZ2luID0gKCkgPT4ge1xuICAgIGF1dGhcbiAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwi44Ot44Kw44Kk44Oz44Gr5oiQ5Yqf44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgICBzZXRFbWFpbChcIlwiKTtcbiAgICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCLjg63jgrDjgqTjg7PjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjgIJcIik7XG4gICAgICB9KTtcbiAgfTtcbiAgLy8gICBlbWFpbOOCouOCq+OCpuODs+ODiOOCkuS9nOaIkOOBmeOCi1xuICBjb25zdCBjcmVhdGVFbWFpbFVzZXIgPSAoKSA9PiB7XG4gICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQobmV3RW1haWwsIG5ld1Bhc3N3b3JkKS50aGVuKCgpID0+IHtcbiAgICAgIGFsZXJ0KFwi44Ki44Kr44Km44Oz44OI44KS5L2c5oiQ44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgc2V0TmV3RW1haWwoXCJcIik7XG4gICAgICBzZXROZXdQYXNzd29yZChcIlwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XG4gICAgICBhbGVydChcIuODreOCsOOCouOCpuODiOOBl+OBvuOBl+OBn1wiKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL0xvZ2luXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGdvb2dsZUxvZ2luLFxuICAgICAgICBlbWFpbExvZ2luLFxuICAgICAgICBjcmVhdGVFbWFpbFVzZXIsXG4gICAgICAgIGxvZ291dCxcbiAgICAgICAgdWlkLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgc2V0RW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBzZXRQYXNzd29yZCxcbiAgICAgICAgbmV3RW1haWwsXG4gICAgICAgIHNldE5ld0VtYWlsLFxuICAgICAgICBuZXdQYXNzd29yZCxcbiAgICAgICAgc2V0TmV3UGFzc3dvcmQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwiZGIiLCJnb29nbGVQcm92aWRlciIsIkNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVpZCIsInNldFVpZCIsImVtYWlsIiwic2V0RW1haWwiLCJuZXdQYXNzd29yZCIsInNldFBhc3N3b3JkIiwibmV3RW1haWwiLCJzZXROZXdFbWFpbCIsInNldE5ld1Bhc3N3b3JkIiwicm91dGVyIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInB1c2giLCJnb29nbGVMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXMiLCJmaXJzdExvZ2luIiwiYWRkaXRpb25hbFVzZXJJbmZvIiwiaXNOZXdVc2VyIiwiYWxlcnQiLCJlbWFpbExvZ2luIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJwYXNzd29yZCIsImNhdGNoIiwiY3JlYXRlRW1haWxVc2VyIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibG9nb3V0Iiwic2lnbk91dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ })

});