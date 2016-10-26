
var ul = document.querySelector("ul");

var body = document.querySelector("body"); 
// shortcut --> document.body

body.classList.add("skypurple");

// body.className = "skyblue"; 

// Elements 
var red = document.querySelector(".red"); 
var olive = document.querySelector(".olive"); 
var skyblue = document.querySelector(".skyblue"); 
var rebeccapurple = document.querySelector(".rebeccapurple"); 

// Event Listeners

red.addEventListener("click", changeRed);
olive.addEventListener("click", changeOlive);
skyblue.addEventListener("click", changeSkyblue);
rebeccapurple.addEventListener("click", changeRebeccapurple);
ul.addEventListener("click", changeColor);


// Event Handlers

function changeColor(event) {		
	console.log("ChangeColor", event);
	console.log("class", event.target.className);
	// body.className = event.target.className;	

//return early is li element wasn't clicked
	if (event.target.tagName != "LI") {
		return; 
	}

}

// function changeRed() {
// 	body.className = "red";
// }

// function changeOlive() {
// 	body.className = "olive";
// }

// function changeSkyblue() {
// 	body.className = "skyblue";
// }

// function changeRebeccapurple() {
// 	body.className = "rebeccapurple";
// }



