import { ApiResponseModel } from '@monorepo/common';
import express from 'express';

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api', (req, res) => {
    const response: ApiResponseModel = {
        status: 'success',
        data: {
            message: "Hello World!",
            timestamp: Date.now()
        }
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Backend rodando em http://localhost:${port}`);
});