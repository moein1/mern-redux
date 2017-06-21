const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    id: { type: Number, require: true },
    brandId: { type: Number, require: true },
    name: { type: String, trim: true, require: true }
});

module.exports = mongoose.model('store', storeSchema, 'store');