import axios from "axios";
import { YoutubeSearchResponseData } from "../Models/YoutubeSearchResponseData";
import { YoutubeVideoDetailsResponseData } from "../Models/YoutubeVideoDetailsResponseData";

const api = axios.create({
  baseURL: "http://localhost:3000"
});


export default class YoutubeAPIController
{
  public static async search(query : string, pageToken = "") : Promise<YoutubeSearchResponseData>
  {
    const response = await api.get("/search", {
      params: {
        query,
        pageToken
      }
    });
    return await response.data;
  }

  public static async details(videoId : string) : Promise<YoutubeVideoDetailsResponseData>
  {
    const response = await api.get("/details", {
      params: {
        videoId
      }
    });
    return await response.data;
  }
}