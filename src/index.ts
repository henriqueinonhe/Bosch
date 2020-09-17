import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import YoutubeAPIService from "./Services/YoutubeSearchService";

const expressApp = express();
dotenv.config();

expressApp.use(express.json());
expressApp.use(express.static("public"));
expressApp.use(compression());
expressApp.use(cors());

expressApp.get("/search", async (req, res) =>
{
  //Real
  // const {query, pageToken} = req.query;
  // const [status, data] = await YoutubeAPIService.search(query as string || "", pageToken as string);
  // res.status(status).send(data);

  // MOCK
  // setTimeout(() =>
  //   res.status(200).send({
  //     "kind": "youtube#searchListResponse",
  //     "etag": "I_VfimA1o9IyEshS715xZrdjFvY",
  //     "nextPageToken": "CAUQAA",
  //     "regionCode": "BR",
  //     "pageInfo": {
  //       "totalResults": 1000000,
  //       "resultsPerPage": 5
  //     },
  //     "items": [
  //       {
  //         "kind": "youtube#searchResult",
  //         "etag": "ZiWnftpnVdgJAsx7SGfvmKx-Fv0",
  //         "id": {
  //           "kind": "youtube#video",
  //           "videoId": "eThlEPyvF1Y"
  //         },
  //         "snippet": {
  //           "publishedAt": "2020-09-16T05:18:19Z",
  //           "channelId": "UCTRNV3t2jxbkZgBjhyDv8UQ",
  //           "title": "LOL Surprise REMIX OMG Super Surprise NEW OMG Dolls LOL Hair Flips HUGE UNBOXING!",
  //           "description": "It's a HUGE LOL Surprise Remix Unboxing! All new LOL Remix Super Surprise 4 new OMG fashion dolls and all new LOL Surprise Hair Flips and Remix Pets.",
  //           "thumbnails": {
  //             "default": {
  //               "url": "https://i.ytimg.com/vi/eThlEPyvF1Y/default.jpg",
  //               "width": 120,
  //               "height": 90
  //             },
  //             "medium": {
  //               "url": "https://i.ytimg.com/vi/eThlEPyvF1Y/mqdefault.jpg",
  //               "width": 320,
  //               "height": 180
  //             },
  //             "high": {
  //               "url": "https://i.ytimg.com/vi/eThlEPyvF1Y/hqdefault.jpg",
  //               "width": 480,
  //               "height": 360
  //             }
  //           },
  //           "channelTitle": "Cupcake Squad",
  //           "liveBroadcastContent": "none",
  //           "publishTime": "2020-09-16T05:18:19Z"
  //         }
  //       },
  //       {
  //         "kind": "youtube#searchResult",
  //         "etag": "pg99-HijDmnKM9qiEGzZnlpuulY",
  //         "id": {
  //           "kind": "youtube#video",
  //           "videoId": "1TyRbPTN970"
  //         },
  //         "snippet": {
  //           "publishedAt": "2020-09-16T15:00:00Z",
  //           "channelId": "UCHnjNAMpCREywRsLoBWt86g",
  //           "title": "¡Nunca Eres Grande Para Las Muñecas! 6 Diys De Ladybug Para Lol Surprise",
  //           "description": "Subscríbete aquí: https://www.youtube.com/channel/UCHnjNAMpCREywRsLoBWt86g?sub_confirmation=1 15 Trucos Y Manualidades Para Muñecas Bebés ...",
  //           "thumbnails": {
  //             "default": {
  //               "url": "https://i.ytimg.com/vi/1TyRbPTN970/default.jpg",
  //               "width": 120,
  //               "height": 90
  //             },
  //             "medium": {
  //               "url": "https://i.ytimg.com/vi/1TyRbPTN970/mqdefault.jpg",
  //               "width": 320,
  //               "height": 180
  //             },
  //             "high": {
  //               "url": "https://i.ytimg.com/vi/1TyRbPTN970/hqdefault.jpg",
  //               "width": 480,
  //               "height": 360
  //             }
  //           },
  //           "channelTitle": "LaLiLu ES",
  //           "liveBroadcastContent": "none",
  //           "publishTime": "2020-09-16T15:00:00Z"
  //         }
  //       },
  //       {
  //         "kind": "youtube#searchResult",
  //         "etag": "UKupOWfQ5JEy7hM0WR3BDRa768g",
  //         "id": {
  //           "kind": "youtube#video",
  //           "videoId": "iWoMgKPPfns"
  //         },
  //         "snippet": {
  //           "publishedAt": "2020-09-15T13:00:23Z",
  //           "channelId": "UCeBC9W6J2TmXUW7sZ4rcZGQ",
  //           "title": "OMG NEONLICIOUS FAMILY VACATION MOVIE 🌴 - AIRPLANE HOTEL &amp; SPA LOL FAMILY DAZZLE TRIP WITH BABY!",
  //           "description": "Click here to Subscribe guys! ❤ https://goo.gl/FNis9t! Please give this video a LIKE & SUBSCRIBE guys! OMG Dolls Dazzle and her sisters Neonlicious ...",
  //           "thumbnails": {
  //             "default": {
  //               "url": "https://i.ytimg.com/vi/iWoMgKPPfns/default.jpg",
  //               "width": 120,
  //               "height": 90
  //             },
  //             "medium": {
  //               "url": "https://i.ytimg.com/vi/iWoMgKPPfns/mqdefault.jpg",
  //               "width": 320,
  //               "height": 180
  //             },
  //             "high": {
  //               "url": "https://i.ytimg.com/vi/iWoMgKPPfns/hqdefault.jpg",
  //               "width": 480,
  //               "height": 360
  //             }
  //           },
  //           "channelTitle": "Minky Toys and Dolls",
  //           "liveBroadcastContent": "none",
  //           "publishTime": "2020-09-15T13:00:23Z"
  //         }
  //       },
  //       {
  //         "kind": "youtube#searchResult",
  //         "etag": "KhO-K_TMBcwepKcSB1RYyAA6B7w",
  //         "id": {
  //           "kind": "youtube#video",
  //           "videoId": "8hM4-znOsF4"
  //         },
  //         "snippet": {
  //           "publishedAt": "2020-08-07T12:00:04Z",
  //           "channelId": "UCYiBIqmMGTTSiPj78bCpE1Q",
  //           "title": "Nunca se é Velha Demais para Bonecas! 10 DIYs com LOL Surprise da Branca de Neve",
  //           "description": "Subscreve aqui: https://www.youtube.com/channel/UCYiBIqmMGTTSiPj78bCpE1Q?sub_confirmation=1 Bonecas de Papel Vestidas/ Scoob vs Monstros de ...",
  //           "thumbnails": {
  //             "default": {
  //               "url": "https://i.ytimg.com/vi/8hM4-znOsF4/default.jpg",
  //               "width": 120,
  //               "height": 90
  //             },
  //             "medium": {
  //               "url": "https://i.ytimg.com/vi/8hM4-znOsF4/mqdefault.jpg",
  //               "width": 320,
  //               "height": 180
  //             },
  //             "high": {
  //               "url": "https://i.ytimg.com/vi/8hM4-znOsF4/hqdefault.jpg",
  //               "width": 480,
  //               "height": 360
  //             }
  //           },
  //           "channelTitle": "LaLiLu PT",
  //           "liveBroadcastContent": "none",
  //           "publishTime": "2020-08-07T12:00:04Z"
  //         }
  //       },
  //       {
  //         "kind": "youtube#searchResult",
  //         "etag": "hnxHWb1M9-5689dvB1__wGvdIsg",
  //         "id": {
  //           "kind": "youtube#video",
  //           "videoId": "tSRYh0B9srA"
  //         },
  //         "snippet": {
  //           "publishedAt": "2020-09-16T15:45:02Z",
  //           "channelId": "UCZnlRhSFoDwlKhJYH0aeXMw",
  //           "title": "When your boss doesn&#39;t find you funny // LOL COMEDIHA Season 6 Meme Compilation",
  //           "description": "00:00 Orchestra 00:56 Flirting Seduction 01:41 Bank Security 02:41 Crucial Battle 03:46 Orchestra II 04:28 Toxic Clean Up 05:11 Room Service Lol ...",
  //           "thumbnails": {
  //             "default": {
  //               "url": "https://i.ytimg.com/vi/tSRYh0B9srA/default.jpg",
  //               "width": 120,
  //               "height": 90
  //             },
  //             "medium": {
  //               "url": "https://i.ytimg.com/vi/tSRYh0B9srA/mqdefault.jpg",
  //               "width": 320,
  //               "height": 180
  //             },
  //             "high": {
  //               "url": "https://i.ytimg.com/vi/tSRYh0B9srA/hqdefault.jpg",
  //               "width": 480,
  //               "height": 360
  //             }
  //           },
  //           "channelTitle": "LOL ComediHa! Official Comedy TV show",
  //           "liveBroadcastContent": "none",
  //           "publishTime": "2020-09-16T15:45:02Z"
  //         }
  //       }
  //     ]
  //   }), 1500);

  setTimeout(() => res.send({items: []}), 1500);
});

expressApp.get("/details", async (req, res) =>
{
  const {videoId} = req.query;
  const [status, data] = await YoutubeAPIService.details(videoId as string || "");
  res.status(status).send(data);


  //MOCK
  // setTimeout(() => 
  // {
  //   res.send({
  //     "kind": "youtube#videoListResponse",
  //     "etag": "xuLFotUPZYrcWeiLRdAYHTH-v-I",
  //     "items": [
  //       {
  //         "kind": "youtube#video",
  //         "etag": "9HM4gdHqlkSqwC3rru8HWKRTpzs",
  //         "id": "fhfSPWIJbe0",
  //         "snippet": {
  //           "publishedAt": "2020-07-02T20:46:15Z",
  //           "channelId": "UCj2DbLZbFfhV8WsZMZ2tIJA",
  //           "title": "The Borborema Province",
  //           "description": "Prof. Dr. Fabricio de Andrade Caxito (UFMG) -  Toward an integrated model of geological evolution for NE Brazil–NW Africa: The Borborema Province and its connections to the Trans-Saharan (Benino-Nigerian and Tuareg shields) and Central African orogens",
  //           "thumbnails": {
  //             "default": {
  //               "url": "https://i.ytimg.com/vi/fhfSPWIJbe0/default.jpg",
  //               "width": 120,
  //               "height": 90
  //             },
  //             "medium": {
  //               "url": "https://i.ytimg.com/vi/fhfSPWIJbe0/mqdefault.jpg",
  //               "width": 320,
  //               "height": 180
  //             },
  //             "high": {
  //               "url": "https://i.ytimg.com/vi/fhfSPWIJbe0/hqdefault.jpg",
  //               "width": 480,
  //               "height": 360
  //             }
  //           },
  //           "channelTitle": "Sociedade Brasileira de Geologia",
  //           "categoryId": "24",
  //           "liveBroadcastContent": "none",
  //           "localized": {
  //             "title": "The Borborema Province",
  //             "description": "Prof. Dr. Fabricio de Andrade Caxito (UFMG) -  Toward an integrated model of geological evolution for NE Brazil–NW Africa: The Borborema Province and its connections to the Trans-Saharan (Benino-Nigerian and Tuareg shields) and Central African orogens"
  //           }
  //         },
  //         "statistics": {
  //           "viewCount": "957",
  //           "likeCount": "142",
  //           "dislikeCount": "0",
  //           "favoriteCount": "0",
  //           "commentCount": "2"
  //         }
  //       }
  //     ],
  //     "pageInfo": {
  //       "totalResults": 1,
  //       "resultsPerPage": 1
  //     }
  //   });
  // }, 1500);
});

expressApp.listen(process.env.PORT || 3000, () =>
{
  console.log("Server up!");
});