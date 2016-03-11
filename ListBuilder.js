/**
 * Created by ctrudo on 3/10/16.
 */
window.onload = function(){
    getTweets();
};

function buildList(response){
    var tweets = response.tweets;
    var listElement = document.getElementById('twitter-list');

    for(var i = 0; i < tweets.length; i++){
        var div = document.createElement("div");
        var node = document.createTextNode(tweets[i].text);
        div.appendChild(node);
        listElement.appendChild(div);
    }
}

function getTweets(){
    var xmlhttp = new XMLHttpRequest();
    var url = "tweets.json";

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var response = JSON.parse(xmlhttp.responseText);
            buildList(response);
        }
    };
    xmlhttp.open("GET", url);
    xmlhttp.send();
}