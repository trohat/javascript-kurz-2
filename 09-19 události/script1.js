
const h1Elem = document.querySelector("h1");

function napisNecoOKliku() {
    console.log("Někdo kliknul na prvek H1!!!");
}

function napisNecoOOpici() {
    console.log("Opice snědla banán. Moc si pochutnala.");
}

// připojení události pomocí DOM vlastnosti (DOM property)
h1Elem.onclick = napisNecoOKliku;

h1Elem.onclick = napisNecoOOpici;