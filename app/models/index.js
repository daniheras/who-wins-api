const mongoose = require('mongoose');

// ===============
// Database Config
// ===============
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

// =======
// Schemas
// =======

module.exports = {
    Characters: mongoose.model('characters', require('./schemas/character')),
}