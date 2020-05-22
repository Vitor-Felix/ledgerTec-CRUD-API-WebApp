const fs = require('fs');

module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": __dirname + "/database.sqlite3"
  },
  "test": {
    "dialect": "sqlite",
    "storage": ":memory"
  },
  "production": {
    "dialect": "sqlite",
    "storage": "database.sqlite3"
  }
};