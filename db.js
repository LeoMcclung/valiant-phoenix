const knex = require('knex');
const config = require('./knexfile');

const pg = knex(config.development);






module.exports = pg;