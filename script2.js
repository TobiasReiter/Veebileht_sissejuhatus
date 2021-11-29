var sisu7 = document.getElementById("sisudiscgolf");
var sisu8 = document.getElementById("sisustaadionid");
var sisu9 = document.getElementById("sisuvälijõusaalid");

var button7 = document.getElementById("rohkemdiscgolf");
var button8 = document.getElementById("rohkemstaadionid");
var button9 = document.getElementById("rohkemvälijõusaalid");

button7.onclick = function(){
    if(sisu7.className == "open"){
        sisu7.className = "";
        button7.innerHTML = "Näita Võimalusi";
    } else{
        sisu7.className = "open";
        button7.innerHTML = "Näita Vähem";
    }
};

button8.onclick = function(){
    if(sisu8.className == "open"){
        sisu8.className = "";
        button8.innerHTML = "Näita Võimalusi";
    } else{
        sisu8.className = "open";
        button8.innerHTML = "Näita Vähem";
    }
};

button9.onclick = function(){
    if(sisu9.className == "open"){
        sisu9.className = "";
        button9.innerHTML = "Näita Võimalusi";
    } else{
        sisu9.className = "open";
        button9.innerHTML = "Näita Vähem";
    }
};