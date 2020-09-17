import axios from "axios";
import { YoutubeVideoDetailsResponseData } from "../Models/YoutubeVideoDetailsResponseData";

const api = axios.create({
  baseURL: "http://localhost:3000/details"
});


export default class YoutubeVideoDetailsController
{
  public static async details(videoId : string) : Promise<YoutubeVideoDetailsResponseData>
  {
    const response = await api.get("/", {
      params: {
        videoId
      }
    });
    return await response.data;
  }
}