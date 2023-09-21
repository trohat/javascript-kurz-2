const body = document.body;
const darkTlacitko = document.querySelector(".button__dark");

darkTlacitko.addEventListener("click", function() {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        darkTlacitko.innerHTML = "Vypni dark mode";
    } else {
        darkTlacitko.innerHTML = "Zapni dark mode";
    }
});

//ještě existuje ... classList.add a ... classList.remove na přidávání a odebírání tříd