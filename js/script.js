$(document).ready(function() {
  var pageWidth = $('body').width();

  $(document).on("click", "button.button", function() {
    var warningBanner = $('.warning');

    warningBanner.animate({
      left: pageWidth / 2,
      opacity: 0
    }, 500).fadeOut();
  });

  animateHeader();

  document.body.addEventListener('htmx:afterSwap', function(event) {
    if (event.target.tagName.toLowerCase() === 'header') {
      animateHeader();
    }
  });

  function animateHeader() {
    var h1 = $('header h1'),
        h2 = $('header h2'),
        arrow = $('header .arrow');

    if (h1.length && h2.length) {
      h1.hide().fadeIn(1500);
      h2.hide().fadeIn(3500);
      arrow.hide().fadeIn(1500);
    }
  }
});