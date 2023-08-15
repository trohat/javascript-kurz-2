/*let pocetOpakovani = 7;

let retezec = "";
let hash = "#";

for (let i = 0; i < pocetOpakovani; i++) {
  retezec += hash;  
}

console.log(retezec);
*/
//-------------------------------------------
/*
let prvni = 5;
let druhe = 7;

let vysledek = 0;

for (let i = 0; i < prvni; i++) {
    vysledek += druhe;
}

console.log(vysledek);
*/
//------------------------------------------
// vypočítej mocninu prvního čísla na druhé, ale nesmíš používat operaci mocnina
/*
let prvni = 7;
let druhe = 5;

let vysledek = 1;

for (let i = 0; i < prvni; i++) {
    vysledek *= druhe;
}

console.log(vysledek);
*/
// ---------------------------------------------------------
let prvni = 36;
let druhe = 24;

let jesteSmeNicNenasli = true;

for (let delitel = 2; delitel <= prvni; delitel++) {
    if ((prvni % delitel === 0) && (druhe % delitel === 0)) {
        console.log("Společný dělitel je " + delitel + ".");
        jesteSmeNicNenasli = false;
    }
}

if (jesteSmeNicNenasli) {
    console.log("Společný dělitel neexistuje.");
}




