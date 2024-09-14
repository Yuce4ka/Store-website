let swiper= new Swiper(".swiper", {
    slidePerView:1,
    spaceBetween:10,
    speed:400,
    preventClick:true,
    noSwiping:true,
    freeMode:false,
    navigation:{
        nextEl:".next",
        prevEl:".prev",
    },
    breakpoints:{
        550:{
            slidePerView:2,
            spaceBetween:20,
        },
        950:{
            slidePerView:3,
            spaceBetween:30,
        },
        1200:{
            slidePerView:3,
            spaceBetween:30,
        }
    }
})