function During() {

    var context;
    this.html = $('html');
    this.body = $('body');
    this.continueButton = $('.continueButton');

    this.contributeTerm = $('.contributeTerm');
    this.howContribute = $('.howContribute');

    this.checkBoxinput = $('.input-checkbox');

    this.init = function () {
        this.onScreenChange();
        this.onWindowLoad();
        this.continueAction();
        this.validateTerm();
    }

    this.onScreenChange = function () {
        $(window).resize(function () {
            context.viewPort();

        });
    }

    this.onWindowLoad = function () {
        $(window).load(function () {

        });
    }

    this.viewPort = function () {
        /* Each brouser have different vertical scrollbar */
        var scrollBarWidth = window.innerWidth - this.body.width();
        var is_safari = navigator.userAgent.indexOf("Safari") > -1;
        var isChrome = !!window.chrome && !!window.chrome.webstore;
        if (!is_safari) {
            if ($(window).width() > (992 - scrollBarWidth)) {
                this.isDestop = true;
            } else {
                this.isDestop = false;
            }
        } else if (isChrome) {
            if ($(window).width() > (992 - scrollBarWidth)) {
                this.isDestop = true;
            } else {
                this.isDestop = false;
            }
        } else {
            if ($(window).width() > 992) {
                this.isDestop = true;
            } else {
                this.isDestop = false;
            }
        }
    }

    this.continueAction = function () {
        this.continueButton.on('click', function () {
            context.contributeTerm.addClass('hideDiv');
            context.howContribute.addClass('show');
        });
    }

    this.validateTerm = function () {
        this.checkBoxinput.bind("click", function (e) {
            if (context.checkBoxinput.serializeArray().length == context.checkBoxinput.length) {
                context.continueButton.removeAttr('disabled');
            } else {
                context.continueButton.attr('disabled', "disabled");
            }

        });
    }

    context = this;
    this.init();

}

var during;

$(document).ready(function () {
    during = new During();
});