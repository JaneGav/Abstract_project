$(document).ready(function () {

  var btn = $('#button');

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '260');
  });
})

$(document).ready(function () {
  $('.pull-me').click(function () {
    $('.panel').slideToggle('slow');
  });
});



