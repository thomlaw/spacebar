var socket = io.connect('http://localhost');
$(document).ready(function(){
	var screenColor = 255;
	var screenColorS = 'rgba('+screenColor+','+screenColor+','+screenColor+',1)';
	console.log(screenColorS);
	$('.cube').css('background-color',screenColorS);
	console.log($('.cube').css('background-color'));
	$('body').keyup(function(e){
		if(e.keyCode == 32){
			var spaceB = "hell yeah!";
			screenColor = screenColor - 10;
			console.log("spacebar!");
			socket.emit('spacebar',spaceB,screenColor);
		}
	});
	socket.on('spaceb',function(spaceB,screenColor){
		console.log(spaceB);
		screenColorS = 'rgba('+screenColor+','+screenColor+','+screenColor+',1)';
		$('.cube').css('background-color',screenColorS);
	});
	function inteaction(){
		$('.instruction')
	}
});