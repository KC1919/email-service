import nodemailer from 'nodemailer'

class EmailService {

    constructor(parameters) {
        this.transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 587,
            secure: false,
            auth: {
                user: "9db955bee28213",
                pass: "23a6fe26e99824"
            },
        });
    }

    sendEmail = async (subject, body) => {
        try {
            const info = await this.transporter.sendMail({
                from: '"Kunal Foo Koch 👻" <kunal.chandra1906@gmail.com>', // sender address
                to: "kunal.chandra1900@gmail.com", // list of receivers
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