window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    let navbar = document.getElementById("navbar");
    let logo = document.getElementById("logo");
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        navbar.classList.add("navbarScroll");
        navbar.classList.add("shadow");
        logo.classList.add("logoScroll");
    } else {
        navbar.classList.remove("navbarScroll");
        navbar.classList.remove("shadow");
        logo.classList.remove("logoScroll");
    }
}