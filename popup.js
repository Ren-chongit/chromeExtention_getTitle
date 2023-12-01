document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: getPageTitle
        },
        (results) => {
            document.getElementById('title').textContent = results[0].result;
        });
    });
});
function getPageTitle() {
    return document.title;
}
