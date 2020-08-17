// Business Logic 
function testSplit(input) {
  console.log(input);
  let splitInput = input.split();
  console.log(splitInput);
  return splitInput;  
 
}




// Interface Logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    const sentence = $("input#fav3").val();
    $("#returnSentence").text(testSplit(sentence));
    event.preventDefault();
    
    $("#returnSentence").show();
  }); 
});