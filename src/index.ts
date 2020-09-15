import express from "express";

const expressApp = express();

expressApp.use(express.static("public"));

expressApp.listen(process.env.PORT || 3000, () =>
{
  console.log("Server up!");
});