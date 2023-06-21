import express from "express";
import { autoComplete, calender, register, searchByLocation, searchbyGeoCoordinate } from "../controllers/airControllers.js";
import { checks, registeredUSer } from "../middlewares/authmiddlewares.js";

const router=express.Router();

router.post('/register',checks,register);
router.get('/searchByLocation',registeredUSer,searchByLocation);
router.get('/autoComplete',registeredUSer,autoComplete);
router.get('/searchbyGeoCoordinate',registeredUSer,searchbyGeoCoordinate);
router.get('/calender',registeredUSer,calender)

export default router;