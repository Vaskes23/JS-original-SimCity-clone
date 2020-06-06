var HelpNumber = 0; //počet pomocných budov
var police = false; //stav pomocné budovy
var hospital = false; //stav pomocn= budovy
var firedepartment = false; //stav pomocné budovy

function hiddingHappiness() {
  //schovává starou hodnotu štěstí
  darkgrey(); //výplň
  ctx.fillRect(width / 2.6, barHeight, width / 3.5, barHeight);
}

function safetyLine() {
  white2();
  ctx.fillRect(
    //dělá ukazatel štěstí
    width / 2.05,
    barHeight * 1.3,
    deci / 2,
    barHeight / 2
  );

  ctx.fillRect(
    //dělá ukazatel štěstí
    width / 1.845,
    barHeight * 1.3,
    deci / 2,
    barHeight / 2
  );
}

function happinessGrowth() {
  //měří růst štěstí ve městě
  green();
  var i = 0;

  i = happiness * 2; //kontroluje aby se štěstí vešlo do ukazovatele
  if (i >= 200) {
    i = 225;
    firedepartment = true;
  } else if (i <= 6) {
    i = 0;
  }

  if (i >= 70 && HelpNumber >= 1) {
    //pokud překročíš tuto hranici přestane ti mizet tato část štěstí
    police = true;
  }
  if (i >= 140 && HelpNumber >= 1) {
    police = true; //pokud překročíš tuto hranici přestane ti mizet tato část štěstí
  }

  ctx.fillRect(
    //dělá ukazatel štěstí
    width / 2.28,
    barHeight * 1.3,
    width - deci * 134 + i,
    barHeight / 2
  );
  white();
  ctx.strokeRect(width / 2.28, barHeight * 1.3, width / 6, barHeight / 2);
  safetyLine();
}

function writeHappiness() {
  //píše úrověň štěstí a jeho ukaztel
  hiddingHappiness();
  happinessGrowth();
  font();
  grey();
  ctx.fillText("Š ", width / 2.45, barHeight * 2 - (deci * 100) / 140);
}
