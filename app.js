const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");
const btnTranslate = document.getElementById("button-translate");

const url = "https://api.funtranslations.com/translate/yoda.json";

btnTranslate.addEventListener('click',()=>{ 
     const text = textInput.value; 
     fetch(constructURL(text))
     .then(response => response.json())
     .then(json => {
          var translatedText = json.contents.translated;
          textOutput.innerHTML = translatedText;        
     })
     .catch(errorHandler);
});

function constructURL(text){
     return url + "?text=" + text;
}

function errorHandler(error){
     console.log("Error Occured! Try After Some time" + error);
     textOutput.innerHTML = "Error Occured:\nLooks like something is broken! We will try to fix this asap. Please try again after Some time" ;  
}