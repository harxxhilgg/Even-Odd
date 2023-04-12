const numberInput = document.getElementById('numberInput');
const checkBtn = document.getElementById('checkBtn');

checkBtn.addEventListener("click", () => {
	if (numberInput.value.length == 0) {
		document.getElementById('result').innerHTML = "invalid or null input!";
	}
	else {
		if (numberInput.value <= 0 ) {
			document.getElementById('result').innerHTML = "input can't be negetive or zero.";
		}
		else {
			if(numberInput.value % 2 == 0) {
				document.getElementById('result').innerHTML =  numberInput.value + " is even.";
			}
			else {
				document.getElementById('result').innerHTML = numberInput.value + " is odd.";
			}
		}
	}
})