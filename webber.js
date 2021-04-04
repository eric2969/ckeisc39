var winW,winH;
winW=window.innerWidth;
winH=window.innerHeight;
function init(winW,winH) {
	$("#title").css("top",(0.57*winH)-(0.2*winW)+"px");
	$("#line").css("top",(0.58*winH)+"px");

}
var timer =1000/60;

function movce(num) {
	$('html,body').animate({scrollTop:num*winH}, 1000);
	console.log($('html, body').scrollTop());
}










setTimeout(
	function(){
		init(winW,winH);
	}
,10);


console.log(winW);
console.log(winH);
console.log($('html, body').scrollTop());