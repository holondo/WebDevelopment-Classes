import Express from "express";
import {get, post, del, getByID, login, put} from '../controllers/users.js';

const router = Express.Router()

router.get('/', get)
router.get('/:id', getByID)
router.post('/', post)
router.delete('/:id', del)
router.post("/login", login)
router.put("/:id", put)

export {router as usersRouter};
