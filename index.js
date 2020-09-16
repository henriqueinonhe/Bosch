/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var expressApp = express__WEBPACK_IMPORTED_MODULE_0___default()();
dotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();
expressApp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
expressApp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static("public"));
expressApp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());
expressApp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());
expressApp.get("/search", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // const {query} = req.query;
        // const [status, data] = await YoutubeSearchService.search(query as string || "");
        // res.status(status).send(data);
        //MOCK
        setTimeout(function () {
            return res.status(200).send({
                "kind": "youtube#searchListResponse",
                "etag": "vSz2NY5agQ3HqsIYtmxY6y4BS8U",
                "nextPageToken": "CAUQAA",
                "regionCode": "BR",
                "pageInfo": {
                    "totalResults": 1000000,
                    "resultsPerPage": 5
                },
                "items": [
                    {
                        "kind": "youtube#searchResult",
                        "etag": "25deBUum8MDoQlzjjt9ha3QOQA8",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "IM-9bRmiAgU"
                        },
                        "snippet": {
                            "publishedAt": "2020-09-15T18:00:02Z",
                            "channelId": "UCSh4uYOKH6K2Mtp8od1UwIw",
                            "title": "8th in DREAMHACK SOLOS 🥇 (100+ ping/$1,000) | FaZe Dubs",
                            "description": "Use Code 'FaZeDubs' in the Item Shop! Subscribe to NEVER miss a video Follow other socials to keep up to date: ▻ Twitch: https://www.twitch.tv/dubs/ ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/IM-9bRmiAgU/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/IM-9bRmiAgU/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/IM-9bRmiAgU/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "FaZe Dubs",
                            "liveBroadcastContent": "none",
                            "publishTime": "2020-09-15T18:00:02Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "gxwTpH1C-2nBVQ7cAh2K-xDUHUU",
                        "id": {
                            "kind": "youtube#channel",
                            "channelId": "UCSh4uYOKH6K2Mtp8od1UwIw"
                        },
                        "snippet": {
                            "publishedAt": "2015-08-02T14:11:25Z",
                            "channelId": "UCSh4uYOKH6K2Mtp8od1UwIw",
                            "title": "FaZe Dubs",
                            "description": "Pro Fortnite Player for @FaZeClan 5x World Cup Qualifier | 16 y/o Creator Code: FaZeDubs Instagram: FaZe_Dubs Twitter: Dubsfn Twitch: dubs_tv.",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/-b8sKwpQr6PM/AAAAAAAAAAI/AAAAAAAAAAA/mIwNQCuqK18/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/-b8sKwpQr6PM/AAAAAAAAAAI/AAAAAAAAAAA/mIwNQCuqK18/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/-b8sKwpQr6PM/AAAAAAAAAAI/AAAAAAAAAAA/mIwNQCuqK18/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                }
                            },
                            "channelTitle": "FaZe Dubs",
                            "liveBroadcastContent": "upcoming",
                            "publishTime": "2015-08-02T14:11:25Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "hKnw3yNleALuSRkGH1OVbsemp9Y",
                        "id": {
                            "kind": "youtube#channel",
                            "channelId": "UCFhY4CngxbnRlMX-F5x9_Kw"
                        },
                        "snippet": {
                            "publishedAt": "2013-01-16T22:48:51Z",
                            "channelId": "UCFhY4CngxbnRlMX-F5x9_Kw",
                            "title": "DUBS",
                            "description": "Hello everyone and welcome to my channel. If you enjoy the content here feel free to subscribe. I try to keep this channel as active as possible so don't forget to ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/-QVu7iaTIOHE/AAAAAAAAAAI/AAAAAAAAAAA/orZzqljoRQU/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/-QVu7iaTIOHE/AAAAAAAAAAI/AAAAAAAAAAA/orZzqljoRQU/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/-QVu7iaTIOHE/AAAAAAAAAAI/AAAAAAAAAAA/orZzqljoRQU/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                }
                            },
                            "channelTitle": "DUBS",
                            "liveBroadcastContent": "none",
                            "publishTime": "2013-01-16T22:48:51Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "izqmFQfZoFp1yyLupaHfvFf4B_U",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "j5IV9WninR4"
                        },
                        "snippet": {
                            "publishedAt": "2020-08-28T22:37:47Z",
                            "channelId": "UCSh4uYOKH6K2Mtp8od1UwIw",
                            "title": "FaZe Dubs - 💪 The Last Solo Cash Cup... (Popping off)",
                            "description": "https://gfuel.ly/faze-bogo Use Code 'FaZeDubs' in the Item Shop! Subscribe to NEVER miss a video Follow other socials to keep up to date: ▻ Twitch: ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/j5IV9WninR4/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/j5IV9WninR4/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/j5IV9WninR4/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "FaZe Dubs",
                            "liveBroadcastContent": "none",
                            "publishTime": "2020-08-28T22:37:47Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "lRNDGkUqXWdWmWGlH9UnM0wMkhE",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "y73hNld1KVc"
                        },
                        "snippet": {
                            "publishedAt": "2019-07-23T14:01:17Z",
                            "channelId": "UClG8odDC8TS6Zpqk9CGVQiQ",
                            "title": "Fortnite World Cup - Player Profile - Dubs",
                            "description": "Watch the Fortnite World Cup Finals - July 26 - 28, 12:30pm ET The Greatest Tournament of All Time! Watch in-game and Fortnite.com/Watch on July 26 - 28 at ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/y73hNld1KVc/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/y73hNld1KVc/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/y73hNld1KVc/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "Fortnite",
                            "liveBroadcastContent": "none",
                            "publishTime": "2019-07-23T14:01:17Z"
                        }
                    }
                ]
            });
        }, 1500);
        return [2 /*return*/];
    });
}); });
expressApp.listen(process.env.PORT || 3000, function () {
    console.log("Server up!");
});


/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map