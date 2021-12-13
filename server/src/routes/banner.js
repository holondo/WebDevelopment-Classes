import Express from "express";
import { get, put } from '../controllers/banner.js';

const router = Express.Router()

router.get('/', get)
router.put('/:id', put)

export {router as bannerRouter};
