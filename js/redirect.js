$(document).ready(function() {
	
	var deviceiPhone = "iphone";
	var deviceAndroid = "android";
	var deviceiPad = "ipad";
	var handheld = "mobile";
	
	var uagent = navigator.userAgent.toLowerCase();
	var iOS = false;
	var androidTablet = false;
	var currentTab = 0;
    
	if (uagent.search(handheld) > -1){
		if(uagent.search(deviceiPhone) > -1){
			//alert("iPhone");
			window.location.href="http://www.flashpointmedica.com/mobile";
		}else if(uagent.search(deviceAndroid) > -1){
			//alert("Android handheld");
			window.location.href="http://www.flashpointmedica.com/mobile";
		}else if(uagent.search(deviceiPad) > -1){
			//alert("iPad");
			window.location.href="http://www.flashpointmedica.com/fpm.html";
			iOS = true;
			readDeviceOrientation();
			window.onorientationchange = readDeviceOrientation;
		}else{
			//alert("other handheld device");
			window.location.href="http://www.flashpointmedica.com/mobile";
		}
	}else{
		if(uagent.search(deviceAndroid) > -1){
			//alert("Android tablet");
			window.location.href="fpm.html";
			/*androidTablet = true;
			readDeviceOrientation();
			window.onorientationchange = readDeviceOrientation;*/
		}else{
			//alert("Desktop");
			window.location.href="fpm.html";
		}
	}
	
	
	function readDeviceOrientation() {                 		
		if (Math.abs(window.orientation) === 90) {
			// Landscape
			//alert("landscape 1");
		} else {//
			// Portrait
			window.location.href="http://www.flashpointmedica.com/ipad/rollover.html";
		}
	}


});//END $(document).ready