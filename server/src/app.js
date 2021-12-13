'use strict';

import Express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose"
import cors from "cors"

import { productsRouter } from './routes/products.js';
import { usersRouter } from './routes/users.js';
import { bannerRouter } from "./routes/banner.js";

const app = Express();

mongoose.connect('mongodb://localhost:27017/noink')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(Express.static('public'))

// Routers
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/banner', bannerRouter)

export default app;
