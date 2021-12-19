import Express from "express";
import {get, post, del, getByID} from '../controllers/products.js'; // functions

const router = Express.Router()

// Routes
router.get('/', get)
router.get('/:id', getByID)
router.post('/', post)
router.delete('/:id', del)

export {router as productsRouter};
