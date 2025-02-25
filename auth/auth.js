import User from "../containers/user/user"

import {responseCodes, messageID, messages, supportEmail } from "../constant";

import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import mongoose from "mongoose";
import moment from "moment";

const config = require('../config/config.js').get(process.env.NODE_ENV);
const { secret } = config;

 
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        let user = await User.findOne({ email: email.toLowerCase() });

        // If user doesn't exist, return failure
        if (!user) {
            return res.status(messageID.failureCode).json({
                status: responseCodes.failedStatus,
                messageID: messageID.failureCode,
                message: messages.userNotFound,
            });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(messageID.unAuthorizedUser).json({
                status: responseCodes.failedStatus,
                messageID: messageID.unAuthorizedUser,
                message: messages.incorrectPassword,
            });
        }

        // Create the JWT token payload
        const payload = {
            _id: user._id,
            email: user.email,
            name: user.Full_name,
            role: user.role,
            whatsapp_no:user.whatsapp_no,
            aadhar_no:user.aadhar_no
        };

        // Sign the token with an expiration of 90 days
        jwt.sign(payload, secret.jwt, { expiresIn: '90d' }, (err, token) => {
            if (err) {
                return res.status(messageID.internalServerError).json({
                    status: responseCodes.failedStatus,
                    messageID: messageID.failureCode,
                    message: messages.internalServerError,
                });
            }
            console.log(payload,"payload")

            // Return success response with token
            return res.status(messageID.successCode).json({
                status: responseCodes.successStatus,
                messageID: messageID.successCode,
                message: messages.loginSuccess,
                data: { payload,token },
            });
        });
    } catch (error) {
        console.log(error);
        return res.status(messageID.internalServerError).json({
            status: responseCodes.failedStatus,
            messageID: messageID.internalServerError,
            message: messages.internalServerError,
        });
    }
};
