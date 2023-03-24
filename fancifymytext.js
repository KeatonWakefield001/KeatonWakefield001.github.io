function changeFontSize() {
  //add an alert that says hello, world!
  alert("Hello, world!");        
  var textInput = document.getElementById("textInput");
    textInput.style.fontSize = "24pt";
  }
  
  function changeStyle() {
    var textInput = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancy");
    var boringRadio = document.getElementById("boring");
  
    if (fancyRadio.checked) {
      textInput.style.fontWeight = "bold";
      textInput.style.color = "blue";
      textInput.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
      textInput.style.fontWeight = "normal";
      textInput.style.color = "black";
      textInput.style.textDecoration = "none";
    }
  }
  
  function makeSentencesMoo() {
    var textInput = document.getElementById("textInput");
    var inputText = textInput.value;

    inputText = inputText.toUpperCase();
  
    var sentences = inputText.split(".");
    for (var i = 0; i < sentences.length; i++) {
      sentences[i] = sentences[i].trim();
      if (sentences[i].length > 0) {
        sentences[i] = sentences[i] + "-Moo";
      }
    }
    inputText = sentences.join(". ");

    textInput.value = inputText;
  }