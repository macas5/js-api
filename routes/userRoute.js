import express from "express";
import { verifySessionTokenAdmin, verifySessionTokenUser } from "../authCheck/authCheck.js";
import { getAllUsers, getUserById, deleteUserById, updateUser } from "../controller/userController.js";
import validateSession from "../utils/sessionValidation.js";

const router = express.Router();

router.get('/get', validateSession, verifySessionTokenAdmin, getAllUsers);

router.get('/get/:id', validateSession, verifySessionTokenUser, getUserById);

router.delete('/delete/:id', validateSession, verifySessionTokenUser, deleteUserById);

router.put('/update/:id', validateSession, verifySessionTokenUser, updateUser);

export default router;