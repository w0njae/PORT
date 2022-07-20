// fullpage 설정
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#43DCFF', '#43DCFF', '#43DCFF', '#43DCFF', '#43DCFF'],
        anchors: ['1Page', '2Page', '3Page', '4Page', '5Page'],
        menu: '#menu',
    });
});


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