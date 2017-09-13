function initialCountdown(element) {
    var countdownElement = $(element);
    var countDownIn = countdownElement.attr('data-countDownIn') ? parseInt(countdownElement.attr('data-countDownIn')) : 604800;
    var barBgColor = countdownElement.attr('data-barBgColor') ? countdownElement.attr('data-barBgColor') : '#a1a5ab';
    var barFgColor = countdownElement.attr('data-barFgColor') ? countdownElement.attr('data-barFgColor') : '#ffffff';
    var lineWidth = countdownElement.attr('data-lineWidth') ? parseFloat(countdownElement.attr('data-lineWidth')) : .07;

    var labelDay = countdownElement.attr('data-dayLabel') ? countdownElement.attr('data-dayLabel') : 'Days';
    var labelHour = countdownElement.attr('data-hourLabel') ? countdownElement.attr('data-hourLabel') : 'Hours';
    var labelMinute = countdownElement.attr('data-minuteLabel') ? countdownElement.attr('data-minuteLabel') : 'Minutes';
    var labelSecond = countdownElement.attr('data-secondLabel') ? countdownElement.attr('data-secondLabel') : 'Seconds';

    countdownElement.ClassyCountdown({
        end: $.now() + countDownIn,
        labels: true,
        labelsOptions: {
            lang: {
                days: labelDay,
                hours: labelHour,
                minutes: labelMinute,
                seconds: labelSecond
            }
        },
        style: {
            element: "",
            days: {
                gauge: {
                    thickness: lineWidth,
                    bgColor: barBgColor,
                    fgColor: barFgColor
                }
            },
            hours: {
                gauge: {
                    thickness: lineWidth,
                    bgColor: barBgColor,
                    fgColor: barFgColor
                }
            },
            minutes: {
                gauge: {
                    thickness: lineWidth,
                    bgColor: barBgColor,
                    fgColor: barFgColor
                }
            },
            seconds: {
                gauge: {
                    thickness: lineWidth,
                    bgColor: barBgColor,
                    fgColor: barFgColor
                }
            }

        },
        onEndCallback: function () {
            console.log("Time out!");
        }
    });
}

$(document).ready(function () {
    initialCountdown('#countDown');
});