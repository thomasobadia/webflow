
$(document).ready(function(){

    updatePosition()
    $(document).on('scroll', function(){updatePosition()})

})

function updatePosition (){

    if(window.matchMedia("(min-width:990px)").matches) {

        let breakPoint = 150
        let scrollFromTop = $(document).scrollTop() / window.innerHeight *100
        let imageZoom = scrollFromTop * 30 / breakPoint + 70
        let parallaxValue = (scrollFromTop-breakPoint) * (175-breakPoint) / (200 - breakPoint) + breakPoint

        if(scrollFromTop >= breakPoint){

            $('.section-header-img').addClass('section-header-absolute')
            $('.section-header-img').css('margin-top', parallaxValue +'vh')
            $('.header-img').css('height','100vh')
            $('.header-img').css('width', '100vw')


        }else{
            $('.section-header-img').css('margin-top','0')
            $('.header-img').css('height', imageZoom + 'vh')
            $('.header-img').css('width', imageZoom + 'vw')
            $('.section-header-img').removeClass('section-header-absolute')

        }
    }
}