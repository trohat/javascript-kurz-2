/*
let opakovat = "1";

while (opakovat !== "0") {
    
    let prvni = Number(prompt("Zadej první číslo: "));
    let druhe = Number(prompt("Zadej druhé číslo: "));
    
    let soucet = prvni + druhe;
    
    alert("Výsledek je " + soucet);

    opakovat = prompt("Chceš počítat znovu? 0 = konec.")

}*/

let opakovat;

do {
    
    let prvni = Number(prompt("Zadej první číslo: "));
    let druhe = Number(prompt("Zadej druhé číslo: "));
    
    let operator = prompt("Zadej operátor... (jen plus nebo minus): ")

    let vysledek;
    if (operator === "+") {
        vysledek = prvni + druhe;
    } else if (operator === "-") {
        vysledek = prvni - druhe;
    } else {
        vysledek = "neznámá operace.";
    }
    
    alert("Výsledek je " + vysledek);

    opakovat = prompt("Chceš počítat znovu? 0 = konec.");

} while (opakovat !== "0");




