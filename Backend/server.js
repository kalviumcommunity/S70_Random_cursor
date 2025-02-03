require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8080;

app.use(express.json());

let dbConnectionStatus = "Disconnected";

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        dbConnectionStatus = "Connected to MongoDB";
        console.log(dbConnectionStatus);
    })
    .catch((error) => {
        dbConnectionStatus = "MongoDB Connection Failed";
        console.error(error);
    });

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('MongoDB connection closed through app termination');
        process.exit(0);
    });
});


app.get('/', (req, res) => {
    res.status(200).send({
        message: dbConnectionStatus
    });
});


app.get('/ping', (req, res) => {
    res.status(200).send({
        message: "API is working now"
    });
});

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
