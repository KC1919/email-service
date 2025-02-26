class EmailService {
    constructor(parameters) {

    }

    sendEmail = async (subject, body) => {
        try {
            console.log(subject, body);
        } catch (error) {
            console.log('Failed to send email!', error);
        }
    }
}

export default EmailService;