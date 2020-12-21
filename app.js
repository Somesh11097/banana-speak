var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL ="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text

}

// How to handle Error
function errorHandler(error){
    console.log("error occured", error);
    alert("Something is wrong with server: try again after some time");
}



//handling input and output
function clickHandler() {
   
    var inputText = txtInput.value;   //taking Input



    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response =>response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        
       })
    .catch(errorHandler)
};

//listening to events
btnTranslate.addEventListener("click" , clickHandler)

