import axios from "axios";
import { YoutubeSearchResponseData } from "../Models/YoutubeSearchResponseData";

const api = axios.create({
  baseURL: "http://localhost:3000/search"
});


export default class YoutubeSearchController
{
  public static async search(query : string) : Promise<YoutubeSearchResponseData>
  {
    const response = await api.get("", {
      params: {
        query
      }
    });
    return await response.data;
  }
}