$(document).ready(function() {
	
	$("#coverSoTheMarqueeCanScroll2").hide();
	
	var deviceiPhone = "iphone";
	var deviceAndroid = "android";
	var deviceiPad = "ipad";
	var handheld = "mobile";
	
	var uagent = navigator.userAgent.toLowerCase();
		
	//var iOS = ( navigator.userAgent.match(/(iPad)/i) ? true : false );
	var iOS = false;
	var androidTablet = false;
	var currentTab = 0;
	var homeVideo = document.getElementById('homeVideo');
	var workVideo = document.getElementById('workVideo');
	workVideo.onended = function(e) {
      // reset Work video
	  $('#pieceVideo').css('left','-28px');
	  $('#workVideo').css('left','6000px');
    }
	homeVideo.onended = function(e) {
      // reset home video
	  $('#homePlayVideo').css('left','78px');
	  $('#homeVideo').css('left','6000px');
    }
    //p = navigator.platform;
	if (uagent.search(handheld) > -1){
		if(uagent.search(deviceiPhone) > -1){
			//alert("iPhone");
			window.location.href="http://www.flashpointmedica.com/staging/mobile";
		}else if(uagent.search(deviceAndroid) > -1){
			//alert("Android handheld");
			window.location.href="http://www.flashpointmedica.com/staging/mobile";
		}else if(uagent.search(deviceiPad) > -1){
			//alert("iPad");
			iOS = true;
			readDeviceOrientation();
			window.onorientationchange = readDeviceOrientation;
		}else{
			alert("other handheld device");
		}
	}else{
		if(uagent.search(deviceAndroid) > -1){
			//alert("Android tablet");
			/*androidTablet = true;
			readDeviceOrientation();
			window.onorientationchange = readDeviceOrientation;*/
		}
	}
	

	/*if( p === 'iPad'){
		iOS = true;
		//alert("ipad");		
		readDeviceOrientation();
		window.onorientationchange = readDeviceOrientation;
	}else{
		//alert("desktop");
	}*/
	
	function readDeviceOrientation() {                 		
		if (Math.abs(window.orientation) === 90) {
			// Landscape
			//alert("landscape 1");
		} else {//
			// Portrait
			window.location.href="http://www.flashpointmedica.com/ipad/rollover.html";
		}
	}


$(window).scroll($.debounce( 250, true, function(){
    //$('#scrollMsg').html('SCROLLING!');
    $('#scroll-icon').fadeOut(300);
	//$("myImage").fadeIn("slow");
    // $('.band').hide();
	$('#homePlayVideo').css('left','78px');
	$('#homeVideo').css('left','6000px');
	$('#homeVideo').get(0).pause();
	$('#workVideo').get(0).pause();
	
} ) );


 
$(window).scroll($.debounce( 250, function(){
	$('#scroll-icon').css('bottom','173px');
    //$('#scrollMsg').html('DONE!');
    $('#scroll-icon').fadeIn(300);
	if(currentTab ==1){
		$('.capClick a').css('color','#fdc641');		
		$('.peopleClick a').css('color','#666');
		$('.clientClick a').css('color','#666');
		$('.workClick a').css('color','#666');
		$('.newsClick a').css('color','#666');
		$('.contactsClick a').css('color','#666');
	}
	if(currentTab ==2){
		$('.capClick a').css('color','#666');		
		$('.peopleClick a').css('color','#ffa836');
		$('.clientClick a').css('color','#666');
		$('.workClick a').css('color','#666');
		$('.newsClick a').css('color','#666');
		$('.contactsClick a').css('color','#666');
	}
	if(currentTab ==3){
		$('.capClick a').css('color','#666');		
		$('.peopleClick a').css('color','#666');
		$('.clientClick a').css('color','#ff8534');
		$('.workClick a').css('color','#666');
		$('.newsClick a').css('color','#666');
		$('.contactsClick a').css('color','#666');
	}
	if(currentTab ==4){
		$('.capClick a').css('color','#666');		
		$('.peopleClick a').css('color','#666');
		$('.clientClick a').css('color','#666');
		$('.workClick a').css('color','#ff8534');
		$('.newsClick a').css('color','#666');
		$('.contactsClick a').css('color','#666');
	}
	if(currentTab ==5){
		$('.capClick a').css('color','#666');		
		$('.peopleClick a').css('color','#666');
		$('.clientClick a').css('color','#666');
		$('.workClick a').css('color','#666');
		$('.newsClick a').css('color','#ff6035');
		$('.contactsClick a').css('color','#666');
	}
	if(currentTab ==6){
		$('.capClick a').css('color','#666');		
		$('.peopleClick a').css('color','#666');
		$('.clientClick a').css('color','#666');
		$('.workClick a').css('color','#666');
		$('.newsClick a').css('color','#666');
		$('.contactsClick a').css('color','#ee3d46');
	}

} ) );

    
    /*----- SOCIAL ICONS ------- */
    $("#social li").hover(function(){
        //on mouse enter
        var icon = $(this).attr('id');
        var iconHover = '' + icon + 'Hover';


        $('.'+icon+'').animate({'opacity':'0'},100);
        $('.'+iconHover+'').animate({'opacity':'1'},100);
    }, 
    function(){
        var icon = $(this).attr('id');
        var iconHover = '' + icon + 'Hover';

        //do nothing on mouse exit
        $('.'+icon+'').animate({"opacity":'1'},100);
        $('.'+iconHover+'').animate({'opacity':'0'},100);
    });


   
    /* --------- Meet Flash Slider ---------- */
    var mainSlider = $('#mycarousel').bxSlider({
        // minSlides: 1,
        // maxSlides: 1,
        // slideWidth: 1343,
        // slideMargin: 0,
        pager:false,
        // auto:true,
        // pause:3750,
		//touchEnabled:true,
        onSlideAfter: function($slideElement, oldIndex, newIndex){
            $('.pager li').removeClass('active');
            $('.pager li:eq('+newIndex+')').addClass('active');
        }
    });

    // $('#marquee').swipable();

    // $(element).bind('swipe.right', fn);
    // $(element).bind('swipe.left', fn);
	
	//$('#marquee').direction(function(event, direction){
        //if(direction === "down"){
			
			
		var index = mainSlider.getCurrentSlide();
         $('.pager li:eq('+index+')').addClass('active');
		if(index == 0){
			//alert("page 1");
			//showPaw1();
			hidePaw1();
			hidePaw2();
			hidePaw3();
			hidePaw4();
		}
		
		currentpaw = "0";
		
		function showPaw1(){
			currentpaw = "1";
			//alert(currentpaw);
			setTimeout(function() {
			document.getElementById("PawImage1").style.visibility='visible';
			},600)
			document.getElementById("BriefcaseHotspot").style.visibility='hidden';
			//$('.PawImage1').fadeIn(500);
		}
		
		function hidePaw1(){
			document.getElementById("PawImage1").style.visibility='hidden';
			//$('.PawImage1').fadeOut(500);
		}
		
		function showPaw2(){
			currentpaw = "2";
			setTimeout(function() {
			document.getElementById("PawImage2").style.visibility='visible';
			document.getElementById("BriefcaseHotspot").style.visibility='visible';
			},600)
			
			//document.getElementById("PawImage2").style.visibility='visible';
			//$('.PawImage2').fadeIn(500);
			//$('.PawImage1').fadeOut(500);
			//$('.PawImage3').fadeOut(500);
			//$('.PawImage4').fadeOut(500);
		}
		
		function hidePaw2(){
			document.getElementById("PawImage2").style.visibility='hidden';
			document.getElementById("BriefcaseHotspot").style.visibility='hidden';
			//$('.PawImage2').fadeOut(500);
			//alert("hide paw 2");
		}
		
		function showPaw3(){
			currentpaw = "3";
			setTimeout(function() {
			document.getElementById("PawImage3").style.visibility='visible';
			},600)
			
			
			//$('.PawImage3').fadeIn(500);
			//$('.PawImage1').fadeOut(500);
			//$('.PawImage2').fadeOut(500);
			//$('.PawImage4').fadeOut(500);
			
		}
		
		function hidePaw3(){
			document.getElementById("PawImage3").style.visibility='hidden';
			//$('.PawImage3').fadeOut(500);
			//alert("hide paw 3");
		}
		
		function showPaw4(){
			currentpaw = "4";
			setTimeout(function() {
			document.getElementById("PawImage4").style.visibility='visible';
			},600)
			
			//$('.PawImage4').fadeIn(500);
			//$('.PawImage1').fadeOut(500);
			//$('.PawImage2').fadeOut(500);
			//$('.PawImage3').fadeOut(500);
		}
		
		function hidePaw4(){
			document.getElementById("PawImage4").style.visibility='hidden';
			//$('.PawImage4').fadeOut(500);
		}
		

    $('#marquee .bx-next').click(function(){
        // $('.pager li').removeClass('active');
         var index = mainSlider.getCurrentSlide();
         $('.pager li:eq('+index+')').addClass('active');
		 if(index == 0){
			//alert("page 1");
			//$('.paw1').show();
			//showPaw1();
			hidePaw1();
			hidePaw2();
			hidePaw3();
			hidePaw4();
		}else if(index == 1){
			//alert("page 2");			
			hidePaw1();
			//showPaw2();
			hidePaw2();
			hidePaw3();
			hidePaw4();
		
			
		}else if(index == 2){
			//alert("page 3");
			hidePaw1();
			hidePaw2();
			//showPaw3();
			hidePaw3();
			hidePaw4();
		}else if(index == 3){
			//alert("page 4");
			hidePaw1();
			hidePaw2();
			hidePaw3();
			//showPaw4();
			hidePaw4();
		}
        // mainSlider.startAuto();
        return false;
    });

    $('#marquee .bx-prev').click(function(){
        //  $('.pager li').removeClass('active');
         var index = mainSlider.getCurrentSlide();
         $('.pager li:eq('+index+')').addClass('active');
        // mainSlider.startAuto();
		if(index == 0){
			//alert("page 1");
			//$('.paw1').show();
			//showPaw1();
			hidePaw1();
			hidePaw2();
			hidePaw3();
			hidePaw4();
		}else if(index == 1){
			//alert("page 2");
			hidePaw1();
			//showPaw2();
			hidePaw2();
			hidePaw3();
			hidePaw4();
		}else if(index == 2){
			//alert("page 3");
			hidePaw1();
			hidePaw2();
			//showPaw3();
			hidePaw3();
			hidePaw4();
		}else if(index == 3){
			//alert("page 4");
			hidePaw1();
			hidePaw2();
			hidePaw3();
			//showPaw4();
			hidePaw4();
		}
        return false;
    });


    $('#marquee .pager1').click(function(){
        mainSlider.goToSlide(0);
        //  $('.pager li').removeClass('active');
        // var index = mainSlider.getCurrentSlide();
        // $('.pager li:eq('+index+')').addClass('active');
        // mainSlider.startAuto();
        return false;
    });
    $('#marquee .pager2').click(function(){
        mainSlider.goToSlide(1);
        //  $('.pager li').removeClass('active');
        // var index = mainSlider.getCurrentSlide();
        // $('.pager li:eq('+index+')').addClass('active');
        // mainSlider.startAuto();
        return false;
    });
    $('#marquee .pager3').click(function(){
        mainSlider.goToSlide(2);
        //  $('.pager li').removeClass('active');
        // var index = mainSlider.getCurrentSlide();
        // $('.pager li:eq('+index+')').addClass('active');
        // mainSlider.startAuto();
        return false;
    });
    $('#marquee .pager4').click(function(){
        mainSlider.goToSlide(3);
        // $('.pager li').removeClass('active');
        // var index = mainSlider.getCurrentSlide();
        // $('.pager li:eq('+index+')').addClass('active');
       // mainSlider.startAuto();

        return false;
    });


    /* --------- Portfolio Slider ---------- */
    // assign the slider to a variable
    var slider = $('#workCarousel').bxSlider({
        pager:false,
		onSlideBefore: function(){
    		$('#workVideo').get(0).pause();
 		}

    });	   
	
	$('#work2 .bx-prev').click(function(){
        
        return false;
    });
    // assign a click event to the external thumbnails
    $('.thumbnails a').click(function(e){
        e.preventDefault();
        var thumbIndex = $('.thumbnails a').index(this);
        slider.goToSlide(thumbIndex);

        return false;
    });


    //thumbnail mouseover action
  $("#thumbnails a").hover(function() { // Mouse over
        $(this)
            .stop().fadeTo(500, 1)
            .siblings().stop().fadeTo(500, 0.2);
    }, function() { // Mouse out
        $(this)
            .stop().fadeTo(500, 1)
            .siblings().stop().fadeTo(500, 1);            
    });

    var numQ=0;
    var speed=300;
    $('.altQuill2').css("opacity","0");
    $('.quillMain2').css("opacity","0");


  $('.altQuill').click(function(){
    
    if(numQ==0) {
        //hide altQuill 1
        $('.altQuill1').animate({"opacity":"0"}, speed);
        //show altQuill 2
        $('.altQuill2').animate({"opacity":"1"}, speed);

        //hide altQuill 1
        $('.quillMain1').animate({"opacity":"0"}, speed);
        //show altQuill 2
        $('.quillMain2').animate({"opacity":"1"}, speed);

        numQ++;
    } else{
        //show altQuill 1
        $('.altQuill1').animate({"opacity":"1"}, speed);
        //hide altQuill 2
        $('.altQuill2').animate({"opacity":"0"}, speed);

        //show altQuill 1
        $('.quillMain1').animate({"opacity":"1"}, speed);
        //hide altQuill 2
        $('.quillMain2').animate({"opacity":"0"}, speed);

        numQ--;
    }
    
  });

    var numC=0;
    $('.altCypherImage2').css("opacity","0");
    $('.quillMain2').css("opacity","0");

  $('.altCypher').click(function(){
    
    if(numC==0) {
        //hide altQuill 1
        $('.altCypherImage1').animate({"opacity":"0"}, speed);
        //show altQuill 2
        $('.altCypherImage2').animate({"opacity":"1"}, speed);

        //hide altQuill 1
        $('.cypherMain1').animate({"opacity":"1"}, speed);
        //show altQuill 2
        $('.cypherMain2').animate({"opacity":"0"}, speed);

        numC++;
    } else{
        //show altQuill 1
        $('.altCypherImage1').animate({"opacity":"1"}, speed);
        //hide altQuill 2
        $('.altCypherImage2').animate({"opacity":"0"}, speed);

        //show altQuill 1
        $('.cypherMain1').animate({"opacity":"0"}, speed);
        //hide altQuill 2
        $('.cypherMain2').animate({"opacity":"1"}, speed);

        numC--;
    }
  });


    // /* ---------- click Logo to reset per accordion ---------- */
    $("#logo").click(function(){    
        $('.navList li a').removeClass('current');
        $(window).scrollTo(0,1100, {axis:'y'});
        return false;
     });
    

    $('.capBandFixedTop').hide();
    $('.peopleBandFixedTop').hide();
	$('.clientBandFixedTop').hide();
    $('.workBandFixedTop').hide();
    $('.newsBandFixedTop').hide();
    $('.contactsBandFixedTop').hide();
	
		
	//******************* max-device-width uses screen width  .......  max-width uses clientWidth *******************
	

	


    /*---- MARQUEE SCROLL LINKS ----- */
    $(".paw1").click(function(){
		if(document.documentElement.clientWidth >= 1025 ){
        	$(window).scrollTo($('.cap1').offset().top-140, 1100, {easing:'swing', axis:'y'});
		}else if(document.documentElement.clientWidth <= 1024 ){
			$(window).scrollTo($('.cap1').offset().top-155, 1100, {easing:'swing', axis:'y'});
		}
        return false;
    });
    $(".paw2").click(function(){
		if(document.documentElement.clientWidth >= 1025 ){
        	$(window).scrollTo($('.cap3').offset().top-140, 1100, {easing:'swing', axis:'y'});
		}else if(document.documentElement.clientWidth <= 1024 ){
			$(window).scrollTo($('.cap3').offset().top-155, 1100, {easing:'swing', axis:'y'});
		}
        return false;
    });
    $(".paw3").click(function(){
		if(document.documentElement.clientWidth >= 1025 ){
        $(window).scrollTo($('.cap4').offset().top-140, 1100, {easing:'swing', axis:'y'});
		}else if(document.documentElement.clientWidth <= 1024 ){
		$(window).scrollTo($('.cap4').offset().top-120, 1100, {easing:'swing', axis:'y'});	
		}
        return false;
    });
    $(".paw4").click(function(){
        // $(window).scrollTo($('.workBand').offset().top - 100, 800, {easing:'swing', axis:'y'});
        return false;
    });

    /* ---------- Capabilities section selection ---------- */
    $(".advert").click(function(){
        $(window).scrollTo($('.cap2').offset().top-140, 800, {axis:'y'});
        return false;
    });
    $(".global").click(function(){
        $(window).scrollTo($('.cap6').offset().top-140, 800, {axis:'y'});
        return false;
    });
    $(".digital").click(function(){
        $(window).scrollTo($('.cap3').offset().top-140, 800, {axis:'y'});
        return false;
    });
    $(".strat").click(function(){
        $(window).scrollTo($('.cap4').offset().top-140, 800, {axis:'y'});
        return false;
    });
    $(".promo").click(function(){
        $(window).scrollTo($('.cap5').offset().top-140, 800, {axis:'y'});
        return false;
    });

    $(".peopleBioPic").css('opacity','0');
    $("#charlenePicBig").css('opacity','1');
    var peopleFadeSpeed = 170;

    /* ---------- People Section hover ---------- */
    $(".charlenePic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Charlene Prounis");
        $(".peopleBioTitle").html("CEO & Managing Partner");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#charlenePicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        //change height of orange box
        
        $(".bio").html('<span class="italic">Daydream believer</span><br/><br/>When she was growing up, Charlene&#39;s dream was to help others and become a successful businesswoman. So it&#39;s inevitable that she worked as a head nurse of an MICU before carrying the bag as a pharmaceutical sales rep and eventually landing a position at an advertising agency.<br/><br/>Now at the helm of her second start-up agency, Charlene&#39;s never content to settle for &#34;good enough,&#34; constantly challenging herself and her team to come up with innovative ways to ensure her clients&#39; success.<br/><br/>Charlene is also focused on empowering future generations to make their own dreams come true. She has twice been president of the Healthcare Businesswomen&#39;s Association and is the leader of her daughter&#39;s Girl Scout troop.<br/><br/>With Charlene&#39;s adventurous spirit and propensity for innovation, the question on everyone&#39;s mind is, &#34;What will she dream up next?&#34;');

        resetPeople();

        src='img/people/charlenePicHover.png';
        $(this).attr('src', src);
    });
    $(".helenPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Helen Appelbaum");
        $(".peopleBioTitle").html("President & Partner");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#helenPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">More than meets the eye</span><br/><br/>You don&#39;t have to know Helen long to see that she’s the kind of superwoman who can rethink a brand strategy, pull together a pitch deck, and avert an imminent financial disaster—all before lunch. But there’s more to Helen than meets the eye.<br/><br/>Get to know her better, and you&#39;ll find that she worked for a generic wholesaler in high school before becoming a pharmacist. But for the past 20 years, healthcare clients have benefited from Helen&#39;s proactive, strategic thinking.<br/><br/>If Helen has a superpower, it&#39;s her ability to anticipate clients&#39; needs, develop and implement business strategies, and build solid relationships. She’s been a trusted resource for companies such as Roche Laboratories, Forest Pharmaceuticals, UCB Pharma, and Indevus Pharmaceuticals. She also helped drive growth of Accel Healthcare Communications into the ranks of the top 20 agencies before it became Corbett Accel in 2005. So if you really want to get to know Helen, look below the surface. After all, every superwoman has a secret identity.');

        resetPeople();

        src='img/people/helenPicHover.png';
        $(this).attr('src', src);

    });
    $(".meaghanPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Meaghan Golden");
        $(".peopleBioTitle").html("SVP, Associate Creative Director");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#meaghanPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">A jewel of a designer</span><br/><br/>An entrepreneurial spirit, Meaghan left her roles as Principal at MGolden Design to join the world of pharma. And FLashpoint&#39;s the happier for it, where she brings us specialized skills in product branding, packaging, and corporate identity.<br/><br/>Meaghan&#39;s energy and enthusiasm spur team effort and spark creativity. Original thinking, striking conceptual work, and the ability to translate the complex into concrete design are all hallmarks of her work.<br/><br/>Meaghan&#39;s created CD covers for the music industry, taken travel photography, and loves making original jewelry designs, which she&#39;s often found wearing at the office and client meetings.');

        resetPeople();

        src='img/people/meaghanPicHover.png';
        $(this).attr('src', src);
        
    });
    $(".kerryPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Kerry Baker");
        $(".peopleBioTitle").html("SVP, Associate Creative Director, Copy");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#kerryPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">Game on</span><br/><br/>Kerry&#39;s professional skills have been shaped as much by her fondness for games as by her decade of industry experience.<br/><br/>Dubbed &#34;the puzzle queen&#34; by her family from an early age, Kerry has always been driven to make sure all the pieces fit together perfectly. That&#39;s probably what compels her to craft communications that seamlessly mesh science with strategy.<br/><br/>She relishes finding the perfect word for a new campaign as much as for the Sunday crossword. She takes on novel therapeutic categories as enthusiastically as she enters obscure competitions (petanque tournament, anyone?). And she wrestles complex data with the same persistence with which she tackles Rubik&#39;s cube.<br/><br/>But just because she views her professional world with a sporting eye doesn&#39;t mean she takes it lightly. After all, to Kerry, both work and play are serious business.');

        resetPeople();

        src='img/people/kerryPicHover.png';
        $(this).attr('src', src);
        
    });
	$(".shiraPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Shira Lawlor");
        $(".peopleBioTitle").html("SVP, Director of Business Strategy");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#shiraPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">Hitting the high notes</span><br/><br/>With a well-rounded background in advertising, medical education, and a cappella singing, Shira offers a pitch perfect approach to pharmaceutical marketing strategy.<br/><br/>She brings insight from a wide range of companies and therapeutic categories to each new challenge, ensuring that our work stays strategically on target and produces creative, impactful solutions.  She’s received a chorus of client accolades as a smart, analytically driven partner with a record of driving business growth through strategy and marketing.  Shira’s passion, other than karaoke, is working on challenging high-science brands in immunology and oncology.');

        resetPeople();

        src='img/people/shiraPicHover.png';
        $(this).attr('src', src);
        
    });
	$(".brankaPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Branka Stancevic");
        $(".peopleBioTitle").html("VP, Medical Director");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#brankaPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">A towering intellect</span><br/><br/>Branka’s as tall as she is smart.  After obtaining her doctorate in biomedical sciences at Cornell University, she left the bench to pursue a career that could combine a passion for science with her marketing edge.  One of Dr. Stancevic’s primary responsibilities at Flashpoint Medica is scientific oversight to ensure all content development and tactical recommendations are aligned with strategic brand objectives.  Branka’s reached new heights in developing strategy and promotional materials for brands across a wide range of therapeutic areas.   She’s published in several top-tier journals and has presented her work at international scientific meetings. After joining the world of advertising, Branka was the recipient of the Healthcare Businesswoman Association 2013 Rising Star Award.');

        resetPeople();

        src='img/people/brankaPicHover.png';
        $(this).attr('src', src);
        
    });
	$(".chrisPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Chris Weber");
        $(".peopleBioTitle").html("SVP, Strategic Planning");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#chrisPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">Raising a glass to successful strategies</span><br/><br/>When it comes to crisp, clear thinking, Chris is your man. He’s got a great nose for strategy, not to mention all the bottles of wine cellared in his basement. And with more than 20 years of healthcare agency experience, including that of creative director, Chris has a proven ability to solve business problems by combining effective strategies with innovative tactics. In his long career, Chris has worked extensively in a wide range of therapeutic categories, including diabetes, neurology, respiratory, allergy,  rheumatoid arthritis, vaccines, and gastroenterology.  His broad experience will help you develop unique strategies that drive brand success or find out which wines to pair with a hamburger.');

        resetPeople();

        src='img/people/chrisPicHover.png';
        $(this).attr('src', src);
        
    });
	$(".robinPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Robin Roberts");
        $(".peopleBioTitle").html("SVP, Management Supervisor");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#robinPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">A competitive spirit</span><br/><br/>Robin demonstrates entrepreneurial agency account leadership and brings a unique strategic, global perspective to her role here at Flashpoint.  She’s always striving to push brands faster and higher.  Which is no surprise given that she’s also always training for the next triathlon. Robin’s motivational, energetic style helps us build and retain high-performance teams, and makes her a valued partner with clients across multiple departments, including executive management, corporate communications, marketing, regulatory, medical, and sales.  Her core strengths include market analysis and strategic insight throughout brand lifecycles, identification and integration of strategic alliances for clients, and immersion in digital and social media.  And with her stamina, you can be assured your brand will be in good hands for the long run.');

        resetPeople();

        src='img/people/robinPicHover.png';
        $(this).attr('src', src);
        
    });
    $(".steveFPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Steve Frederick");
        $(".peopleBioTitle").html("EVP, Creative Director");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#steveFPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">Our home-grown talent</span><br/><br/>Steve&#39;s ability to cultivate great creative is unsurprising, as he approaches the tending of his craft with the same dedication and passion as his weekend horticultural pursuits.<br/><br/>When he&#39;s not in the country training his border collie, Steve nurtures talented creatives and has done so for 10 years, for J. Walter Thompson and Ogilvy, and now, happily for us, at Flashpoint. And while Steve is an avid and knowedgeable collector of vintage advertising, he continues to produce fresh and unique work. In fact, his green thumbprints have been on a wide range of global launches, and his fertile imagination has won accolades from creative peers and market share for grateful clients.');

        resetPeople();

        src='img/people/SteveFPicHover.png';
        $(this).attr('src', src);
        
    });
    $(".steveWPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Steve Witt");
        $(".peopleBioTitle").html("SVP, Creative Director");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#steveWPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">An agile thinker</span><br/><br/>That Steve writes graceful copy is only natural, given he was a modern dancer who choreographed his own work and performed with several companies across the United States.<br/><br/>After an injured knee and pocketbook drove him out of the dance world over 20 years ago, he discovered medical advertising, where his muscular creative contributions for a wide range of therapeutic categories have received numerous global awards.');

        resetPeople();

        src='img/people/SteveWPicHover.png';
        $(this).attr('src', src); 
        
    });
    $(".kevinPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Kevin Gotimer");
        $(".peopleBioTitle").html("SVP, Group Account Supervisor");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#kevinPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">The magic man</span><br/><br/>We&#39;ve noticed that funny things happen when Kevin&#39;s around&#8212;tuna jump straight into his boat when he&#39;s fishing offshore, and golf balls that appear to be slicing miraculously find their way onto the putting green. His effects on the world around him even extend to his professional life&#8212;every product manager he&#39;s come into contact with has been promoted, and every brand he&#39;s touched has grown.<br/><br/>Some have suggested that it&#39;s a coincidence. Others say it&#39;s just the natural result of his charm, intelligence, and can-do attitude. But we think that something bigger is going on. And whatever it is, it appears to be genetic. After all, Kevin&#39;s baby daughter is already working her own magic. Since she was born, her dad&#39;s been smiling all day&#8212;even through regulatory meetings.');

        resetPeople();

        src='img/people/kevinPicHover.png';
        $(this).attr('src', src);
        
    });
    $(".nicolePic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Nicole Johnson");
        $(".peopleBioTitle").html("SVP, Director of Digital Strategy");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#nicolePicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">Dreams in 0&#39;s and 1&#39;s</span><br/><br/>Nicole never thought that her days working on databases in the United States Navy would be the impetus for her love of digital&#8212;but that&#39;s when the stars above her on the big wide ocean began to turn into 0&#39;s and 1&#39;s.<br/><br/>Nicole continues to dream and brings her passion for digital to Flashpoint Medica. She is the Director of Digital Strategy and is responsible for directing new digital business initiatives and creating integrated marketing strategies that leverage digital to its full potential. She brings more than 15 years of healthcare and digital experience to the agency.<br/><br/>For fun, Nicole loves to spend time with family and friends, travel, sip good wine, and curl up with a great book&#8212;on an eReader of course!');

        resetPeople();

        src='img/people/nicolePicHover.png';
        $(this).attr('src', src);
        
    });
    $(".susanPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Susan Burns");
        $(".peopleBioTitle").html("SVP, Group Account Supervisor");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        $("#susanPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">Shockingly talented</span><br/><br/>She&#39;s handy with a defibrillator and possesses an EMT license, so if your brand needs a boost, Susan&#39;s on call. She combines smart strategic thinking with a  superb grounding in high science (having received a degree in Molecular Biology and researched virus-to-host protein interactions). Susan has worked on a number of brands, both US and global, in specialty markets as diverse as oncology, neurology, nephrology, and women&#39;s health.<br/><br/>Susan spends her vacations seeking out snowy mountains to carve through on skis. She&#39;s also a trendy New York baker, perfecting cupcakes that she&#39;ll someday share with her colleagues at Flashpoint.');

        resetPeople();

        src='img/people/susanPicHover.png';
        $(this).attr('src', src);
    });
    $(".flashDogPic").click(function(){
        //on mouse enter
        $(".peopleBioName").html("Flash");
        $(".peopleBioTitle").html("Canine Executive Officer");
        $(".peopleBioPic").animate({'opacity':'0'}, peopleFadeSpeed);
        //$("#helenPicBig").animate({'opacity':'1'}, peopleFadeSpeed);
        $(".bio").html('<span class="italic">Canis lupus familiaris</span><br/><br/>Flash brings a wealth of experience to Flashpoint Medica. Over just 4 years (28 dog years), he&#39;s held positions in herding, hunting, guarding, and in the nonprofit sector as a service dog.  When he&#39;s not rescuing children who have fallen down a well, he&#39;s engaged in building our veterinary business.');

        resetPeople();

        //src='img/people/helenPicHover.png';
        //$(this).attr('src', src);

    });


//some serious hover action

/* ---------- People Section hover ---------- */
    $(".charlenePic").hover(function(){
        //on mouse enter
        src='img/people/charlenePicHover.png';
        $(this).attr('src', src);
    }, 
    function(){
        //do nothing on mouse exit

        if($(".peopleBioName").html() != "Charlene Prounis"){
            src='img/people/charlenePic.png';
            $(this).attr('src', src);
        }
    });

    $(".helenPic").hover(function(){
        //on mouse enter
        src='img/people/helenPicHover.png';
        $(this).attr('src', src);
    }, 
    function(){
        //do nothing on mouse exit
        if($(".peopleBioName").html() != "Helen Appelbaum"){
            src='img/people/helenPic.png';
            $(this).attr('src', src);
        }
    });
    
    $(".meaghanPic").hover(function(){
        //on mouse enter
        src='img/people/meaghanPicHover.png';
        $(this).attr('src', src);
    },
    function(){
        //do nothing on mouse exit
        if($(".peopleBioName").html() != "Meaghan Golden"){
            src='img/people/meaghanPic.png';
            $(this).attr('src', src);
        }
    });
    
    $(".kerryPic").hover(function(){
        //on mouse enter
        src='img/people/kerryPicHover.png';
        $(this).attr('src', src);
    }, 
    function(){
        //do nothing on mouse exit
        if($(".peopleBioName").html() != "Kerry Baker"){
            src='img/people/kerryPic.png';
            $(this).attr('src', src);
        }
    });
	
	$(".shiraPic").hover(function(){
        //on mouse enter
        src='img/people/shiraPicHover.png';
        $(this).attr('src', src);
    }, 
    function(){
        //do nothing on mouse exit
        if($(".peopleBioName").html() != "Shira Lawlor"){
            src='img/people/shiraPic.png';
            $(this).attr('src', src);
        }
    });
	
	$(".brankaPic").hover(function(){
        //on mouse enter
        src='img/people/brankaPicHover.png';
        $(this).attr('src', src);
    }, 
    function(){
        //do nothing on mouse exit
        if($(".peopleBioName").html() != "Branka Stancevic"){
            src='img/people/brankaPic.png';
            $(this).attr('src', src);
        }
    });
	
	$(".chrisPic").hover(function(){
        //on mouse enter
        src='img/people/chrisPicHover.png';
        $(this).attr('src', src);
    }, 
    function(){
        //do nothing on mouse exit
        if($(".peopleBioName").html() != "Chris Weber"){
            src='img/people/chrisPic.png';
            $(this).attr('src', src);
        }
    });
	
	$(".robinPic").hover(function(){
        //on mouse enter
        src='img/people/robinPicHover.png';
        $(this).attr('src', src);
    }, 
    function(){
        //do nothing on mouse exit
        if($(".peopleBioName").html() != "Robin Roberts"){
            src='img/people/robinPic.png';
            $(this).attr('src', src);
        }
    });
    
    $(".steveFPic").hover(function(){
        //on mouse enter
        src='img/people/SteveFPicHover.png';
        $(this).attr('src', src);
    }, 
    function(){
        //do nothing on mouse exit
        if($(".peopleBioName").html() != "Steve Frederick"){
            src='img/people/SteveFPic.png';
            $(this).attr('src', src);
        }
    });
    
    $(".steveWPic").hover(function(){
        //on mouse enter
        src='img/people/SteveWPicHover.png';
        $(this).attr('src', src); 
    }, 
    function(){
        //do nothing on mouse exit
        if($(".peopleBioName").html() != "Steve Witt"){
            src='img/people/SteveWPic.png';
            $(this).attr('src', src);
        }
    });
    
    $(".kevinPic").hover(function(){
        //on mouse enter
        src='img/people/kevinPicHover.png';
        $(this).attr('src', src);
    }, 
    function(){
        //do nothing on mouse exit
        if($(".peopleBioName").html() != "Kevin Gotimer"){
            src='img/people/kevinPic.png';
            $(this).attr('src', src);
        }
    });
    
    $(".nicolePic").hover(function(){
        //on mouse enter
        src='img/people/nicolePicHover.png';
        $(this).attr('src', src);
    }, 
    function(){
        //do nothing on mouse exit
        if($(".peopleBioName").html() != "Nicole Johnson"){
            src='img/people/nicolePic.png';
            $(this).attr('src', src);
        }
    });
    
    $(".susanPic").hover(function(){
        //on mouse enter
        src='img/people/susanPicHover.png';
        $(this).attr('src', src);
    }, 
    function(){
        //do nothing on mouse exit

        if($(".peopleBioName").html() != "Susan Burns"){
            src='img/people/susanPic.png';
            $(this).attr('src', src);
        }
    });


    $(".rightArrowWork, .flashWork").click(function(){
		//alert("here");
        //$(window).scrollTo($('.work2').offset().top-100-40, 800);
		if(document.documentElement.clientWidth <= 1024 ){
		$(window).scrollTo(6743, 1100, {easing:'swing', axis:'y'});
		}else if(document.documentElement.clientWidth >= 1025 ){
		$(window).scrollTo(6500, 1100, {easing:'swing', axis:'y'});	
		}
        //slider.goToSlide(0);
        return false;
    });

    /* ---------- Clients section hover ---------- */
    $(".genentech").hover(function(){
        //on mouse enter
        
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/genentech.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">Tarceva</span><br/><span class="small">NSCLC, Agency of Record<br/>Pancreatic Cancer, Agency of Record</span></h4><br/><h4 class="text2"><span class="orange2">Actemra</span><br/><span class="small">RA, Agency of Record for promotional education</span></h4>');
    },
    function(){
        //do nothing on mouse exit
    });
    $(".lifebank").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/lifebank.png" alt="bigLogo" /><h4 class="text2"><span class="orange2"></span><br/><span class="small">Social Media Assignments</span></h4>');
    },
    function(){
        //do nothing
    });
    /*$(".novartis").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/NovartisBigLogo.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">Afinitor</span><br/><span class="small">Member of the "A Team" supporting Afinitor</span></h4>');
    },
    function(){
        //do nothing
    });
    $(".geistlich").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/geistlich.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">Bio-Oss and Bio-Gide</span><br/><span class="small">Dental bone regeneration biomaterials, corporate rebranding project</span></h4>');
    },
    function(){
        //do nothing
    });
	$(".takeda").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/takedaBig.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">Fasiglifam</span><br/><span class="small">Diabetes, Global Agency of Record</span></h4>');
    },
    function(){
        //do nothing
    });*/
	$(".novartis").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/NovartisBigLogo.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">Tasigna</span><br/><span class="small">CML, Digital Agency of Record, HCP</span></h4>');
    },
    function(){
        //do nothing
    });
    $(".crescendo").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/crescendo.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">Vectra DA</span><br/><span class="small">Biomarker diagnostics, Agency of Record</span></h4>');
    },
    function(){
        //do nothing
    });
    $(".angiotech").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/AngiotechBigLogo.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">Quill</span><br/><span class="small">Tissue-closure device, Agency of Record</span></h4>');
    },
    function(){
        //do nothing
    });
    $(".acorda").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/acordaBig.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">Ampyra</span><br/><span class="small">Walking mobility associated with multiple sclerosis Agency of Record, HCP</span></h4>');
    },
    function(){
        //do nothing
    });
    $(".gilead").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/gilead.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">HIV Franchise</span><br/><span class="small">Medical Marketing Project</span></h4>');
    },
    function(){
        //do nothing
    });
    $(".pharmaxis").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/pharmaxisBig.jpg" alt="bigLogo" /><h4 class="text2"><span class="orange2">Bronchitol</span><br/><span class="small">Airway clearance therapy for people with cystic fibrosis</span></h4>');
    },
    function(){
        //do nothing
    });
    $(".prostrakan").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/prostrakanBig.jpg" alt="bigLogo" /><h4 class="text2"><span class="orange2">Sancuso</span><br/><span class="small">Patch for the prevention of chemotherapy-induced nausea and vomiting</span></h4>');
    },
    function(){
        //do nothing
    });
    $(".supernus").hover(function(){
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/SupernusBig.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">Oxtellar XR</span><br/><span class="small">Adjunctive therapy of partial seizures in adults and in children</span></h4>');
    },
    function(){
        //do nothing
    });
	$(".entrotech").hover(function(){
		//$(".bigClient").html('<img class="bigLogo" src="img/work/clients/crescendo.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">Vectra DA</span><br/><span class="small">Biomarker diagnostics, Agency of Record</span></h4>');
        $(".bigClient").html('<img class="bigLogo" src="img/work/clients/entrotechBig.png" alt="bigLogo" /><h4 class="text2"><span class="orange2">Entrotech life sciences</span><br/><span class="small">Antimicrobial Franchise, Agency of Record</span></h4>');
    },
    function(){
        //do nothing
    });

	
    /* ------- NEWS SECTION --------  */
    $(".shortNews").hide();//edited

    // $(".archiveButton, .archiveText").click(function(){

    //     if($(".fullNews").is(":visible")){
    //         $(".fullNews").hide();
    //         $(".shortNews").show();

    //         $(".archiveText").html('Show archived articles');

    //         $(window).scrollTo($('.newsBand').offset().top - 100, 300, {easing:'swing', axis:'y'});
    //         $(".newsBandPush").hide();
    //         $('.contactsBand').css('margin-top','101px');

    //         $(".contactsMarker2").waypoint(function(event, direction){
    //             if(direction === "down"){
    //                 //down
    //                 $(".contactsBandFixedTop").show();
    //             }else{
    //                 //show
    //                 $(".contactsBandFixedTop").hide();
    //             }
    //         },{
    //             offset:260
    //         });

    //         $(".contactsMarker").waypoint(function(event, direction){
    //             if(direction === "down"){
    //                 //down
    //                 $(".newsBandPush").show();
    //                 $(".contactsBand").css('margin-top','0px');
    //                 $(".newsBandFixedTop").hide();
    //             }else{
    //                 //up
    //                 $(".newsBandFixedTop").show();
    //                 $(".newsBandPush").hide();
    //                 $(".contactsBand").css('margin-top','101px');
    //             }
    //         }, {
    //             offset:247
    //         });
            

    //     }else{
    //         $(".fullNews").show();
    //         $(".shortNews").hide();
                        
    //         $(".archiveText").html('Hide archived articles');

    //         $(".contactsMarker2").waypoint(function(event, direction){
    //             if(direction === "down"){
    //                 //down
    //                 $(".contactsBandFixedTop").show();
    //             }else{
    //                 //show
    //                 $(".contactsBandFixedTop").hide();
    //             }
    //         },{
    //             offset:260
    //         });

    //         $(".contactsMarker").waypoint(function(event, direction){
    //             if(direction === "down"){
    //                 //down
    //                 $(".newsBandPush").show();
    //                 $(".contactsBand").css('margin-top','0px');
    //                 $(".newsBandFixedTop").hide();
    //             }else{
    //                 //up
    //                 $(".newsBandFixedTop").show();
    //                 $(".newsBandPush").hide();
    //                 $(".contactsBand").css('margin-top','101px');
    //             }
    //         }, {
    //             offset:247
    //         });
    //     }

    //     setBars();
    //     $.waypoints('refresh');

    //     return false;
    // });



    /* Waypoints */

    $.waypoints.settings.scrollThrottle = 90;

    $(".capBandPush").hide();
    $(".peopleBandPush").hide();
	$(".clientBandPush").hide();
    $(".workBandPush").hide();
    $(".newsBandPush").hide();
    $(".contactsBandPush").hide();
	
	// ---------------   may not need to adjust offset in capabilities since this is first section  -------------
	
	$('.capClick').click(function(){
		
		if(document.documentElement.clientWidth >= 1025 ){
			$(window).scrollTo($('.capBand').offset().top - 97, 1100, {easing:'swing', axis:'y'});
		}else if(document.documentElement.clientWidth <= 1024 ){
			currentTab =1;		
			$(window).scrollTo(600, 1100, {easing:'swing', axis:'y'});	// 4630
		}
		
        	return false;
    });
	// ------------------------------------------------------------------------------------
		
   $('.peopleClick').click(function(){
	   //alert($(window).offset().top);
		if(document.documentElement.clientWidth >= 1025 ){
			$(window).scrollTo($('.peopleBand').offset().top - 97, 1100, {easing:'swing', axis:'y'}); //top - 97
		}else if(document.documentElement.clientWidth <= 1024 ){
			currentTab =2;		
			$(window).scrollTo(4365, 1100, {easing:'swing', axis:'y'});	// 4630    4585
		}
         return false;
	});
	
	
	 $('.clientClick').click(function(){
	
		 if (document.documentElement.clientWidth >= 1025 ){
			 $(window).scrollTo($('.clientBand').offset().top - 97, 1100, {easing:'swing', axis:'y'}); //97
		 }else if(document.documentElement.clientWidth <= 1024 ){
			 	currentTab =3;          					
				$(window).scrollTo(5230, 1100, {easing:'swing', axis:'y'});	//5495
		 }
         return false;
    });
	
    $('.workClick').click(function(){
		 if(document.documentElement.clientWidth >= 1025 ){
        	$(window).scrollTo($('.workBand').offset().top - 97, 1100, {easing:'swing', axis:'y'});
		 }else if(document.documentElement.clientWidth <= 1024 ){
			currentTab =4;            
			$(window).scrollTo(5905, 1100, {easing:'swing', axis:'y'});  //6168
		 }
        return false;
    });
	
    $('.awardsClick').click(function(){
		if(document.documentElement.clientWidth >= 1025 ){
        $(window).scrollTo($('.work1').offset().top - 158, 1100, {easing:'swing', axis:'y'});
		}else if(document.documentElement.clientWidth <= 1024 ){
			$(window).scrollTo($('.work1').offset().top - 170, 1100, {easing:'swing', axis:'y'});
		}
        //startBriefcaseTimer();
        return false;
    });
	
    $('.newsClick').click(function(){		
		if(document.documentElement.clientWidth >= 1025 ){			
        	$(window).scrollTo($('.newsBand').offset().top - 97, 1100, {easing:'swing', axis:'y'});
		}else if(document.documentElement.clientWidth <= 1024 ){
			currentTab =5;
			$(window).scrollTo(7244, 1100, {easing:'swing', axis:'y'});	 //7507
		}
        return false;
    });
	
    $('.contactsClick').click(function(){
		if(document.documentElement.clientWidth >= 1025 ){
        	$(window).scrollTo($('.contactsBand').offset().top - 97, 1100, {easing:'swing', axis:'y'});
		}else if(document.documentElement.clientWidth <= 1024 ){
			currentTab =6;           
			$(window).scrollTo(8380, 1100, {easing:'swing', axis:'y'});  //8303
		}
        return false;
    });
	
	//************** CAP SECTION ***********************
	if(document.documentElement.clientWidth >= 1025 ){
    $(".capBand").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".capBandFixed").hide();
            $(".pager").hide();
            $('.capClick a').addClass('current');
            $('#scroll-icon').css('bottom','173px');
        }else{
            //show
            $(".capBandFixed").show();
            $(".pager").show();
            $('.navList li a').removeClass('current');
            $('#scroll-icon').css('bottom','211px');
        }
    },{
		//offset:0
        offset:function() {
            return $.waypoints('viewportHeight') - $(this).outerHeight() - 185;
            }
    });


    //same as above, allows another waypoint to be added
    $(".capabilities").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".capBandFixedTop").show();
        }else{
            $(".capBandFixedTop").hide();
        }
    },{
        offset:155
    });
	}
	
	// ************************************ CAP IPAD *******************
	if(document.documentElement.clientWidth <= 1024 ){
		$(".capBand").waypoint(function(event, direction){
			
        if(direction === "down"){
            //down
            $('.capClick a').addClass('current');
			$('#mytest').val('capB-if');
            
        }else{
            //show
            $('.navList li a').removeClass('current');
			$('#mytest').val('capB-else');

        }
    },{
        offset:function() {
            //return $.waypoints('viewportHeight') - $(this).outerHeight() - 185;
            }
    });


    //same as above, allows another waypoint to be added
    $(".capabilities").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            
        }else{
            
        }
    },{
        offset:155
    });
	}
	
	// ************************************ PEOPLE DESKTOP *******************	
	
	if(document.documentElement.clientWidth >= 1025 ){
	$(".peopleBand").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".peopleBandFixed").hide();
            $('#scroll-icon').css('bottom','173px');
        }else{
            //show
            $(".peopleBandFixed").show();
            $('#scroll-icon').css('bottom','211px');
        }
    },{
		//offset:0
        offset:function() {
            return $.waypoints('viewportHeight') - $(this).outerHeight() - 185; //185 + 36
            }
    });

    //same as above, allows another waypoint to be added
    $(".peopleMarker2").waypoint(function(event, direction){
		
        if(direction === "down"){
            //down
			 //$(".capBandFixedTop").hide();
			 
			 
            $('.peopleBandFixedTop').show();
            $('.navList li a').removeClass('current');
            $('.peopleClick a').addClass('current');
        }else{
            //up
            $('.peopleBandFixedTop').hide();
            $('.navList li a').removeClass('current');
            $('.capClick a').addClass('current');
        }
    },{
        offset:165 //212
    });
	
    /*//same as above, allows another waypoint to be added
    $(".peopleMarker").waypoint(function(event, direction){
        
        if(direction === "down"){
            //down
            $(".capBandPush").show();
            $(".peopleBand").css('margin-top','0px');
            $(".capBandFixedTop").hide();
        }else{
            //up
            $(".capBandPush").hide();
            $(".peopleBand").css('margin-top','101px');
            $(".capBandFixedTop").show();
        }
    },{
        offset:200
    });*/
	}
	
	// ************************************ PEOPLE IPAD *******************
	if(document.documentElement.clientWidth <= 1024 ){
		
	$(".peopleBand").waypoint(function(event, direction){
		
        if(direction === "down"){
            //down
			$('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#ffa836');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');			
			$('.navList li a').removeClass('current');
            $('.peopleClick a').addClass('current');
			currentTab =2;
        }else{
            //show
			$('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#ffa836');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
			$('.navList li a').removeClass('current');
            $('.capClick a').addClass('current');
			currentTab =2;
		
        }
    },{
        offset:function() {
            //return $.waypoints('viewportHeight') - $(this).outerHeight() - 185 + 36;
            }
    });
	
			
    //same as above, allows another waypoint to be added
    $(".peopleMarker2").waypoint(function(event, direction){
        if(direction === "down"){
            //down            
			$('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#ffa836');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
            $('.navList li a').removeClass('current');
            $('.peopleClick a').addClass('current');
			$('.capClick a').css('color','#666');
			currentTab =2;
			
        }else{
            //up            
			currentTab =1;
			$('.capClick a').css('color','#fdc641');			
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
            $('.navList li a').removeClass('current');
            $('.capClick a').addClass('current');
			//alert("executing"); //this statement gets called and offsets the page when the link is clicked even though its already on the page.. it shouldnt
		}
    },{
        offset:650  //this offset is does not have any effect of repositioning when clicked twice.. changing the number does not change the position when you click again
    });

		//same as above, allows another waypoint to be added
    $(".peopleMarker").waypoint(function(event, direction){
        
        if(direction === "down"){
            //down
            $('.capClick a').css('color','#666');			
			$('.peopleClick a').css('color','#ffa836');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
            $('.navList li a').removeClass('current');
            $('.capClick a').addClass('current');
        }else{
            //up
			$('.capClick a').css('color','#666');			
			$('.peopleClick a').css('color','#ffa836');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
            $('.navList li a').removeClass('current');
            $('.capClick a').addClass('current');
           
        }
    },{
        offset:200 //was 200
    });
	}
	// *********************************************************************************
	
	//This is actually clients markers from changes 01/19/13 We spilt clients and work into seperate bands 
	//Still client markers ----------->>>>>>>>>>>>>----------->>>>>>>>>>>>>----------->>>>>>>>>>>>>
	// ************************************  CLIENT  DESKTOP *******************
	if(document.documentElement.clientWidth >= 1025 ){
	$(".clientBand").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".clientBandFixed").hide();
            $('#scroll-icon').css('bottom','173px'); //$('#scroll-icon').css('bottom','97px');
        }else{
            //show
            $(".clientBandFixed").show();
            $('#scroll-icon').css('bottom','211px'); //$('#scroll-icon').css('bottom','135px');
        }
    },{
        offset:function() {
            return $.waypoints('viewportHeight') - $(this).outerHeight() - 185; //- 185 + 72
            }
    });
	
	
	/*$(".workMarker").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            //$(".peopleBandPush").show();
            $(".clientBand").css('margin-top','0px');
            //$(".peopleBandFixedTop").hide();
        }else{
            //up
            //$(".peopleBandPush").hide();
            //$(".peopleBandFixedTop").show();
            $(".clientBand").css('margin-top','101px');
        }
    }, {
        offset:155 //214
    });*/
	
	//same as above, allows another waypoint to be added 
    $(".workMarker2").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".clientBandFixedTop").show();
            $('.navList li a').removeClass('current');
            $('.clientClick a').addClass('current');
        }else{
            //show
            $(".clientBandFixedTop").hide();
            $('.navList li a').removeClass('current');
            $('.peopleClick a').addClass('current');
        }
    },{
        offset:175 //225
    });
	}
	// *********************************************************************************
	
	
	
	// ************************************ ADJUST CLIENT OFFSET IPAD *******************
	if(document.documentElement.clientWidth <= 1024 ){
	$(".clientBand").waypoint(function(event, direction){
		
        if(direction === "down"){
            //down
           	currentTab =3;
		    $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#ff8534');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
		    $('.navList li a').removeClass('current');
            $('.clientClick a').addClass('current');
        }else{
            //show
			currentTab =3;
		    $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#ff8534');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
		    $('.navList li a').removeClass('current');
            $('.peopleClick a').addClass('current');
        }
    },{
        offset:function() {
           // return $.waypoints('viewportHeight') - $(this).outerHeight() - 185 + 72;
            }
    });
	
	$(".workMarker").waypoint(function(event, direction){
        if(direction === "down"){
            //down
			currentTab =3;
			$('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#ff8534');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
			$('.navList li a').removeClass('current');
            $('.clientClick a').addClass('current');
			
        }else{
            //up
			currentTab =2;
		    $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#ffa836');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
		    $('.navList li a').removeClass('current');
            $('.peopleClick a').addClass('current');
			
			
        }
    }, {
        offset:350
    });
	
	$(".workMarker2").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            currentTab =3;
			$('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#ff8534');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
            $('.navList li a').removeClass('current');
            $('.clientClick a').addClass('current');			 
			
        }else{
            //show
            currentTab =2;
			$('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#ffa836');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
            $('.navList li a').removeClass('current');
            $('.peopleClick a').addClass('current');
			
			
			 
        }
    },{
        offset:403
    });
	
	}
	// *********************************************************************************
	
	// ***********************************   WORK   **********************************************
	//Work starts here
	
	if(document.documentElement.clientWidth >= 1025 ){
		$(".workBand").waypoint(function(event, direction){
        if(direction === "down"){
            //down
			//alert("hide");
            $(".workBandFixed").hide();
            $('#scroll-icon').css('bottom','173px'); //$('#scroll-icon').css('bottom','59px');
        }else{
            //show
			//alert("show");
            $(".workBandFixed").show();
            $('#scroll-icon').css('bottom','211px'); //$('#scroll-icon').css('bottom','97px');
        }
    },{
        offset:function() {
            return $.waypoints('viewportHeight') - $(this).outerHeight() - 185; // - 185 + 108;
            }
    });
	
	/*$(".joeMarker").waypoint(function(event, direction){
        if(direction === "down"){
            //down
			//alert("down");
            $(".clientBandPush").show();
            $(".workBand").css('margin-top','0px');
            $(".clientBandFixedTop").hide();
        }else{
            //up
			//alert("up");
            $(".clientBandPush").hide();
            $(".clientBandFixedTop").show();
            $(".workBand").css('margin-top','101px');
        }
    }, {
        offset:37
    });*/
	
	//same as above, allows another waypoint to be added 
    $(".joeMarker2").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".workBandFixedTop").show();
            $('.navList li a').removeClass('current');
            $('.workClick a').addClass('current');
        }else{
            //show
            $(".workBandFixedTop").hide();
            $('.navList li a').removeClass('current');
            $('.clientClick a').addClass('current');
        }
    },{
        offset:223
    });
	}
	// *********************************************************************************
	
	// ************************************ ADJUST WORK OFFSET IPAD *******************
	if(document.documentElement.clientWidth <= 1024 ){
		$(".workBand").waypoint(function(event, direction){
        if(direction === "down"){
            //down
			$('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#ff8534');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
			$('.navList li a').removeClass('current');
            $('.workClick a').addClass('current');
			
			currentTab =4;
        }else{
            //show
			$('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#ff8534');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
			$('.navList li a').removeClass('current');
            $('.clientClick a').addClass('current');
			currentTab =4;
			
        }
    },{
        offset:function() {
            //return $.waypoints('viewportHeight') - $(this).outerHeight() - 185 + 108;
            }
    });
	
		$(".joeMarker").waypoint(function(event, direction){
        if(direction === "down"){
            //down
			$('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#ff8534');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
			$('.navList li a').removeClass('current');
            $('.workClick a').addClass('current');
			currentTab =4;
			
        }else{
            //up
			$('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#ff8534');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
		    $('.navList li a').removeClass('current');
            $('.clientClick a').addClass('current');
			currentTab =3;
			$('#mytest').val('here2');
			
        }
    }, {
        offset:250
    });
	
		$(".joeMarker2").waypoint(function(event, direction){
        if(direction === "down"){
            //down
           $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#ff8534');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
            $('.navList li a').removeClass('current');
            $('.workClick a').addClass('current');
			currentTab =4;
			
			
        }else{
            //show
            $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#ff8534');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#666');
            $('.navList li a').removeClass('current');
            $('.clientClick a').addClass('current');
			currentTab =3;
			$('#mytest').val('here1');
						
        }
    },{
        offset:538 
    });
	}
	// *********************************************************************************
	
	// ************************************ ADJUST ARTCILES AND NEWS DESKTOP *******************
    //same as above, allows another waypoint to be added
	if(document.documentElement.clientWidth >= 1025 ){
		 $(".newsBand").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".newsBandFixed").hide();
            $('#scroll-icon').css('bottom','173px'); //$('#scroll-icon').css('bottom','21px');
        }else{
            //show
            $(".newsBandFixed").show();
            $('#scroll-icon').css('bottom','211px'); // $('#scroll-icon').css('bottom','59px');
        }
    },{
        offset:function() {
            return $.waypoints('viewportHeight') - $(this).outerHeight() - 185; //- 185 + 144
            }
    });
	
	
    $(".newsMarker2").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".newsBandFixedTop").show();
            $('.navList li a').removeClass('current');
            $('.newsClick a').addClass('current');
        }else{
            //show
            $(".newsBandFixedTop").hide();
            $('.navList li a').removeClass('current');
            $('.workClick a').addClass('current');
        }
    },{
        offset:259 //253
    });

    /*$(".newsMarker").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".workBandPush").show();
            $(".newsBand").css('margin-top','0px');
            $(".workBandFixedTop").hide();
        }else{
            //up
            $(".workBandFixedTop").show();
            $(".workBandPush").hide();
            $(".newsBand").css('margin-top','101px');
        }
    }, {
        offset:193
    });*/
	}
	// *********************************************************************************
	
	// ************************************ ADJUST ARTCILES AND NEWS OFFSET IPAD *******************
	if(document.documentElement.clientWidth <= 1024 ){
		 $(".newsBand").waypoint(function(event, direction){
        if(direction === "down"){
            //down
           $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#ff6035');
			$('.contactsClick a').css('color','#666');
		   $('.navList li a').removeClass('current');
            $('.newsClick a').addClass('current');
			currentTab =5;
        }else{
            //show
           $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#ff6035');
			$('.contactsClick a').css('color','#666');
			$('.navList li a').removeClass('current');
            $('.workClick a').addClass('current');
			currentTab =5;
        }
    },{
        offset:function() {
            //return $.waypoints('viewportHeight') - $(this).outerHeight() - 185 + 144;
            }
    });
	
	
		$(".newsMarker2").waypoint(function(event, direction){
        if(direction === "down"){
            //down
          $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#ff6035');
			$('.contactsClick a').css('color','#666');
            $('.navList li a').removeClass('current');
            $('.newsClick a').addClass('current');
			currentTab =5;
        }else{
            //show
            $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#ff6035');
			$('.contactsClick a').css('color','#666');
            $('.navList li a').removeClass('current');
            $('.workClick a').addClass('current');
			currentTab =4;
        }
    },{
        offset:676
    });
	
		$(".newsMarker").waypoint(function(event, direction){
        if(direction === "down"){
            //down
           $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#ff6035');
			$('.contactsClick a').css('color','#666');
			$('.navList li a').removeClass('current');
            $('.newsClick a').addClass('current');
			currentTab =5;
        }else{
            //up
            $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#ff6035');
			$('.contactsClick a').css('color','#666');
			$('.navList li a').removeClass('current');
            $('.workClick a').addClass('current');
			currentTab =4;
        }
    }, {
        offset:193
    });
	}
	// ********************************************************************************

    // ************************************ ADJUST CONTACT DESKTOP *******************
    //same as above, allows another waypoint to be added
	if(document.documentElement.clientWidth >= 1025 ){
		$(".contactsBand").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".contactsBandFixed").hide();
            $('#scroll-icon').css('bottom','173px'); //$('#scroll-icon').css('bottom','21px');
        }else{
            //show
            $(".contactsBandFixed").show();
            $('#scroll-icon').css('bottom','211px'); //$('#scroll-icon').css('bottom','21px');
        }
    },{
        offset:function() {
            return $.waypoints('viewportHeight') - $(this).outerHeight() - 185; //185 + 180
            }
    });
	
    $(".contactsMarker2").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".contactsBandFixedTop").show();
            $('.navList li a').removeClass('current');
            $('.contactsClick a').addClass('current');
        }else{
            //show
            $(".contactsBandFixedTop").hide();
            $('.navList li a').removeClass('current');
            $('.newsClick a').addClass('current');
        }
    },{
        offset:260
    });

    /*$(".contactsMarker").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $(".newsBandPush").show();
            $(".contactsBand").css('margin-top','0px');
            $(".newsBandFixedTop").hide();
        }else{
            //up
            $(".newsBandFixedTop").show();
            $(".newsBandPush").hide();
            $(".contactsBand").css('margin-top','101px');
        }
    }, {
        offset:247
    });*/
	}

	// ************************************ ADJUST CONTACT OFFSET IPAD *******************
	if(document.documentElement.clientWidth <= 1024 ){
		$(".contactsBand").waypoint(function(event, direction){
        if(direction === "down"){
            //down
            $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#ee3d46');
		   $('.navList li a').removeClass('current');
            $('.contactsClick a').addClass('current');
			currentTab =6;
        }else{
            //show
             $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#ee3d46');
			$('.navList li a').removeClass('current');
            $('.newsClick a').addClass('current');
			currentTab =6;
        }
    },{
        offset:function() {
            //return $.waypoints('viewportHeight') - $(this).outerHeight() - 185 + 180;
            }
    });
	
		$(".contactsMarker2").waypoint(function(event, direction){
        if(direction === "down"){
            //down
             $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#ee3d46');
            $('.navList li a').removeClass('current');
            $('.newsClick a').addClass('current');
			currentTab =6;
        }else{
            //show
             $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#ee3d46');
            $('.navList li a').removeClass('current');
            $('.newsClick a').addClass('current');
			currentTab =5;
        }
    },{
        offset:818
    });
	
		$(".contactsMarker").waypoint(function(event, direction){
        if(direction === "down"){
            //down
           $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#ee3d46');
			currentTab =6;
        }else{
            //up
            $('.capClick a').css('color','#666');
			$('.peopleClick a').css('color','#666');
			$('.clientClick a').css('color','#666');
			$('.workClick a').css('color','#666');
			$('.newsClick a').css('color','#666');
			$('.contactsClick a').css('color','#ee3d46');
			currentTab =5;
        }
    }, {
        offset:247
    });
	}
	// *********************************************************************************
	
	

if(document.documentElement.clientWidth <= 1024 || document.documentElement.clientWidth >= 1025 ){
    $(".lastContent").waypoint(function(event, direction){ //$(".lastContent").waypoint(function(event, direction){
        if(direction === "down"){
            //hide
            $('#scroll-icon').css('bottom','-500px');
        }else{
            //show
            $('#scroll-icon').css('bottom','173px');
        }
    },{
        offset:0
    });
	}

});// doc ready



function load(){
    setMarqueeSpacers();
   // setBars();
    checkPager();
    $.waypoints('refresh');
}

var hidePortraitImage = function() {
	$("#coverSoTheMarqueeCanScroll2").hide();
	//alert("hide");
}

var checkPager = function(){
    if($('.pager').offset().top < ($('.marq1 .text h3').offset().top + $('.marq1 .text h3').height)){
        $('.pager').hide();
    } else{
        if($('.capBandFixed').is(":visible")){
            $('.pager').show();
        }else{
            $('.pager').hide();
        }
    }
};

var resetPeople = function() {

    $('.charlenePic').attr('src', 'img/people/charlenePic.png');
    $('.helenPic').attr('src', 'img/people/helenPic.png');
    $('.steveFPic').attr('src', 'img/people/SteveFPic.png');
    $('.steveWPic').attr('src', 'img/people/SteveWPic.png');
    $('.nicolePic').attr('src', 'img/people/nicolePic.png');
    $('.meaghanPic').attr('src', 'img/people/meaghanPic.png');
    $('.kevinPic').attr('src', 'img/people/kevinPic.png');
    $('.susanPic').attr('src', 'img/people/susanPic.png');
    $('.kerryPic').attr('src', 'img/people/kerryPic.png');
	$('.shiraPic').attr('src', 'img/people/shiraPic.png');
	$('.brankaPic').attr('src', 'img/people/brankaPic.png');
	$('.chrisPic').attr('src', 'img/people/chrisPic.png');
	$('.robinPic').attr('src', 'img/people/robinPic.png');
};


var setWinHeight = function(){
    winHeight = $(window).height();
};

var setMarqueeSpacers = function(){

    $('.dividerTop').css('height',''+(($(window).height() - 140 - $('#marquee').height()) - 100) *0.3+'px');

    $('.dividerBottom').css('height',''+(($(window).height() - 140 - $('#marquee').height()) - 100) *0.7+'px');
};

var startBriefcaseTimer = function(){
	//alert("timer");
    $('.flashWork').hide();
    $('.briefcase1').show();

    stepThru(2);
};

var stepThru = function(num) {
    if(num<6) {           

        setTimeout(function(){
            $(".briefcase"+num+"").show();
        }, (1000+num*150));

        // alert(num);
        stepThru(num+1);
    } else {
        //do nothing
    }
};

var setBars = function() {

    var windowScrollTop = $(window).scrollTop();

    // CAP BAND
    var capBandOffset = $('.capBand').offset().top;
    if($('.capBandFixed').is(":visible")){
        if(capBandOffset < $('.capBandFixed').offset().top){
                $('.capBandFixed').hide();
                // $('.pager').css('top','capBandOffset');
                $('.pager').css({'position':'absolute','top':''+$('.capBandFixed').offset().top-150+'px', 'bottom':''});
        }
    }        
    if(windowScrollTop - 36 < capBandOffset - $(window).height() + 180){
        $('.capBandFixed').show();
        $('.pager').css({'position':'fixed','bottom':'200px', 'top': ''});
    }
    if(windowScrollTop > capBandOffset - 100){
        $(".capBandFixedTop").show();	
    }
    else if(windowScrollTop < capBandOffset - 100){
        $(".capBandFixedTop").hide();
    }


    // PEOPLE BAND
    var peopleBandOffset = $('.peopleBand').offset().top;
	
    if($('.peopleBandFixed').is(":visible")){
        if(peopleBandOffset - $('.peopleBandFixed').offset().top < 0){
            $('.peopleBandFixed').hide();
        }
    }        
    if(windowScrollTop - 36 < peopleBandOffset - $(window).height() + 144){
        $('.peopleBandFixed').show();
		
    }
    if(windowScrollTop > peopleBandOffset - 100){
        $(".peopleBandFixedTop").show();  //bar that was on the bottom. section marker.
    }
    if(windowScrollTop < peopleBandOffset - 100){
        $(".peopleBandFixedTop").hide();
    }
    //push
    if(windowScrollTop > peopleBandOffset - 136){
        $(".capBandPush").show();
        $(".capBandFixedTop").hide();
        $('.peopleBand').css('margin-top','0px');
    }
    if(windowScrollTop < peopleBandOffset - 136 && windowScrollTop > capBandOffset - 100){
        $(".capBandPush").hide();
        $(".capBandFixedTop").show();
        $('.peopleBand').css('margin-top','101px');
    }
	
	// CLIENT BAND
    var clientBandOffset = $('.clientBand').offset().top;
    if($('.clientBandFixed').is(":visible")){
        if(clientBandOffset - $('.clientBandFixed').offset().top < 0){
                $('.clientBandFixed').hide();
        }
    } else if(windowScrollTop - 36 < clientBandOffset - $(window).height() + 108){
        $('.clientBandFixed').show();
    }
    if(windowScrollTop > clientBandOffset - 100){
        $(".clientBandFixedTop").show();
    } else if(windowScrollTop < clientBandOffset - 100){
        $(".clientBandFixedTop").hide();
    }
    //push
    if(windowScrollTop > clientBandOffset - 136){
        $(".peopleBandPush").show();
        $(".peopleBandFixedTop").hide();
        $('.clientBand').css('margin-top','0px');

    } else if(windowScrollTop < clientBandOffset - 136 && windowScrollTop > peopleBandOffset - 100){
        $(".peopleBandPush").hide();
        $(".peopleBandFixedTop").show();
        $('.clientBand').css('margin-top','101px');
    }



    // WORK BAND
    var workBandOffset = $('.workBand').offset().top;
    if($('.workBandFixed').is(":visible")){
        if(workBandOffset - $('.workBandFixed').offset().top < 0){
                $('.workBandFixed').hide();
        }
    } else if(windowScrollTop - 36 < workBandOffset - $(window).height() + 72){
        $('.workBandFixed').show();
    }
    if(windowScrollTop > workBandOffset - 100){
        $(".workBandFixedTop").show();
    } else if(windowScrollTop < workBandOffset - 100){
        $(".workBandFixedTop").hide();
    }
    //push
    if(windowScrollTop > workBandOffset - 136){
        $(".clientBandPush").show();
        $(".clientBandFixedTop").hide();
        $('.workBand').css('margin-top','0px');

    } else if(windowScrollTop < workBandOffset - 136 && windowScrollTop > peopleBandOffset - 100){
        $(".clientBandPush").hide();
        $(".clientBandFixedTop").show();
        $('.workBand').css('margin-top','101px');
    }



    // NEWS BAND
    var newsBandOffset = $('.newsBand').offset().top;
    if($('.newsBandFixed').is(":visible")){
        if(newsBandOffset - $('.newsBandFixed').offset().top  < 0){
            $('.newsBandFixed').hide();
        }
    }        
    if(windowScrollTop - 36  < newsBandOffset - $(window).height() + 36){
        $('.newsBandFixed').show();
    }
    if(windowScrollTop > newsBandOffset - 100){
        $(".newsBandFixedTop").show();
    }
    if(windowScrollTop < newsBandOffset - 100){
        $(".newsBandFixedTop").hide();
    }
    //push
    if(windowScrollTop > newsBandOffset - 136){
        $(".workBandPush").show();
        $(".workBandFixedTop").hide();
        $('.newsBand').css('margin-top','0px');

    }
    if(windowScrollTop < newsBandOffset - 136 && windowScrollTop > workBandOffset - 100){
        $(".workBandPush").hide();
        $(".workBandFixedTop").show();
        $('.newsBand').css('margin-top','101px');
    }


    // CONTACTS BAND
    var contactsBandOffset = $('.contactsBand').offset().top;
    if($('.contactsBandFixed').is(":visible")){
        if(contactsBandOffset - $('.contactsBandFixed').offset().top < 0){
            $('.contactsBandFixed').hide();
        }
    }
    if(windowScrollTop - 36 < contactsBandOffset - $(window).height() + 0){
        $('.contactsBandFixed').show();
    }
    if(windowScrollTop > contactsBandOffset - 100){
        $(".contactsBandFixedTop").show();
    }
    if(windowScrollTop < contactsBandOffset - 100){
        $(".contactsBandFixedTop").hide();
    }
    //push
    if(windowScrollTop > contactsBandOffset - 136){
        $(".newsBandPush").show();
        $(".newsBandFixedTop").hide();
        $('.contactsBand').css('margin-top','0px');
    }
    if(windowScrollTop < contactsBandOffset - 136 && windowScrollTop > newsBandOffset - 100){
        $(".newsBandPush").hide();
        $(".newsBandFixedTop").show();
        $('.contactsBand').css('margin-top','101px');
    }


    /* --------- UPDATE TOP NAV --------- */
    //shouldn't be hardcoded with pixels, use $('._Band').offset().top

    if(windowScrollTop < $('.capBand').offset().top - 100) {
        $('.navList li a').removeClass('current');
    } 
    if(windowScrollTop >= $('.capBand').offset().top - 100) {
        $('.navList li a').removeClass('current');
        $('.capClick a').addClass('current');
    }
    if(windowScrollTop >= $('.peopleBand').offset().top - 100) {
		
        $('.navList li a').removeClass('current');
        $('.peopleClick a').addClass('current');
    }
	 if(windowScrollTop >= $('.clientBand').offset().top - 100) {
        $('.navList li a').removeClass('current');
        $('.clientClick a').addClass('current');
    }
    if(windowScrollTop >= $('.workBand').offset().top - 100) {
        $('.navList li a').removeClass('current');
        $('.workClick a').addClass('current');
    }
    if(windowScrollTop >= $('.newsBand').offset().top - 100) {
        $('.navList li a').removeClass('current');
        $('.newsClick a').addClass('current');
    }
    if(windowScrollTop >= $('.contactsBand').offset().top - 100) {
        $('.navList li a').removeClass('current');
        $('.contactsClick a').addClass('current');
    }
	
	
};

function playMyVideo(){
	$('#pieceVideo').css('left','3000px');
	$('#workVideo').css('left','472px');
	$('#workVideo').get(0).play();	
}

function playHomeVideo(){
	$('#homePlayVideo').css('left','3000px');
	$('#homeVideo').css('left','80px');
	$('#homeVideo').get(0).play();	
}





