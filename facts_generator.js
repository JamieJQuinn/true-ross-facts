var url = "facts.txt";
var fact_element = document.getElementById("fact");
var facts;
$.get( url, function( data ) {
  facts = data.split("\n");
});

document.getElementById("moustache").onclick = displayFact;

function displayFact() {
  var rand_index = Math.floor(Math.random() * (facts.length-1)); 
  fact_element.innerHTML = facts[rand_index];
}
