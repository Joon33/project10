$(function(){

  // jarallax JS
  $('.jarallax').jarallax({
    speed: 0.2
  });

  // WOW JS
  new WOW().init();


  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    // console.log(scrollPos);

    if(scrollPos > 20){
      $('#header').addClass('fixed');
    }else{
      $('#header').removeClass('fixed');
    }
  });



  var menuItem = $('#header h1 a, #gnb a');

  menuItem.click(function(){
    var el = $(this).attr('href');
    console.log(el);

    var elWrap = $(el);
    scrollMove(elWrap, 53);
  });



  function scrollMove(el, navHeight){
    var offset = el.offset().top;
    var totalPos = offset - navHeight;

    $('html, body').animate({scrollTop: totalPos}, 800);
  }

  // scrollspy JS
  $('body').scrollspy({
    offset: 54
  })


});