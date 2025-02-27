
import User from "../containers/user/user";
import {
    responseCodes,
    messageID,
    messages,
} from "../constant";

import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { tokenGenerator } from "../middleware/utils";
import { sendEmail } from "../middleware/sendEmail";
import { trainerEmailTemplate } from "../middleware/emailTemplate";

export const AddTrainer = async (req, res) => {
    try {
        const { password, First_name, Last_name, email, type } = req.body;

        if (await User.findOne({ email: email.toLowerCase() })) {
            return res.status(409).json({
                status: responseCodes.failedStatus,
                messageID: messageID.conflictCode,
                message: messages.emailExist,
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let user = new User({
            First_name,
            Last_name,
            role: 1,
            email: email.toLowerCase(),
            password: hashedPassword,
            type: type
        });

        let register = await user.save();

        if (register) {
            let data = await tokenGenerator(register);
            if (data.status) {
                const { subject, html } = trainerEmailTemplate(First_name, email, password);
                await sendEmail(email, subject, html);
                return res.status(201).json({
                    status: responseCodes.successStatus,
                    messageID: messageID.successCode,
                    message: messages.createAccount,
                    data: { token: data.token.token },
                });
            } else {
                return res.status(500).json({
                    status: responseCodes.failedStatus,
                    messageID: messageID.internalServerError,
                    message: messages.tokenGenerationFailed,
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            status: responseCodes.failedStatus,
            messageID: messageID.internalServerError,
            message: messages.internalServerError,
        });
    }
};
export const deactivateTrainer = async (req, res) => {
    try {
        const { trainerId } = req.params;

        const trainer = await User.findById(trainerId);

        if (!trainer) {
            return res.status(404).json({
                status: responseCodes.failedStatus,
                messageID: messageID.notFoundCode,
                message: messages.userNotFound,
            });
        }

        trainer.status = 1;
        await trainer.save();

        return res.status(200).json({
            status: responseCodes.successStatus,
            messageID: messageID.successCode,
            message: messages.trainerDeactivate,
            data: { trainerId, status: trainer.status },
        });
    } catch (error) {
        return res.status(500).json({
            status: responseCodes.failedStatus,
            messageID: messageID.internalServerError,
            message: messages.internalServerError,
        });
    }
};

export const activateTrainer = async (req, res) => {
    try {
        const { trainerId } = req.params;

        const trainer = await User.findById(trainerId);

        if (!trainer) {
            return res.status(404).json({
                status: responseCodes.failedStatus,
                messageID: messageID.notFoundCode,
                message: messages.userNotFound,
            });
        }

        trainer.status = 0;
        await trainer.save();

        return res.status(200).json({
            status: responseCodes.successStatus,
            messageID: messageID.successCode,
            message: messages.trainerActivate,
            data: { trainerId, status: trainer.status },
        });
    } catch (error) {
        return res.status(500).json({
            status: responseCodes.failedStatus,
            messageID: messageID.internalServerError,
            message: messages.internalServerError,
        });
    }
};

export const deleteTrainer = async (req, res) => {
    try {
        const { trainerId } = req.params;

        const trainer = await User.findById(trainerId);

        if (!trainer) {
            return res.status(404).json({
                status: responseCodes.failedStatus,
                messageID: messageID.notFoundCode,
                message: messages.userNotFound,
            });
        }

        await User.findByIdAndDelete(trainerId);

        return res.status(200).json({
            status: responseCodes.successStatus,
            messageID: messageID.successCode,
            message: messages.deleteteTrainer,
        });
    } catch (error) {
        return res.status(500).json({
            status: responseCodes.failedStatus,
            messageID: messageID.internalServerError,
            message: messages.internalServerError,
        });
    }
};

export const getAllTrainers = async (req, res) => {
    try {
        const trainers = await User.find({ role: 1 }); 
        
        if (!trainers.length) {
            return res.status(404).json({
                status: responseCodes.failedStatus,
                messageID: messageID.notFoundCode,
                message: messages.userNotFound,
            });
        }

        return res.status(200).json({
            status: responseCodes.successStatus,
            messageID: messageID.successCode,
            message: messages.trainerfetched,
            data: trainers,
        });
    } catch (error) {
        return res.status(500).json({
            status: responseCodes.failedStatus,
            messageID: messageID.internalServerError,
            message: messages.internalServerError,
        });
    }
};

export const getTrainerById = async (req, res) => {
    try {
        const { trainerId } = req.params;

        const trainer = await User.findOne({ _id: trainerId, role: 1 });

        if (!trainer) {
            return res.status(404).json({
                status: responseCodes.failedStatus,
                messageID: messageID.notFoundCode,
                message: messages.userNotFound,
            });
        }

        return res.status(200).json({
            status: responseCodes.successStatus,
            messageID: messageID.successCode,
            message: messages.retreivetrainer,
            data: trainer,
        });
    } catch (error) {
        return res.status(500).json({
            status: responseCodes.failedStatus,
            messageID: messageID.internalServerError,
            message: messages.internalServerError,
        });
    }
};