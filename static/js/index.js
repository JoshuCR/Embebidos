//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="ENCENDIDO";
	message = new Paho.MQTT.Message("ACTIVAR");
    	message.destinationName = "jicordova.fie@unach.edu.ec/test";
    	client.send(message);
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	//document.getElementById("sensor").innerHTML="APAGADO";
	message = new Paho.MQTT.Message("DESACTIVAR");
    	message.destinationName = "jicordova.fie@unach.edu.ec/test";
    	client.send(message);
}



// Create a client instance
  
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
	
    client.subscribe("jicordova.fie@unach.edu.ec/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "jicordova.fie@unach.edu.ec/test";
    client.send(message);
	
  }

 // function doFail(e){
   // console.log(e);
	
//  }

  // called when the client loses its connection
  //function onConnectionLost(responseObject) {
    //if (responseObject.errorCode !== 0) {
      //console.log("onConnectionLost:"+responseObject.errorMessage);
    //}
  //}

  // called when a message arrives
  /function onMessageArrived(message) {
   // console.log("onMessageArrived:"+message.payloadString);
	//  document.getElementById("sensor").innerHTML=message.payloadString;
  //}
  
