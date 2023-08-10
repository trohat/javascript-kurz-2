console.log("script4.js");

let vek = Number(prompt("Kolik ti je let?"));
let napojProDetiDoTriLet = "malinové mléko";

if (vek < 18) {
    console.log("Ahoj, dáš si limonádu?");

    if (vek < 10) {
        console.log("Máme tady pomerančový džus...");
    }

    if (vek < 5) {
        console.log("Máme tady jahodové mléko...");
    } 

} else {
    console.log("Dobrý den pane/paní");
}

///--------------------------------------------- jiný p
if (vek < 5) {
    console.log("Máme tady " + napojProDetiDoTriLet);
} else if (vek < 10) {
    console.log("Máme tady pomerančový džus...");
} else if (vek < 15) {
    console.log("Máme tu kokakolu...");
} else {
    console.log("Ještě pár měsíců a už můžeš na pivo...");
}
//-------------------------------------------------------------
if (vek < 5) {
    console.log("Máme tady jahodové mléko...");
}

if (vek < 10) {  // bacha tady potřebuju kontrolovat i tu dolní hranici
    console.log("Máme tady pomerančový džus...");
}




