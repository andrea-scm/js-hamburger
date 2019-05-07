$('.header-right > a').click(function() {
  $('div[class = "hamburger-menu"]').show();
});

$('div[class = "hamburger-menu"] > a').click(function () {
  $('div[class = "hamburger-menu"]').hide();
});
