$(document).ready(function(){
    $('.back-to-top').hide();
});

// Smooth scroll to any anchor specified
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// Fade back to top arrow when near the top of page
$(window).scroll(function() {
    if ($(this).scrollTop() < 100) { // can be whatever, 0 refers to the top space you allow
        $('.back-to-top').fadeOut(300); // Fade element in 1s
    }
    else {
        $('.back-to-top').fadeIn(300); // Fade in element in 1s
    }
});