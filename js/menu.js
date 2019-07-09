let menuTitleOpened = false


// $('.menu-title-container').on('click', function () {
//   if (window.matchMedia("(max-width: 990px)").matches) {
//     if ($($(this).siblings('.menu-mobile-ul')).hasClass('menu-open-mobile')) {
//       $($(this).siblings('.menu-mobile-ul')).removeClass('menu-open-mobile')
//       console.log($(this).siblings('.menu-mobile-ul')[0].scrollHeight)


//     } else {
//         $('.menu-mobile-ul').removeClass('menu-open-mobile')
//         $($(this).siblings('.menu-mobile-ul')).addClass('menu-open-mobile')   
//       console.log($(this).siblings('.menu-mobile-ul')[0].scrollHeight)
//       $('.menu-background').css('background-image', `url(${$(this).parent().data('background')})`)
//     }
//   }
// })


$('.menu-title-container').on('click', function () {
  if (window.matchMedia("(max-width: 990px)").matches) {
    if ($($(this).siblings('.menu-mobile-ul')).hasClass('menu-open-mobile')) {
      $($(this).siblings('.menu-mobile-ul')).removeClass('menu-open-mobile')
      $($(this).siblings('.menu-mobile-ul')).css('max-height','0')
    } else {
      $('.menu-mobile-ul').removeClass('menu-open-mobile')
      $($(this).siblings('.menu-mobile-ul')).addClass('menu-open-mobile')   
      $('.menu-mobile-ul').css('max-height','0')
      $($(this).siblings('.menu-mobile-ul')).css('max-height',$(this).siblings('.menu-mobile-ul')[0].scrollHeight)
      // $('.menu-background').css('background-image', `url(${$(this).parent().data('background')})`)
    }
  }
})


$('.menu-mobile-ul li').on('click', function () {
  if (window.matchMedia("(max-width: 990px)").matches) {
    if ($(this).children().hasClass('menu-open-mobile')) {
      $(this).children().removeClass('menu-open-mobile')
      $('.menu-mobile-ul').find('ul').css('max-height','0')
      $(this).find('.menu-open-more-mobile img').css('transform', 'rotate(-90deg)')
    } else {
      $('.menu-mobile-ul li').children().removeClass('menu-open-mobile')
      $('.menu-mobile-ul').find('ul').css('max-height','0')
      $($(this).children('ul')[0]).css('max-height',$(this).children('ul')[0].scrollHeight)
      $($(this).parent('.menu-mobile-ul')[0]).css('max-height', '+=' + $(this).children('ul')[0].scrollHeight)
      $(this).children().addClass('menu-open-mobile')
      $('.menu-open-more-mobile img').css('transform', 'rotate(-90deg)')
      $(this).find('.menu-open-more-mobile img').css('transform', 'rotate(90deg)')  
    }
  }
})


$('.burger-menu').on('click', function () {

  if (window.matchMedia("(max-width: 990px)").matches) {

    if ($('.themenu').hasClass('menu-close')) {
      $('.themenu').removeClass('menu-close');
      $('.themenu').addClass('menu-open');
      $('.burger-menu img').attr('src','images-menu/menu-close.svg')
    } else {
      $('.themenu').addClass('menu-close');
      $('.themenu').removeClass('menu-open');
      $('.burger-menu img').attr('src','images/navbar_burger.svg')

    }

  } else {
    // OPEN MENU
    if ($('.themenu').hasClass('menu-close')) {
      $('.menu-background').css('display','block');
      $('.burger-menu img').attr('src','images-menu/menu-close.svg')
      console.log('aze')
      $('.themenu').css('display','block');      
      $('.themenu').removeClass('menu-close');
      $('.themenu').addClass('menu-open');
      if ($('.menu-container .menu-title').hasClass('menu-slide-in')) {
        $('.menu-container .menu-title').removeClass('menu-slide-in');
      } else {
        $('.menu-container .menu-title').addClass('menu-slide-in');
      }

    } else {

      // CLOSE MENU 
      $('.themenu').addClass('menu-close');
      $('.themenu').removeClass('menu-open');

      if (menuTitleOpened) {
        // TODO: better leave menu animation if submenu open desktop
        menuTitleOpened = false
        $(".menu-title")
          .fadeOut(0)
          .promise()
          .done(() => {
            $(".close-menu-title").fadeOut();
            $(".menu-open-more").fadeIn()
            $(".menu-container .menu-title").children().removeClass('active')
            $(".menu-container .menu-title").removeClass('not-active')
            $('.menu-image-hover-container').removeClass('open-image')
            $('.menu-image-hover-container').css('opacity', '0.6')
            $('.menu-background').removeClass('active')
            setTimeout(() => {
              $('.menu-title').fadeIn(200)
            }, 0)
          })
      }

      setTimeout(() => {
        $(".menu-title").removeClass('menu-title-open')
        $('.menu-container .menu-title').removeClass('menu-slide-in');
        $('.menu-background').css('display','none');
        $('.burger-menu img').attr('src','images/navbar_burger.svg')
      }, 750);
    }

  }

});



// HOVER MENU LI
$('.menu-container .menu-title').mouseenter(function () {
  if (!window.matchMedia("(max-width: 990px)").matches) {
    if (!menuTitleOpened) {
      $(".menu-container .menu-title").addClass('not-active')
      $(this).removeClass('not-active')
      setTimeout(() => {
        $('.menu-image-hover-container img').prop('src', `${$(this).data('background')}`)
        $('.menu-image-hover-container').addClass('open-image')
        $('.menu-background').addClass('active')
        $('.menu-background').css('background-image', `url(${$(this).data('background')})`)
      }, 200);
    }
  }

})


// LEAVE HOVER MENU LI
$('.menu-container .menu-title').mouseleave(function () {
  if (!window.matchMedia("(max-width: 990px)").matches) {
    if (!menuTitleOpened) {
      $(".menu-title").removeClass('not-active')
      $('.menu-image-hover-container').removeClass('open-image')
      $('.menu-background').removeClass('active')
    }
  }
})

// CLICK MENU TITLE 

$('.menu-container .menu-title').click(function () {
  if (!window.matchMedia("(max-width: 990px)").matches) {
    if (!menuTitleOpened) {
      menuTitleOpened = true
      $(".menu-title").fadeOut(200, () => {
        $(".menu-title").addClass('menu-title-open')
        $(this).children().addClass('active')
        $(".menu-open-more").fadeOut()
        $(".close-menu-title")
          .css("display", "flex")
          .hide()
          .fadeIn();
        $('.menu-image-hover-container img').prop('src', `${$(this).data('background')}`)
        $('.menu-image-hover-container').addClass('open-image')
        $('.menu-image-hover-container').css('opacity', 0.4)
        $('.menu-background').addClass('active')
        $('.menu-background').css('background-image', `url(${$(this).data('background')})`)
        $(".menu-fader").fadeIn()
        setTimeout(() => {
          $(this).fadeIn(500)
          $('.menu-img-container').addClass('menu-slide-from-top')
        }, 200)
      })
    }

  }


})

$('.menu-title ul li ul li').mouseenter(function(){
  $('.menu-instruments img').css('transform','scale(1.1) !important')
})
$('.menu-title ul li ul li').mouseleave(function(){
  $('.menu-instruments img').css('transform','none !important')
})

// QUIT MENU TITLE
$('.close-menu-title').click(function () {
  if (!window.matchMedia("(max-width: 990px)").matches) {
    if (menuTitleOpened) {
      menuTitleOpened = false
      $(".close-menu-title").fadeOut();
      $(".menu-title")
        .fadeOut(500)
        .promise()
        .done(() => {
          
          $(".menu-open-more").fadeIn()
          $(".menu-container .menu-title").children().removeClass('active')
          $(".menu-container .menu-title").removeClass('not-active')
          $('.menu-image-hover-container').removeClass('open-image')
          $('.menu-image-hover-container').css('opacity', '0.6')
          $('.menu-background').removeClass('active')
          setTimeout(() => {
            $('.menu-title').fadeIn(200)


          }, 500)
        })
    }
  }
})