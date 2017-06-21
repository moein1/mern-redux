const Brand = require('../index');

//return all brands
function get(req, res) {
    Brand.Get((error, brands) => {
        if (error)
            return res.status(500).send(error);
        res.json(brands);
    });
}

module.exports = function(app) {
    app.get('/api/brands', get);
}