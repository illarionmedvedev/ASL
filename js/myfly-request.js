var card = document.getElementById("myfly_list");


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','js/myfly-db.json');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();


function renderHTML(data){
    var cardString = "";
    
    for(i = 0; i < 4; i++){
        cardString += "<div class='row flight_card-mob'><div class='col-md-12'><div class='row'><div class='col-md-6 col-sm-6 col-6'><div class='row flight_reis'><div class='from_m'>"+ data[i].from +"</div><div class='tire_m'>-</div><div class='to_m'>"+ data[i].to +"</div></div><div class='row card_icons'><a data-toggle='collapse' href='#collapseExample' role='button' aria-expanded='false' aria-controls='collapseExample'><img class='route-mob' src='img/white/route@3x.png' alt=''></a><img class='notification_mob' src='img/white/notification@3x.png' alt=''><img class='statistics_mob' src='img/white/statistics@3x.png' alt=''></div></div><div class='col-md-6 col-sm-6 col-6 status'><div class='row'><img class='status-icon' src='img/white/ontime@3x.png' alt=''><div class='status_title'>On Time</div></div><div class='row reis_number'>G2A456</div><div class='row curier'><div class='row'><div class='col-md-4 col-sm-4 col-4'>FEDEX</div><div class='col-md-4 col-sm-4 col-4'>-</div><div class='col-md-4 col-sm-4 col-4'>ASLF</div></div></div><div class='row weight'>5,0t</div></div></div></div></div>";
    }
    
    card.insertAdjacentHTML('beforeend',cardString);
}

$("#load_more_button").click(function(){
    console.log("lick");
            var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET','js/myfly-db.json');
        ourRequest.onload = function(){
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML2(ourData);
        };
        ourRequest.send();


        function renderHTML2(data){
            var cardString = "";

            for(i = 4; i < data.length; i++){
                cardString += "<div class='row flight_card-mob'><div class='col-md-12'><div class='row'><div class='col-md-6 col-sm-6 col-6'><div class='row flight_reis'><div class='from_m'>"+ data[i].from +"</div><div class='tire_m'>-</div><div class='to_m'>"+ data[i].to +"</div></div><div class='row card_icons'><a data-toggle='collapse' href='#collapseExample' role='button' aria-expanded='false' aria-controls='collapseExample'><img class='route-mob' src='img/white/route@3x.png' alt=''></a><img class='notification_mob' src='img/white/notification@3x.png' alt=''><img class='statistics_mob' src='img/white/statistics@3x.png' alt=''></div></div><div class='col-md-6 col-sm-6 col-6 status'><div class='row'><img class='status-icon' src='img/white/ontime@3x.png' alt=''><div class='status_title'>On Time</div></div><div class='row reis_number'>G2A456</div><div class='row curier'><div class='row'><div class='col-md-4 col-sm-4 col-4'>FEDEX</div><div class='col-md-4 col-sm-4 col-4'>-</div><div class='col-md-4 col-sm-4 col-4'>ASLF</div></div></div><div class='row weight'>5,0t</div></div></div></div></div>";
            }

            card.insertAdjacentHTML('beforeend',cardString);
        }
});
