import Express from "express";
const router = Express.Router()
import {get,post, del, getByID}from '../controllers/products-controller.js';

router.get('/', get)
router.get('/:id', getByID)
router.post('/', post)
router.delete('/:id', del)

export default router;