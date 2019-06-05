const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
    name: String,
    portrait: String,
    tags: [String]
});

// Example

const example = {
    name: 'Doraemon',
    portrait: 'doraemon.jpg',
    tags: [
        'anime',
        'doraemon',
        
    ]
}