require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const app = express();
const { PORT } = process.env;

// Controllers
const healthController = require('./controller/health');


app.enable('e-tag');
app.set('e-tag', 'strong');

app.use(express.json());
app.use(helmet({
    hidePoweredBy: true,
    ieNoOpen: true,
    noSniff: true,
}));

// Rotas controller
app.use('/health', healthController);

app.listen(PORT, () => console.log(`Application is up in port ${PORT}`));
