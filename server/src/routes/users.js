import Express from "express";
import {get, post, del, getByID, login, put} from '../controllers/users.js';

const router = Express.Router()

router.get('/users', get)
router.get('/users/:id', getByID)
router.post('/users', post)
router.delete('/users/:id', del)
router.post("/login", login)
router.put("/users/:id", put)

export {router as usersRouter};
