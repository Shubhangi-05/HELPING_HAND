import express from 'express';
import { ngodetailsController,ngosearchcitycontroller } from '../controllers/ngoController.js';
const router=express.Router();

router.get('/ngodetails/:page',ngodetailsController);
router.get('/searchcity/:citySearch',ngosearchcitycontroller);
export default router;