hideDiv(); //skryje videa
font(); // určení fontu

createGrid(); //vytvoření gridu a pozadí

wrong(); //ustanovení stavu všech tlačítek pro začátek

//poopulace a pokladna (drůhy bar)
bar(); //vykreslí pozadí druhého baru
secondBarStyle(); //nakrreslí 2. bar
treasuryWriteText(); //napíše obsah pokladny
populationGrowth(); //počítá vzrůst populace každách 30sekund(půl rok) podle štěstí a určuje kolik dostanete na daních na konci roku
writeHappiness(); //dělá graf se štěstím
writeCurrenPopulation(); //napíše současnou populaci
white(); //barva

//sloupec na tlačítka
darkgrey(); //určí barvu pozadí sloupce
columnstyle(); //namaluje sloupec a nastaví jeho atributy

//čáry na rozdělení ui a hry
lines(); //nakreslí čáry co oddělují hrací pole

//pata a její nastavení
footer(); //nastaví patu a její atributy

//timer/////////////////////////////////
darkgrey(); //napsání roku
yearTextPosition(); //pozice textu roku
name1(); //vypsání jména
yearCounter(); //počítá roky

//čáry u paty
buttomLines(); //nakreslí spodní čáry nad patou

//Tlačítka/////////////////////////////////////////////////////////////

grey(); //tlačítko 1
buttonBackground1(); //vykresluje pozadí tlačítka na který se potom položí obrázek
make_base(); //vyvolání obrázku
black(); //dělá černé okraje
paint1(); //namaluje okraje
demolitinButton(); //určuje pozici tlačítka a jaké budou jeho funkce když se zmáčkne

buttonBackground2(); //tlačítko 2
make_base2();
black();
paint2();
roadButton();

buttonBackground3(); //tlačítko 3
make_base3();
black();
paint3();
parkButton();

buttonBackground4(); //tlačítko 4
make_base4();
black();
paint4();
houseButton();

buttonBackground5(); //tlačítko 5
make_base5();
black();
paint5();
shopButton();

buttonBackground6(); //tlačítko 6
make_base6();
black();
paint6();
factoryButton();

buttonBackground7(); //tlačítko 7
make_base7();
black();
paint7();
policeButton();

buttonBackground8(); //tlačítko 8
make_base8();
black();
paint8();
firefighterButton();

buttonBackground9(); //tlačítko 9
make_base9();
black();
paint9();
hospitalButton();

buttonBackground10(); //tlačítko 10
make_base10();
black();
paint10();
electricButton();

upgrade(); //tlačítko na upgrade staveb
exit(); //exit tlačítko (umožňuje odchod ze hry)
///////////////////////////////////////
