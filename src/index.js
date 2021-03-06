"use strict";
const path = require('path');
const pathEnv = path.resolve(__dirname, '.env');

//.env
require('dotenv').config({ path: pathEnv });

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const fs = require('fs');
let app = require('./Routes/app');
const cors = require('cors');
const functions = require('./Functions/functions');

const restApi = express();

const mongoConector = require('./Databases/mongoHelper');

const WhatsApp = require('./Controllers/multisession.controller');

(async function () {
    await mongoConector();
    await WhatsApp.createInternal();
    await WhatsApp.initilizeInternal();
}());

(function () {
    console.clear();
    switch (process.env.useHTTPS) {
        case '1':
            let certificate;
            let privatekey;

            try {
                certificate = fs.readFileSync(process.env.CERT_CRT);
                privatekey = fs.readFileSync(process.env.CERT_KEY);
            } catch (e) {
                console.error(e);
                restApi.listen(process.env.PORT, process.env.HOST, () => { });

                console.info(`Servidor HTTP rodando em: http://${process.env.HOST}:${process.env.PORT}/`);
                break;
            }

            var serverRest = require('https').createServer({ key: privatekey, cert: certificate }, restApi);

            serverRest.listen(process.env.PORT, process.env.HOST, () => { });

            console.info(`Servidor HTTPS rodando em: https://${process.env.HOST}:${process.env.PORT}/`);
            break;

        default:
            restApi.listen(process.env.PORT, process.env.HOST, () => { });
            console.info(`Servidor HTTP rodando em: http://${process.env.HOST}:${process.env.PORT}/`);
    }

    restApi.use(cors({
        origin: '*',
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        methods: 'PUT, POST, PATCH, DELETE, GET'
    }));

    restApi.use(functions.Limiter);

    restApi.use(morgan('tiny'));

    restApi.use(express.urlencoded({ limit: '20mb', extended: true }));
    restApi.use(express.json({ limit: '20mb' }));
    restApi.use(cookieParser());
    
    restApi.use(app);
}());