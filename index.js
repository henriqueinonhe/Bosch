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

/***/ "./src/Services/YoutubeSearchService.ts":
/*!**********************************************!*\
  !*** ./src/Services/YoutubeSearchService.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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

var api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
});
var YoutubeAPIService = /** @class */ (function () {
    function YoutubeAPIService() {
    }
    YoutubeAPIService.search = function (query, pageToken) {
        return __awaiter(this, void 0, void 0, function () {
            var response, status, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api.get("/search", {
                            params: {
                                part: "id,snippet",
                                q: query,
                                pageToken: pageToken,
                                type: "video",
                                key: process.env.GOOGLE_API_KEY,
                                maxResults: 12
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        status = response.status;
                        return [4 /*yield*/, response.data];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, [status, data]];
                }
            });
        });
    };
    YoutubeAPIService.details = function (videoId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, status, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api.get("/videos", {
                            params: {
                                id: videoId,
                                part: "snippet, statistics",
                                key: process.env.GOOGLE_API_KEY
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        status = response.status;
                        return [4 /*yield*/, response.data];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, [status, data]];
                }
            });
        });
    };
    return YoutubeAPIService;
}());
/* harmony default export */ __webpack_exports__["default"] = (YoutubeAPIService);


/***/ }),

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
/* harmony import */ var _Services_YoutubeSearchService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/YoutubeSearchService */ "./src/Services/YoutubeSearchService.ts");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





var expressApp = express__WEBPACK_IMPORTED_MODULE_0___default()();
dotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();
expressApp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
expressApp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static("public"));
expressApp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());
expressApp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());
expressApp.get("/search", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        //Real
        // const {query, pageToken} = req.query;
        // const [status, data] = await YoutubeAPIService.search(query as string || "", pageToken as string);
        // res.status(status).send(data);
        // MOCK
        setTimeout(function () {
            return res.status(200).send({
                "kind": "youtube#searchListResponse",
                "etag": "Nkk4pXdHfEQCQFV761p2qelx-80",
                "nextPageToken": "CAcQAA",
                "regionCode": "BR",
                "pageInfo": {
                    "totalResults": 1000000,
                    "resultsPerPage": 7
                },
                "items": [
                    {
                        "kind": "youtube#searchResult",
                        "etag": "R4hfcAXkA6l9xf0AUu0PotU1u20",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "T8Zf2ug9vPo"
                        },
                        "snippet": {
                            "publishedAt": "2018-11-23T21:52:37Z",
                            "channelId": "UC8wjgd0TGWNG7E-ZVIqwAmg",
                            "title": "Lol Surprise - Vem Dançar PARÓDIA Califórnia Gurls, Katy Perry Cia Era Uma Vez",
                            "description": "Cia Era Uma Vez :Música Lol Surprise - Vem Dançar (PARÓDIA) Califórnia Gurls, Katy Perry #LolSurprise.",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/T8Zf2ug9vPo/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/T8Zf2ug9vPo/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/T8Zf2ug9vPo/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "Cia Era Uma Vez",
                            "liveBroadcastContent": "none",
                            "publishTime": "2018-11-23T21:52:37Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "KhO-K_TMBcwepKcSB1RYyAA6B7w",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "8hM4-znOsF4"
                        },
                        "snippet": {
                            "publishedAt": "2020-08-07T12:00:04Z",
                            "channelId": "UCYiBIqmMGTTSiPj78bCpE1Q",
                            "title": "Nunca se é Velha Demais para Bonecas! 10 DIYs com LOL Surprise da Branca de Neve",
                            "description": "Subscreve aqui: https://www.youtube.com/channel/UCYiBIqmMGTTSiPj78bCpE1Q?sub_confirmation=1 Bonecas de Papel Vestidas/ Scoob vs Monstros de ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/8hM4-znOsF4/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/8hM4-znOsF4/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/8hM4-znOsF4/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "LaLiLu PT",
                            "liveBroadcastContent": "none",
                            "publishTime": "2020-08-07T12:00:04Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "hnxHWb1M9-5689dvB1__wGvdIsg",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "tSRYh0B9srA"
                        },
                        "snippet": {
                            "publishedAt": "2020-09-16T15:45:02Z",
                            "channelId": "UCZnlRhSFoDwlKhJYH0aeXMw",
                            "title": "When your boss doesn&#39;t find you funny // LOL COMEDIHA Season 6 Meme Compilation",
                            "description": "00:00 Orchestra 00:56 Flirting Seduction 01:41 Bank Security 02:41 Crucial Battle 03:46 Orchestra II 04:28 Toxic Clean Up 05:11 Room Service Lol ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/tSRYh0B9srA/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/tSRYh0B9srA/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/tSRYh0B9srA/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "LOL ComediHa! Official Comedy TV show",
                            "liveBroadcastContent": "none",
                            "publishTime": "2020-09-16T15:45:02Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "saNAtJYj9ZAJ1jbmatN9CmtD9Zc",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "rZmPO8XM7gk"
                        },
                        "snippet": {
                            "publishedAt": "2020-09-17T12:51:32Z",
                            "channelId": "UCSzHok6X5qXEO7cjvVnE62g",
                            "title": "[LOL] 프레이 드레이븐 : 무라마나 드레이븐의 미친 캐리",
                            "description": "유튜브 영상은 공유하기로 퍼가셔도 됩니다 *재밌게 보고 많이 퍼가주세요! 좋아요도 부탁드립니다! -프레이 방송국 : http://afreecatv.com/pig2704 -프레이 유튜브 ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/rZmPO8XM7gk/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/rZmPO8XM7gk/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/rZmPO8XM7gk/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "프레이 TV",
                            "liveBroadcastContent": "none",
                            "publishTime": "2020-09-17T12:51:32Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "pg99-HijDmnKM9qiEGzZnlpuulY",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "1TyRbPTN970"
                        },
                        "snippet": {
                            "publishedAt": "2020-09-16T15:00:00Z",
                            "channelId": "UCHnjNAMpCREywRsLoBWt86g",
                            "title": "¡Nunca Eres Grande Para Las Muñecas! 6 Diys De Ladybug Para Lol Surprise",
                            "description": "Subscríbete aquí: https://www.youtube.com/channel/UCHnjNAMpCREywRsLoBWt86g?sub_confirmation=1 15 Trucos Y Manualidades Para Muñecas Bebés ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/1TyRbPTN970/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/1TyRbPTN970/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/1TyRbPTN970/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "LaLiLu ES",
                            "liveBroadcastContent": "none",
                            "publishTime": "2020-09-16T15:00:00Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "KbJdvV_JNu3hvGWPDST0X9L6GJw",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "eOVLOODVAY0"
                        },
                        "snippet": {
                            "publishedAt": "2020-09-17T08:05:44Z",
                            "channelId": "UC6NXJtCn3p-actkvBUlHwDA",
                            "title": "[LOL]데스티니X괴물쥐 그마보낸다  [챌린저 946점 서포터]",
                            "description": "생방송 후원하기 투네이션 후원 -https://toon.at/donate/7698 도네이션 (트윕) 후원 -https://twip.kr/destiny7698 유튜브 채팅창 아래 후원하기($) 도 있습니다 감사 ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/eOVLOODVAY0/default_live.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/eOVLOODVAY0/mqdefault_live.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/eOVLOODVAY0/hqdefault_live.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "Destiny (데스티니)",
                            "liveBroadcastContent": "live",
                            "publishTime": "2020-09-17T08:05:44Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "ZiWnftpnVdgJAsx7SGfvmKx-Fv0",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "eThlEPyvF1Y"
                        },
                        "snippet": {
                            "publishedAt": "2020-09-16T05:18:19Z",
                            "channelId": "UCTRNV3t2jxbkZgBjhyDv8UQ",
                            "title": "LOL Surprise REMIX OMG Super Surprise NEW OMG Dolls LOL Hair Flips HUGE UNBOXING!",
                            "description": "It's a HUGE LOL Surprise Remix Unboxing! All new LOL Remix Super Surprise 4 new OMG fashion dolls and all new LOL Surprise Hair Flips and Remix Pets.",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/eThlEPyvF1Y/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/eThlEPyvF1Y/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/eThlEPyvF1Y/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "Cupcake Squad",
                            "liveBroadcastContent": "none",
                            "publishTime": "2020-09-16T05:18:19Z"
                        }
                    }
                ]
            });
        }, 1500);
        return [2 /*return*/];
    });
}); });
expressApp.get("/details", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var videoId, _a, status, data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                videoId = req.query.videoId;
                return [4 /*yield*/, _Services_YoutubeSearchService__WEBPACK_IMPORTED_MODULE_4__["default"].details(videoId || "")];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 2]), status = _a[0], data = _a[1];
                res.status(status).send(data);
                return [2 /*return*/];
        }
    });
}); });
expressApp.listen(process.env.PORT || 3000, function () {
    console.log("Server up!");
});


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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