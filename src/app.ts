import 'express-async-errors'
import express, {Application, json}  from "express";
import { handleError } from "./middlewares/handleErrors.middlewares";
import clientRouter from "./routes/clients.router";

const app: Application = express()
app.use(json())

app.use('/clients', clientRouter)

app.use(handleError)

export default app