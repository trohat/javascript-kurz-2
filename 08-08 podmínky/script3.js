console.log("script 3");

console.log("Tohle je program na porovnání dvou čísel.");

let cislo1, cislo2;

cislo1 = prompt("Zadejte první číslo...");
cislo1 = Number(cislo1);

cislo2 = prompt("Zadejte druhé číslo...");
cislo2 = Number(cislo2);

if (cislo1 > cislo2) {
    console.log("První číslo je větší...");
    console.log("První číslo je opravdu větší :)");
} else if (cislo1 < cislo2) {
    console.log("Druhé číslo je větší...");
} else {
    console.log("Čísla jsou stejná...");
}

console.log("To je konec našeho výpočtu...");



