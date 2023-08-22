/*
function scitani(cislo1, cislo2) {
    let vysledek = cislo1 + cislo2;
    return vysledek; 
}*/

// mohlo by být
//let scitani = (parametry) => (telo funkce);
// ale používejte raději const

const scitani = (cislo1, cislo2) => cislo1 + cislo2;


console.log(scitani(5, 6));

let vysledek = scitani(12, 18);

const vynasobDvema = cislo => cislo * 2;

const sectiPetPlusSest = () => 5 + 6;