const Brand = require('../../../models/brand');

//return all brands
function Get(callback) {
    Brand.find({}).exec((error, brands) => {
        if (error)
           return callback(error);
        callback(null,brands);
    })
}

module.exports = Get;