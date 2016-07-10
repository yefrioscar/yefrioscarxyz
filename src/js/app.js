
var myString = "Hi, I’m  Yefri." + " I’m developer and designer, I make that your pages will be beautiful and scalable.";



var	myArray = myString.split(""),
		loopTimer,
		setToday;



function frameLooper() {
	if (myArray.length > 0) {
		document.getElementById('myTypingText').innerHTML += myArray.shift();
	} else {
		clearTimeout(loopTimer);
	}
	loopTimer = setTimeout('frameLooper()', 70);

}

/*
function getHourss(){

		'use strict';
		var time = document.getElementById('newTime');
		var getHour = function() {
			var date = new Date();
			time.textContent = "("+date.getFullYear() + "-" +
					(date.getMonth() + 1) + "-" +
					date.getDate() + " " +
					date.getHours() + ":" +
					date.getMinutes() + ":" +
					date.getSeconds() + ")";
		};
		setInterval(getHour,1000);
	}
*/
function lanzala() {
	var time = document.getElementById('newTime');
	//var getHour = function() {
		var date = new Date();
		time.textContent = "("+date.getFullYear() + "-" +
				(date.getMonth() + 1) + "-" +
				date.getDate() + " " +
				date.getHours() + ":" +
				date.getMinutes() + ":" +
				date.getSeconds() + ")";
	frameLooper();
}


lanzala();
