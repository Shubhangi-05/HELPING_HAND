import  express  from "express";
import formidable from "express-formidable"
import {createPostController} from '../controllers/postController.js'
import { displayPostController } from "../controllers/postController.js";
import { postPhotoController } from "../controllers/postController.js";
const router = express.Router()

router.post('/create-post',formidable(),createPostController)
router.get('/displayAll',displayPostController)
router.get('/postphoto/:pid',postPhotoController)
export default router;