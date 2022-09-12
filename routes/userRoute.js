import express from "express";
import { verifySessionTokenAdmin, verifySessionTokenUser } from "../authCheck/authCheck.js";
import { getAllUsers, getUserById, deleteUserById, updateUser } from "../controller/userController.js";
import sessionValidation from "../utils/sessionValidation.js";

const router = express.Router();

router.get('/get', sessionValidation, verifySessionTokenAdmin, getAllUsers);

router.get('/get/:id', sessionValidation, verifySessionTokenUser, getUserById);

router.delete('/delete/:id', sessionValidation, verifySessionTokenUser, deleteUserById);

router.put('/update/:id', sessionValidation, verifySessionTokenUser, updateUser);

export default router;