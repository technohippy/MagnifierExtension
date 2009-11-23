var port = chrome.extension.connect({"name": "content"});
document.addEventListener('mousemove', function(evt) {
  port.postMessage({from:'content', position:[evt.clientX, evt.clientY]});
}, true);
