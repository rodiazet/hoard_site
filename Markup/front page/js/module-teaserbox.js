$(window).on('load', function () {
    childEqualHeight('.teaserItem', '.teaserItemImage');
});

$(window).on('resize', function () {
    childEqualHeight('.teaserItem', '.teaserItemImage');
});