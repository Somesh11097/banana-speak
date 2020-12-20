var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



//handling input and output
function clickHandler() {
    outputDiv.innerText = "ajsjsjs: " + txtInput.value;
    
};

//listening to events
btnTranslate.addEventListener("click" , clickHandler)

