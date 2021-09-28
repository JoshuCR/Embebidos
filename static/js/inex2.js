
// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  var client;
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jicordova.fie@unach.edu.ec",
    password: "ironflight666",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("jicordova.fie@unach.edu.ec/test3");
    message = new Paho.MQTT.Message("hola desde la web","hola");
    message.destinationName = "jicordova.fie@unach.edu.ec/test3";
    client.send(message);
	
  }
  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor2").innerHTML=message.payloadString;
  }
