import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import configBodyParse from "./configs/configBodyParse";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8070;

configBodyParse(app);
configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
