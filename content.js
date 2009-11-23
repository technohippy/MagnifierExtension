var port = chrome.extension.connect({"name": "content"});
document.addEventListener('mousemove', function(evt) {
  port.postMessage({from:'content', type:'pointer', position:[evt.clientX, evt.clientY]});
}, true);

document.addEventListener('mousewheel', function(evt){
  port.postMessage({from:'content', type:'wheel'});
}, true);
