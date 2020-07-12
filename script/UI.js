function colors() {
  //přebarvovaní okrajuů na černo při kliknutí na tlačítka
  if (butn1 == false) {
    black();
    paint1();
  }
  if (butn2 == false) {
    black();
    paint2();
  }
  if (butn3 == false) {
    black();
    paint3();
  }
  if (butn4 == false) {
    black();
    paint4();
  }
  if (butn5 == false) {
    black();
    paint5();
  }
  if (butn6 == false) {
    black();
    paint6();
  }
  if (butn7 == false) {
    black();
    paint7();
  }
  if (butn8 == false) {
    black();
    paint8();
  }
  if (butn9 == false) {
    black();
    paint9();
  }
  if (butn10 == false) {
    black();
    paint10();
  }
  if (butnUpgrade == false) {
    black();
    paintUpgrade();
  }
}

function wrong() {
  //základní nastavení statusu tlačítek
  butn1 = false;
  butn2 = false;
  butn3 = false;
  butn4 = false;
  butn5 = false;
  butn6 = false;
  butn7 = false;
  butn8 = false;
  butn9 = false;
  butn10 = false;
  butnUpgrade = false;
}

var context;

function columnstyle() {
  //vyplnění hlavního sloupce
  ctx.fillRect(0, barHeight * 2, columnWidth, columnHeight);
}

function lines() {
  //čáry na rozdělení plochy a UI

  for (i = -2; i < 2; i++) {
    //čáry vedle sloupce
    ctx.strokeRect(columnWidth + i, barHeight * 2, 1, height - deci * 15.5);
  }

  for (i = 1; i < 28; i++) {
    //čáry vedle plochy
    ctx.strokeRect(width - i, barHeight * 2, 1, height - deci * 15.5);
  }

  for (i = 1; i < 4; i++) {
    // čáry nahoře
    ctx.strokeRect(0, barHeight * 2 + i, width, 1);
  }
}

function buttomLines() {
  //čáry nad patou
  for (i = 1; i < 4; i++) {
    ctx.strokeRect(0, bottom - i, width, 1);
  }
}

function footer() {
  //pata
  ctx.fillStyle = "#6279D0";
  ctx.fillRect(0, bottom, width, barHeight);
}

//funkce volání obrázků pro tlačítka///////////////////////////////////////////////////////////////////

function make_base() {
  //funkce pro vymalování obrázku na tlačítku
  bagr_image = new Image(); //vytvoření obrázku
  bagr_image.src = "obrazky/bagr.jpg"; //obrázek pro vymalování
  bagr_image.onload = function () {
    ctx.drawImage(
      //pozice pro obrázek
      bagr_image,
      deci * 2,
      barHeight * 2.5,
      (buttonCut / 100) * 80,
      (buttonCut / 100) * 80
    );
  };
}

function make_base2() {
  cesta_image = new Image();
  cesta_image.src = "obrazky/cesta.jpg";
  cesta_image.onload = function () {
    ctx.drawImage(
      cesta_image,
      buttonCut + deci * 3.2,
      barHeight * 2.5,
      (buttonCut / 100) * 80,
      (buttonCut / 100) * 80
    );
  };
}

function make_base3() {
  strom_image = new Image();
  strom_image.src = "obrazky/strom.jpg";
  strom_image.onload = function () {
    ctx.drawImage(
      strom_image,
      deci * 2,
      barHeight * 4.3,
      (buttonCut / 100) * 80,
      (buttonCut / 100) * 80
    );
  };
}

function make_base4() {
  dom_image = new Image();
  dom_image.src = "obrazky/dom.jpg";
  dom_image.onload = function () {
    ctx.drawImage(
      dom_image,
      buttonCut + deci * 3.2,
      barHeight * 4.3,
      (buttonCut / 100) * 80,
      (buttonCut / 100) * 80
    );
  };
}

function make_base5() {
  komerce_image = new Image();
  komerce_image.src = "obrazky/komerce.jpg";
  komerce_image.onload = function () {
    ctx.drawImage(
      komerce_image,
      deci * 2,
      barHeight * 6,
      (buttonCut / 100) * 80,
      (buttonCut / 100) * 80
    );
  };
}

function make_base6() {
  svit_image = new Image();
  svit_image.src = "obrazky/svit.jpg";
  svit_image.onload = function () {
    ctx.drawImage(
      svit_image,
      buttonCut + deci * 3.2,
      barHeight * 6,
      (buttonCut / 100) * 80,
      (buttonCut / 100) * 80
    );
  };
}

function make_base7() {
  policie_image = new Image();
  policie_image.src = "obrazky/policie.jpg";
  policie_image.onload = function () {
    ctx.drawImage(
      policie_image,
      deci * 2,
      barHeight * 7.8,
      (buttonCut / 100) * 80,
      (buttonCut / 100) * 80
    );
  };
}

function make_base8() {
  hasici_image = new Image();
  hasici_image.src = "obrazky/hasici.jpg";
  hasici_image.onload = function () {
    ctx.drawImage(
      hasici_image,
      buttonCut + deci * 3.2,
      barHeight * 7.8,
      (buttonCut / 100) * 80,
      (buttonCut / 100) * 80
    );
  };
}

function make_base9() {
  nemocnice_image = new Image();
  nemocnice_image.src = "obrazky/nemocnice.jpg";
  nemocnice_image.onload = function () {
    ctx.drawImage(
      nemocnice_image,
      deci * 2,
      barHeight * 9.7,
      (buttonCut / 100) * 80,
      (buttonCut / 100) * 80
    );
  };
}

function make_base10() {
  elektrina_image = new Image();
  elektrina_image.src = "obrazky/elektrina.jpg";
  elektrina_image.onload = function () {
    ctx.drawImage(
      elektrina_image,
      buttonCut + deci * 3.2,
      barHeight * 9.7,
      (buttonCut / 100) * 80,
      (buttonCut / 100) * 80
    );
  };
}

//definice onclick funkcí a tvoření koster tlačítek a stylizace tlačítek///////////////////////////////////////////////////////////
function paintUpgrade() {
  ctx.strokeRect(
    buttonCut / 2,
    columnHeight - deci * 7,
    buttonCut * 1.5,
    buttonCut / 2
  );
  ctx.strokeRect(
    buttonCut / 2 + 1,
    columnHeight - deci * 7 + 1,
    buttonCut * 1.5,
    buttonCut / 2
  );
}
function upgrade() {
  red(); //exit tlačítko při stisknutí ukončí hru
  ctx.fillRect(
    buttonCut / 2,
    columnHeight - deci * 7,
    buttonCut * 1.5,
    buttonCut / 2
  );
  paintUpgrade();

  white2();
  upgradeFont();
  ctx.fillText("UPGRADE", buttonCut / 1.85, columnHeight - deci * 4);

  canvas.addEventListener("click", function (event) {
    if (
      event.x > buttonCut / 2 &&
      event.x < buttonCut / 2 + buttonCut * 1.5 &&
      event.y > columnHeight - deci * 7 &&
      event.y < columnHeight - deci * 7 + buttonCut * 1.5
    ) {
      context = "upgrade";
      footer(); //přebarvení starého písma
      ctx.fillStyle = gradient;
      font();
      ctx.fillText("UPGRADE : 500$", columnWidth, bottom + deci * 4.5);
      wrong();
      butnUpgrade = true; //přemazání ostatních
      colors();

      if (butnUpgrade == true) {
        yellow();
        paintUpgrade();
      }
    }
  });
}

function exit() {
  font();
  green(); //exit tlačítko při stisknutí ukončí hru
  ctx.fillRect(
    buttonCut / 2,
    columnHeight - deci,
    buttonCut * 1.5,
    buttonCut / 2
  );
  ctx.strokeRect(
    buttonCut / 2,
    columnHeight - deci,
    buttonCut * 1.5,
    buttonCut / 2
  );

  white2();
  ctx.fillText("EXIT", buttonCut / 1.6, columnHeight + deci * 2.5);

  canvas.addEventListener("click", function (event) {
    if (
      event.x > buttonCut / 2 &&
      event.x < buttonCut / 2 + buttonCut * 1.5 &&
      event.y > columnHeight - deci &&
      event.y < columnHeight - deci + buttonCut * 1.5
    ) {
      close();
    }
  });
}

function buttonBackground1() {
  ctx.fillRect(deci, barHeight * 2.3, buttonCut, buttonCut);
}
function paint1() {
  //vymalování okrajů
  ctx.strokeRect(deci, barHeight * 2.3, buttonCut, buttonCut);
  ctx.strokeRect(deci + 1, barHeight * 2.3 + 1, buttonCut + 1, buttonCut + 1);
}
function demolitinButton() {
  //funkce tlačítka
  canvas.addEventListener("click", function (event) {
    if (
      event.x > deci &&
      event.x < deci + buttonCut &&
      event.y > barHeight * 2.3 &&
      event.y < barHeight * 2.3 + buttonCut
    ) {
      context = "demolition";
      footer(); //přebarvení starého písma
      ctx.fillStyle = gradient;
      font();
      ctx.fillText("ZBOURAT : 0$", columnWidth, bottom + deci * 4.5);
      wrong();
      butn1 = true; //přemazání ostatních
      colors();

      if (butn1 == true) {
        yellow();
        paint1();
      }
    }
  });
}

function buttonBackground2() {
  ctx.fillRect(buttonCut + deci * 2.5, barHeight * 2.3, buttonCut, buttonCut); // talčítko 2
}
function paint2() {
  ctx.strokeRect(buttonCut + deci * 2.5, barHeight * 2.3, buttonCut, buttonCut);
  ctx.strokeRect(
    buttonCut + deci * 2.5 + 1,
    barHeight * 2.3 + 1,
    buttonCut + 1,
    buttonCut + 1
  );
}
function roadButton() {
  canvas.addEventListener("click", function (event) {
    if (
      event.x > buttonCut + deci * 2.5 &&
      event.x < buttonCut + deci * 2.5 + buttonCut &&
      event.y > barHeight * 2.3 &&
      event.y < barHeight * 2.3 + buttonCut
    ) {
      context = "road";
      footer();
      ctx.fillStyle = gradient;
      font();
      ctx.fillText("CESTA : 100$", columnWidth, bottom + deci * 4.5);
      wrong();
      butn2 = true;
      colors();
      if (butn2 == true) {
        yellow();
        paint2();
      }
    }
  });
}
function buttonBackground3() {
  ctx.fillRect(deci, barHeight * 4.1, buttonCut, buttonCut); // tlačítko 3
}
function paint3() {
  ctx.strokeRect(deci, barHeight * 4.1, buttonCut, buttonCut);
  ctx.strokeRect(deci + 1, barHeight * 4.1 + 1, buttonCut + 1, buttonCut + 1);
}
function parkButton() {
  canvas.addEventListener("click", function (event) {
    if (
      event.x > deci &&
      event.x < deci + buttonCut &&
      event.y > barHeight * 4.1 &&
      event.y < barHeight * 4.1 + buttonCut
    ) {
      context = "park";
      footer();
      ctx.fillStyle = gradient;
      font();
      ctx.fillText("PARKY : 600$", columnWidth, bottom + deci * 4.5);
      wrong();
      butn3 = true;
      colors();
      if (butn3 == true) {
        yellow();
        paint3();
      }
    }
  });
}
function buttonBackground4() {
  ctx.fillRect(buttonCut + deci * 2.5, barHeight * 4.1, buttonCut, buttonCut); // talčítko 4
}
function paint4() {
  ctx.strokeRect(buttonCut + deci * 2.5, barHeight * 4.1, buttonCut, buttonCut);
  ctx.strokeRect(
    buttonCut + deci * 2.5 + 1,
    barHeight * 4.1 + 1,
    buttonCut + 1,
    buttonCut + 1
  );
}
function houseButton() {
  canvas.addEventListener("click", function (event) {
    if (
      event.x > buttonCut + deci * 2.5 &&
      event.x < buttonCut + deci * 2.5 + buttonCut &&
      event.y > barHeight * 4.1 &&
      event.y < barHeight * 4.1 + buttonCut
    ) {
      context = "house";
      footer();
      ctx.fillStyle = gradient;
      font();
      ctx.fillText("DOMY : 250$", columnWidth, bottom + deci * 4.5);
      wrong();
      butn4 = true;
      colors();
      if (butn4 == true) {
        yellow();
        paint4();
      }
    }
  });
}

function buttonBackground5() {
  ctx.fillRect(deci, barHeight * 5.9, buttonCut, buttonCut); // tlačítko 5
}
function paint5() {
  ctx.strokeRect(deci, barHeight * 5.9, buttonCut, buttonCut);
  ctx.strokeRect(deci + 1, barHeight * 5.9 + 1, buttonCut + 1, buttonCut + 1);
}
function shopButton() {
  canvas.addEventListener("click", function (event) {
    if (
      event.x > deci &&
      event.x < deci + buttonCut &&
      event.y > barHeight * 5.9 &&
      event.y < barHeight * 5.9 + buttonCut
    ) {
      context = "shop";
      footer();
      ctx.fillStyle = gradient;
      font();
      ctx.fillText("OBCHODY : 250$", columnWidth, bottom + deci * 4.5);
      wrong();
      butn5 = true;
      colors();
      if (butn5 == true) {
        yellow();
        paint5();
      }
    }
  });
}

function buttonBackground6() {
  ctx.fillRect(buttonCut + deci * 2.5, barHeight * 5.9, buttonCut, buttonCut); // talčítko 6
}
function paint6() {
  ctx.strokeRect(buttonCut + deci * 2.5, barHeight * 5.9, buttonCut, buttonCut);
  ctx.strokeRect(
    buttonCut + deci * 2.5 + 1,
    barHeight * 5.9 + 1,
    buttonCut + 1,
    buttonCut + 1
  );
}
function factoryButton() {
  canvas.addEventListener("click", function (event) {
    if (
      event.x > buttonCut + deci * 2.5 &&
      event.x < buttonCut + deci * 2.5 + buttonCut &&
      event.y > barHeight * 5.9 &&
      event.y < barHeight * 5.9 + buttonCut
    ) {
      context = "factory";
      footer();
      ctx.fillStyle = gradient;
      font();
      ctx.fillText("TOVÁRNA : 300$", columnWidth, bottom + deci * 4.5);
      wrong();
      butn6 = true;
      colors();
      if (butn6 == true) {
        yellow();
        paint6();
      }
    }
  });
}

function buttonBackground7() {
  ctx.fillRect(deci, barHeight * 7.7, buttonCut, buttonCut); // tlačítko 7
}
function paint7() {
  ctx.strokeRect(deci, barHeight * 7.7, buttonCut, buttonCut);
  ctx.strokeRect(deci + 1, barHeight * 7.7 + 1, buttonCut + 1, buttonCut + 1);
}
function policeButton() {
  canvas.addEventListener("click", function (event) {
    if (
      event.x > deci &&
      event.x < deci + buttonCut &&
      event.y > barHeight * 7.7 &&
      event.y < barHeight * 7.7 + buttonCut
    ) {
      context = "police";
      footer();
      ctx.fillStyle = gradient;
      font();
      ctx.fillText("POLICIE : 400$", columnWidth, bottom + deci * 4.5);
      wrong();
      butn7 = true;
      colors();
      if (butn7 == true) {
        yellow();
        paint7();
      }
    }
  });
}

function buttonBackground8() {
  ctx.fillRect(buttonCut + deci * 2.5, barHeight * 7.7, buttonCut, buttonCut); // talčítko 8
}
function paint8() {
  ctx.strokeRect(buttonCut + deci * 2.5, barHeight * 7.7, buttonCut, buttonCut);
  ctx.strokeRect(
    buttonCut + deci * 2.5 + 1,
    barHeight * 7.7 + 1,
    buttonCut + 1,
    buttonCut + 1
  );
}
function firefighterButton() {
  canvas.addEventListener("click", function (event) {
    if (
      event.x > buttonCut + deci &&
      event.x < buttonCut + deci + buttonCut &&
      event.y > barHeight * 7.7 &&
      event.y < barHeight * 7.7 + buttonCut
    ) {
      context = "firefighter";
      footer();
      ctx.fillStyle = gradient;
      font();
      ctx.fillText("HASIČI : 400$", columnWidth, bottom + deci * 4.5);
      wrong();
      butn8 = true;
      colors();
      if (butn8 == true) {
        yellow();
        paint8();
      }
    }
  });
}

function buttonBackground9() {
  ctx.fillRect(deci, barHeight * 9.5, buttonCut, buttonCut); // tlačítko 9
}
function paint9() {
  ctx.strokeRect(deci, barHeight * 9.5, buttonCut, buttonCut);
  ctx.strokeRect(deci + 1, barHeight * 9.5 + 1, buttonCut + 1, buttonCut + 1);
}
function hospitalButton() {
  canvas.addEventListener("click", function (event) {
    if (
      event.x > deci &&
      event.x < deci + buttonCut &&
      event.y > barHeight * 9.5 &&
      event.y < barHeight * 9.5 + buttonCut
    ) {
      context = "hospital";
      footer();
      ctx.fillStyle = gradient;
      font();
      ctx.fillText("NEMOCNICE : 400$", columnWidth, bottom + deci * 4.5);
      wrong();
      butn9 = true;
      colors();
      if (butn9 == true) {
        yellow();
        paint9();
      }
    }
  });
}

function buttonBackground10() {
  ctx.fillRect(buttonCut + deci * 2.5, barHeight * 9.5, buttonCut, buttonCut); // talčítko 10
}
function paint10() {
  ctx.strokeRect(buttonCut + deci * 2.5, barHeight * 9.5, buttonCut, buttonCut);
  ctx.strokeRect(
    buttonCut + deci * 2.5 + 1,
    barHeight * 9.5 + 1,
    buttonCut + 1,
    buttonCut + 1
  );
}
function electricButton() {
  canvas.addEventListener("click", function (event) {
    if (
      event.x > buttonCut + deci * 2.5 &&
      event.x < buttonCut + deci * 2.5 + buttonCut &&
      event.y > barHeight * 9.5 &&
      event.y < barHeight * 9.5 + buttonCut
    ) {
      context = "electric";
      footer();
      ctx.fillStyle = gradient;
      font();
      ctx.fillText("ELEKTRÁRNA : 500$", columnWidth, bottom + deci * 4.5);
      wrong();
      butn10 = true;
      colors();
      if (butn10 == true) {
        yellow();
        paint10();
      }
    }
  });
}
