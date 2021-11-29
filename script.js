// https://www.youtube.com/watch?v=XQEfWd1lh4Q video, mille järgi tehtud
// Kuna algne kood töötas ainult ühe nupu kohta, siis iga nupu jaoks võtsime
// eraldi muutujad.
// Kahe erineval html-failil oli vaja ka erinevaid js-faile, mistõttu
// on ka kas javascripti faili.

var sisu1 = document.getElementById("sisutennis");
var sisu2 = document.getElementById("sisukorvpall");
var sisu3 = document.getElementById("sisujalgpall");
var sisu4 = document.getElementById("sisuvõrkpall");
var sisu5 = document.getElementById("sisujõusaalid");
var sisu6 = document.getElementById("sisuujumine");
var sisu7 = document.getElementById("sisudiscgolf");
var sisu8 = document.getElementById("sisustaadionid");

var button1 = document.getElementById("rohkemtennis");
var button2 = document.getElementById("rohkemkorvpall");
var button3 = document.getElementById("rohkemjalgpall");
var button4 = document.getElementById("rohkemvõrkpall");
var button5 = document.getElementById("rohkemjõusaalid");
var button6 = document.getElementById("rohkemujumine");
var button7 = document.getElementById("rohkemdiscgolf");
var button8 = document.getElementById("rohkemstaadionid");

button1.onclick = function(){
    if(sisu1.className == "open"){
        sisu1.className = "";
        button1.innerHTML = "Näita Võimalusi";
    } else{
        sisu1.className = "open";
        button1.innerHTML = "Näita Vähem";
    }
};

button2.onclick = function(){
    if(sisu2.className == "open"){
        sisu2.className = "";
        button2.innerHTML = "Näita Võimalusi";
    } else{
        sisu2.className = "open";
        button2.innerHTML = "Näita Vähem";
    }
};

button3.onclick = function(){
    if(sisu3.className == "open"){
        sisu3.className = "";
        button3.innerHTML = "Näita Võimalusi";
    } else{
        sisu3.className = "open";
        button3.innerHTML = "Näita Vähem";
    }
};

button4.onclick = function(){
    if(sisu4.className == "open"){
        sisu4.className = "";
        button4.innerHTML = "Näita Võimalusi";
    } else{
        sisu4.className = "open";
        button4.innerHTML = "Näita Vähem";
    }
};

button5.onclick = function(){
    if(sisu5.className == "open"){
        sisu5.className = "";
        button5.innerHTML = "Näita Võimalusi";
    } else{
        sisu5.className = "open";
        button5.innerHTML = "Näita Vähem";
    }
};

button6.onclick = function(){
    if(sisu6.className == "open"){
        sisu6.className = "";
        button6.innerHTML = "Näita Võimalusi";
    } else{
        sisu6.className = "open";
        button6.innerHTML = "Näita Vähem";
    }
};

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