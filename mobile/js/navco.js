// JavaScript Document
$(document).ready(function(){

	var deviceiPhone = "iphone";
	var deviceAndroid = "android";
	//var deviceWinMob = "windows ce";
	//var deviceWinPhone = "windows phone";

	var uagent = navigator.userAgent.toLowerCase();
	
	openmapsapp=function(){
		if (uagent.search(deviceiPhone) > -1){
			document.location.href = "maps:ll=40.747608,-73.992452";
		}else{
			//android
			document.location.href = "geo:ll=40.747608,-73.992452";
		}
	}

		
	
	//nav
	$('#homebtn').addClass("offButton");
	$('#clientsbtn').addClass("offButton");
	$('#workbtn').addClass("offButton");
	$('#contactbtn').addClass("onButton");

	
});//END $(document).ready