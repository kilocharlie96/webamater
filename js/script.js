var pageWidth = $('body').width(),
    h1 = $('header h1'),
    h2 = $('header h4'),
    content = $('.content'),
    agreeButton = $('.agree'),
    warningButton = $('.warning')

    h1.hide().fadeIn(2000);
    h2.hide().fadeIn(4500);
    content.hide().fadeIn(3000);

    // schova warning banner po kliknuti na agree
    // todo dohladat ako schovať element už počas presuvania
        agreeButton.on( "click", function() {
        $('.warning').animate({
            left: pageWidth/2,
            opacity: 0
        }, 1000).fadeOut();
      } );