// bar menu
function bar() {
  grey(); //výplň
  ctx.fillRect(0, 0, width, barHeight);
  ctx.closePath();
}

var name = window.prompt("Napiš sem jméno tvého města"); //promt na vytvoření jména

function name1() {
  if (name == "") {
    //pokud jméno nezadáte tohle vám bude přiděleno
    name = "Creative Hill Village";
  }
  ctx.fillText(name, width / 2.8, barHeight - deci);
}

//učuje pozici na které se vypíše rok
function yearTextPosition() {
  font();
  ctx.fillText(
    "ROK:" + yearNumber,
    width - columnWidth - deci * 8,
    barHeight - deci
  );
}

var yearNumber = 1950; //určení základního roku
//funkce na překreslení a přidávání roku
function yearCounter() {
  window.setInterval(function () {
    yearNumber = yearNumber + 1;
    bar();
    darkgrey();
    yearTextPosition();
    name1();

    if (yearNumber == 2012) {
      window.location.reload();
    }

    taxes(); //přidá výdělek z daní
    writeIncome(); //ukáže na chvíli výdělěek z daní
  }, 60000);
}
