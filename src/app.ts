import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import router from "./core/routes";

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/", router);

export default app;
