const h1Elem = document.querySelector("h1");

function napisNecoOKliku() {
    console.log("Někdo kliknul na prvek H1!!!");
}

function napisNecoOOpici() {
    console.log("Opice snědla banán. Moc si pochutnala.");
}


// TOHLE JE PREFEROVANÝ ZPŮSOB, JAK TO DĚLAT - ROZHODNĚ NEJLEPŠÍ
h1Elem.addEventListener("click", napisNecoOKliku);

h1Elem.addEventListener("click", napisNecoOOpici);

/*
function eventHandler() {
    napisNecoOKliku();
    napisNecoOOpici();
}

h1Elem.addEventListener("click", eventHandler);
*/
// PŘESTÁVKA DO 20:00