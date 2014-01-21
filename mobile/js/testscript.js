$(document).ready(function() {
	
	var deviceiPhone = "iphone";
	var deviceAndroid = "android";
	var deviceiPad = "ipad";
	var handheld = "mobile";
	
	var uagent = navigator.userAgent.toLowerCase();
	//var iOS = ( navigator.userAgent.match(/(iPad)/i) ? true : false );
	var iOS = false;
	var androidTablet = false;
   //p = navigator.platform;
	var currentTab = 0;
	
	if (uagent.search(handheld) > -1){
		if(uagent.search(deviceiPhone) > -1){
			alert("iPhone");
		}else if(uagent.search(deviceAndroid) > -1){
			alert("Android handheld");
		}else if(uagent.search(deviceiPad) > -1){
			alert("iPad");
			window.location.href="http://www.flashpointmedica.com";
			iOS = true;
			readDeviceOrientation();
			window.onorientationchange = readDeviceOrientation;
		}else{
			alert("other handheld device");
		}
	}else{
		if(uagent.search(deviceAndroid) > -1){
			alert("Android tablet");
			window.location.href="http://www.flashpointmedica.com";
			androidTablet = true;
			readDeviceOrientation();
			window.onorientationchange = readDeviceOrientation;
		}
	}
	
	function readDeviceOrientation() {
		if (Math.abs(window.orientation) === 90) {
			alert("Hello World");
		} else {
			//alert("Portrait");
			window.location.href="http://www.flashpointmedica.com/ipad/rollover.html";
		}
	}

});//END $(document).ready