var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get('/', function(req,res){
    burger.selectAll(function(data){
        var object1 ={
            bugers:data
        };
        console.log(object1);
    })
})