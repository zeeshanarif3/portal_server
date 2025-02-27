const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport')
const config = require("../config/config.js").get(process.env.NODE_ENV || "local");
const env_email=process.env.NODEMAILEREMAIL;
const pass=process.env.NODEMAILERPASS;
const { EMAIL } = config;

const transport =  nodemailer.createTransport(smtpTransport({
    // service: 'gmail',
    host: EMAIL.host,
    port: 587,
    secure: false,
    auth: {
        user: EMAIL.user,
        pass: EMAIL.password
    }
}));


export const sendEmail = async (email, subject, html) => {
    console.log(`${email} email sent to mail`);

    const mailOptions = {
        from: env_email,
        to: email,
        subject: subject,
        html: html
    };

    try {
        let data = await transport.sendMail(mailOptions);
        if (data && data.accepted && data.accepted.length > 0) {
            console.log(`Email sent successfully with ID: ${data.messageId}`);
            return true;
        } else {
            console.error(`Error sending email: ${JSON.stringify(data)}`);
            return false;
        }
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
        return false;
    }
};