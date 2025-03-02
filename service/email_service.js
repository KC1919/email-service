import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import CustomError from '../utils/custom_error.js';
dotenv.config({ path: 'config/.env' });

class EmailService {

    constructor(parameters) {
        this.transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 587,
            secure: false,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            },
        });
    }

    sendEmail = async (email, subject, body) => {
        try {
            const info = await this.transporter.sendMail({
                from: `"Kunal Foo Koch 👻" <${process.env.FROM_EMAIL}>`, // sender address
                to: email ? email : `${process.env.TO_EMAIL}`, // list of receivers
                subject: subject, // Subject line
                text: body, // plain text body
                html: "<b>Hello world?</b>", // html body
            });

            console.log("Message sent: %s", info.messageId);
        } catch (error) {
            console.log('Failed to send email!', error);
            throw new CustomError('Failed to send email, server error', 500);
        }
    }
}

export default EmailService;