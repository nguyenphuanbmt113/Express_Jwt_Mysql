import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import configBodyParse from "./config/configBodyParse";
import connection from "./config/connectDB";

require("dotenv").config();
const app = express();
const port = process.env.PORT || 8070;
//test connection db
connection();
//config bodyparse
configBodyParse(app);
configViewEngine(app);
//init webrouter
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
