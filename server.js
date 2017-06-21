const express = require('express');
const path = require('path');
const router = require('./src/router');
const bodyParer = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
//adding webpack for config automatically with server
const webpackConfig=require('./webpack.config');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);

//Connecting to mongodb database
mongoose.connect(config.db, (error) => {
    if (error)
        console.log(error);
    console.log('connecting to RFG database successfully');
});

var app = express();

app.use(webpackDevMiddleware(compiler,{noInfo:true,publicPath:webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParer.json());
app.use(bodyParer.urlencoded({ extended: true }));
//Set the static file directory that contain react files
app.use(express.static(path.join(__dirname, 'src/client')));

//add api for routing
router(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/client/index.html'));
});

const port = 4000;
app.listen(port, () => {
    console.log('we are listening on port ', port);
})