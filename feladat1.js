function VanENegativ(szamok) {
    var i = 0;
    while (i < szamok.length && !(szamok[i] < 0)) {
        i++;
    }
    /* if(i <szamok.length){
         return true;
 
     }
 else{
     return false;
 }*/
    return i < szamok.length;
}
;
function korKerTer(r) {
    var ker = 2 * r * Math.PI;
    var ter = r * r * Math.PI;
    return [ker, ter];
}
console.log(VanENegativ([5, 12, 23, -5, 14]));
console.log(VanENegativ([5, 12, 23, 14]));
console.log(korKerTer(4));
/*-Készits publikus Github repositorit a sajat felhasznaloi fiokodban
  -Indits Git Bash-et ,es a jelenlegi TS projektben inicializalj git-et
  -A lokalis repo-t kosd ossze az online(github-os) repoddal
  -Toltsd fel a jelenlegi allapotot a github-ra
*/
/*
TS!!
-Keszits alprogramot ,ami kivalasztja egy auto tombbol a legkisebb hengerurtartalmu autot
-Keszits alprogramot ,ami megadja parameterul kapott auto tombbol a benzinesek darabszamat
-A valtoztatasokat toltsd fel a github repodba
 */
function MinAuto(autok) {
    var min = autok[0];
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].hengerurtartalom < min.hengerurtartalom) {
            min = autok[i];
        }
    }
    return min;
}
function MaxAuto(autok) {
    var max = autok[0];
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].hengerurtartalom > max.hengerurtartalom) {
            max = autok[i];
        }
    }
    return max;
}
function BenzinesDb(autok) {
    var db = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinesE /*==true*/) {
            db++;
        }
    }
    return db;
}
var a1 = {
    gyarto: "Opel",
    tipus: "Astra",
    hengerurtartalom: 1600,
    benzinesE: true
};
var a2 = {
    gyarto: "BMW",
    tipus: "i3",
    hengerurtartalom: 0,
    benzinesE: false
};
var a3 = {
    gyarto: "Volskwagen",
    tipus: "Passat",
    hengerurtartalom: 2200,
    benzinesE: false
};
var a4 = {
    gyarto: "Ford",
    tipus: "Mondeo",
    hengerurtartalom: 1700,
    benzinesE: true
};
var autok = [a1, a2, a3, a4];
console.log(MinAuto(autok));
console.log(BenzinesDb(autok));
/*
- Keszits alprogramot ,ami...
   -Egy auto tombbol megadja az atlag hengerurtartalmat
   -Eldonti ,hogy van-e nem benzines auto az autok tombben
   -Szetvalogatja a benzines es nem benzines autokat

-A valtoztatasokat toltsd fel a github repodba
 */
function AtlagHengerurtartalom(autok) {
    var atlag = 0;
    for (var i = 0; i < autok.length; i++) {
        atlag += autok[i].hengerurtartalom;
    }
    atlag /= autok.length;
    return atlag;
}
function VanENemBenzines(autok) {
    var i = 0;
    while (i < autok.length && !(autok[i].benzinesE == false)) {
        i++;
    }
    return i < autok.length;
}
function Szetvalogatas(autok) {
    var benzinesek = [];
    var nemBenzinesek = [];
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinesE /*==true*/) {
            benzinesek.push(autok[i]);
        }
        else {
            nemBenzinesek.push(autok[i]);
        }
    }
    return [benzinesek, nemBenzinesek];
}
console.log(AtlagHengerurtartalom(autok));
console.log(VanENemBenzines(autok));
console.log(Szetvalogatas(autok));
/*-Keszits alprogramot ,ami...
     -Visszaadja egy auto tombbol a legnagyobb hengerurtartalmu auto gyartojat
     -Visszaadja egy auto tombbol azokat az autokat ,amiknek hengerurtartalma egesz szam
     -Visszaadja egy auto tombbol a legkisebb hengerurtartalmu autot
     -Visszaadja a legkisebb hengerurtartalmu auto gyartojat es tipusat
 */
function MaxAutoGyarto(autok) {
    var maxauto = MaxAuto(autok);
    return maxauto.gyarto;
}
function EgeszSzamHengerurtartalom(autok) {
    var egeszCcmAutok = [];
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].hengerurtartalom % 1 == 0) {
            egeszCcmAutok.push(autok[i]);
        }
    }
    return egeszCcmAutok;
}
function LegkisebbHengerurtartalmuGyartoEsTipus(autok) {
    var minAuto = MinAuto(autok);
    return [minAuto.gyarto, minAuto.tipus];
}
console.log(MaxAutoGyarto(autok));
console.log(EgeszSzamHengerurtartalom(autok));
console.log(LegkisebbHengerurtartalmuGyartoEsTipus(autok));
