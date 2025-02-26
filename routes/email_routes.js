import EmailController from "../controller/email_controller.js";

import express from "express";

const router = express.Router();

router
    .post('/send', EmailController.sendEmail)


export default router;