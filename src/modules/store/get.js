const Store = require('../../../models/store');

// Returns all stores
function Get(callback) {
    Store.find({}).exec((error, stores) => {
        if (error)
            return callback(error);
        callback(null, stores);
    })
};

// Returns all stores for a particular brand ID:
function GetSelectedBrand(brandId, callback) {
    Store.find({ brandId: brandId }, (error, stores) => {
        if (error)
            return callback(error);
        callback(null, stores);
    })
}


module.exports = {
    Get: Get,
    GetSelectedBrand: GetSelectedBrand
}