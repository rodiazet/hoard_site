function During() {

    var context;
    this.html = $('html');
    this.body = $('body');
    this.continueButton = $('.continueButton');
    this.questionButton = $('.question');

    this.contributeTerm = $('.contributeTerm');
    this.howContribute = $('.howContribute');

    this.checkBoxinput = $('.input-checkbox');

    this.init = function () {
        this.continueAction();
        this.validateTerm();
        this.toggleFAQ();
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

    this.toggleFAQ = function () {
        this.questionButton.on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).siblings('.anwser').slideUp(200);
                $(this).removeClass('active');
            } else {
                $(this).siblings('.anwser').slideDown(200);
                $(this).addClass('active');
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