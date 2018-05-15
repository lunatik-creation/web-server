var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

// var DATABASE_URL =
//   'postgres://wmxqaxuzfvfaxk:d331b79f7fae94ac01092986e9474e6ddf2f3abf50c05aaef4d7cc4c71ed15e9@ec2-54-235-64-195.compute-1.amazonaws.com:5432/deuvh8q85bih4g';

if (env === 'production') {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
  });
} else {
  sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/data/dev-todo-api.sqlite'
  });
}

var db = {};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;