MessagePortView = (function() {
	
	function MessagePortView() {

	}
	
	MessagePortView.prototype = {
			
			addMessage : function(msgObjList) {
				
				var msgObj = {};
				
				if (msgObjList != null) {
					
					var i = 0,
						lenList = msgObjList.length;
					
					for (i; i < lenList; i++) {
						
						switch (msgObjList[i].key) {
						
							case "status":
								msgObj.status = msgObjList[i].value;
								break;
							case "counter":
								msgObj.message = msgObjList[i].value;
								break;
							default:
								break;
						}
						
					}
					
					if (msgObj.status === "finished") {
						
						msgObj.message = "Timer Finished";
						
					}
					
					console.log(msgObj);
					

					$("#lbl-msg").text(msgObj.message);
				
				}
			}

	};
	
	return MessagePortView;
	
})();