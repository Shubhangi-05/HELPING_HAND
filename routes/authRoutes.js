import  express  from "express";
import {registerController,loginController,registerControllerngo, loginControllerngo} from '../controllers/authController.js'
const router = express.Router()

router.post('/userregister',registerController)
router.post('/userlogin',loginController)

router.post('/ngologin',loginControllerngo)

router.post('/ngoregister',registerControllerngo)
export default router;