function During() {

    var context;
    this.html = $('html');
    this.body = $('body');
    this.continueButton = $('.continueButton');

    this.contributeTerm = $('.contributeTerm');
    this.howContribute = $('.howContribute');

    this.checkBoxinput = $('.input-checkbox');

    this.init = function () {
        this.continueAction();
        this.validateTerm();
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