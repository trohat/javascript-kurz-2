
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
});


// chci aby se hamburger zavřel i po kliku na jednotlivé linky...
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        hamburger.classList.remove("active");
        navigation.classList.remove("active");
    });
});
