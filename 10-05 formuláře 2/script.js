
//const divElement = document.querySelector("#pohled");

//const divElement = document.getElementById("pohled");

const divElement = pohled;

// pomocí DOM property, neboli DOM vlastnosti
divElement.onclick = function() {
    const txtArea = document.createElement("textarea");

    txtArea.classList.add("textarea");

    txtArea.value = divElement.innerHTML;

    txtArea.onkeydown = function(event) {
        if (event.key === "Escape") {
            event.preventDefault();
            txtArea.blur();
        }
    }

    txtArea.onblur = function(event) {
        divElement.innerHTML = txtArea.value;
        txtArea.replaceWith(divElement);
    }

    divElement.replaceWith(txtArea);
    txtArea.focus();

};


