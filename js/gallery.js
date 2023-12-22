$(function(){

  $(window).load(function(){
    $('.grid').isotope({
      // options
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      fitRows: {
        gutter: 0
      }
    });
  });


  // Isotope Filter Setting
  var grid = $('.grid');
  var m1 = $('#m1');
  var m2 = $('#m2');
  var m3 = $('#m3');


  // 라이트박스 초기 설정
  $('.grid-item a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
  });


  m1.click(function(e){
    grid.isotope({ filter: '.grid-item' });
    $('.grid-item a').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
    });

    e.preventDefault();
  });

  m2.click(function(e){
    grid.isotope({ filter: '.g1' });
    $('.g1 a').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
    });

    e.preventDefault();
  });

  m3.click(function(e){
    grid.isotope({ filter: '.g2' });
    $('.g2 a').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
    });

    e.preventDefault();
  });

});