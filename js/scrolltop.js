{/* <style>

@media (min-width: 990px) {
  .section-header-fixed{
    position: fixed !important;
  }
  .section-header-absolute{
    position: absolute !important;
  }
}

</style> */}

$(document).ready(function(){
    if($('body').hasClass('animated-intro')){
        updatePosition()
        $(document).on('scroll', function(){updatePosition()})
        introAnimation()
    }

})

function introAnimation () {
    if(window.matchMedia("(min-width:990px)").matches) {
        if($(document).scrollTop() == 0){
            $('body').addClass('body-no-overflow')
            TweenMax.to($('.apparition-container'),1.5,{width: 70 +'vw', ease: Power2.easeOut, onComplete: function(){
                disableAnimationContainer()
                $('body').removeClass('body-no-overflow')
            }} )
            animateTypo()

        } else{
            disableAnimationContainer()
            animateTypo()

        }
        
    } else {

        disableAnimationContainer()
        animateTypo()
        

    }
    
}


function disableAnimationContainer(){
    $('.apparition-container').css('width','auto')
    $('.apparition-container').css('height','auto')
    $('.apparition-container').css('position','static')
}

function animateTypo () {
    TweenMax.to($('.title-typo-animation'),1.5,{x: 0 +'%', ease: Power2.easeOut, delay: 0 } )
    TweenMax.to($('.title-typo-animation'),1.5, {autoAlpha:1 , ease: Power2.easeOut, delay: 0 } )
    TweenMax.to($('.title-animation'),1.25,{x: 0 +'%', ease: Power2.easeOut, delay: 0.25  })
    TweenMax.to($('.title-animation'),1.25,{autoAlpha:1 ,ease: Power2.easeOut, delay: 0.25  })
}

function updatePosition (){

    if(window.matchMedia("(min-width:990px)").matches) {

        let breakPoint = 50
        let scrollFromTop = $(document).scrollTop() / window.innerHeight *100
        let imageZoom = scrollFromTop * 30 / breakPoint + 70
        let parallaxValue = (scrollFromTop-breakPoint) * (75-breakPoint) / (100 - breakPoint) + breakPoint
				let alpha = 200 - scrollFromTop - breakPoint
        
        if(scrollFromTop >= breakPoint){

            $('.section-header-img').addClass('section-header-absolute')
            $('.section-header-img').css('margin-top', parallaxValue +'vh')
            $('.header-img').css('height','100vh')
            $('.header-img').css('max-width','100%')
            $('.header-img').css('width', '100vw')
            $('.header-img').css('opacity',alpha/100)
        }else{
        
            $('.section-header-img').css('margin-top','0')
            $('.header-img').css('height', imageZoom + 'vh')
            $('.header-img').css('width', imageZoom + 'vw')
            $('.section-header-img').removeClass('section-header-absolute')

        }
    }
}

// *********************************************************************************************************

$(document).ready(function () {
    if ($('body').hasClass('sticky-filter')) {
        updateScroll()
        updateClassActive()
        $(document).on('scroll', function () {
            updateScroll(), updateClassActive()
        })
        $(document).on('resize', function () {
            updateScroll()
        })
        $('.blog-filters-link').on('click', function (e) {
            scrollTo(e)
        })
    }
})

function updateScroll() {

    let scrollTop = $(window).scrollTop(),
        elementOffset = $('.blog-list-top').offset().top,
        distance = (elementOffset - scrollTop)

    if (distance <= $(window).innerHeight() * 0.1) {
        $('.navbar').fadeOut()
        $('.navbar-blue-elment').fadeOut(200)
    } else {
        $('.navbar').fadeIn()
        $('.navbar-blue-elment').fadeIn(200)

    }

}

function scrollTo(e) {

    let anchorNumber = e.target.dataset.anchor
    let target = $(document).find(`[data-target='${anchorNumber}']`)
    let targetTop = target.offset().top - 20 - $('.blog-list-top').height()

    $([document.documentElement, document.body]).animate({
        scrollTop: targetTop
    }, {
        queue: false,
        duration: 300,
        easing: 'swing'
    });
    updateClassActive()
}

function updateClassActive() {

    let isActive
    $('.blog-filters-link').each(function (index) {
        let target = $(document).find(`[data-target='${index}']`)
        let targetTop = target.offset().top - 200 - $('.blog-list-top').height()
        if (Math.round($(window).scrollTop()) >= Math.round(targetTop)) {

            isActive = index
        }

    })
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        isActive = $('.blog-filters-link').length - 1
    }
    if ($(window).scrollTop() < $(document).find(`[data-target='0']`).offset().top - 20 - $('.blog-list-top').height()) {
        isActive = 0
    }
    $('.blog-filters-link').removeClass('active')
    $(document).find(`[data-anchor='${isActive}']`).addClass('active')
}





// ************************


var mySwiper = new Swiper ('.ateliers-slider-1 .swiper-container', {
    speed:1000,
    loop: true,
    effect: fade,
    navigation: {
        nextEl: '.ateliers-slider-1 .arrow_right',
        prevEl: '.ateliers-slider-1.arrow_left',
    },
    fadeEffect: {
        crossFade: true
    }
});



// $$$$$$$$$$$$$$$$$$$$$$$$$

$(document).ready(function(){

    $('[data-url]').replaceWith(function() {
        console.log($(this).classList)
        return $('<a/>', {
            html: this.innerHTML,
            class: $(this).classList
        });
    });
})