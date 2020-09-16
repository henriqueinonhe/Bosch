import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import YoutubeSearchService from "./Services/YoutubeSearchService";

const expressApp = express();
dotenv.config();

expressApp.use(express.json());
expressApp.use(express.static("public"));
expressApp.use(compression());
expressApp.use(cors());

expressApp.get("/search", async (req, res) =>
{
  // const {query} = req.query;
  // const [status, data] = await YoutubeSearchService.search(query as string || "");
  // res.status(status).send(data);

  //MOCK
  setTimeout(() =>
    res.status(200).send({
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
    }), 1500);
});

expressApp.listen(process.env.PORT || 3000, () =>
{
  console.log("Server up!");
});