var card = document.getElementById("route_list");
var from = document.getElementById("from_route");
var to = document.getElementById("to_route");
var count = document.getElementById("route_digit");


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','js/routes-db.json');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();


function renderHTML(data){
    var cardString = "";
    
    for(i = 0; i < 4; i++){
        cardString += "<li class='route_parts' id='route_parts'><div class='row'><div class='col-md-7 col-sm-7 col-7'><div class='row'><div class='from_route' id='from_route'>" + data[i].from +"</div><div class='tire_route'>-</div><div class='to_route' id='to_route'>"+ data[i].to +"</div></div></div><div class='col-md-3 col-sm-3 col-3'><div class='row'><img src='img/white/curcle@3x.png' alt='' class='route_times'><div class='route_digit' id='route_digit'>"+data[i].count+"</div></div></div><div class='col-md-2 col-sm-2 col-2'><div class='row'><img src='img/white/see statics@3x.png' alt='' class='statictics'></div></div></div></li>";
    }
    
    card.insertAdjacentHTML('beforeend',cardString);
}

$("#load_more_button").click(function(){
    console.log("lick");
            var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET','js/routes-db.json');
        ourRequest.onload = function(){
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML2(ourData);
        };
        ourRequest.send();


        function renderHTML2(data){
            var cardString = "";

            for(i = 4; i < data.length; i++){
                cardString += "<li class='route_parts' id='route_parts'><div class='row'><div class='col-md-7 col-sm-7 col-7'><div class='row'><div class='from_route' id='from_route'>" + data[i].from +"</div><div class='tire_route'>-</div><div class='to_route' id='to_route'>"+ data[i].to +"</div></div></div><div class='col-md-3 col-sm-3 col-3'><div class='row'><img src='img/white/curcle@3x.png' alt='' class='route_times'><div class='route_digit' id='route_digit'>"+data[i].count+"</div></div></div><div class='col-md-2 col-sm-2 col-2'><div class='row'><img src='img/white/see statics@3x.png' alt='' class='statictics'></div></div></div></li>";
            }

            card.insertAdjacentHTML('beforeend',cardString);
        }
});
