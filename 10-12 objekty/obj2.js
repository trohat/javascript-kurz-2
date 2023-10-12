const h1 = document.querySelector("h1");

const pole = ["textContent", "innerHTML", "nodeType", "nodeName", "childNodes"];

for (let i = 0; i < pole.length; i++) {
    let hodnotaVPoli = pole[i];
    console.log("Teď vypíšeme " + hodnotaVPoli);
    console.log("Jeho hodnota pro h1 je " + h1[hodnotaVPoli]);
}

