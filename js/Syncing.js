$(function () {
  //slick slider syncing
  $('.main-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 5,
    arrows: false,
    fade: true,
    pauseOnFocus: false,
    asNavFor: '.nav-wrap'
  });


  $('.nav-wrap').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.main-slide',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    prevArrow: '.nav-wrap__prev',
    nextArrow: '.next'
  });
})
