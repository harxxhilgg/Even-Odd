function checkNumber() {
	var number = document.getElementById("numberInput").value;
	if (number % 2 == 0) {
		document.getElementById("result").innerHTML = number + " is even";
	} else {
		document.getElementById("result").innerHTML = number + " is odd";
	}
}