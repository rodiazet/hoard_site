$(window).scroll(function (e) {
    buttonParallax();
});

function buttonParallax() {
    var scrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
    $('.moreSection').css('bottom', (scrolled * 0.9) + 30 + 'px');
    $('.moreSection').css('opacity', 1 - ((scrolled * 1.9) / windowHeight));
}