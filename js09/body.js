const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.static('public'));
app.use(morgan('combind'));
app.use(express.urlencoded({ extended: false}));