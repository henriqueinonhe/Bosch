import axios from "axios";
import { YoutubeSearchResponseData } from "../Models/YoutubeSearchResponseData";

const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search"
});

export default class YoutubeSearchService
{
  public static async search(query : string) : Promise<[number, YoutubeSearchResponseData]>
  {
    const response = await api.get("", {
      params: {
        part: "id,snippet",
        q: query,
        key: process.env.GOOGLE_API_KEY
      }
    });
    const status = response.status;
    const data = await response.data;

    return [status, data];
  }
}