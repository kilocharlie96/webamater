jQuery(function() {
  var pageWidth = $('body').width(),
      h1 = $('header h1'),
      h4 = $('header h4'),
      content = $('main'),
      agreeButton = $('button.button'),
      warningBanner = $('.warning');

  h1.hide().fadeIn(1500);
  h4.hide().fadeIn(3500);
  content.hide().fadeIn(2000);

  agreeButton.on("click", function() {
    warningBanner.animate({
        left: pageWidth/2,
        opacity: 0
    }, 500).fadeOut();
  });
 })