
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
