import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import YoutubeAPIService from "./Services/YoutubeAPIService";

const expressApp = express();
dotenv.config();

expressApp.use(express.json());
expressApp.use(express.static("public"));
expressApp.use(compression());
expressApp.use(cors());

expressApp.get("/search", async (req, res) =>
{
  const {query, pageToken} = req.query;
  const [status, data] = await YoutubeAPIService.search(query as string || "", pageToken as string);
  res.status(status).send(data);
});

expressApp.get("/details", async (req, res) =>
{
  const {videoId} = req.query;
  const [status, data] = await YoutubeAPIService.details(videoId as string || "");
  res.status(status).send(data);
});

expressApp.listen(process.env.PORT || 3000, () =>
{
  console.log("Server up!");
});