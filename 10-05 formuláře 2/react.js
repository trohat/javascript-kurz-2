function vytvorDiv(text, trida) {
    const div = document.createElement("div");
    div.classList.add("obdelnik");
    if (trida) {
        console.log("Třída je " + trida);
        div.classList.add(trida);
    }
    div.innerHTML = text;

    document.body.append(div);

    return div;
}

function vytvorOdstavec(text) {
    const odstavec = document.createElement("p");
    odstavec.classList.add("odstavec");

    odstavec.innerHTML = text;

    return odstavec;
} 

vytvorDiv("Toto je první div.", "cerveny");
vytvorDiv("Toto je druhý div.", "modry");
vytvorDiv("Toto je gorila.", null);

const odstavecOSlonech = vytvorOdstavec("Sloni jsou nejlepší!");

const divOSlonech = vytvorDiv("<h1>O slonech</h1>", "modry");

divOSlonech.append(odstavecOSlonech);

const odstavecNaZaver = vytvorOdstavec("Tady je konec dokumentu.");

divOSlonech.after(odstavecNaZaver);

const odstavecPredSlony = vytvorOdstavec("Časem přijdou sloni.");

divOSlonech.before(odstavecPredSlony);