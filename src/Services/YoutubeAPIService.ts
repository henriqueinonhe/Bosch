import axios from "axios";
import { YoutubeSearchResponseData } from "../Models/YoutubeSearchResponseData";
import { YoutubeVideoDetailsResponseData } from "../Models/YoutubeVideoDetailsResponseData";

const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export default class YoutubeAPIService
{
  public static async search(query : string, pageToken : string) : Promise<[number, YoutubeSearchResponseData]>
  {
    const response = await api.get("/search", {
      params: {
        part: "id,snippet",
        q: query,
        pageToken,
        type: "video",
        key: process.env.GOOGLE_API_KEY,
        maxResults: 12
      }
    });
    const status = response.status;
    const data = await response.data;

    return [status, data];
  }

  public static async details(videoId : string) : Promise<[number, YoutubeVideoDetailsResponseData]>
  {
    const response = await api.get("/videos", {
      params: {
        id: videoId,
        part: "snippet, statistics",
        key: process.env.GOOGLE_API_KEY
      }
    });
    const status = response.status;
    const data = await response.data;
    return [status, data];
  }
}