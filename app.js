var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

outputDiv.innerText = " Somesh Banerjee";

console.log(txtInput);

function clickHandler(){
    console.log("Clicked");
    console.log("input" , txtInput.value);
};

//listening to events
btnTranslate.addEventListener("click" , clickHandler)

