$(document).ready( function () {
    var targetEth = 1000000;
    $("#targetEth").html("<p class='barTargetAmount'>"+targetEth+"</p>");
    $.ajax({url: "https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=R6YMPU2S1UASYH3T3DPGUVRX4KHKUG6A5J", success: function(result){
            var totalWei = result.result;
            var totalEth = totalWei/1000000000000000000;
            var totalEth = Math.round(totalEth);
            $("#totalEth").html("<p class='barTotal'>"+totalEth+"</p>");
            var progress = (totalEth/targetEth) * 100;
            var pc = progress+"%";
            $("#barProgressStatus").css({width:pc});
        },
        error: function(err){
            console.log(err);
        }
    });
 });