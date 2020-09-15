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
  const {query} = req.query;
  const [status, data] = await YoutubeSearchService.search(query as string || "");
  res.status(status).send(data);
});

expressApp.listen(process.env.PORT || 3000, () =>
{
  console.log("Server up!");
});