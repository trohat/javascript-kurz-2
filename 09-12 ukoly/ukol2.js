/*
Napiš funkci, která vezme pole čísel a vrátí jiné pole, 

kde jsou ta samá čísla, ale zvětšená o 10.

Funkci pořádně otestuj.
*/

function zvetsODeset(pole) {

    let zvetsenePole = [];

    for (const prvek of pole) {
        const novyPrvek = prvek + 10;
        zvetsenePole.push(novyPrvek);
    }

    return zvetsenePole;
}

let mojePole = [15, 22, 14, 23, 17];

console.log(zvetsODeset(mojePole));

