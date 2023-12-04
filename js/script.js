var pageWidth = $('body').width(),
    h1 = $('header h1'),
    h2 = $('header h4'),
    content = $('.content'),
    agree = $('.agree');

    h1.hide().fadeIn(2000);
    h2.hide().fadeIn(4500);
    content.hide().fadeIn(3000);

    // schova p.warning po kliknuti na agree element
    // todo dohladat ako schovať element už počas presuvania
        agree.on( "click", function() {
        $('.warning').animate({
            left: pageWidth
        }, 1000).fadeOut();
      } );