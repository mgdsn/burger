const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(bdata) {
    console.log(bdata);
    res.render("index",{bdata});
  });
});

router.post("/burgers/update/:id", function(req, res) {
  let condition = parseInt(req.params.id);
  burger.update(condition, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.post("/burgers/add", function(req, res) {
  let condition = req.body.burgeradd;
  burger.create(condition, function(result) {
    console.log(result);
    res.redirect("/");
  });
});


module.exports = router;