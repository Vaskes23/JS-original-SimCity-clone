function hideDiv() {
  //skrává html videa v divu
  document.getElementById("hide").style.display = "none";
}

var video = document.getElementById("video");
video.autoplay = true;
video.loop = true;

var video2 = document.getElementById("video2");
video2.autoplay = true;
video2.loop = true;

var build = false;

brown();

ctx.fillRect(
  //pozadí hry
  columnWidth,
  barHeight * 2,
  width - columnWidth,
  height - barHeight
);

var grid = new Array(); //vytvoří arra pro hru
var gridWidth = 14; //nastavení šířky plátna
var gridHeight = 7; //nastavení výšky plátna
var cellSize = deci * 10.1; //nastavení velikosti buňky
var loopPlay = true; //nastaví všechny loopy jako skutečnost
var loopPlay2 = true; // nastaví všechny loopy jako skutečnost
var action;

var status = "filled"; //status buněk

function rect(x, y, rectWidth, rectHeight) {
  // vytvoření čtverce por buňku
  ctx.beginPath();
  ctx.rect(x, y, rectWidth, rectHeight);
  ctx.fill();
  ctx.stroke();
}

function insert(event) {
  //určuje plochu kliku na canvasu co v něm bude a co bude dělat
  var rect = canvas.getBoundingClientRect();
  var X = event.clientX - rect.left; //počítá místo na canvasu
  var Y = event.clientY - rect.top;

  var x = Math.floor(X / cellSize); //počítá řádky a sloupce
  var y = Math.floor(Y / cellSize);

  //určuje pozici cest a co je vedle ní
  /////////////////////////////////////////////////

  if (context == "road" && grid[x][y] == "empty") {
    y += 1;
    if (grid[x][y] == "road" || grid[x][y] == "roadHorizontal") {
      //určuje jestli je pod ním cesta
      context = "roadHorizontal";
    }
    y -= 1;
  }
  if (context == "road" && grid[x][y] == "empty") {
    y -= 1;
    if (grid[x][y] == "road" || grid[x][y] == "roadHorizontal") {
      //určuje jestli je nad ním cesta
      context = "roadHorizontal";
    }
    y += 1;
  }

  ///////////////////////////////////////////////////
  //kontroluje aby byly všechny stavby vedle cest

  if (context != "road" && grid[x][y] == "empty") {
    //kontroluje aby byly nad ním
    y -= 1;
    if (grid[x][y] == "road" || grid[x][y] == "roadHorizontal") {
      //určuje jestli je nad ním cesta
      build = true;
    }
    y += 1;
  }
  if (context != "road" && grid[x][y] == "empty") {
    //kontroluje aby byly pod ním
    y += 1;
    if (grid[x][y] == "road" || grid[x][y] == "roadHorizontal") {
      //určuje jestli je nad ním cesta
      build = true;
    }
    y -= 1;
  }
  if (context != "road" && grid[x][y] == "empty" && x != 2) {
    //kontroluje aby byly z leva
    x -= 1;
    if (grid[x][y] == "road" || grid[x][y] == "roadHorizontal") {
      //určuje jestli je nad ním cesta
      build = true;
    }
    x += 1;
  }
  if (context != "road" && grid[x][y] == "empty") {
    x += 1;
    if (grid[x][y] == "road" || grid[x][y] == "roadHorizontal") {
      //kontroluje aby byly z prava
      //určuje jestli je nad ním cesta
      build = true;
    }
    x -= 1;
  }

  //demolice s následky //////////////////////////////////////////////
  //stará se o speciílní demolice
  if (context == "demolition" && grid[x][y] == "house") {
    population -= 100;
    building -= 1;
    happiness += 10;
    writeCurrenPopulation();
    grid[x][y] = "empty";
  }

  if (context == "demolition" && grid[x][y] == "houseUpgrade") {
    population -= 300;
    building -= 1;
    happiness += 10;
    writeCurrenPopulation();
    grid[x][y] = "empty";
  } else if (context == "demolition" && grid[x][y] == "electric") {
    loopPlay = false; //nastaví loop jako ukončený
    power -= 1;
    grid[x][y] = "empty";
  } else if (context == "demolition" && grid[x][y] == "factory") {
    loopPlay2 = false; //nastaví loop jako ukončený
    grid[x][y] = "empty";
  }

  //kontroluje jaké je zmáčklé tlačítko a co dělá/////////////////////////////////////////////////
  if (context == "demolition" && grid[x][y] != "house") {
    happiness -= 10;
    grid[x][y] = "empty";
  } else if (context == "road" && grid[x][y] == "empty" && money >= 100) {
    grid[x][y] = "road"; //nastaví buňku jako cestu
    money -= 100; //odečte peníze
    price = 100; //cena stavby
    secondBarStyle(); //nakreslí druhý bar
    treasuryWriteText(); //přemaluje staré hodnoty
    writePrice(); //vypíše kolik to stálo
  } else if (
    context == "roadHorizontal" &&
    grid[x][y] == "empty" &&
    money > 100
  ) {
    grid[x][y] = "roadHorizontal"; //nastaví buňku jako cestu
    money -= 100; //odečte peníze
    price = 100; //cena stavby
    secondBarStyle(); //nakreslí druhý bar
    treasuryWriteText(); //přemaluje staré hodnoty
    writePrice(); //vypíše kolik to stálo
    context = "road";
  } else if (
    context == "park" &&
    grid[x][y] == "empty" &&
    money >= 600 &&
    build == true
  ) {
    grid[x][y] = "park";
    money -= 600;
    secondBarStyle();
    treasuryWriteText();
    price = 600;
    happiness += 10; //určuje štěstí generované stavbou
    writePrice();
  } else if (
    context == "house" &&
    grid[x][y] == "empty" &&
    money >= 250 &&
    build == true
  ) {
    grid[x][y] = "house";
    money -= 250;
    building += 1;
    secondBarStyle();
    treasuryWriteText();
    price = 250;
    writePrice();
    population += 100;
    writeCurrenPopulation();
  } else if (
    context == "shop" &&
    grid[x][y] == "empty" &&
    money >= 250 &&
    build == true
  ) {
    grid[x][y] = "shop";
    money -= 250;
    secondBarStyle();
    treasuryWriteText();
    price = 250;
    happiness += 4;
    writePrice();
  } else if (
    context == "factory" &&
    grid[x][y] == "empty" &&
    money >= 300 &&
    build == true
  ) {
    grid[x][y] = "factory";
    money -= 300;
    secondBarStyle();
    treasuryWriteText();
    price = 300;
    happiness += 6;
    happiness += 7;
    writePrice();
  } else if (
    context == "police" &&
    grid[x][y] == "empty" &&
    money >= 400 &&
    build == true
  ) {
    grid[x][y] = "police";
    money -= 400;
    secondBarStyle();
    treasuryWriteText();
    price = 400;
    HelpNumber += 1;
    writePrice();
  } else if (
    context == "firefighter" &&
    grid[x][y] == "empty" &&
    money >= 400 &&
    build == true
  ) {
    grid[x][y] = "firefighter";
    money -= 400;
    secondBarStyle();
    treasuryWriteText();
    price = 400;
    happiness += 7;
    HelpNumber += 1;
    writePrice();
  } else if (
    context == "hospital" &&
    grid[x][y] == "empty" &&
    money >= 400 &&
    build == true
  ) {
    grid[x][y] = "hospital";
    money -= 400;
    secondBarStyle();
    treasuryWriteText();
    price = 400;
    happiness += 7;
    HelpNumber += 1;
    writePrice();
  } else if (
    context == "electric" &&
    grid[x][y] == "empty" &&
    money >= 500 &&
    build == true
  ) {
    grid[x][y] = "electric";
    power += 1;
    money -= 500;
    loopPlay2 = true; //zapímá loop na video
    secondBarStyle();
    treasuryWriteText();
    price = 500;
    writePrice();
  } //nastavení upgradů pro budovy /////////////////////////////////////////////////////////
  else if (context == "upgrade" && grid[x][y] == "house" && money > 500) {
    population += 200;
    building += 1;
    happiness += 5;
    money -= 500;
    price = 500;
    secondBarStyle();
    treasuryWriteText();
    writePrice();
    writeCurrenPopulation();
    grid[x][y] = "houseUpgrade";
  } else if (context == "upgrade" && grid[x][y] == "shop" && money > 500) {
    happiness += 10;
    money -= 500;
    price = 500;
    secondBarStyle();
    treasuryWriteText();
    writePrice();
    writeCurrenPopulation();
    grid[x][y] = "shopUpgrade";
  } else if (context == "upgrade" && grid[x][y] == "park") {
    happiness += 6;
    money -= 500;
    price = 500;
    secondBarStyle();
    treasuryWriteText();
    writePrice();
    writeCurrenPopulation();
    grid[x][y] = "parkUpgrade";
  }
  writeCurrenPopulation();
  writeHappiness();

  if (y > 0 && y < 7) {
    //kontroluje jestli klikáte na plochu
    draw(x, y);
  }
  build = false;
}

function draw(x, y) {
  // namaluje buňku gridu a to co vní má být
  var cell = grid[x][y];

  if (cell == "empty") {
    brown();
    black();
    rect(x * cellSize, y * cellSize, cellSize, cellSize);
    white();
    lines();
    buttomLines();
  }

  if (cell == "demolition") {
    //ničí stavbu
    brown();
    black();
    rect(x * cellSize, y * cellSize, cellSize, cellSize);
    white();
    lines();
    buttomLines();
  } else if (cell == "road") {
    cesta_image = new Image(); //staví cestu nakreslí její obrázek
    cesta_image.src = "obrazky/budovy/cestaVodorovne.jpg"; //vymaluje cestu
    cesta_image.onload = function () {
      ctx.drawImage(
        cesta_image,
        x * cellSize,
        y * cellSize,
        cellSize,
        cellSize
      );
    };
    white();
    lines();
    buttomLines();
  } else if (cell == "roadHorizontal") {
    cesta_image = new Image(); //staví cestu nakreslí její obrázek
    cesta_image.src = "obrazky/budovy/cestaHorizontalne.jpg"; //vymaluje cestu
    cesta_image.onload = function () {
      ctx.drawImage(
        cesta_image,
        x * cellSize,
        y * cellSize,
        cellSize,
        cellSize
      );
    };
    white();
    lines();
    buttomLines();
  } else if (cell == "park") {
    park_image = new Image();
    park_image.src = "obrazky/budovy/park.jpg";
    park_image.onload = function () {
      y += 1;
      ctx.drawImage(
        park_image,
        x * cellSize,
        y * cellSize - cellSize,
        cellSize,
        cellSize
      );
    };
    white();
    lines();
    buttomLines();
  } else if (cell == "parkUpgrade") {
    obchod2_image = new Image();
    obchod2_image.src = "obrazky/budovy/park2.jpg";
    obchod2_image.onload = function () {
      ctx.drawImage(
        obchod2_image,
        x * cellSize,
        y * cellSize,
        cellSize,
        cellSize
      );
    };
    white();
    lines();
    buttomLines();
  } else if (cell == "house") {
    dom_image = new Image();
    dom_image.src = "obrazky/budovy/dum.jpg";
    dom_image.onload = function () {
      ctx.drawImage(dom_image, x * cellSize, y * cellSize, cellSize, cellSize);
    };
    white();
    lines();
    buttomLines();
  } else if (cell == "houseUpgrade") {
    dom2_image = new Image();
    dom2_image.src = "obrazky/budovy/dum2.jpg";
    dom2_image.onload = function () {
      ctx.drawImage(dom2_image, x * cellSize, y * cellSize, cellSize, cellSize);
    };
    white();
    lines();
    buttomLines();
  } else if (cell == "shop") {
    obchod_image = new Image();
    obchod_image.src = "obrazky/budovy/obchod.jpg";
    obchod_image.onload = function () {
      ctx.drawImage(
        obchod_image,
        x * cellSize,
        y * cellSize,
        cellSize,
        cellSize
      );
    };
    white();
    lines();
    buttomLines();
  } else if (cell == "shopUpgrade") {
    obchod2_image = new Image();
    obchod2_image.src = "obrazky/budovy/obchod2.jpg";
    obchod2_image.onload = function () {
      ctx.drawImage(
        obchod2_image,
        x * cellSize,
        y * cellSize,
        cellSize,
        cellSize
      );
    };
    white();
    lines();
    buttomLines();
  } else if (cell == "factory") {
    (function loop() {
      //namaluje video továrny
      ctx.drawImage(video2, x * cellSize, y * cellSize, cellSize, cellSize);
      if (loopPlay2 == false) {
        //nastaví videou na loop nebo ne
        setTimeout(1000 / 1); // ukončení loopu
      } else {
        setTimeout(loop, 1000 / 3); // maluje to 3x za sekundu
      }
    })();
    white();
    lines();
    buttomLines();
  } else if (cell == "police") {
    policie_image = new Image();
    policie_image.src = "obrazky/budovy/policie.jpg";
    policie_image.onload = function () {
      ctx.drawImage(
        policie_image,
        x * cellSize,
        y * cellSize,
        cellSize,
        cellSize
      );
    };
    white();
    lines();
    buttomLines();
  } else if (cell == "firefighter") {
    hasici_image = new Image();
    hasici_image.src = "obrazky/budovy/hasici.jpg";
    hasici_image.onload = function () {
      ctx.drawImage(
        hasici_image,
        x * cellSize,
        y * cellSize,
        cellSize,
        cellSize
      );
    };
    white();
    lines();
    buttomLines();
  } else if (cell == "hospital") {
    nemocnice_image.src = "obrazky/budovy/nemocnice.jpg";
    nemocnice_image.onload = function () {
      ctx.drawImage(
        nemocnice_image,
        x * cellSize,
        y * cellSize,
        cellSize,
        cellSize
      );
    };
    white();
    lines();
    buttomLines();
  } else if (cell == "electric") {
    (function loop() {
      ctx.drawImage(video, x * cellSize, y * cellSize, cellSize, cellSize);
      if (loopPlay == false) {
        //nastaví videou na loop nebo ne
        setTimeout(1000 / 1); // ukončení loopu
      } else {
        setTimeout(loop, 1000 / 3); // maluje to 3x za sekundu
      }
    })();
    white();
    lines();
    buttomLines();
  }
}

function createGrid() {
  // vytvoří plochu pro grid na stavění
  for (var x = 2; x < gridWidth; x++) {
    grid[x] = new Array();
    for (var y = 1; y < gridHeight; y++) {
      grid[x][y] = "empty"; //nastaví pro základ všechny buňy prázdné
      draw(x, y);
    }
  }
}
