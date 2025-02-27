import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
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

    sendEmail = async (subject, body) => {
        try {
            const info = await this.transporter.sendMail({
                from: `"Kunal Foo Koch 👻" <${process.env.FROM_EMAIL}>`, // sender address
                to: `${process.env.TO_EMAIL}`, // list of receivers
                subject: subject, // Subject line
                text: body, // plain text body
                html: "<b>Hello world?</b>", // html body
            });

            console.log("Message sent: %s", info.messageId);
        } catch (error) {
            console.log('Failed to send email!', error);
        }
    }
}

export default EmailService;