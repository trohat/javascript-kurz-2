function nabidniAlkohol(vek) {
    console.log("Ahoj, vítej u nás");
    if (vek < 18) {
        console.log("My tě tu nechceme");
        return;
    }
    console.log("Máme výbornou whisky.");
    console.log("Máme výborné víno.");
}

function vytiskniTriVety() {
    console.log("První věta");
    console.log("Druhá věta");
    return;
    console.log("Třetí věta");
}

const nabidniAlkoholPomociArrowFunkce = vek => {
    console.log("Ahoj, vítej u nás");
    if (vek < 18) {
        console.log("My tě tu nechceme");
        return;
    }
    console.log("Máme výbornou whisky.");
    console.log("Máme výborné víno.");
};