// Env
require('dotenv').config({ path: './.env.dev' })

// Imports
const express = require('express');
const models = require('./app/models');
const controllers = require('./app/controllers/index')(models)
const bodyParser = require('body-parser');

// Initial Config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CRUD
// Only available if DEV_MODE env variable is true because of security reasons
if( process.env.DEV_MODE ){
    app.use('/api/crud/characters', require('./app/crud')(models.Characters));
}

// Routes
require('./app/routes')(app, controllers)

// Server
app.listen(port, () => console.log(`Listening on port ${port}`));

