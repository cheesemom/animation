var cont = $('.ch_wrapper>div');
cont.click(function (e) {
  e.preventDefault();
});

var cont = $('.ch_wrapper>div');
cont.mouseover(function () {
  var target = $(this);

  cont.removeClass('on');
  target.addClass('on');
});