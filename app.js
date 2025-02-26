import express from 'express';
import EmailRouter from './routes/email_routes.js';
const app = express();
app.use(express.json());

const PORT = 3001;


app.use('/api/v1/email', EmailRouter);


app.get('/health', (req, res) => {
    try {
        res.status(200).json({
            message: 'Service up and running'
        });
    } catch (error) {
        console.log('Failed to send email noti', error);
    }
});

app.listen(PORT, () => {
    console.log('Email server listening on port:', PORT);
});