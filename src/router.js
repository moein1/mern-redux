//I have added a new directory named module and 
//and try to separate to api as much as I could
module.exports = (app) => {    
    require('./modules/brand/routes')(app);
    require('./modules/store/routes')(app); 
};