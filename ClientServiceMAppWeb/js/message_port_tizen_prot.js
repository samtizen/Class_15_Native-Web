MessagePortTizen = (function() {
	
	function MessagePortTizen() {
		
		this.localPortName = null;
		this.remotePortName = null;
		this.remoteAppId = null;
		this.remotePort = null;
		this.localPort = null;
		
	}
	
	MessagePortTizen.prototype = {
			
			init : function(localMessagePortName, callbackView) {
				
				this.localPortName = localMessagePortName;
				
				this.localPort = tizen.messageport.requestLocalMessagePort(this.localPortName);
				
				var localPortWatchId = this.localPort.addMessagePortListener(onsuccessRecieveEvent);
				
				console.log("WebApp - MessagePortTizen: init");
				
				alert("Local Port was created");
				
				function onsuccessRecieveEvent(data, replyPort) 
				{
					console.log("WebApp - MessagePortTizen: recieved");
					console.log(data);
					console.log(replyPort);
					
					callbackView(data);
					   
				}
			},
			initRemotePort : function(remoteMessagePortName, remoteAppicationId) {
				
				this.remotePortName = remoteMessagePortName;
				this.remoteAppId = remoteAppicationId;
				
				this.remotePort = tizen.messageport.requestRemoteMessagePort(this.remoteAppId, this.remotePortName);
				
				console.log("WebApp - MessagePortTizen: initRemotePort");
				
			},
			sendMessage : function(command, message) {
			
				if (this.remotePort != null) {
				
					var messageData = [{
						key: "command", 
						value: command
					},
					{
						key: "maxcounter",
						value: message
					}];
						
					this.remotePort.sendMessage(messageData, this.localPort);
					
					console.log("WebApp - MessagePortTizen: sendMessage");
					
					//alert("Message was sent")
					
				}
			}
				
	};
	
	return MessagePortTizen;
	
})();