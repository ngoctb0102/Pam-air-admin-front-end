exports.id = 67;
exports.ids = [67];
exports.modules = {

/***/ 51:
/***/ ((module) => {

// Exports
module.exports = {
	"dropdownTestAPI": "TestAPI_dropdownTestAPI__0CB2_",
	"dropBoxTestAPI": "TestAPI_dropBoxTestAPI__34GPJ",
	"dropdownContentTestAPI": "TestAPI_dropdownContentTestAPI__ZKmIn",
	"buttonAPIPredict": "TestAPI_buttonAPIPredict__0GZm_",
	"TestAPICardContainer": "TestAPI_TestAPICardContainer__h2uzL"
};


/***/ }),

/***/ 67:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TestAPI)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./public/style/TestAPI.module.css
var TestAPI_module = __webpack_require__(51);
var TestAPI_module_default = /*#__PURE__*/__webpack_require__.n(TestAPI_module);
;// CONCATENATED MODULE: ./lib/HaNoiDistrict.tsx
const HaNoiDistrict = [
    "Quan Hoang Mai",
    "Quan Long Bien",
    "Quan Thanh Xuan",
    "Quan Bac Tu Liem",
    "Quan Ba Dinh",
    "Quan Cau Giay",
    "Quan Dong Da",
    "Quan Hai Ba Trung",
    "Quan Hoan Kiem",
    "Quan Ha Dong",
    "Quan Tay Ho",
    "Quan Nam Tu Liem"
];

;// CONCATENATED MODULE: ./lib/HoChiMinhDistrict.tsx
const HoChiMinhDistrict = [
    "Quan 1",
    "Quan 3",
    "Quan 4",
    "Quan 5",
    "Quan 6",
    "Quan 7",
    "Quan 8",
    "Quan 10",
    "Quan 11",
    "Quan 12",
    "Quan Binh Thanh",
    "Quan Binh Tan",
    "Quan Go Vap",
    "Quan Phu Nhuan",
    "Quan Tan Binh",
    "Quan Tan Phu"
];

// EXTERNAL MODULE: external "react-loading"
var external_react_loading_ = __webpack_require__(41);
var external_react_loading_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_);
;// CONCATENATED MODULE: ./pages/TestAPI.tsx






function TestAPI() {
    let [cityState, setCityState] = (0,external_react_.useState)("");
    let [districtState, setDistrictState] = (0,external_react_.useState)("");
    let [modelState, setModelState] = (0,external_react_.useState)("");
    let [cardClickCheck, setCardClickCheck] = (0,external_react_.useState)(1);
    let [loadingState, setLoadingState] = (0,external_react_.useState)("loading");
    let [dataAPI, setDataAPI] = (0,external_react_.useState)({
        aqi_us: [],
        aqi_vn: [],
        "pm2.5": [],
        time: []
    });
    const fetchTestAPIOnClick = async ()=>{
        if (modelState === "12 hours") {
            const res = await fetch("http://202.191.58.206/pamair/hourly", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    city: cityState,
                    district: districtState
                })
            });
            const data = await res.json();
            setDataAPI({
                aqi_us: data.aqi_us,
                aqi_vn: data.aqi_vn,
                "pm2.5": data["pm2.5"],
                time: data.time
            });
            console.log(dataAPI);
        } else {
            const res = await fetch("http://202.191.58.206/pamair/dayly", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    city: cityState,
                    district: districtState
                })
            });
            const data = await res.json();
            setDataAPI({
                aqi_us: data.aqi_us,
                aqi_vn: data.aqi_vn,
                "pm2.5": data["pm2.5"],
                time: data.time
            });
            console.log(dataAPI);
        }
        setLoadingState("finish");
    };
    const predictCard = (time, pm25, VNAQILevel, USAQILevel)=>{
        let color = "";
        let pollutionLevel = "";
        if (parseFloat(VNAQILevel) >= 0 && parseFloat(VNAQILevel) <= 50) {
            pollutionLevel = "Good";
        } else if (parseFloat(VNAQILevel) <= 100) {
            pollutionLevel = "Moderate";
        } else if (parseFloat(VNAQILevel) <= 200) {
            pollutionLevel = "Bad";
        } else if (parseFloat(VNAQILevel) <= 300) {
            pollutionLevel = "Harmful";
        } else {
            pollutionLevel = "Unsafe";
        }
        if (pollutionLevel === "Good") {
            color = "blue";
        } else if (pollutionLevel === "Moderate") {
            color = "yellow";
        } else if (pollutionLevel === "Bad") {
            color = "orange";
        } else if (pollutionLevel === "Harmful") {
            color = "red";
        } else if (pollutionLevel === "Unsafe") {
            color = "maroon";
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                display: "flex",
                marginBottom: "20px"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                    style: {
                        width: "100px"
                    },
                    children: time
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        width: "700px",
                        border: `2px solid ${color}`,
                        borderRadius: "15px",
                        padding: "5px",
                        backgroundColor: `${color}`
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                            style: {
                                marginRight: "20px"
                            },
                            children: pollutionLevel
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                    style: {
                                        marginRight: "20px",
                                        marginBottom: "0"
                                    },
                                    children: "pm2.5"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                    style: {
                                        marginRight: "20px",
                                        marginTop: "0"
                                    },
                                    children: parseFloat(pm25).toFixed(2)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                display: "flex"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                    style: {
                                        marginRight: "20px"
                                    },
                                    children: parseFloat(VNAQILevel).toFixed(2) + " VN AQI"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                    style: {
                                        marginRight: "20px"
                                    },
                                    children: parseFloat(USAQILevel).toFixed(2) + " US AQI"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: "someIcon"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    const checkName = (className, item)=>{
        if (className === "city") {
            setCityState(item);
        } else if (className === "district") {
            setDistrictState(item);
        } else {
            setModelState(item);
        }
    };
    const renderComponent = (requiredList, className)=>{
        return requiredList.map((item, index)=>{
            return /*#__PURE__*/ jsx_runtime.jsx("a", {
                onClick: ()=>{
                    checkName(className, item);
                },
                className: className,
                children: item
            }, index);
        });
    };
    const selectAPIMenu = (requiredList, embeddedText, className)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (TestAPI_module_default()).dropdownTestAPI,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (TestAPI_module_default()).dropBoxTestAPI,
                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                        style: {
                            width: "150px",
                            height: "30px",
                            border: "2px solid black",
                            marginRight: "20px"
                        },
                        placeholder: embeddedText
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (TestAPI_module_default()).dropdownContentTestAPI,
                    children: renderComponent(requiredList, className)
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "-10px"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            display: "flex"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        children: "City"
                                    }),
                                    selectAPIMenu([
                                        "Ha Noi",
                                        "Ho Chi Minh"
                                    ], "select city", "city")
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        children: "District"
                                    }),
                                    selectAPIMenu(cityState === "Ha Noi" ? HaNoiDistrict : HoChiMinhDistrict, "select district", "district")
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        children: "Model"
                                    }),
                                    selectAPIMenu([
                                        "12 hours",
                                        "3 days"
                                    ], "select model", "model")
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: (TestAPI_module_default()).buttonAPIPredict,
                        onClick: ()=>{
                            setLoadingState("loading");
                            if (cardClickCheck === 1) {
                                setCardClickCheck(0);
                            } else if (cardClickCheck === 0) {
                                setCardClickCheck(0);
                            }
                            if (cityState && districtState && modelState) {
                                fetchTestAPIOnClick();
                            } else {
                                alert(`Error:please prompt city and district`);
                            }
                        },
                        children: "Get Predict Result"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "100%",
                    marginTop: "50px"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    marginLeft: "20px",
                                    width: "200px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        style: {
                                            backgroundColor: "gray",
                                            width: "120px"
                                        },
                                        children: "Location"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        children: cityState + "," + districtState
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    marginLeft: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        style: {
                                            backgroundColor: "gray",
                                            width: "120px"
                                        },
                                        children: "Model"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        children: modelState
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            marginLeft: "150px"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    display: "flex"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        style: {
                                            marginRight: "20px",
                                            width: "100px"
                                        },
                                        children: modelState === "12 hours" ? "Hour" : "Day"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        children: "Pollution Level"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                style: {
                                    border: "2px solid rgba(0, 0, 0, 0.3)",
                                    borderRadius: "15px",
                                    height: "400px",
                                    padding: "10px",
                                    overflowY: "auto",
                                    overflowX: "hidden",
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                className: (TestAPI_module_default()).TestAPICardContainer,
                                children: loadingState === "loading" ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    style: {
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                style: {
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent: "center"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx((external_react_loading_default()), {
                                                    type: "balls",
                                                    color: "#000"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                children: "waiting to fetch goods"
                                            })
                                        ]
                                    })
                                }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: dataAPI.time.map((item, index)=>{
                                        return predictCard(dataAPI.time[index], dataAPI["pm2.5"][index], dataAPI.aqi_vn[index] + " VN AQI", dataAPI.aqi_us[index] + " US AQI");
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;