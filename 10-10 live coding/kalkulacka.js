function vyrobInput(jmeno) {
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("name", jmeno);
    input.classList.add(jmeno);
    return input;
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
    return tlacitko;
}

function pridejPriklad() {
    const priklad = document.createElement("section");
    priklad.classList.add("priklad");
    // vytvoř prvky
    const prvniInput = vyrobInput("prvni");
    priklad.append(prvniInput);
// nezapomeň přidat SELECT
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