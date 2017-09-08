function TopSlideshow(element) {
    var context;
    this.carousel = $(element);
    this.responsiveOption = [];
    this.body = $('body');

    this.init = function () {
        this.onScreenChange();
        this.isAutoHeight = this.carousel.attr('data-isAutoHeight') ? true : false;
        this.isFade = this.carousel.attr('data-isFade') ? true : false;
        this.hasArrow = this.carousel.attr('data-hasArrow') ? true : false;
        this.hasDot = this.carousel.attr('data-hasDot') ? true : false;
        this.autoHeight = this.carousel.attr('data-autoHeight') ? true : false;
        this.asNav = this.carousel.attr('data-asNav') ? this.carousel.attr('data-asNav') : null;
        this.autoPlay = this.carousel.attr('data-autoPlay') ? true : false;
        this.pauseTime = this.carousel.attr('data-pauseTime');
        this.speedAnimation = this.carousel.attr('data-speedAnimation');
        this.responsiveOption = this.responsiveOptions();
        this.create();
    }

    this.onScreenChange = function () {
        $(window).resize(function () {
            context.viewPort();
        });
    }

    this.create = function () {
        this.carousel.on('init', function (event, slick) {
            
        });

        this.carousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            focusOnSelect: false,
            pauseOnFocus: true,
            dots: this.hasDot,
            arrows: this.hasArrow,
            fade: this.isFade,
            asNavFor: this.asNav,
            autoplay: this.autoPlay,
            autoplaySpeed: this.pauseTime,
            adaptiveHeight: this.autoHeight,
            responsive: this.responsiveOption,
            speed: this.speedAnimation
        });
    }

    this.responsiveOptions = function () {
        this.setItemsResponsive();
        var options = [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: parseInt(this.responsiveMobile),
                    slidesToScroll: parseInt(this.responsiveMobile),
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: parseInt(this.responsiveTablet),
                    slidesToScroll: parseInt(this.responsiveTablet),
                    infinite: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: parseInt(this.responsiveLabtop),
                    slidesToScroll: parseInt(this.responsiveLabtop),
                    infinite: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: parseInt(this.responsiveDesktop),
                    slidesToScroll: parseInt(this.responsiveDesktop),
                    infinite: true
                }
            }
        ]

        return options;
    }

    this.setItemsResponsive = function () {
        this.dataResponsiveItem = this.carousel.attr('data-responsiveItem');
        if (this.dataResponsiveItem != null) {
            var responsiveNumberItem = [];
            responsiveNumberItem = this.dataResponsiveItem.split(",");

            this.responsiveMobile = responsiveNumberItem[0];
            this.responsiveTablet = responsiveNumberItem[1];
            this.responsiveLabtop = responsiveNumberItem[2];
            this.responsiveDesktop = responsiveNumberItem[3];
        } else {
            this.responsiveMobile = 1;
            this.responsiveTablet = 1;
            this.responsiveLabtop = 1;
            this.responsiveDesktop = 1;
        }
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

    this.clickToNext = function () {
        this.carousel.on('click', function () {
            $(this).slick('slickNext');
        });
    }


    context = this;
    this.init();
}

var slides = [];
$(window).load(function () {
    var slide_index = 0;
    $('.slideList').each(function () {
        slides[slide_index] = new TopSlideshow(this);
        slide_index++;
    });
});