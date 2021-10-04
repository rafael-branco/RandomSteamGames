$(document).ready(function() {
    console.log("Hello World!");
    function getArray(){
        return $.getJSON('/RandomSteamGames/JSON/steamgames.json');
    }
    
    getArray().done(function(json) {
        // now you can use json
        var questions = [];
        $.each(json, function(key, val) {
            questions[key] = { Category: val.Category };
        });
    });
    $.getJSON('/RandomSteamGames/JSON/steamgames.json', function(data) {
        var mydata = JSON.parse(data);
        console.log("Its Working!");

    });
    

});
