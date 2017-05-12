window.onload = function(){
	draw();
	$(".main__scroll-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".adv").offset().top},
        1000);
});
}

function draw(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var parent = canvas.parentElement;
	canvas.width = parent.clientWidth;
	canvas.height = parent.clientHeight;
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(0,100);
	ctx.strokeStyle="#000000";
	ctx.quadraticCurveTo(canvas.width*0.25,canvas.height, canvas.width*0.6, canvas.height*0.6);
	ctx.lineTo(canvas.width, 0 );
	ctx.lineTo(canvas.width,canvas.height);
	ctx.lineTo(0,canvas.height);
	ctx.closePath();
	ctx.fillStyle = "#f7f7f8";
	ctx.stroke();
	ctx.fill(); 
	ctx.strokeStyle="#b9da18";
	ctx.beginPath();
	ctx.moveTo(canvas.width*0.6, canvas.height*0.6);
	ctx.lineTo(canvas.width, 0 );
	ctx.lineTo(canvas.width, 80);
	ctx.fillStyle = "#b9da18";
	ctx.fill();
	ctx.closePath();
	ctx.stroke(); 
}



