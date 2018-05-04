var wsUri = "ws://" + document.location.host + document.location.pathname + "publicboard";
var websocket = new WebSocket(wsUri);

websocket.onerror = function(evt) { onError(evt) };
websocket.onopen = function() { onOpen() };
websocket.onmessage = function(evt) { writeToScreen(evt.data) };

function writeToScreen(message) {
    var output = document.getElementById("output");
    output.innerHTML += "<p>" + message + "</p>";
}

function onError(evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function onOpen() {
    writeToScreen("[Connected to " + wsUri + "]");
}

function sendMessage() {
    var msgElement = document.getElementById("message-field");
    var message = msgElement.value;
    msgElement.value = "";
    websocket.send(message);
}