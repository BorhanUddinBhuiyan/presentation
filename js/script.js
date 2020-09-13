new WOW().init();

$(document).ready(function () {
  // navbar
  $('.nav-button').click(function() {
    $('.nav-menu').toggleClass('nav-menu2');
    $('.nav-button').toggleClass('change');

  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 250) {
      $('.nav-menu').addClass('custom-navbar');
      $('.line').addClass('custom-line');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
      $('.line').removeClass('custom-line');
    }
  });
  // lightbox plugin
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
  // gallery
  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 330) {
      $('.gallery').addClass('change');

    }
    else {
      $('.gallery').removeClass('change');
    }
  });
  // famous writers
  $('.writers-accordion').click(function (event) {
    if (event.target.id.split('-')[0] === 'button') {
      $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg'
      );
      $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg'
      );
    }
  })
  
});