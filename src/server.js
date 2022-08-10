import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

configViewEngine(app);

initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
