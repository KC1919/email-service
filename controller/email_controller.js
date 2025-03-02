import EmailService from "../service/email_service.js"
import { successResponse } from "../utils/api_response.js";

const Email = new EmailService();

class EmailController {
    constructor(parameters) {
    }

    static sendEmail = async (req, res, next) => {
        try {
            const { data } = req.body;
            const { email, subject, body } = data?.content;

            const result = await Email.sendEmail(email, subject, body);
            successResponse(res, 200, 'Email sent successfully!', result);
        } catch (error) {
            console.log('Failed to send email!', error);
            next(error);
        }
    }
}

export default EmailController;