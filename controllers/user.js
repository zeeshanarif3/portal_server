
import User from "../containers/user/user";
import {
    responseCodes,
    messageID,
    messages,
} from "../constant";

import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { tokenGenerator } from "../middleware/utils";



export const insert = async (req, res) => {
    try {
        const { password, First_name,Last_name, email,  role } = req.body;

        // Check if email already exists
        if (await User.findOne({ email: email.toLowerCase() })) {
            return res.status(messageID.conflictCode).json({
                status: responseCodes.failedStatus,
                messageID: messageID.conflictCode,
                message: messages.emailExist,
            });
        }

        let newPassword = "";
        if (password) {
            const salt = await bcrypt.genSalt(10);
            newPassword = await bcrypt.hash(password, salt);
        }

        let user = new User({
            First_name: First_name,
            Last_name:Last_name,
            role: role,
            email: email.toLowerCase(),
            password:newPassword
        });
console.log(user,"user");

        let register = await user.save();

        if (register) {
            let data = await tokenGenerator(register);
            console.log('Token Generation Result:', data);
            if (data.status) {
                return res.status(messageID.successCode).json({
                    status: responseCodes.successStatus,
                    messageID: messageID.successCode,
                    message: messages.createAccount,
                    data: { token: data.token.token },
                });
            } else {
                return res.status(messageID.internalServerError).json({
                    status: responseCodes.failedStatus,
                    messageID: messageID.internalServerError,
                    message: messages.tokenGenerationFailed,
                });
            }
        }
    } catch (error) {
        console.error(error,"+++++++++++");
        res.status(messageID.internalServerError).json({
            status: responseCodes.failedStatus,
            messageID: messageID.internalServerError,
            message: messages.internalServerError,
        });
    }
};