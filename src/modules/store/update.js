const Store = require('../../../models/store');

function Update(id, store, callback) {
    Store.findOneAndUpdate({ id: id }, store, { new: true }, (error, updatedStore) => {
        if (error)
            return callback(error);
        callback(null, updatedStore);
    })
}

module.exports = Update;