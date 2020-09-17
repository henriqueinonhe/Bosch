import axios from "axios";
import { YoutubeSearchResponseData } from "../Models/YoutubeSearchResponseData";
import { YoutubeVideoDetailsResponseData } from "../Models/YoutubeVideoDetailsResponseData";

const api = axios.create({
  baseURL: "http://localhost:3000/search"
});


export default class YoutubeSearchController
{
  public static async search(query : string, pageToken = "") : Promise<YoutubeSearchResponseData>
  {
    const response = await api.get("", {
      params: {
        query,
        pageToken
      }
    });
    return await response.data;
  }
}