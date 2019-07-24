function readURL(input, target) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      target.parent().parent().find('.input-img').css('background-image', 'url(' + e.target.result + ')');
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$(".inputfile").change(function () {
  readURL(this, $(this));
  $(this).parent().parent().find($('.delete-image')).removeClass('event-none')
  $(this).parent().parent().find($('.delete-image')).css('opacity','1')
  $(this).parent().parent().find($('.radio-button-field ')).removeClass('event-none')
  $(this).parent().parent().find($('.radio-button-field ')).css('opacity','1')
  $(this).parent().parent().find($('.radio-button')).attr('checked','checked')
  $(this).parent().parent().addClass('image-opened')
});

$(".input-img").on('click', function () {
  $(this).parent().find('.inputfile').trigger('click');
});


$(".input-mp3").on('click', function () {
    $(this).parent().find('.inputfile').trigger('click');
});

$(".formulaire-mp3 .inputfile").change(function () {
    $(this).parent().parent().find('.mp3-field').val($(this)[0].files[0].name)  
});

$(".delete-mp3").on('click', function(e){deleteMp3(e.target)});


function deleteMp3 (target) {
    $(target).closest('.formulaire-mp3').find('.inputfile').val('')
    $(target).closest('.formulaire-mp3').find('.mp3-field').val('')
    
}

function updateRadioButton (target) {
    console.log(target)
}



$(document).ready(function () {

  $(".button-album-link").on('click', function () {
    target = $(this);
    open_popin($(this).find(".album-link-form").attr('src'));

  });


  $(".bt-validate-rs").on('click', validate_link);
  $(".bt-close,.bkg-bt-close").on('click', close_popin);
  $(".bt-delete").on('click', delete_link);
  $(".bt-test").on('click', goto_link);

  function validate_link() {
    $('#popin-field').removeClass('error');

    if ($('#popin-field').val().length > 1) {
      target.removeClass("empty");
      target.find('.album-link').val($('#popin-field').val());
      close_popin();
      if (target.parent().find(".button-album-link.empty").length == 1) {
        target.parent().find(".button-album-link.empty").addClass('event-none');
      }
    } else {
      $('#popin-field').addClass('error');
    }
  }

  function delete_link() {
    target.addClass("empty");
    $('#popin-field').val('');
    target.find('.album-link').val('');
    target.parent().find(".button-album-link.empty").removeClass('event-none');
    close_popin();
  }


  function goto_link() {
    window.open($('#popin-field').val(), '_blank');
    target.find('.album-link').val(' ');
  }

  function close_popin() {
    $('#popin-field').removeClass('error');
    $('.formulaire-popin').fadeOut(200);
  }

  function open_popin(img) {
    $('.link-rs-title').attr('src', img);
    $('#popin-field').val(target.find('.album-link').val());

    $('.formulaire-popin').fadeIn(200,function(){$('#popin-field').focus()});
  }

 

  $('#popin-field').focus(function () {
    $('#popin-field').removeClass('error');
  });
  
  $('.delete-image').click(function(e){deleteImage(e.target)})
  $('.add-album').click(function () {duplicateAlbum()})
  $('.add-instrument').click(function () {duplicateInstrument()})
  $('.delete-link-album').click(function (e) {deleteAlbum(e.target)})
  $('.delete-link-instrument').click(function (e) {deleteInstrument(e.target)})

  function duplicateAlbum() {
    let original = $('.formulaire-album-block').first()[0]
    var clone = original.cloneNode(true)
    $(clone).find('.delete-link-album').click(function (e) { deleteAlbum(e.target)})
    $(clone).find('.btn-form').click(function () {duplicateAlbum()})
    $(clone).find(".bt-validate-rs").on('click', validate_link);
    $(clone).find(".bt-close,.bkg-bt-close").on('click', close_popin);
    $(clone).find(".bt-test").on('click', goto_link);
    $(clone).find(".input-img").attr('style', '')
    $(clone).find(".album-link").val('')
    $(clone).find(".button-album-link").addClass('empty')
    $(clone).find(".button-album-link").removeClass('event-none')
    $(clone).find(".button-album-link").on('click', function () {
        target = $(this);
        open_popin($(this).find(".album-link-form").attr('src'));
    
      });
    $(clone).find(".input-img").on('click', function () {
        $(this).parent().find('.inputfile').trigger('click');
      });
    $(clone).find(".inputfile").change(function () {

        readURL(this, $(this));
      });
    
    $(clone).insertBefore($(original.parentNode).find('.form-button-block'))
    updateAlbumId($('.formulaire-album-block'))

  }


  function deleteAlbum(e) {
    if($('.formulaire-album-block').length > 1){
        $(e).closest('.formulaire-album-block').remove()
        updateAlbumId($('.formulaire-album-block'))
    }else{
        $('.formulaire-album-block').find(".album-image").val('')
        $('.formulaire-album-block').find(".input-img").attr('style', '')
        $('.formulaire-album-block').find(".button-album-link").addClass('empty')
        $('.formulaire-album-block').find(".button-album-link").removeClass('event-none')
        $('.formulaire-album-block').find(".album-link").val('')
        $('.formulaire-album-block').find("#album-name").val('')
        $('.formulaire-album-block').find("#album-year").val('')
    }
  }


  function deleteImage(target){

    $(target).parent('.inputfile-block').find('.inputfile').val('')
    $(target).parent('.inputfile-block').find('.input-img').attr('style','')
    $(target).parent().find($('.radio-button-field ')).addClass('event-none')
    $(target).parent().find($('.radio-button-field ')).css('opacity','0')
    $(target).parent().parent().find($('.radio-button-field')).find($('.radio-button')).attr('checked', false)
    $(target).parent().removeClass('image-opened')
    $(target).css('opacity','0')
    $(target).addClass('event-none')

    $('.image-opened').find($('.radio-button')).attr('checked','checked')


    

  }

  function updateAlbumId (albums) {
    $.each(albums, function( i, el ) {
        console.log(i)
        $(el).find('.album-name').text('Album #' + parseFloat(i+1))
        $(el).find(".album-image").attr('name', `album-image-${i}`)
        $(el).find("#album-name").attr('name', `album-year-${i}`)
        $(el).find("#album-year").attr('name', `album-year-${i}`)
        $(el).find(".spotify-link").attr('name', `spotify-link-${i}`)
        $(el).find(".deezer-link").attr('name', `deezer-link-${i}`)
        $(el).find(".itunes-link").attr('name', `itunes-link-${i}`)
        $(el).find(".qobuz-link").attr('name', `qobuz-link-${i}`)
        
      });
  }



  function duplicateInstrument() {
    let original = $('.formulaire-instrument-block').first()[0]
    let clone = original.cloneNode(true)
    $(clone).find('.delete-link-instrument').click(function (e) { deleteInstrument(e.target)})
    $(clone).insertBefore($(document).find('.add-instrument'))
    updateInstrumentId($('.formulaire-instrument-block'))
  }

  function deleteInstrument(e) {
    if($('.formulaire-instrument-block').length > 1){
        $(e).closest('.formulaire-instrument-block').remove()
        updateInstrumentId($('.formulaire-instrument-block'))
    }else{
        $('.formulaire-instrument-block').find("#instrument-model").val('')
        $('.formulaire-instrument-block').find("#instrument-name").val('')
    }
   
  }

  function updateInstrumentId (instruments) {
    $.each(instruments, function( i, el ) {
        $(el).find("#instrument-model").attr('name', `instrument-model-${i}`)
        $(el).find("#instrument-name").attr('name', `instrument-name-${i}`)      
      });
  }





});



