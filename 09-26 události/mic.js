const obsah = ". ".repeat(600);

const hriste = document.querySelector(".hriste");
const mic = document.querySelector("#mic");

hriste.append(obsah);

function pohniMicem(event) {
    console.log("target: " + event.target);
    console.log("currentTarget: " + event.currentTarget);

    const souradniceHriste = event.currentTarget.getBoundingClientRect();
    console.log(souradniceHriste);

    console.log("souřadnice kliku:");
    console.log(event.clientX);
    console.log(event.clientY);

    let micX = event.clientX - souradniceHriste.left - hriste.clientLeft
                - mic.clientHeight / 2;

    let micY = event.clientY - souradniceHriste.top - hriste.clientTop 
        - mic.clientHeight / 2;

    if (micX < 0) {
        micX = 0;
    }

    if (micY < 0) {
        micY = 0;
    }

    if (micX > hriste.clientWidth - mic.clientWidth) {
        micX = hriste.clientWidth - mic.clientWidth;
    }

    mic.style.left = micX + "px";
    mic.style.top = micY + "px";
}


hriste.addEventListener("click", pohniMicem);


