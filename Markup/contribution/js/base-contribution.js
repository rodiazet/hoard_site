function initialScrollbar(element) {
    $(element).scrollbar();
}

$(window).on('load', function () {
    initialScrollbar('.mainContent');
    equalHeight('.statusColumn');
});
$(window).on('resize', function () {
    setTimeout(function () { equalHeight('.statusColumn'); },200);
});
