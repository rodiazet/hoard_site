var overlay;

function Overlay() {
    var context;
    this.toggleOverLay = $('.toggleOverlay');
    this.closeButton = $('.closeOverlay');
    this.body = $('body');
    this.html = $('html');

    this.init = function () {
        this.openOverlay();
        this.closeOverlay();
    }

    this.openOverlay = function () {
        this.toggleOverLay.click(function () {
            var overlayTarget = $(this).attr('data-toggleOverlayID');

            $('#' + overlayTarget).addClass('overlayOpen');
            $('#' + overlayTarget).css('z-index', '999');
            context.body.addClass('lockScroll');
            context.html.addClass('lockScroll');
        });
    }

    this.closeOverlay = function () {
        this.closeButton.click(function () {
            $(this).parents('.mainOverlay').removeClass('overlayOpen');
            var $this = $(this);
            setTimeout(function () {
                $this.parents('.mainOverlay').css('z-index', '-999');
            }, 300);
            context.body.removeClass('lockScroll');
            context.html.removeClass('lockScroll');
        });
    }

    context = this;
    this.init();

}
$(document).ready(function () {
    var overlay = new Overlay();
});