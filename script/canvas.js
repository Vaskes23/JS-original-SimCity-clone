var canvas = document.getElementById("canvas"); //definice canvasu a contextu
var ctx = canvas.getContext("2d");

var width = canvas.width; //určení základních veličin pro velikosti
var height = canvas.height;
var barHeight = height / 15;
var columnHeight = height - barHeight * 2;
var columnWidth = width / 6.7;
var bottom = height / 1.07;
var deci = width / 134;
var buttonCut = (width / 134) * 8;
