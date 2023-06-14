(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,665,237];
exports.modules = {

/***/ 322:
/***/ ((module) => {

// Exports
module.exports = {
	"Nav": "Nav_Nav__dSBih",
	"navCom": "Nav_navCom__bWr5j"
};


/***/ }),

/***/ 977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./public/style/Nav.module.css
var Nav_module = __webpack_require__(322);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./components/Nav.tsx


function Nav(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Nav_module_default()).Nav,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                style: {
                    marginLeft: "7px"
                },
                children: "PamAir system"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    display: "flex",
                    marginRight: "3px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        id: "Management",
                        className: (Nav_module_default()).navCom,
                        style: {
                            margin: "5px",
                            opacity: "0.6"
                        },
                        onClick: props.onClick,
                        children: "Management"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        id: "TestAPI",
                        className: (Nav_module_default()).navCom,
                        style: {
                            margin: "5px",
                            opacity: "0.6"
                        },
                        onClick: props.onClick,
                        children: "Test Api"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Nav = (Nav);

// EXTERNAL MODULE: ./public/style/App.css
var App = __webpack_require__(326);
// EXTERNAL MODULE: ./pages/Management.tsx + 8 modules
var Management = __webpack_require__(215);
// EXTERNAL MODULE: ./pages/TestAPI.tsx + 2 modules
var TestAPI = __webpack_require__(67);
;// CONCATENATED MODULE: ./pages/_app.tsx






function _app_App() {
    const [pageRoute, setPageRoute] = (0,external_react_.useState)("Management");
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "App",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                height: "100%"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(components_Nav, {
                    onClick: (e)=>{
                        if (e.target.id === "TestAPI") {
                            setPageRoute("Management");
                        } else {
                            setPageRoute("TestAPI");
                        }
                    }
                }),
                pageRoute === "Management" ? /*#__PURE__*/ jsx_runtime.jsx(TestAPI["default"], {}) : /*#__PURE__*/ jsx_runtime.jsx(Management["default"], {})
            ]
        })
    });
}
/* harmony default export */ const _app = (_app_App);


/***/ }),

/***/ 326:
/***/ (() => {



/***/ }),

/***/ 433:
/***/ ((module) => {

"use strict";
module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 41:
/***/ ((module) => {

"use strict";
module.exports = require("react-loading");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,215,67], () => (__webpack_exec__(977)));
module.exports = __webpack_exports__;

})();