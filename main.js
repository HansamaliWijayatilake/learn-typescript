"use strict";
exports.__esModule = true;
var inheritance_1 = require("./inheritance");
var child_1 = require("./child");
var child_2 = require("./child");
var yahan = new inheritance_1.human("Yahan_human");
yahan.walk();
var hansi = new child_1.swimmer("hansi_Swimmer");
hansi.swim(800);
var teach = new child_2.teacher("Teacher");
teach.walk(52);
teach.teach("English");
