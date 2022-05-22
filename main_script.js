function start(){
    var button = document.getElementById("main");
    var text = document.getElementById("text");

    button.disabled = true;
    button.innerHTML = "working"
    text.innerHTML = "pls wait..."
    
    // //get the active tab document and store it in a variable
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     var tab = tabs[0];
    //     var url = tab.url;
    //     var title = tab.title;
    // });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text : "report_back"}, getDOM);
      });

    // let alldays=dom.querySelectorAll("#tt-dayTitle");
    // for(let i=0;i<alldays.length;i++){
    //     alldays[i].style.backgroundColor="red";}
    
    //restore button and text
    button.disabled = false;
    button.innerHTML = "start"
    text.innerHTML = "click to start"

}
function getDOM(response){
    var alldays=response.querySelectorAll("#tt-dayTitle");
    for(let i=0;i<alldays.length;i++){
        alldays[i].style.backgroundColor="red";
    }
    
}
// console.log(document.querySelector('#main'));
// document.querySelector('#main').addEventListener('click', start);
document.getElementById("main").addEventListener("click", start);