import express from "express"
import mongooseConnectionModule from "./mongodb/mongodbConnection";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { User } from "./mongodb/schemas/myScheme";
dotenv.config();

mongooseConnectionModule()

const app = express()
app.use(cors());
app.use(bodyParser.json());

app.get("/health-check", (req, res, next) => {
    res.json({ message: "ok" })
})

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`api listening to port ${PORT}`);
});

