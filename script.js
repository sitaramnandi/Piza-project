var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay:{
        delay:5000,
    },

    // If you need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
