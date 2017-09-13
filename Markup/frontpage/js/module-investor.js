$(window).on('load', function () {
    childEqualHeight('.investorItem', '.investorItemImage');
});

$(window).on('resize', function () {
    childEqualHeight('.investorItem', '.investorItemImage');
});