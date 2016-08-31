'use strict'

var app = require('./app')
var db = require('./db')
var secrets = require('./topsecret.json')

var port = secrets.sitePort
var server = app.listen(port, function (err) {
  if (err) throw err
  console.log('HTTP server patiently listening on port', port)
  db.sync()
    .then(function () {
      console.log('Oh and btw the postgres server is totally connected, too')
    })
})

module.exports = server
