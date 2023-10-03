const inputEl = document.querySelector(".input");
const divEl = document.querySelector(".odstavec");
const cervenyInput = document.querySelector(".cervene");
const emailInput = document.querySelector(".email");
const divProChybu = document.querySelector(".popis-chyby")

inputEl.addEventListener("input", function(event) {
    //console.log(event.target.value);
    divEl.textContent = "V políčku je tento text: " + event.target.value;
});

cervenyInput.addEventListener("focus", function(event) {
    event.target.classList.add("zvyraznene");
});

cervenyInput.addEventListener("blur", function(event) {
    event.target.classList.remove("zvyraznene");
    //cervenyInput.focus(); //just for fun
});

// chci dělat validaci
emailInput.addEventListener("blur", function(event) {
    if (event.target.value.includes("@")) {
        divProChybu.textContent = "";
    } else {
        event.target.classList.add("chyba");
        divProChybu.textContent = "Email musí obsahovat zavináč.";
    }
});

emailInput.addEventListener("focus", function(event) {
    event.target.classList.remove("chyba");
});

