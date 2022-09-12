import userModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find({}, {password: 0});
        res.status(202).json(allUsers);
    } catch (error) {
        console.error(error);
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        const {password, ...remainingUserData} = user._doc;
        res.status(200).json(remainingUserData);
    } catch (error) {
        res.status(405).send(error);
        console.error(error);
    }
};

export const deleteUserById = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).send(`User named ${user.userName} has been deleted`);
    } catch (error) {
        res.status(405).send(error);
        console.error(error);
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, { 
            $set: req.body,
            ...!req.user.isAdmin ? {"isAdmin": false} : {}
        }, {new: true}
        );
        res.status(200).json(user);
    } catch (error) {
        res.status(405).send(error);
        console.error(error);
    }
};