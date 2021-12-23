'use strict';
import Express from "express";
import router from './routes/object-router.js';
import bodyParser from 'body-parser';

const app = Express();
//console.log("APP Created", app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(Express.static('public'))
app.use('/', router);
export default app;