$(document).ready(function(){
$('.button[filter]').click(function () {
      if ($(this).attr('val') == 'off') {
         $('.button[filter]').attr('val', 'off').removeClass('focused');
         $(this).attr('val', 'on').addClass('focused');
         $('.our-projects__photos > img').hide(  );
         $('.our-projects__photos > img[filter=' + $(this).attr('filter') + ']').show(300);
         if ($(this).attr('filter') == 'all') {
            $('.button[filter]').attr('val', 'off').removeClass('focused');
            $(this).attr('val', 'on').addClass('focused');
            $('.our-projects__photos > img').show( 300 );
         }
      }
   });	

$('.menu-iconn').click(function() {
   $('nav').slideToggle(500);
   $('ul').css({
      'display': 'flex',
      'flex-direction': 'column'
   })
   if($('.menu-iconn').html()=='<i class="fa fa-bars"></i>') {
         $(this).html('<i class="fas fa-times"></i>')
      } else {
         $(this).html('<i class="fa fa-bars"></i>')
      }
   })

$(window).scroll(function () {
      if ($(this).scrollTop() != 0)
         $('#to-top').fadeIn();
      else
         $('#to-top').fadeOut();
   });
   $('#to-top').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 800);
   });

   $('ul.nav a[href^="#"').click(function () {
      var target = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(target).offset().top
      }, 500);
     
   });

});



   
