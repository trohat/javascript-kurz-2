function vyrobInput(jmeno) {
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("name", jmeno);
    input.classList.add(jmeno);
    return input;
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

    const main = document.querySelector("main");
    main.append(priklad);
}

const tlacitkoPridej = document.querySelector(".pridej");

tlacitkoPridej.addEventListener("click", pridejPriklad);

pridejPriklad();