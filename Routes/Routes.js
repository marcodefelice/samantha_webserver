'use strict';
var express = require('express');
const bservice = require("../Controllers/InitController");

//controllers
var init = require("../Controllers/InitController");

module.exports = function(app) {
	app.get('/', function(req, res) {
	res.send('hello world');
	});

app.route("/prova").get(function(req,res) {
	res.render("init");
	bservice.service();
});

}
