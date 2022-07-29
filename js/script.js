// 글씨 타이핑 효과 넣기
$(document).ready(function() {
	var text = document.getElementById("typeStyle");

	var typewriter = new Typewriter(text, {
		loop: true
	});

	typewriter.typeString('Hello, My name is WONJAE')
		.pauseFor(5000)
		.start();
});


// 마우스 따라 비행기 움직이기
	var currentX = '';
	var currentY = '';
	var movementConstant = 0.015;
		
		$(document).mousemove(function(e) {
			if (currentX == '') currentX = e.pageX;
		var xdiff = e.pageX - currentX;
		currentX = e.pageX;
			if (currentY == '') currentY = e.pageY;
		var ydiff = e.pageY - currentY;
		currentY = e.pageY;
			$('.parallax div').each(function(i, el) {
				var movement = (i + 5) * (xdiff * movementConstant);
				var movementy = (i + 5) * (ydiff * movementConstant);
				var newX = $(el).position().left + movement;
				var newY = $(el).position().top + movementy;
			$(el).css('left', newX + 'px');
			$(el).css('top', newY + 'px');
	});
});

$(document).scrollTop();
$(window).scroll(function () { 
	var scrollValue = $(document).scrollTop(); 
    console.log(scrollValue); 
});

//skill page 원형 차트
	



$(window).resize(function(){ 
	if ($(window).width() > 767) {
		$('.chart').easyPieChart({
			trackColor: '#fff',
			scaleColor: '#43DCFF',
			lineCap: 'round',
			lineWidth: 30,
			size: 350,
			animate: 5000,
			onStart:$.noop,
			onStop: $.noop
		});
	 }
	 else if ($(window).width() > 381) {
		$('.chart').easyPieChart({
			trackColor: '#fff',
			scaleColor: '#43DCFF',
			lineCap: 'round',
			lineWidth: 20,
			size: 200,
			animate: 5000,
			onStart:$.noop,
			onStop: $.noop
		});
	 }
	 else {
		$('.chart').easyPieChart({
			trackColor: '#fff',
			scaleColor: '#43DCFF',
			lineCap: 'round',
			lineWidth: 15,
			size: 150,
			animate: 5000,
			onStart:$.noop,
			onStop: $.noop
		});
	 }
	}).resize(); 



//WOW.js 선언
new WOW().init();


// animate
(function($) {
	
	'use strict';

	// variables
	var 
		$About = $('#ABOUT #Contents .is-animated'),
		$AboutBack = $('#ABOUT #Contents'),
		$AboutTitle = $('#ABOUT h2'),
		$Skill = $('#SKILL .is-animated'),
		$SkillTitle = $('#SKILL h2'),
		$SkillClick = $('#SKILL #click'),
		$SkillChart = $('#SKILL .chart-list'),
		$ProBack = $('#PROJECT .project-page'),
		$ProTitle = $('#PROJECT h2'),
		$Project = $('#PROJECT .is-animated'),
		$ProImage = $('#PROJECT .desk-image'),
		$ConTitle = $('#CONTACT h2'),
		$ConAir = $('#CONTACT .box-air'),
		$ConBox = $('#CONTACT .con-box'),
		$Contact = $('#CONTACT .info>li');

	// initialize fullPage
	$('#fullpage').fullpage({
	//responsiveWidth: 1024,
	onLeave: function(index, nextIndex, direction) {
	
		// About page animation
		if( index == 1 && direction == 'down' ) { 
			$AboutTitle.addClass('animated fadeIn').css({'animation-delay':'0.3s', 'animation-duration':'2.5s'});
			$AboutBack.addClass('animated tada').css({'animation-delay':'0.8s', 'animation-duration':'2s'});
			$About.eq(0).addClass('animated bounceInRight').css({'animation-delay':'1.0s', 'animation-duration':'2.5s'}); 
			$About.eq(1).addClass('animated bounceInLeft').css({'animation-delay':'1.5s', 'animation-duration':'2.5s'});
		}

		// Skill page animation
		else if( index == 2 && direction == 'down' ) {
			$SkillTitle.addClass('animated fadeIn').css({'animation-delay':'0.3s', 'animation-duration':'2.5s'});
			$Skill.eq(0).addClass('animated fadeInLeft').css('animation-delay', '.6s'); 
			$Skill.eq(1).addClass('animated fadeInRight').css('animation-delay', '.9s');
			$Skill.eq(2).addClass('animated fadeInLeft').css('animation-delay', '1.2s');
			$Skill.eq(3).addClass('animated fadeInRight').css('animation-delay', '1.5s');
			$Skill.eq(4).addClass('animated fadeInLeft').css('animation-delay', '1.8s');
			$SkillChart.addClass('animated rollIn').css('animation-duration','2s');
			$SkillClick.addClass('animated zoomIn').css('animation-delay', '3s');
		}

		// Project page animation
		else if( index == 3 && direction == 'down' ) {
			$ProTitle.addClass('animated fadeIn').css({'animation-delay':'0.3s', 'animation-duration':'2.5s'});
			$ProBack.addClass('animated fadeIn').css({'animation-delay':'0.8s', 'animation-duration':'2s'});
			$Project.eq(0).addClass('animated fadeInLeft').css('animation-delay','1s'); 
			$Project.eq(1).addClass('animated fadeInLeft').css('animation-delay','1.5s');
			$ProImage.addClass('animated bounceInDown').css({'animation-delay':'2s', 'animation-duration':'2s'});
		}

		// Contact page animation
		else if( index == 4 && direction == 'down' ) {
			$ConTitle.addClass('animated fadeIn').css('animation-delay','0s');
			$ConBox.addClass('animated bounceInUp').css({'animation-delay':'1.5s', 'animation-duration':'2s'});
			$ConAir.eq(0).addClass('animated fadeInRight').css( 'animation-duration','5s'); 
			$ConAir.eq(1).addClass('animated fadeInLeft').css('animation-duration','5s');
			$Contact.eq(0).addClass('animated fadeInUp').css({'animation-delay':'3s', 'animation-duration':'1s'});
			$Contact.eq(1).addClass('animated fadeInUp').css({'animation-delay':'3.3s', 'animation-duration':'1s'});
			$Contact.eq(2).addClass('animated fadeInUp').css({'animation-delay':'3.6s', 'animation-duration':'1s'});
		}
	}

	});
	
})(jQuery);

/*.allMenu_menu 클릭했을때 네비게이션 항목들*/
$('.hamburger').click(function(){ //메뉴버튼 클릭시
	$('nav').slideToggle('slow'); //.gnb 슬라이드토글
});

/*햄버거 메뉴 클릭 시 햄버거가 X 모양으로 변경*/
const menuTrigger = document.querySelector('.hamburger');

menuTrigger.addEventListener('click', (event) => {
event.currentTarget.classList.toggle('active-1');
});
