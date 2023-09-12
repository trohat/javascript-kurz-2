function zvetsODeset(pole) {

    let zvetsenePole = [];

    for (let i = 0; i < pole.length; i++) {
        const novyPrvek = pole[i]+ 10;
        zvetsenePole.push(novyPrvek);
    }

    return zvetsenePole;
}

let mojePole = [15, 22, 14, 23, 17];

console.log(zvetsODeset(mojePole));