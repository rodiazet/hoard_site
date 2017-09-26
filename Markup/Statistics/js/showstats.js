$(document).ready(function () {
    //ajax calls to get stats

            $.ajax({url: "https://statsapi.hoard.exchange/api/getStatsForGraphs", success: function(result){
                var trace1 = {x: [],y: [],type: 'scatter',mode:"lines+markers"};
                trace1.x = result.time;
                trace1.y = result.accounts;
                var data1 = [trace1];
                var layout1 = {
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
                Plotly.newPlot('myGraph1', data1,layout1,{staticPlot: true});



                var trace2 = {x: [],y: [],type: 'scatter',mode:"lines+markers"};
                trace2.x = result.time;
                trace2.y = result.accounts;
                var data2 = [trace2];
                var layout2 = {
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
                Plotly.newPlot('myGraph2', data2,layout2,{staticPlot: true});
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