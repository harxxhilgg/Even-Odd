var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
console.log("input is: " + txtInput);
outputDiv.innerText = txtInput;
}



btnTranslate.addEventListener("click", clickHandler);