$(document).ready(function () {
    //ajax calls to get stats
            $.ajax({url: "https://statsapi.hoard.exchange/api/getUniqueAccountsOverTime", success: function(result){
                var trace1 = {x: [],y: [],type: 'scatter',mode:"lines+markers"};
                trace1.x = result.time;
                trace1.y = result.accounts;
                var data = [trace1];
                var layout = {
                    title:'Unique accounts over time',
                    autosize: false,
                    width: 500,
                    height: 400,
                    margin: {
                        l: 50,
                        r: 50,
                        b: 100,
                        t: 100,
                        pad: 4
                    },
                    paper_bgcolor: '#a8101d',
                    plot_bgcolor: '#a8101d',
                    font:{color:'#FFFFFF'}
                };
                Plotly.newPlot('myGraph1', data,layout,{staticPlot: true});
            },
            error: function(err){
                console.log(err);
            }
            });

            $.ajax({url: "https://statsapi.hoard.exchange/api/getEthOverTime", success: function(result){
                var trace1 = {x: [],y: [],type: 'scatter',mode:"lines+markers"};
                trace1.x = result.time;
                trace1.y = result.accounts;
                var data = [trace1];
                var layout = {
                    title:'Eth over time',
                    autosize: false,
                    width: 500,
                    height: 400,
                    margin: {
                        l: 50,
                        r: 50,
                        b: 100,
                        t: 100,
                        pad: 4
                    },
                    paper_bgcolor: '#a8101d',
                    plot_bgcolor: '#a8101d',
                    font:{color:'#FFFFFF'}
                };
                Plotly.newPlot('myGraph2', data,layout,{staticPlot: true});
            },
            error: function(err){
                console.log(err);
            }
            });
            $.ajax({url: "https://statsapi.hoard.exchange/api/getNumberOfUniqueAccounts", success: function(result){
                $("#div_unqiue_accs").html(result);
            },
            error: function(err){
                console.log(err);
            }
            });
    });