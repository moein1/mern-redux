const _get = require('./get');
const _update = require('./update');

function Store() {};

Store.prototype.Get = _get;
Store.prototype.Update = _update;

module.exports = new Store();