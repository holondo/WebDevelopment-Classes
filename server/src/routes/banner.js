import Express from "express";
import { get, put, post } from '../controllers/banner.js';
const router = Express.Router()

router.get('/', get)
router.post('/', post)
router.put('/:id', put)

export {router as bannerRouter};
