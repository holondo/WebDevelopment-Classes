import Express from "express";
const router = Express.Router()
import {get,post, del, getByID, login, put}from '../controllers/users-controller.js';

router.get('/users', get)
router.get('/users/:id', getByID)
router.post('/users', post)
router.delete('/users/:id', del)
router.post("/login/", login)
router.put("/users/:id", put)

export default router;