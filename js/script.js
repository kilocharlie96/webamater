var pageWidth = $('body').width(),
    h1 = $('header h1'),
    h2 = $('header h4'),
    content = $('main'),
    agreeButton = $('button.button'),
    warningBanner = $('.warning')

    h1.hide().fadeIn(1000);
    h2.hide().fadeIn(3500);
    content.hide().fadeIn(2000);

    // schova warning banner po kliknuti na agree
    // todo dohladat ako schovať element už počas presuvania
        agreeButton.on( "click", function() {
        warningBanner.animate({
            left: pageWidth/2,
            opacity: 0
        }, 1000).fadeOut();
      } );