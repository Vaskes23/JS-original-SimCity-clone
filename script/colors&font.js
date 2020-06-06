function font() {
  //fonty
  ctx.font = "45px Arial";
}

function smallFont() {
  //fonty
  ctx.font = "25px Arial";
}

function upgradeFont() {
  //fonty
  ctx.font = "23px Arial";
}

//každá barva je zde definována
function black() {
  ctx.strokeStyle = "#000";
}

function white() {
  ctx.strokeStyle = "#fff";
}

function yellow() {
  ctx.strokeStyle = "#FFFF00";
}

function green() {
  ctx.fillStyle = "#48CD33";
}

function red() {
  ctx.fillStyle = "#de1032";
}

function brown() {
  ctx.fillStyle = "#CA873F";
}

function grey() {
  ctx.fillStyle = "#D0D0D0";
}

function darkgrey() {
  ctx.fillStyle = "#797979";
}

function white2() {
  ctx.fillStyle = "#fff";
}

//////////////////////////////barvy
var gradient = ctx.createLinearGradient(0, 0, width, 0); //barva písma
gradient.addColorStop("0", "#ffff00");

var dark = ctx.createLinearGradient(0, 0, width, 0); //barva písma
dark.addColorStop("0", "#000");
