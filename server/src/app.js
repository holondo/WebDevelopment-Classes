'use strict';

import Express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose"
import cors from "cors"

import user from "./model/users.js"
import product from "./model/products.js"
import banner from "./model/banner.js"

import { productsRouter } from './routes/products.js';
import { usersRouter } from './routes/users.js';
import { bannerRouter } from "./routes/banner.js";

// Initial data to insert in server (not working yet)
// var banners = require('../data/banners.json')
// var products = require('../data/products.json')
// var users = require('../data/users.json')

const app = Express(); // Main app

mongoose.connect('mongodb://localhost:27017/noink') // db connection

// Isertion of initial data, not working yet!
// check db
// let verifier = await product.findOne()
// if(verifier === {}){
//     let prodToSave = new product(products)
//     let bannerToSave = new banner(banners)
//     let usersToSave = new user(users)

//     prodToSave.save()
//     bannerToSave.save()
//     usersToSave.save()
// }

// App requirements
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(Express.static('public'))

// Routers
app.use('/products', productsRouter)
app.use('/', usersRouter)
app.use('/banner', bannerRouter)

export default app;
