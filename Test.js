var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
var url = "http://your-web-server.com/your-endpoint";

httpRequest.open("POST", url, true);
httpRequest.setRequestHeader("Content-Type", "text/plain");

httpRequest.onreadystatechange = function () {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      // Request successful
      var response = httpRequest.responseText;
      // Process the response here
      WScript.Echo("Response received: " + response);
    } else {
      // Request failed
      WScript.Echo("Request failed with status: " + httpRequest.status);
    }
  }
};

var data = "Hello World";
httpRequest.send(data);
