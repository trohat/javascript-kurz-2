function vypocitej(event) {
    const priklad = event.currentTarget.closest(".priklad");
    const prvniInput = priklad.querySelector(".prvni");
    const select = priklad.querySelector(".znamenko");
    const druhyInput = priklad.querySelector(".druhe");
    const divProVysledek = priklad.querySelector(".vysledek");
    const cislo1 = Number(prvniInput.value);
    if (Number.isNaN(cislo1)) {
        return;
    }
    const cislo2 = Number(druhyInput.value);
    if (Number.isNaN(cislo2)) {
        return;
    }
    const operace = select.value;
    let vysledek;
    if (operace === "plus") {
        vysledek = cislo1 + cislo2;
    } else if (operace === "minus") {
        vysledek = cislo1 - cislo2;
    } else if (operace === "krat") {
        vysledek = cislo1 * cislo2;
    } else if (operace === "deleno") {
        if (cislo2 === 0) {
            divProVysledek.textContent = "";
            return;
        }
        vysledek = cislo1 / cislo2;
    } else {
        return;
    }
    divProVysledek.textContent = vysledek;
}

function vyrobInput(jmeno) {
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("name", jmeno);
    input.classList.add(jmeno);
    input.addEventListener("input", vypocitej);
    return input;
}

function vyrobOption(hodnota, text) {
    const option = document.createElement("option");
    option.value = hodnota;
    option.textContent = text;
    return option;
}

function vyrobSelect() {
    const vybiratko = document.createElement("select");
    vybiratko.name = "znamenko";
    vybiratko.classList.add("znamenko");
    vybiratko.append(vyrobOption("plus", "+"));
    vybiratko.append(vyrobOption("minus", "-"));
    vybiratko.append(vyrobOption("krat", "*"));
    vybiratko.append(vyrobOption("deleno", "/"));
    vybiratko.addEventListener("input", vypocitej);
    return vybiratko;
}

function vyrobDiv(trida, textUvnitr) {
    const div = document.createElement("div");
    div.classList.add(trida);
    div.textContent = textUvnitr;
    return div;
}

function vyrobTlacitko() {
    const tlacitko = document.createElement("button");
    tlacitko.classList.add("vypocitej");
    tlacitko.textContent = "Vypočítej";
    tlacitko.addEventListener("click", vypocitej)
    return tlacitko;
}

function pridejPriklad() {
    const priklad = document.createElement("section");
    priklad.classList.add("priklad");
    
    // tvoříme prvky
    const prvniInput = vyrobInput("prvni");
    priklad.append(prvniInput);
    
    const select = vyrobSelect();
    priklad.append(select);

    const druhyInput = vyrobInput("druhe");
    priklad.append(druhyInput);

    // delší způsob, s pomocnou proměnnou
    const rovnaSeDiv = vyrobDiv("rovnase", "=");
    priklad.append(rovnaSeDiv);

    // kratší způsob, bez použití proměnné
    priklad.append(vyrobDiv("vysledek", ""));

    // opět delší způsob ... ono se to totiž lépe čte
    const tlacitko = vyrobTlacitko();
    priklad.append(tlacitko);

    const main = document.querySelector("main");
    main.append(priklad);
}

const tlacitkoPridej = document.querySelector(".pridej");

tlacitkoPridej.addEventListener("click", pridejPriklad);

pridejPriklad();