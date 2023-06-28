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

/***/ "./pages/Management.tsx":
/*!******************************!*\
  !*** ./pages/Management.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Management; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Map */ \"./lib/Map.tsx\");\n/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ModalBox */ \"./components/ModalBox.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.tsx\");\n/* harmony import */ var _components_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DropDownMenu */ \"./components/DropDownMenu.tsx\");\n/* harmony import */ var _components_LocationList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LocationList */ \"./components/LocationList.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Management() {\n    _s();\n    var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var dropDownMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), inputState = _useState[0], setInputState = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\",\n        \"\"\n    ]), 2), nameLocationState = _useState1[0], setNameLocationState = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), LoadingOrNot = _useState2[0], setLoadingOrNot = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), dataTable = _useState3[0], setDataTable = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Ha Noi\"), 2), cityMode = _useState4[0], setCityMode = _useState4[1];\n    var isLoading = null;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (inputState != \"\") {\n            searchRef.current.modifyInputValue(inputState);\n            mapRef.current.setMapCenter(JSON.parse(\"[\" + searchRef.current.returnInputValue() + \"]\"));\n            console.log(searchRef.current.returnInputValue());\n        }\n    }, [\n        inputState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(nameLocationState);\n        setLoadingOrNot(true);\n        var getAPI = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                var res, data;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                fetch(\"http://202.191.58.206/pamair/info\", {\n                                    method: \"POST\",\n                                    headers: {\n                                        \"Content-Type\": \"application/json\"\n                                    },\n                                    body: JSON.stringify({\n                                        district: nameLocationState[0],\n                                        city: nameLocationState[1]\n                                    })\n                                })\n                            ];\n                        case 1:\n                            res = _state.sent();\n                            return [\n                                4,\n                                res.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            setDataTable(data);\n                            console.log(data);\n                            setLoadingOrNot(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function getAPI() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (nameLocationState[0] != \"\") {\n            getAPI();\n        }\n    }, [\n        nameLocationState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        isLoading = LoadingOrNot;\n        console.log(isLoading);\n    }, [\n        LoadingOrNot\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                ref: searchRef,\n                onClick: function() {\n                    mapRef.current.setMapCenter(JSON.parse(\"[\" + searchRef.current.returnInputValue() + \"]\"));\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: function(e) {\n                    setCityMode(e);\n                },\n                ref: dropDownMenuRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"center\",\n                    width: \"100%\",\n                    padding: \"30px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LocationList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: function() {\n                            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function(e) {\n                                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            return [\n                                                4,\n                                                setInputState(e.currentTarget.className)\n                                            ];\n                                        case 1:\n                                            _state.sent();\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(e) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_Map__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClick: function() {\n                            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function(e) {\n                                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            return [\n                                                4,\n                                                setNameLocationState(e)\n                                            ];\n                                        case 1:\n                                            _state.sent();\n                                            modalRef.current.displayOnClick();\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(e) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }(),\n                        cityMode: cityMode,\n                        ref: mapRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModalBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: dataTable,\n                Location: nameLocationState[0],\n                loadingOrNot: LoadingOrNot,\n                ref: modalRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Management, \"AcMOxqgI++krNgw70pmP76GuceM=\");\n_c = Management;\nvar _c;\n$RefreshReg$(_c, \"Management\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQjtvQkFDaEJDLFlBQVk7b0JBQ1pDLE9BQU87b0JBQ1BDLFNBQVM7Z0JBQ1g7O2tDQUVBLDhEQUFDN0MsZ0VBQVlBO3dCQUNYc0MsT0FBTzt1Q0FBRSw0RUFBT0MsR0FBTTs7Ozs0Q0FDcEI7O2dEQUFNaEMsY0FBY2dDLEVBQUVPLGFBQWEsQ0FBQ0MsU0FBUzs7OzRDQUE3Qzs7Ozs7OzRCQUNGOzRDQUZnQlI7Ozs7Ozs7OztrQ0FJbEIsOERBQUMzQyxnREFBR0E7d0JBQ0YwQyxPQUFPO3VDQUFFLDRFQUFPQyxHQUFNOzs7OzRDQUNwQjs7Z0RBQU05QixxQkFBcUI4Qjs7OzRDQUEzQjs0Q0FFQXJDLFNBQVNlLE9BQU8sQ0FBQytCLGNBQWM7Ozs7Ozs0QkFDakM7NENBSmdCVDs7Ozt3QkFLaEJ6QixVQUFVQTt3QkFDVnVCLEtBQUtqQzs7Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDUCw0REFBUUE7Z0JBQ1A4QixNQUFNZjtnQkFDTnFDLFVBQVV6QyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUM5QjBDLGNBQWN4QztnQkFDZDJCLEtBQUtuQzs7Ozs7Ozs7Ozs7O0FBSWIsQ0FBQztHQTdGdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL01hbmFnZW1lbnQudHN4PzJlOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCBtZW1vLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWFwLCB7IE1hcEhhbmRsZSB9IGZyb20gXCIuLi9saWIvTWFwXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBNb2RhbEJveCwgeyBNb2RhbEhhbmRsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsQm94XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIsIHsgU2VhcmNoSGFuZGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBEcm9wRG93bk1lbnUsIHsgZHJvcERvd25NZW51SGFuZGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRHJvcERvd25NZW51XCI7XHJcbmltcG9ydCBMb2NhdGlvbkxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9jYXRpb25MaXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2VtZW50KCkge1xyXG4gIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmPE1vZGFsSGFuZGxlPigpO1xyXG4gIGNvbnN0IHNlYXJjaFJlZiA9IHVzZVJlZjxTZWFyY2hIYW5kbGU+KCk7XHJcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmPE1hcEhhbmRsZT4oKTtcclxuICBjb25zdCBkcm9wRG93bk1lbnVSZWYgPSB1c2VSZWY8ZHJvcERvd25NZW51SGFuZGxlPigpO1xyXG4gIGNvbnN0IFtpbnB1dFN0YXRlLCBzZXRJbnB1dFN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYW1lTG9jYXRpb25TdGF0ZSwgc2V0TmFtZUxvY2F0aW9uU3RhdGVdID0gdXNlU3RhdGUoW1wiXCIsIFwiXCJdKTtcclxuICBjb25zdCBbTG9hZGluZ09yTm90LCBzZXRMb2FkaW5nT3JOb3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RhdGFUYWJsZSwgc2V0RGF0YVRhYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjaXR5TW9kZSwgc2V0Q2l0eU1vZGVdID0gdXNlU3RhdGUoXCJIYSBOb2lcIik7XHJcbiAgbGV0IGlzTG9hZGluZyA9IG51bGw7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbnB1dFN0YXRlICE9IFwiXCIpIHtcclxuICAgICAgc2VhcmNoUmVmLmN1cnJlbnQubW9kaWZ5SW5wdXRWYWx1ZShpbnB1dFN0YXRlKTtcclxuICAgICAgbWFwUmVmLmN1cnJlbnQuc2V0TWFwQ2VudGVyKFxyXG4gICAgICAgIEpTT04ucGFyc2UoXCJbXCIgKyBzZWFyY2hSZWYuY3VycmVudC5yZXR1cm5JbnB1dFZhbHVlKCkgKyBcIl1cIilcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coc2VhcmNoUmVmLmN1cnJlbnQucmV0dXJuSW5wdXRWYWx1ZSgpKTtcclxuICAgIH1cclxuICB9LCBbaW5wdXRTdGF0ZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lTG9jYXRpb25TdGF0ZSk7XHJcbiAgICBzZXRMb2FkaW5nT3JOb3QodHJ1ZSk7XHJcbiAgICBjb25zdCBnZXRBUEkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovLzIwMi4xOTEuNTguMjA2L3BhbWFpci9pbmZvXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBkaXN0cmljdDogbmFtZUxvY2F0aW9uU3RhdGVbMF0sXHJcbiAgICAgICAgICBjaXR5OiBuYW1lTG9jYXRpb25TdGF0ZVsxXSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXREYXRhVGFibGUoZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nT3JOb3QoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGlmIChuYW1lTG9jYXRpb25TdGF0ZVswXSAhPSBcIlwiKSB7XHJcbiAgICAgIGdldEFQSSgpO1xyXG4gICAgfVxyXG4gIH0sIFtuYW1lTG9jYXRpb25TdGF0ZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc0xvYWRpbmcgPSBMb2FkaW5nT3JOb3Q7XHJcbiAgICBjb25zb2xlLmxvZyhpc0xvYWRpbmcpO1xyXG4gIH0sIFtMb2FkaW5nT3JOb3RdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNlYXJjaEJhclxyXG4gICAgICAgIHJlZj17c2VhcmNoUmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIG1hcFJlZi5jdXJyZW50LnNldE1hcENlbnRlcihcclxuICAgICAgICAgICAgSlNPTi5wYXJzZShcIltcIiArIHNlYXJjaFJlZi5jdXJyZW50LnJldHVybklucHV0VmFsdWUoKSArIFwiXVwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8RHJvcERvd25NZW51XHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIHNldENpdHlNb2RlKGUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgcmVmPXtkcm9wRG93bk1lbnVSZWZ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIzMHB4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMb2NhdGlvbkxpc3RcclxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldElucHV0U3RhdGUoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1hcFxyXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgc2V0TmFtZUxvY2F0aW9uU3RhdGUoZSk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbFJlZi5jdXJyZW50LmRpc3BsYXlPbkNsaWNrKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2l0eU1vZGU9e2NpdHlNb2RlfVxyXG4gICAgICAgICAgcmVmPXttYXBSZWZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbEJveFxyXG4gICAgICAgIGRhdGE9e2RhdGFUYWJsZX1cclxuICAgICAgICBMb2NhdGlvbj17bmFtZUxvY2F0aW9uU3RhdGVbMF19XHJcbiAgICAgICAgbG9hZGluZ09yTm90PXtMb2FkaW5nT3JOb3R9XHJcbiAgICAgICAgcmVmPXttb2RhbFJlZn1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiTWFwIiwiTW9kYWxCb3giLCJTZWFyY2hCYXIiLCJEcm9wRG93bk1lbnUiLCJMb2NhdGlvbkxpc3QiLCJNYW5hZ2VtZW50IiwibW9kYWxSZWYiLCJzZWFyY2hSZWYiLCJtYXBSZWYiLCJkcm9wRG93bk1lbnVSZWYiLCJpbnB1dFN0YXRlIiwic2V0SW5wdXRTdGF0ZSIsIm5hbWVMb2NhdGlvblN0YXRlIiwic2V0TmFtZUxvY2F0aW9uU3RhdGUiLCJMb2FkaW5nT3JOb3QiLCJzZXRMb2FkaW5nT3JOb3QiLCJkYXRhVGFibGUiLCJzZXREYXRhVGFibGUiLCJjaXR5TW9kZSIsInNldENpdHlNb2RlIiwiaXNMb2FkaW5nIiwiY3VycmVudCIsIm1vZGlmeUlucHV0VmFsdWUiLCJzZXRNYXBDZW50ZXIiLCJKU09OIiwicGFyc2UiLCJyZXR1cm5JbnB1dFZhbHVlIiwiY29uc29sZSIsImxvZyIsImdldEFQSSIsInJlcyIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwiZGlzdHJpY3QiLCJjaXR5IiwianNvbiIsImRpdiIsInJlZiIsIm9uQ2xpY2siLCJlIiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJwYWRkaW5nIiwiY3VycmVudFRhcmdldCIsImNsYXNzTmFtZSIsImRpc3BsYXlPbkNsaWNrIiwiTG9jYXRpb24iLCJsb2FkaW5nT3JOb3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Management.tsx\n"));

/***/ })

});