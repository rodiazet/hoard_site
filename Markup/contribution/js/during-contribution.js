function During() {

    var context;
    this.html = $('html');
    this.body = $('body');
    this.openGraphButton = $('.openGraph');
    this.backButton = $('.closeGraph');
    this.questionButton = $('.question');
    this.continueButton = $('.continueButton');

    this.graphSection = $('.duringGraph');
    this.statusSection = $('.duringFirst');

    this.contributeTerm = $('.contributeTerm');
    this.howContribute = $('.howContribute');

    this.normalNav = $('.normalNav');
    this.backNav = $('.backNav');

    this.init = function () {
        this.onScreenChange();
        this.onWindowLoad();
        this.toggleFAQ();
        this.toggleGraph();
        this.continueAction();
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

    this.toggleGraph = function () {
        this.openGraphButton.on('click', function (e) {
            e.preventDefault();
            context.graphSection.addClass('show');
            context.statusSection.addClass('hideDiv');
            context.backNav.show();
            context.normalNav.hide();
        });

        this.backButton.on('click', function (e) {
            e.preventDefault();
            context.graphSection.removeClass('show');
            context.statusSection.removeClass('hideDiv');
            context.backNav.hide();
            context.normalNav.show();
        });
    }

    this.toggleFAQ = function () {
        this.questionButton.on('click', function () {
            if ($(this).hasClass('active')){
                $(this).siblings('.anwser').slideUp(200);
                $(this).removeClass('active');
            } else {
                $(this).siblings('.anwser').slideDown(200);
                $(this).addClass('active');
            }
        });
    }

    this.continueAction = function () {
        this.continueButton.on('click', function () {
            context.contributeTerm.addClass('hideDiv');
            context.howContribute.addClass('show');
        });
    }

    context = this;
    this.init();

}

var during;

$(document).ready(function () {
    during = new During();
});