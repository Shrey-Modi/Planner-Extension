// function start() {
//     var button = document.getElementById("main");
//     var text = document.getElementById("text");

//     button.disabled = true;
//     button.innerHTML = "working"
//     text.innerHTML = "pls wait..."

//     // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     //     chrome.tabs.sendMessage(tabs[0].id, { text: "report_back" },
//     //         function (response) {
//     //             if (response != null) {

//     //                 var alldays = response.querySelectorAll("#tt-dayTitle");
//                     // for (let i = 0; i < alldays.length; i++) {
//                     //     alldays[i].style.backgroundColor = "red";
//                     // }

//     //                 text.innerHTML = "click to start"

//     //             }
//     //             else{
//     //                 //error could not read the main site                
//     //                 text.innerHTML = "error could not read main page"
//     //             }
//     //     });
//     // });

//     chrome.tabs.query(
//         { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
//         function(tabs) {
//           const tab = tabs[0].id;
//           const code ='querySelectorAll("#tt-dayTitle")';
//           chrome.scripting.executeScript({
//               target:{tabId:tab},
//               files: ["inject.js"]
//           },function (result) {
//             // result has the return value from `code`
//             console.log(result);
//             console.log("hi");
//           });
//         }
//       );
//     button.disabled = false;
//     button.innerHTML = "start"

// }

// document.getElementById("main").addEventListener("click", start);