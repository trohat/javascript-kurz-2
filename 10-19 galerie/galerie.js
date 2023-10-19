
const mainImg = document.querySelector(".galerie > img");
const smallImgs = document.querySelectorAll(".galerie > div > img");
let activeImage = 0;

mainImg.addEventListener("click", function() {
    activeImage++;

    if (activeImage > smallImgs.length - 1) {
        activeImage = 0;
    }

    let newSrc = smallImgs[activeImage].src;
    newSrc = newSrc.replace("250/150", "1000/600");
    mainImg.src = newSrc;
});

smallImgs.forEach(function(img, index) {
    img.addEventListener("click", function() {
        let imgSrc = img.src;
        let newSrc = imgSrc.replace("250/150", "1000/600");
        mainImg.src = newSrc;
        activeImage = index;
    });
});


