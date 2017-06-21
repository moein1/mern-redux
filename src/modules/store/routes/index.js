const Store = require('../index');

// Returns all stores
function get(req, res) {   
    Store.Get.Get((error, stores) => {
        if (error)
            return res.status(500).send(error);
        res.json(stores);
    });
};

// Returns all stores for a particular brand ID:
function getSelectedBrand(req, res) {
    Store.Get.GetSelectedBrand(req.params.brandId, (error, stores) => {
        if (error)
            return res.status(500).send(error);
        res.json(stores);
    })
};

//Update selected store
function update(req, res) {
    Store.Update(req.params.storeId, req.body, (error, updatedSotre) => {
        if (error)
            return res.status(500).send(error);
        res.json(updatedSotre);
    })
}
module.exports = function (app) {
    app.get('/api/stores', get);
    app.get('/api/brands/:brandId/stores', getSelectedBrand);
    app.put('/api/stores/:storeId', update);
}