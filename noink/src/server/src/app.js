'use strict';
import Express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose"
import user from "./model/users-model.js"
import product from "./model/products-model.js";
import productsRouter from './routes/products-router.js';
import usersRouter from './routes/users-router.js';
import cors from "cors"

const app = Express();
//console.log("APP Created", app)
mongoose.connect('mongodb://localhost:27017/noink')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(Express.static('public'))
app.use('/products', productsRouter);
app.use('/', usersRouter);

export default app;