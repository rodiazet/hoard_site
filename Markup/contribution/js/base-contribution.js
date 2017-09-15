$(window).on('load', function () {
    equalHeight('.statusColumn');
});
$(window).on('resize', function () {
    setTimeout(function () { equalHeight('.statusColumn'); },200);
});
