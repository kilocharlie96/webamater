// Run when the DOM is fully loaded
$(document).ready(function() {
  var pageWidth = $('body').width(),
      agreeButton = $('button.button'),
      warningBanner = $('.warning');

  // Trigger animation for elements already in the DOM
  animateHeader();

  // Hide the warning banner when the agree button is clicked
  agreeButton.on("click", function() {
    warningBanner.animate({
      left: pageWidth / 2,
      opacity: 0
    }, 500).fadeOut();
  });

  // Listen for HTMX content swaps
  // This fires after HTMX inserts new HTML into the DOM
  document.body.addEventListener('htmx:afterSwap', function(event) {
    if (event.target.tagName.toLowerCase() === 'header') {
      animateHeader();
    }
  });

  // Animate the header elements (fade-in effect)
  function animateHeader() {
    var h1 = $('header h1');
    var h4 = $('header h4');
    if (h1.length && h4.length) {
      h1.hide().fadeIn(1500);
      h4.hide().fadeIn(3500);
    }
  }
});
