/*
 * File: message_port_main.js
 * Application: Web Client for Native Service
 * Author: Sergei Papulin
 * 
 * Message Port:
 * https://developer.tizen.org/development/guides/web-application/application-management/application-data-exchange/message-port
 * https://developer.tizen.org/dev-guide/latest/org.tizen.web.apireference/html/device_api/mobile/tizen/messageport.html * 
 * 
 * Icons: 
 * http://www.flaticon.com/
 * 
 */

(function() {
	
	var msgPortMain = {},
		msgPortView,
		msgPortTizen;
	
	msgPortMain.init = function() {
		
		$("#btn-create-port").click(initMessageRemotePort);
		$("#btn-start-timer").click(sendMessage);
		$("#txt-name").keyup(doneInputText);
		
		msgPortView = new MessagePortView()
		msgPortTizen = new MessagePortTizen();
		
		console.log(tizen.application.getCurrentApplication().appInfo.id);
	};
	
	function initMessageRemotePort() {
		
		msgPortTizen.init("WebClientLocalPort", msgPortView.addMessage);
	}
	
	function sendMessage() {
		
		msgPortTizen.initRemotePort("ServiceLocalPort", "org.example.firstservicemnative");
		
		var message = $("#txt-number").val(),
			command = "start";
		
		msgPortTizen.sendMessage(command, message);
		
	}
	
	function doneInputText(e) {
		
		if (e.which === 13) {
			
			$("#txt-name").trigger("blur");
			
		}
		
	}
	
	return msgPortMain;
	
})().init();