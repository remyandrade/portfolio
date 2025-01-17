(function() {

  'use strict';

  // preloader
  $(window).on('load', function() {
    $('.loader').fadeOut('slow');
  });

  // smooth scroll
  $("a").on("click", function(event) {

      if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $("html, body").animate({

              scrollTop: $(hash).offset().top - 50

          }, 850);

      }

  });

  // magnific popup
  $('.portfolio').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: '.popup-image', // the selector for portfolio item
          type: 'image',
          gallery: {
              enabled: true
          },
      });
  });

  // swiper slider
  $(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        780: {
          slidesPerView: 3,
        }
      }
    });
  });

  // navbar toggler icon
  $(document).on("click",".navbar-toggler",function(e){
      $(this).parent().siblings().find('i').removeClass('la-remove')
    $(this).find('i').toggleClass('la-remove')
  });

  // navbar on scroll
  $(window).on("scroll", function() {

      var onScroll = $(this).scrollTop();

      if( onScroll > 50) {
          $(".navbar").addClass("navbar-fixed");
      }
      else {
          $(".navbar").removeClass("navbar-fixed");
      }

  });

})();

document.getElementById('downloadCvButton').addEventListener('click', function() {
  const cvUrl = './remy-resume.pdf'; // Replace with the actual path to your CV file
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Remy Andrade - Resume.pdf'; // Replace with the desired file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
