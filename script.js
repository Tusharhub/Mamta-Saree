var swiper = new Swiper(".productSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    breakpoints: {
        320: { slidesPerView: 1.2 },
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 4 },
        1400: { slidesPerView: 5 }
    }
});