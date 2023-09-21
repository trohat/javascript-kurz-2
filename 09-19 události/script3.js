"use strict";

function handleMouseEnter() {
    const h1Elem = document.querySelector("h1");

    h1Elem.style.backgroundColor = "purple";
    h1Elem.style.color = "red";
    // konec funkce = proměnné zmizí, protože jsou lokální
}

function handleMouseLeave() {
    const h1 = document.querySelector("h1");

    h1.style.backgroundColor = "";
    h1.style.color = "";
}

const ulElem = document.querySelector("h1");

ulElem.addEventListener("mouseenter", handleMouseEnter);

ulElem.addEventListener("mouseleave", handleMouseLeave);

