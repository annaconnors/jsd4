//set up

var counter = 0;

// elements 
var main = document.querySelector("main");

var p = document.createElement("p"); 
p.innerHTML = counter; 
main.appendChild(p); 

//create event

var me = document.createEvent("MouseEvent");
me.initEvent("click")

p.addEventListener("click", clickCircle);

function clickCircle(event) {

	console.log(event);
	console.log("type", event.type);
	console.log("target", event.target );
	console.log("content", counter); 

	console.log("clickCircle");
	counter++
	p.innerHTML = counter; 

	console.log("count", counter);
}




//listen for an event
//main.addEventListener("click", count);
