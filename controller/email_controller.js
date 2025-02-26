import EmailService from "../service/email_service.js"

const Email = new EmailService();

class EmailController {
    constructor(parameters) {
    }

    static sendEmail = async (req, res) => {
        try {
            const { data } = req.body;
            const { subject, body } = data?.content;

            await Email.sendEmail(subject, body);
            res.status(200).json({
                message: 'Response from email noti service'
            })
        } catch (error) {
            console.log('Failed to send email!', error);
        }
    }
}

export default EmailController;