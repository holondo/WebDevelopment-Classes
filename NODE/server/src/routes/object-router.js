import Express from "express";
const router = Express.Router()
import {get,post, del}from '../controllers/object-controller.js';

router.get('/store/:key', get)
router.post('/store/:key', post)
router.delete('/store/:key', del)

export default router;