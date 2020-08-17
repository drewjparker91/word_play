// Business Logic 
function testSplit(input) {
  console.log(input);
  let splitInput = input.split(" ");
  console.log(splitInput);
  return splitInput;
}

function plusThree(input){
  longerThanThree = [];
  input.forEach(function(word) {
    if (word.length >= 3){
      longerThanThree.push(word);
    }
  })
  console.log(longerThanThree);
  let final = longerThanThree.reverse().join(" ");
   //longerThanThree.join(" ");
  return final;
};


// Interface Logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    const sentence = $("input#fav3").val();
    let splitSentence = testSplit(sentence);
    let moreThanThree = plusThree(splitSentence);
    $("#returnSentence").text(moreThanThree);
    event.preventDefault();
    
    $("#returnSentence").show();
  }); 
});