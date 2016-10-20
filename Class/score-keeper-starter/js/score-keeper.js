var plusFive = document.querySelector("#increase-5");

var theScore = 0; 

plusFive.addEventListener("click", addFive);
function addFive () {
	console.log("addFive"); 
	theScore = theScore + 5; 
	console.log(theScore); 
	scoreChange.innerHTML = theScore + " points";

}

var minusFive = document.querySelector("#decrease-5");

minusFive.addEventListener("click", subtractFive);
function subtractFive () {
	console.log("subtractFive"); 
	theScore = theScore - 5; 
	console.log(theScore); 
	scoreChange.innerHTML = theScore + " points";
} 


var setCustom = document.querySelector("#submit-custom-score");
var getCustom = document.querySelector("#custom-score");


setCustom.addEventListener("click", addNumber);
function addNumber() {
	console.log("addNumber");
	theScore = theScore + parseInt(getCustom.value); 
	scoreChange.innerHTML = theScore + " points"; 
	getCustom.value = "";
}


var scoreChange = document.querySelector("#score");



