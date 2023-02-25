var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
console.log(txtInput);

btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("Clicked!");
    console.log("input", txtInput.value);
})