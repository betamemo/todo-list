import bodyParser from "body-parser";
import express from "express";
import { router as todoRouter } from "./modules/todo/todo.controller";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(todoRouter);
app.listen(3000, () => {
    console.log("http://localhost:3000");
});
