// Run when the DOM is fully loaded
$(document).ready(function() {
  var pageWidth = $('body').width();

// Use delegated event handler so it works even after HTMX swaps
  $(document).on("click", "button.button", function() {
    var warningBanner = $('.warning');

    warningBanner.animate({
      left: pageWidth / 2,
      opacity: 0
    }, 500).fadeOut();
  });

// Trigger header animation on initial load
  animateHeader();

// Re-run header animation after HTMX replaces the header
  document.body.addEventListener('htmx:afterSwap', function(event) {
    if (event.target.tagName.toLowerCase() === 'header') {
      animateHeader();
    }
  });

// Function to animate header elements (simple fade-in effect)
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