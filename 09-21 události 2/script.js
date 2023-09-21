
const h1Elem = document.querySelector(".nadpis");
const textarea = document.querySelector("#textarea");
const tlacitko = document.querySelector(".tlacitko");

h1Elem.addEventListener("mouseenter", function(event) {
    console.log("Target je: ")
    console.log(event.target);
    console.log("CurrentTarget je: ");
    console.log(event.currentTarget);
    console.log("ClientX je: " + event.clientX);
    console.log("ClientY je: " + event.clientY);
    console.log(event);
});

tlacitko.addEventListener("mousedown", function(event) {
    let text = "Bylo kliknuto ";
    if (event.button === 0) {
        text += "levým tlačítkem";
    } else if (event.button === 1) {
        text += "kolečkem";
    } else if (event.button === 2) {
        text += "pravým tlačítkem";
    } else {
        text += "neznámým mimozemským nástrojem.";
    }
    text += ".\n";
    textarea.value += text;
    alert(text);
});


