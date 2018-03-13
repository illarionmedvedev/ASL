var card = document.getElementById("contact_list");
var from = document.getElementById("from_route");
var to = document.getElementById("to_route");
var count = document.getElementById("route_digit");


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','js/contact-db.json');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();


function renderHTML(data){
    var cardString = "";
    
    for(i = 0; i < 4; i++){
        cardString += "<a href='contact-additional.php'><li class='contact_part'><img src='img/bitmap@3x.png' class='contact_avatar' alt=''><div class='contact_title2'>"+ data[i].name +"</div></li></a>";
    }
    
    card.insertAdjacentHTML('beforeend',cardString);
}

$("#load_more_button").click(function(){
    console.log("lick");
            var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET','js/contact-db.json');
        ourRequest.onload = function(){
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML2(ourData);
        };
        ourRequest.send();


        function renderHTML2(data){
            var cardString = "";

            for(i = 4; i < data.length; i++){
                cardString += "<a href='contact-additional.php'><li class='contact_part'><img src='img/bitmap@3x.png' class='contact_avatar' alt=''><div class='contact_title2'>"+ data[i].name +"</div></li></a>";
            }

            card.insertAdjacentHTML('beforeend',cardString);
        }
});
