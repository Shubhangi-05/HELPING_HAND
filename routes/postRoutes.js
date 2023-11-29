import  express  from "express";
import {createPostController} from '../controllers/postController.js'
const router = express.Router()

router.post('/createpost',createPostController)
export default router;