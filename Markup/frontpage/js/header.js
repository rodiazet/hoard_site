﻿function Header() {

    var context;
    this.html = $('html');
    this.body = $('body');
    this.header = $('.header');
    this.toggleMenuButton = $('.toggleMenu');
    this.mainNavigation = $('.mobileNavigation');
    this.currentLanguageButton = $('.currentLanguage');
    this.dropdownLanguage = $('.dropdownLanguage');
    this.scrollClick = $('.scrollClick');
    this.toggleSubMenuButton = $('.toggleSubMenu');
    this.closeMainMenuButton = $('.closeMenu');
    this.is_device = navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/) != null;

    this.init = function () {
        this.onScreenChange();
        this.onWindowLoad();
        this.openMainMenu();
        this.toggleDropdownLanguage();
        this.headerWhenScroll();
        this.scrollToSection();
        this.toggleSubMenu();
        this.closeMainMenu();
    }

    this.onScreenChange = function () {
        $(window).resize(function () {
            context.viewPort();
            context.headerWhenScroll();
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

    this.openMainMenu = function () {
        this.toggleMenuButton.on('click', function () {
            if ($(this).hasClass('active')) {
                /* close */
                $(this).removeClass('active');
                context.mainNavigation.removeClass('open');
            } else {
                /* open */
                $(this).addClass('active');
                context.mainNavigation.addClass('open');
            }
        });
    }

    this.closeMainMenu = function () {
        this.closeMainMenuButton.on('click', function () {
            context.toggleMenuButton.removeClass('active');
            context.mainNavigation.removeClass('open');
        });
    }

    this.headerWhenScroll = function () {
        var position = $(window).scrollTop();
        var startCollapse = 0;

        if (position > startCollapse) {
            context.header.addClass("headerScroll");
            context.toggleMenuButton.addClass("topZero");
            context.mainNavigation.addClass("topZero");
        }

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > startCollapse) {
                context.header.addClass("headerScroll");
                context.toggleMenuButton.addClass("topZero");
                context.mainNavigation.addClass("topZero");
            } else {
                context.header.removeClass("headerScroll");
                context.toggleMenuButton.removeClass("topZero");
                context.mainNavigation.removeClass("topZero");
            }
        });
    }

    this.toggleDropdownLanguage = function () {
        this.currentLanguageButton.on('click', function () {
            if ($(this).hasClass('active')) {
                /* close */
                $(this).removeClass('active');
                context.dropdownLanguage.slideUp(200);
            } else {
                /* open */
                $(this).addClass('active');
                context.dropdownLanguage.slideDown(200);
            }
        });
    }

    this.scrollToSection = function () {
        this.scrollClick.on('click', function (e) {
            e.preventDefault();
            var sectionID = $(this).attr('data-scrollto');
            var headerHeight = context.header.outerHeight(true);

            $('html, body').animate({
                scrollTop: $('#' + sectionID).offset().top - headerHeight
            }, context.animateTime);
        });
    }

    this.toggleSubMenu = function () {
        this.toggleSubMenuButton.on('click', function (e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).parent().removeClass('open');
                $(this).siblings('.subMenuWrapper').slideUp(200);
            } else {
                $(this).addClass('active');
                $(this).parent().addClass('open');
                $(this).siblings('.subMenuWrapper').slideDown(200);
            }
        });
    }

    context = this;
    this.init();

}

var header;

$(document).ready(function () {
    header = new Header();
});