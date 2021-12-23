import Express from "express";
import { get, put, post } from '../controllers/banner.js'; // Functions

const router = Express.Router()

// Routes
router.get('/', get)
router.post('/', post)
router.put('/:id', put)

export {router as bannerRouter};
