'use strict'
var secrets = require('./topsecret.json')

var Sequelize = require('sequelize')
var databaseURI = secrets.databaseUri

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
})

module.exports = db
