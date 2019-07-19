let sliderWidth = $(".gamme-slider-container").get()[0].scrollWidth
let sliderHeight = $(".gamme-slider-container").get()[0].scrollHeight


$(document).scroll(function(){handleScroll()})

$(".scroll-container").css('height',sliderWidth)


function handleScroll () {
    let scrollContainerTop = $(".scroll-container").offset().top

    let scrollContainerBottom = $(".scroll-container").offset().top + $(".scroll-container").height()

    let scrollTop = $(window).scrollTop(),
    elementOffset = $('.scroll-container').offset().top,
    distance = (elementOffset - scrollTop)

    if($(window).scrollTop() >= scrollContainerTop && $(window).scrollTop() <= scrollContainerBottom ){
         $(".gamme-slider-container").css('transform',`translateX(${distance}px)`)

        $(".gamme-slider").addClass('fixed')
    }else{
        $(".gamme-slider").removeClass('fixed')
    }
    
}