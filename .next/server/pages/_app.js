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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Context.js":
/*!*******************************!*\
  !*** ./components/Context.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n\n\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ContextProvider = ({ children  })=>{\n    const { 0: uid , 1: setUid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: newPassword , 1: setNewPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: newEmail , 1: setNewEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: newItems1 , 1: setNewItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged((user)=>{\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            } else {\n                router.push(\"/login\");\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setItems(newItems1);\n    }, [\n        newItems1\n    ]);\n    //googleログイン\n    const googleLogin = ()=>{\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_3__.googleProvider).then((res)=>{\n            // 初めてのユーザーなのか確認している。\n            const firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n        router.push(\"/Top\");\n    };\n    //emailログイン\n    const emailLogin = ()=>{\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithEmailAndPassword(email, password).then(()=>{\n            alert(\"ログインに成功しました！\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }).catch(()=>{\n            alert(\"ログインに失敗しました。。\");\n        });\n    };\n    //   emailアカウントを作成する\n    const createEmailUser = ()=>{\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.createUserWithEmailAndPassword(newEmail, newPassword).then(()=>{\n            alert(\"アカウントを作成しました！\");\n            setNewEmail(\"\");\n            setNewPassword(\"\");\n        }).catch(()=>{\n            alert(\"失敗しました。。。\");\n        });\n    };\n    const logout = ()=>{\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signOut().then(()=>{\n            alert(\"ログアウトしました\");\n            router.push(\"/Login\");\n        });\n    };\n    // itemの取得\n    const getItems = ()=>{\n        let newItems = [];\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collectionGroup(\"items\").onSnapshot((snapshot)=>{\n            snapshot.forEach((doc)=>{\n                console.log(doc.data());\n                newItems.push({\n                    userId: doc.data().userId,\n                    id: doc.data().id,\n                    title: doc.data().title,\n                    // img: itemURL,\n                    category: doc.data().category,\n                    age: doc.data().age,\n                    sex: doc.data().sex,\n                    content: doc.data().content\n                });\n            });\n            setItems(newItems);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin,\n            emailLogin,\n            createEmailUser,\n            getItems,\n            logout,\n            uid,\n            email,\n            setEmail,\n            password,\n            setPassword,\n            newEmail,\n            setNewEmail,\n            newPassword,\n            setNewPassword,\n            items,\n            setNewItems\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 106,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: children\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SEUsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsV0FBVztZQUNYRyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEgsV0FBVztZQUNYQyxjQUFjO1lBQ2RHLEtBQUs7WUFDTEcsV0FBVztRQUNiLENBQUM7Ozs7Ozs7a0JBRUFkLFFBQVE7O0FBR2YsQ0FBQztBQUVELGlFQUFlRCxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXBldHMvLi9jb21wb25lbnRzL0NvbnRleHQuanM/ZWQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBhdXRoLCBkYiwgZ29vZ2xlUHJvdmlkZXIgfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdWlkLCBzZXRVaWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuZXdQYXNzd29yZCwgc2V0TmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuZXdFbWFpbCwgc2V0TmV3RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV3SXRlbXMsIHNldE5ld0l0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICAvLyDoh6rliIbjga7jgqLjgqvjgqbjg7Pjg4jjga51aWTjgpJzdGF0ZeOBp+euoeeQhuOBmeOCi1xuICAgICAgICBzZXRVaWQodXNlci51aWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXRlbXMobmV3SXRlbXMpO1xuICAgXG4gIH0sIFtuZXdJdGVtc10pO1xuXG4gIC8vZ29vZ2xl44Ot44Kw44Kk44OzXG4gIGNvbnN0IGdvb2dsZUxvZ2luID0gKCkgPT4ge1xuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKGdvb2dsZVByb3ZpZGVyKS50aGVuKChyZXMpID0+IHtcbiAgICAgIC8vIOWIneOCgeOBpuOBruODpuODvOOCtuODvOOBquOBruOBi+eiuuiqjeOBl+OBpuOBhOOCi+OAglxuICAgICAgY29uc3QgZmlyc3RMb2dpbiA9IHJlcy5hZGRpdGlvbmFsVXNlckluZm8uaXNOZXdVc2VyO1xuICAgICAgaWYgKGZpcnN0TG9naW4pIHtcbiAgICAgICAgYWxlcnQoXCLliJ3jgoHjgabjga7jg6bjg7zjgrbjg7zjga7jg63jgrDjgqTjg7PjgpLnorroqo3jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIuaXouWtmOOBruODpuODvOOCtuODvOODreOCsOOCpOODs+OCkueiuuiqjeOBl+OBvuOBl+OBn++8gVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByb3V0ZXIucHVzaChcIi9Ub3BcIik7XG4gIH07XG5cbiAgLy9lbWFpbOODreOCsOOCpOODs1xuICBjb25zdCBlbWFpbExvZ2luID0gKCkgPT4ge1xuICAgIGF1dGhcbiAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwi44Ot44Kw44Kk44Oz44Gr5oiQ5Yqf44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgICBzZXRFbWFpbChcIlwiKTtcbiAgICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCLjg63jgrDjgqTjg7PjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjgIJcIik7XG4gICAgICB9KTtcbiAgfTtcbiAgLy8gICBlbWFpbOOCouOCq+OCpuODs+ODiOOCkuS9nOaIkOOBmeOCi1xuICBjb25zdCBjcmVhdGVFbWFpbFVzZXIgPSAoKSA9PiB7XG4gICAgYXV0aFxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChuZXdFbWFpbCwgbmV3UGFzc3dvcmQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwi44Ki44Kr44Km44Oz44OI44KS5L2c5oiQ44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgICBzZXROZXdFbWFpbChcIlwiKTtcbiAgICAgICAgc2V0TmV3UGFzc3dvcmQoXCJcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCLlpLHmlZfjgZfjgb7jgZfjgZ/jgILjgILjgIJcIik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XG4gICAgICBhbGVydChcIuODreOCsOOCouOCpuODiOOBl+OBvuOBl+OBn1wiKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL0xvZ2luXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGl0ZW3jga7lj5blvpdcbiAgY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiB7XG4gICAgXG4gICAgbGV0IG5ld0l0ZW1zID1bXVxuICAgIGRiLmNvbGxlY3Rpb25Hcm91cChcIml0ZW1zXCIpLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gICAgICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZG9jLmRhdGEoKSlcbiAgICAgICBuZXdJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgdXNlcklkOmRvYy5kYXRhKCkudXNlcklkLFxuICAgICAgICAgICBpZDpkb2MuZGF0YSgpLmlkLFxuICAgICAgICAgICB0aXRsZTpkb2MuZGF0YSgpLnRpdGxlLFxuICAgICAgICAgICAvLyBpbWc6IGl0ZW1VUkwsXG4gICAgICAgICAgIGNhdGVnb3J5OiBkb2MuZGF0YSgpLmNhdGVnb3J5LFxuICAgICAgICAgICBhZ2U6IGRvYy5kYXRhKCkuYWdlLFxuICAgICAgICAgICBzZXg6IGRvYy5kYXRhKCkuc2V4LFxuICAgICAgICAgICBjb250ZW50OmRvYy5kYXRhKCkuY29udGVudFxuICAgICAgIH0pXG4gICAgfSk7XG4gICAgc2V0SXRlbXMobmV3SXRlbXMpXG59KVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGdvb2dsZUxvZ2luLFxuICAgICAgICBlbWFpbExvZ2luLFxuICAgICAgICBjcmVhdGVFbWFpbFVzZXIsXG4gICAgICAgIGdldEl0ZW1zLFxuICAgICAgICBsb2dvdXQsXG4gICAgICAgIHVpZCxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHNldEVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgc2V0UGFzc3dvcmQsXG4gICAgICAgIG5ld0VtYWlsLFxuICAgICAgICBzZXROZXdFbWFpbCxcbiAgICAgICAgbmV3UGFzc3dvcmQsXG4gICAgICAgIHNldE5ld1Bhc3N3b3JkLFxuICAgICAgICBpdGVtcyxcbiAgICAgICAgc2V0TmV3SXRlbXMsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwiZGIiLCJnb29nbGVQcm92aWRlciIsIkNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVpZCIsInNldFVpZCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsIm5ld0VtYWlsIiwic2V0TmV3RW1haWwiLCJpdGVtcyIsInNldEl0ZW1zIiwibmV3SXRlbXMiLCJzZXROZXdJdGVtcyIsInJvdXRlciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJwdXNoIiwiZ29vZ2xlTG9naW4iLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzIiwiZmlyc3RMb2dpbiIsImFkZGl0aW9uYWxVc2VySW5mbyIsImlzTmV3VXNlciIsImFsZXJ0IiwiZW1haWxMb2dpbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY2F0Y2giLCJjcmVhdGVFbWFpbFVzZXIiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJsb2dvdXQiLCJzaWduT3V0IiwiZ2V0SXRlbXMiLCJjb2xsZWN0aW9uR3JvdXAiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1c2VySWQiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJhZ2UiLCJzZXgiLCJjb250ZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ }),

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"googleProvider\": () => (/* binding */ googleProvider)\n/* harmony export */ });\n/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ \"@firebase/app\");\n/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/auth */ \"@firebase/auth\");\n/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/firestore */ \"@firebase/firestore\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nif (!(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    _firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({\n        apiKey: \"AIzaSyC_SK0QajmwDJKMcce1wJ570V5cyTy-ZMg\",\n        authDomain: \"mypets-743b3.firebaseapp.com\",\n        projectId: \"mypets-743b3\",\n        storageBucket: \"mypets-743b3.appspot.com\",\n        messagingSenderId: \"772499991986\",\n        appId: \"1:772499991986:web:368a75aad4379bc98808ab\"\n    });\n}\nconst auth = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth();\nconst db = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore();\nconst googleProvider = new (_firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth.GoogleAuthProvider)();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZpcmViYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUNiO0FBQ0s7QUFFNUIsRUFBRSxHQUFHQSxrRUFBb0IsRUFBRSxDQUFDO0lBQzFCQSxrRUFBc0IsQ0FBQyxDQUFDO1FBQ3RCSSxNQUFNLEVBQUUsQ0FBeUM7UUFDakRDLFVBQVUsRUFBRSxDQUE4QjtRQUMxQ0MsU0FBUyxFQUFFLENBQWM7UUFDekJDLGFBQWEsRUFBRSxDQUEwQjtRQUN6Q0MsaUJBQWlCLEVBQUUsQ0FBYztRQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0lBQ3BELENBQUM7QUFDSCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxJQUFJLEdBQUdWLHlEQUFhO0FBQzFCLEtBQUssQ0FBQ1csRUFBRSxHQUFHWCw4REFBa0I7QUFDN0IsS0FBSyxDQUFDYSxjQUFjLEdBQUcsR0FBRyxDQUFDYiw4RUFBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXBldHMvLi9jb21wb25lbnRzL2ZpcmViYXNlLmpzPzZhYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJAZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJAZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xuICAgIGFwaUtleTogXCJBSXphU3lDX1NLMFFham13REpLTWNjZTF3SjU3MFY1Y3lUeS1aTWdcIixcbiAgICBhdXRoRG9tYWluOiBcIm15cGV0cy03NDNiMy5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwibXlwZXRzLTc0M2IzXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJteXBldHMtNzQzYjMuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI3NzI0OTk5OTE5ODZcIixcbiAgICBhcHBJZDogXCIxOjc3MjQ5OTk5MTk4Njp3ZWI6MzY4YTc1YWFkNDM3OWJjOTg4MDhhYlwiLFxuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKClcbmV4cG9ydCBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpXG5leHBvcnQgY29uc3QgZ29vZ2xlUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcbiJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXV0aCIsImRiIiwiZmlyZXN0b3JlIiwiZ29vZ2xlUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ \"./components/Context.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 5\n            },\n            __self: this\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDckI7U0FFckJDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sc0VBQ0xILDJEQUFlOzs7Ozs7O3VGQUNiRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7OztBQUc1QixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215cGV0cy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuKFxuICA8Q29udGV4dFByb3ZpZGVyPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC9Db250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQ29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@firebase/app":
/*!********************************!*\
  !*** external "@firebase/app" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@firebase/app");

/***/ }),

/***/ "@firebase/auth":
/*!*********************************!*\
  !*** external "@firebase/auth" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@firebase/auth");

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@firebase/firestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();