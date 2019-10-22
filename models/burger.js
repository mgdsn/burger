const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  create: function(burgername, cb) {
    orm.create("burgers", burgername, function(res) {
      cb(res);
    });
  },

  update: function(condition, cb) {
    orm.update("burgers", condition, cb, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;