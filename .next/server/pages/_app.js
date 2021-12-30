"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Context.js
var Context = __webpack_require__(7897);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(8736);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
;// CONCATENATED MODULE: external "@material-ui/core/Toolbar"
const Toolbar_namespaceObject = require("@material-ui/core/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Typography"
const Typography_namespaceObject = require("@material-ui/core/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(3974);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@material-ui/core/Switch"
const Switch_namespaceObject = require("@material-ui/core/Switch");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Search"
const Search_namespaceObject = require("@material-ui/icons/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(2610);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./components/Header.js





// material-ui

//header







const useStyles = (0,styles_.makeStyles)((theme)=>({
        header: {
        },
        formControl: {
            margin: theme.spacing(4)
        },
        Button: {
            margin: theme.spacing(4),
            width: "80%"
        },
        pets_icon: {
        },
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(4),
            [theme.breakpoints.up("md")]: {
                padding: 20
            }
        },
        toolbar: {
            alignItems: "center",
            [theme.breakpoints.up("md")]: {
            }
        },
        title: {
            flexGrow: 1
        },
        searchIcon: {
            fontSize: 33,
            marginLeft: 30,
            color: "white"
        },
        switchIcon: {
        }
    })
);
const Header = ()=>{
    const classes = useStyles();
    const router = (0,router_.useRouter)();
    const { anonymouslyLogin , isLogin  } = (0,external_react_.useContext)(Context/* Context */._);
    const search_open = ()=>{
        router.push("/search");
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: classes.header,
        children: /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
            position: "fixed",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                className: classes.toolbar,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/Top",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            edge: "start",
                            className: classes.menuButton,
                            color: "inherit",
                            "aria-label": "open drawer",
                            children: "MyPets!"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        className: classes.title,
                        variant: "h5",
                        noWrap: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.icons,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                onClick: search_open,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
                                    className: classes.searchIcon
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                className: classes.switchIcon,
                                checked: isLogin,
                                onChange: anonymouslyLogin
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: external "@material-ui/icons/Home"
const Home_namespaceObject = require("@material-ui/icons/Home");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Pets"
const Pets_namespaceObject = require("@material-ui/icons/Pets");
var Pets_default = /*#__PURE__*/__webpack_require__.n(Pets_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Person"
const Person_namespaceObject = require("@material-ui/icons/Person");
var Person_default = /*#__PURE__*/__webpack_require__.n(Person_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/BottomNavigation"
const BottomNavigation_namespaceObject = require("@material-ui/core/BottomNavigation");
var BottomNavigation_default = /*#__PURE__*/__webpack_require__.n(BottomNavigation_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/BottomNavigationAction"
const BottomNavigationAction_namespaceObject = require("@material-ui/core/BottomNavigationAction");
var BottomNavigationAction_default = /*#__PURE__*/__webpack_require__.n(BottomNavigationAction_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__(9641);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
;// CONCATENATED MODULE: ./components/Footer.js




// material-ui







const Footer_useStyles = (0,styles_.makeStyles)((theme)=>({
        formControl: {
            margin: theme.spacing(4)
        },
        Button: {
            margin: theme.spacing(4),
            width: "80%"
        },
        pets_icon: {
        },
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        toolbar: {
            alignItems: "center"
        },
        title: {
            flexGrow: 1
        },
        searchIcon: {
            fontSize: 33,
            marginLeft: 30
        },
        switchIcon: {
        }
    })
);
function Footer() {
    const router = (0,router_.useRouter)();
    const classes = Footer_useStyles();
    const { uid  } = (0,external_react_.useContext)(Context/* Context */._);
    const onClickTop = ()=>{
        if (uid) {
            router.push("/Top");
        } else {
            alert("ログインしてください。。");
        }
    };
    const onClickCreateItem = ()=>{
        if (uid) {
            router.push("/menu/createItem/createItem");
        } else {
            alert("ログインしてください。。");
        }
    };
    const onClickMyPage = ()=>{
        if (uid) {
            router.push("/menu/myPage/profile");
        } else {
            alert("ログインしてください。。");
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            style: {
                position: "fixed",
                bottom: "0",
                width: "100%",
                marginTop: "50px"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((BottomNavigation_default()), {
                    sx: {
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                            title: "ホーム",
                            arrow: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                                label: "ホーム",
                                value: "Home",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Home_default()), {
                                }),
                                onClick: onClickTop
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                            title: "里親を募集する",
                            arrow: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                                label: "里親を募集する",
                                value: "pets",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Pets_default()), {
                                }),
                                className: classes.pets_icon,
                                onClick: onClickCreateItem
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                            title: "マイページ",
                            arrow: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                                label: "マイページ",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Person_default()), {
                                }),
                                onClick: onClickMyPage
                            })
                        })
                    ]
                })
            })
        })
    }));
}
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "react-helmet-async"
var external_react_helmet_async_ = __webpack_require__(8638);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "@material-ui/styles/ThemeProvider"
const ThemeProvider_namespaceObject = require("@material-ui/styles/ThemeProvider");
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: external "@mui/material/styles"
const material_styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./src/theme.js


// Create a theme instance.
const theme = (0,material_styles_namespaceObject.createTheme)({
    palette: {
        color: colors_namespaceObject.red
    }
});
/* harmony default export */ const src_theme = ((/* unused pure expression or super */ null && (theme)));

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/createEmotionCache.js

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    return cache_default()({
        key: 'css',
        prepend: true
    });
};

;// CONCATENATED MODULE: ./pages/_app.js













// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    (0,external_react_.useEffect)(()=>{
        var ref;
        const jssStyles = document.querySelector("#jss-server-side");
        jssStyles === null || jssStyles === void 0 ? void 0 : (ref = jssStyles.parentElement) === null || ref === void 0 ? void 0 : ref.removeChild(jssStyles);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_helmet_async_.HelmetProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Context/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).StrictMode, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
                    value: emotionCache,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "viewport",
                                content: "initial-scale=1, width=device-width"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
                        })
                    ]
                })
            })
        })
    }));
};
MyApp.propTypes = {
    Component: (external_prop_types_default()).elementType.isRequired,
    emotionCache: (external_prop_types_default()).object,
    pageProps: (external_prop_types_default()).object.isRequired
};


/***/ }),

/***/ 9506:
/***/ ((module) => {

module.exports = require("@firebase/app");

/***/ }),

/***/ 2138:
/***/ ((module) => {

module.exports = require("@firebase/auth");

/***/ }),

/***/ 3011:
/***/ ((module) => {

module.exports = require("@firebase/firestore");

/***/ }),

/***/ 9055:
/***/ ((module) => {

module.exports = require("@firebase/storage");

/***/ }),

/***/ 8736:
/***/ ((module) => {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ 2610:
/***/ ((module) => {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ 3974:
/***/ ((module) => {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ 9641:
/***/ ((module) => {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8638:
/***/ ((module) => {

module.exports = require("react-helmet-async");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664,897], () => (__webpack_exec__(4331)));
module.exports = __webpack_exports__;

})();