/* footer alway bottom */
function footerAlwaysBottom() {
    var footerHeight = $('.footer').outerHeight(true);
    $('body').css('padding-bottom', footerHeight);
    $('.footer').addClass('footerStick');
}

/* blocks same height */
function equalHeight(container) {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0; $(container).each(function () {
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
}

function childEqualHeight(container, child) {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {
        $el = $(this);
        $($el).find(child).height('auto')
        topPostion = $el.position().top;
        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].find(child).height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.find(child).height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.find(child).height()) ? ($el.find(child).height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].find(child).height(currentTallest);
        }
    });
}

function GetIE11Detection() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    if (!!navigator.userAgent.match(/Trident\/7\./)) {
        setTimeout(function () { $('html').removeClass('mozilla'); }, 100);
        $('html').addClass('ie11');
    }
}

function detectIE() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        $('html').addClass('ie');
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        $('html').addClass('edge');
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

$(function () {
    detectIE();
    GetIE11Detection();
});

$(window).on('load', function () {
    footerAlwaysBottom();
});

$(window).on('resize', function () {
    footerAlwaysBottom();
});

$("#btnCheckBalance").click(function(){
    var address = $("#txtAddress").val();
    $("#div_balance").html("<p>Checking...</p>");
    $.ajax({url: "https://statsapi.hoard.exchange/api/getHRDBalanceOf/?address="+address, success: function(result){
               console.log(result);
               if(result.balanceOf>0 && result.finalized==true)
               {
                $("#div_balance").html("<p>"+result.balanceOf+" HRD</p>");
               }
               else if(result.balanceOf>0 && result.finalized==false){
                $("#div_balance").html("<p>Your HRD balance will be visible after you <a href='instruction.html#finalize'>finalized transaction.</a></p>");
               }
               else{
                $( "#div_balance" ).html("<p>Something went wrong, please make sure you have the right address.</p>"); 
               }
            },
            error: function(err){
                $( "#div_error" ).html("<p>Error</p>");
            }
            });
});

