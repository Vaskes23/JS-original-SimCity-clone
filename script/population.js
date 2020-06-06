var population = 0; //počteční populace města
var happiness = 0; //štěstí ve městě odvíjí se od něj růst populace
var growth = 0; //určuje vzrůst populace
var finalPopulation; // je finální populace co se vypisuje
var sum = 0; //určuje velikost populace dle štěstí
var tax = 0; //určuje kolik bude daň za rok
var building = 0; //určuje počet budov
var power = 0; //určuje jestli je elktřina
var income = 0; //určuje hodnotu peněz která se přidá

function hiddingPopulation() {
  //schovává starou populaci
  darkgrey(); //výplň
  ctx.fillRect(width / 1.5, barHeight, width / 2, barHeight);
}

function populationGrowth() {
  //počítá vzrůst populace
  window.setInterval(function () {
    if (happiness < 40) {
      sum = population * happiness; //počítání populace dle radosti
    } else if (happiness <= 0) {
      happiness = 0;
    } else {
      sum = population * 40; //počítání populace dle radosti
    }
    sum /= 100;
    growth += sum; //vzrůst populace
    writeCurrenPopulation();
  }, 30000);
}

function taxes() {
  //počítá daně vzhledem k populaci
  tax = finalPopulation * 1.5;

  if (money >= 7000) {
    money += tax / 10; //redukuje velikost daně s přídavkem peněz
    income = tax;
  } else if (money >= 12000) {
    money += tax / 100;
    income = tax;
  } else if (money > 1900) {
    money += tax / 1000;
    income = tax;
  } else {
    money += tax;
    income = tax;
  }

  treasuryWriteText();
}

function writeCurrenPopulation() {
  //píše současnou populaci
  hiddingPopulation(); //přepíše populaci
  //vypisuje kolik je současná populace
  font();
  grey();
  finalPopulation = population + growth; //poslední sečtení populace
  if (building == 0 || power == 0) {
    finalPopulation = 0;
  }
  if (finalPopulation <= 0) {
    finalPopulation = 0;
  }
  ctx.fillText(
    "POPULACE : " + Math.round(finalPopulation),
    width / 1.485,
    barHeight * 2 - deci
  );
}
