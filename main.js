const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000.
};

ScrollReveal().Reveal(".header__image img", {
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().Reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().Reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().Reveal(".header__image__content ", {
    duration: 1000, 
    delay: 1500,
});

ScrollReveal().Reveal(".product__image img", {
    ...scrollRevealOption,
    origin:"left",
});
ScrollReveal().Reveal(".product__card", {
    ...scrollRevealOption,
    delay: 500,
    interval:500
});