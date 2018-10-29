// Zad - 1
const tab1 = [1, 7, 12, 46, 85];
const tab2 = [10, 26, 75, 34];
const tab3 = [...tab1, ...tab2];
console.log(tab3);
var sortedTable = tab3.sort(function(a, b){return a - b});
var max = Math.max.apply(null, tab3);
var min = Math.min.apply(null, tab3);
console.log('Sorted table');
console.log(tab3);
console.log('max');
console.log(max);
console.log('min');
console.log(min);

// Zad - 2
function printUpper(...tempWords) {
	var words = [...tempWords];
	var final = words.join('+');
	console.log(final.toUpperCase());	
}

var response = "asdfasfas fadsfasd fasdf asdfasdf sdafas fasdf dasf";
console.log(response);
var words = response.split(' ');
console.log(words);
printUpper(...words);


var form = document.querySelector('form');

document.getElementById("greyDiv").onclick = function(event) {
  event.target.style.backgroundColor = 'yellow';

  alert("target = " + event.target.id);

  event.target.style.backgroundColor = '';
};



// document.getElementById("greyDiv").addEventListener("click", function( event ) {
//    	if (event.target != this) { return } 	
// 	document.getElementById("status").innerHTML = 'grey clicked'
//   }, false);

// document.getElementById("redDiv").addEventListener("click", function( event ) {
//    	if (event.target != this) { return } 	
// 	document.getElementById("status").innerHTML = 'red clicked'
//   }, false);

// document.getElementById("yellowDiv").addEventListener("click", function( event ) {
//    	if (event.target != this) { return } 	
// 	document.getElementById("status").innerHTML = 'yellow clicked'
//   }, false);