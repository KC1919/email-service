import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3001;


app.post('/email', (req, res) => {
    try {
        const { data } = req.body
        console.log('Welcome to email service');
        res.status(200).json({
            message: 'Response from email noti service'
        })
    } catch (error) {
        console.log('Failed to send email noti', error);
    }
});

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