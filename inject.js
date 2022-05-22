var list = document.getElementsByClassName("term-header")[0].parentElement;
//add a button in the end of the list
var button = document.createElement("button");
button.innerHTML = "get ics";
button.id = "main";
button.onclick = "start()";

var script = document.createElement("script");
script.src = "inject.js";

list.appendChild(script);
list.appendChild(button);

var e = document.getElementsByClassName("tt-dayTitle");

document.getElementById("main").addEventListener("click", start(e));

function start() {
    let alldays = e;
    for (let i = 0; i < alldays.length; i++) {
        alldays[i].style.backgroundColor = "red";
    }
    msgData1 = $('.start-time').text();
msgData2 = $('.end-time').text();
msgData3 = $('.Location').text();

var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:20120315T170000Z\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:me@gmail.com\nORGANIZER;CN=Me:MAILTO::me@gmail.com\nDTSTART:" + msgData1 +"\nDTEND:" + msgData2 +"\nLOCATION:" + msgData3 + "\nSUMMARY:Our Meeting Office\nEND:VEVENT\nEND:VCALENDAR";

$('.button').click(function(){
    window.open( "data:text/calendar;charset=utf8," + escape(icsMSG));
});
}
