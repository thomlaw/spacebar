var socket = io.connect('http://localhost');
$(document).ready(function(){
	var screenColor = 0;
	$('body').keyup(function(e){
		if(e.keyCode == 32){
			var spaceB = "hell yeah!";
			console.log("spacebar!");
			socket.emit('spacebar',spaceB);
		}
	});
	socket.on('spaceb',function(spaceB){
		console.log(spaceB);
	});
});