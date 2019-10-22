const connection = require("../config/connection.js");

const orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  create: function(table, burgername, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += "burger_name";
    queryString += ") ";
    queryString += "VALUES ('";
    queryString += burgername;
    queryString += "') ";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
 
  update: function(table, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET devoured = true";
    queryString += " WHERE id=";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

}

module.exports = orm;