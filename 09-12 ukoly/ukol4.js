// vytvoř funkci, která vezme pole a vytvoří nové pole, kde jsou čísla zmenšená o 10
// a navíc pozpátku

let mojePole = [15, 22, 14, 23, 17];
mojePole.push(34);
mojePole.push(11);

function zmensiPoleODeset(_mojePole) {
    
    let zmensenePole = [];

    for (let index = _mojePole.length - 1; index >=0 ; index--) {
        let prvek = _mojePole[index];
        //console.log(prvek);
        let vysledek = prvek - 10;
        console.log("Původní prvek je " + prvek + ", nový prvek je " + vysledek);
        zmensenePole.push(vysledek);
    }
    return zmensenePole;
}

console.log(zmensiPoleODeset(mojePole));

