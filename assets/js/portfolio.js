
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio-container", {
    cssMode: true,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
