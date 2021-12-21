import Express from "express";
import {get, post, del, getByID, put} from '../controllers/products.js'; // functions

const router = Express.Router()

// Routes
router.get('/', get)
router.get('/:id', getByID)
router.post('/', post)
router.delete('/:id', del)
router.put('/:id', put)

export {router as productsRouter};
