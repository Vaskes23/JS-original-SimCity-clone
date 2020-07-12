function secondBarStyle() {
  //vykresluje 2bar ve hře
  darkgrey(); //výplň
  ctx.fillRect(0, barHeight, width, barHeight);
}

var money = 6500; //všechny peníze
var price; //cena produktů
var cleaner; // var časovače

function hideTreasuryPrice() {
  //vykresluje část 2. baru ve hře
  darkgrey(); //výplň
  ctx.fillRect(0, barHeight, width / 3, barHeight);
}

//vypisuje kolik zbývá peněz v pokladně
function treasuryWriteText() {
  hideTreasuryPrice();
  font();
  if (money <= 0) {
    money = 0;
  }
  grey();
  ctx.fillText(
    "POKLADNA : " + Math.floor(money) + "$",
    width / 100,
    barHeight * 2 - deci
  );
}

//skrývá dočasnou hodnotu ceny
function hiddingPrice() {
  darkgrey(); //výplň
  ctx.fillRect(width / 3.1, barHeight, width / 12, barHeight); //schovává utracenou částku která se ukáže
}

//napíše vydělanou částku která se ukáže vedle peněz
function writeIncome() {
  yellow();
  smallFont();
  ctx.fillText("+ " + income + "$", width / 3.1, barHeight + deci * 2.5);

  //po chvíli zakryje utracenou částku
  var cleaner = window.setInterval(function () {
    hiddingPrice();
    clearInterval(cleaner);
  }, 700);
}

//napíše utracenou částku která se ukáže vedle peněz
function writePrice() {
  smallFont();
  ctx.fillText("- " + price + "$", width / 3.1, barHeight + deci * 2.5);

  var cleaner = window.setInterval(function () {
    //po chvíli zakryje utracenou částku
    hiddingPrice();
    clearInterval(cleaner);
  }, 700);
}
