/*
jmeno = "Alík"
delkaSrsti = 20
steka = true 
kouse = false 
pocetNohou = 4
rasa = "bernardýn"
barva = "černá a bílá"
*/

// object literal 
const pes = {
    jmeno: "Alík",
    steka: true,
    kouse: false,
    rasa: "bernardýn",
    "delka srsti": 20,
    "pocet nohou": 4
};
pes.barva = "oranžová";

console.log(pes.jmeno);
/*
const odstavec = document.querySelector(".psi");

text = "Můj pes se jmenuje " + pes.jmeno + " a jeho rasa je " + pes.rasa + ".";
odstavec.textContent = text;

pes.jmeno = "Rex";
text = "Můj pes se jmenuje " + pes.jmeno + " a jeho rasa je " + pes.rasa + ".";
odstavec.textContent += text;
*/
pes.jmeno = "Micka";
