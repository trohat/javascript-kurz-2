function mocnina1(cislo, mocnina) {
    return cislo ** mocnina;
}

function mocnina2(cislo, mocnina) {
    return Math.pow(cislo, mocnina);
}

function mocnina3(cislo, mocnina) {
    let vysledek = 1;
    for (let i = 0; i < mocnina; i++) {
        vysledek *= cislo;
    }
    return vysledek;
}

console.log(mocnina1(2, 5));
console.log(mocnina2(2, 5));
console.log(mocnina3(2, 5));
console.log(Math.pow(2, 5));

