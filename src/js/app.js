
var myString = "Hi, I’m  Yefri." + " I’m developer and designer, I make that your pages will be beautiful and scalable.";



var	myArray = myString.split(""),
		loopTimer,
		setToday;

setToday = document.getElementById('newTime').outerHTML = "(" + getFormattedDate() + ")";

function frameLooper() {
	if (myArray.length > 0) {
		document.getElementById('myTypingText').innerHTML += myArray.shift();
	} else {
		clearTimeout(loopTimer);
	}
	loopTimer = setTimeout('frameLooper()', 70);
}

frameLooper();

function getFormattedDate() {
  var date = new Date();

  var str = date.getFullYear() + "-" +
		  (date.getMonth() + 1) + "-" +
		  date.getDate() + " " +
		  date.getHours() + ":" +
		  date.getMinutes() + ":" +
		  date.getSeconds();

  return str;
}
