/*
const druhaMocnina = (cislo) => {
    return cislo * cislo;
};*/

const druhaMocnina = cislo => cislo * cislo;

const poleCisel = [2, 7, 8, 9, 3, 5, 6, 11];

const vypisDruhouMocninu = cislo => {
    console.log("Druhá mocnina čísla " + cislo + " je " + (cislo * cislo) + ".");
};

poleCisel.forEach(vypisDruhouMocninu);

const pridejPozdrav = (jmeno) => console.log("Dobrý den, pane " + jmeno);
const pridejPozdrav2 = (jmeno) => "Dobrý den, pane " + jmeno;

const poleJmen = ["Petr", "Miloš", "Tomáš", "Honza", "Mojmír"];

poleJmen.forEach(pridejPozdrav); 
poleCisel.map(druhaMocnina);
poleJmen.map(pridejPozdrav2);

const mensiNezPet = cislo => cislo < 5;

poleCisel.filter(mensiNezPet);
poleCisel.filter(mensiNezPet).map(druhaMocnina);


