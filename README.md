1. Kösd be a Bootstrap és Font-Awesome könyvtárakat a projektbe a tanult módon.
   ok
2. KészÍts egy navigation nevű komponenst, amiben egy alapértelmezett Bootstrap stílusú navbar jelenjen meg.
   ok ok
3. A navbar a következő linkeket tartalmazza: Home, Heroes. Kattintásra a kapcsolódó komponens jelenjen meg az alkalmazásban.
   ok ok
4. Hozd létre a home és a hereos komponenseket és állítsd be a routing-ban, hogy a '' és 'heroes' útvonalak esetén jelenjenek meg.
   ok ok ok
5. AppComponent: az oldal tetején a navigation jelenjen meg. Alatta legyen az a rész, ahol az oldalak töltődnek be -- egy container oszályú divben.
   ok ok
6. HomeComponent: jelenjen meg benne egy Jumbotron Bootstrap elem, "Heroes" címmel. A nagy kék gomb, ha rákattintanak, akkor a "/heroes" url-re vigyen, fontos, hogy az Angular routing használatával.
   ok ok
7. Készíts egy Hero osztályt, az alábbi tulajdonságokkal (a típusok értelemszerűek legyenek): id, name, superPower, address.
   ok ok
8. HeroService: készíts egy service-t, a neve hero legyen. Legyen egy getAll metódusa, ami Hero[] típussal tér vissza, és legalább 5 Hero-t szolgáltat azoknak akik meghívják.
   ok ok ok
9. HeroesComponent: használja a HeroService-t a Hero példányok lekéréséhez. Jelenítse meg a Hero[] elemeit egy táblázatban, egymás alatt.
   ok ok
10. Extra pont: legyen egy pipe-pal készített szűrő, amely szöveg beírására szűri a táblázatot a name tulajdonság szerint.
    ok, plus: filters by the column you clicked on
11. Extra pont: a fejléc sorokra kattintva lehessen a táblázat adatait növekvő sorrendbe rendezni -- szintén egy pipe használatával.
    ok, plus: clicking again on same column reverts sortorder
