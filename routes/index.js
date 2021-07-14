const router = require('express').Router();

const { pid } = require('process');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = rotuer;