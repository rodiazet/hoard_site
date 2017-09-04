function Team() {

    var context;
    this.html = $('html');
    this.body = $('body');
    this.teamToggleButton = $('.teamItemWraper');
    this.closeButton = $('.closeToggle');

    this.init = function () {
        this.onScreenChange();
        this.onWindowLoad();
        this.toggleDetailItem();
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

    this.toggleDetailItem = function () {
        this.teamToggleButton.on('click', function () {
            if ($(this).hasClass('active')) {
                //context.closeDetail($(this));
            } else {
                context.openDetail($(this));
                
            }
        });

        this.closeButton.on('click', function () {
            var currentElement = $(this).parent('.teamItemDetail').siblings('.teamItemWraper');
            context.closeDetail(currentElement);
        });
    }

    this.openDetail = function (element) {
        element.addClass('active');
        element.siblings('.teamItemDetail').addClass('open');

        /*close Sibling items*/
        element.parent('.teamItem').siblings('.teamItem').find('.teamItemDetail').removeClass('open');
        setTimeout(function () {
            element.parent('.teamItem').siblings('.teamItem').find('.teamItemWraper').removeClass('active');
            
        }, 300);
    }

    this.closeDetail = function (element) {
        element.siblings('.teamItemDetail').removeClass('open');
        setTimeout(function () {
            element.removeClass('active');
        }, 300);
    }

    context = this;
    this.init();

}

var team;

$(document).ready(function () {
    team = new Team();
});