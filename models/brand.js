const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    id: { type: Number, require: true },
    name: { type: String, trim: true, require: true }
});

module.exports = mongoose.model('brand', brandSchema, 'brand');