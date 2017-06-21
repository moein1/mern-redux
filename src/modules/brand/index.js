const _get = require('./get');

function Brand() {};

Brand.prototype.Get = _get;

module.exports = new Brand();