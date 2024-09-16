//NAVIGATION HOVER

addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const navLinks = nav.querySelectorAll("a");

    nav.addEventListener("mouseover", function() {
        navLinks.forEach(link => {
            link.style.color = "black";
        });
    });

    nav.addEventListener("mouseout", function() {
        navLinks.forEach(link => {
            link.style.color = "white";
        });
    });
});


//ADD PROPERTYTO FAVORITE

document.addEventListener("DOMContentLoaded", function() {
    const favoriteIcons = document.querySelectorAll(".far.fa-heart");

    favoriteIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            this.classList.toggle("fas");
            this.classList.toggle("far");
        });
    });
});
