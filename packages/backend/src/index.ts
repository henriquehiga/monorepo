import { ApiResponseModel, usernameValidator } from '@monorepo/common';

import cors from 'cors';
import express from 'express';

const app = express();
const port = 3000;

app.use('/api', express.json(), cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.get('/api/', (_, res) => {
    const response: ApiResponseModel = {
        status: 'success',
        data: {
            message: "Hello World!",
            timestamp: Date.now()
        }
    };

    res.json(response);
});

app.post('/api/users', (req, res) => {
    const body = req.body;

    const username = body.username as string;

    const usernameValido = usernameValidator(username);

    if (!usernameValido) {
        const response: ApiResponseModel = {
            status: 'error',
            data: {
                message: "Nome de usuário inválido!",
                timestamp: Date.now()
            }
        };

        res.status(400).json(response);
        return;
    }

    const response: ApiResponseModel = {
        status: 'success',
        data: {
            message: "Nome de usuário válido!",
            timestamp: Date.now()
        }
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Backend rodando em http://localhost:${port}`);
});