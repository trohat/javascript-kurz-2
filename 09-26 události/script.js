console.log("funguju");


window.addEventListener("keydown", function(event) {
    console.log("Event.key je " + event.key);
    console.log("Event.code je " + event.code);
    console.log("Zastaralá event.keyCode je " + event.keyCode);
    console.log("Event.ctrlKey je " + event.ctrlKey);
    // console.log(event);

    if (event.key.toLowerCase() === "c") {
        document.body.style.backgroundColor = "red";
    } else if (event.code === "KeyZ") {
        document.body.style.backgroundColor = "yellow";
    } else if (event.key === "f" || event.key === "F") {
        document.body.style.backgroundColor = "purple";
    } else if (event.key === "k" && event.ctrlKey) {
        event.preventDefault();
        document.body.style.backgroundColor = "";
    }
});





