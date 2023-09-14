console.log("Funguju");

const h1Element = document.querySelector("h1");
const div = document.querySelector("#prvni-div");

const h1vsechny = document.querySelectorAll("h1");

const divZnovu = document.querySelector(".hlavni");
const divJesteZnovu = document.getElementsByClassName("hlavni")[0];

function prebarviOdstavec() {
    const odstavec = document.querySelector(".prvni-odstavec");
    odstavec.style.backgroundColor = "red";
}


/*
console.dir(h1Element);

h1Element.tagName
h1Element.textContent
h1Element.textContent = "Hele Máňo, podívej se z okna, je krásně!"

h1Element.style.color = "blue";
h1Element.style.backgroundColor = "red";

h1Element.style.color = "";
*/

/*
h1vsechny[1].textContent = "Druhá há jednička";
h1vsechny[1].style.color = "red";

h1vsechny[1].style.padding = "20px"

*/