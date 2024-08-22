chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['inject.js']
    });
  });
  
  document.querySelector('#open').onclick = () => {
   
      chrome.tabs.create({url: 'https://mumaaenroll.services.wisc.edu/courses-schedule/'});
    
  };
  
  document.querySelector('#download').onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currTab = tabs[0];
        if (currTab) { 
          chrome.scripting.executeScript({
            target: { tabId: currTab.id },
            files: ['inject.js']
          });
        }
      });
    
  
  };