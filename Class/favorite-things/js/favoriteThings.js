// Elements
// ------------------------------------------
var form = document.querySelector("body form");

var things = document.querySelector(".things"); 

var thing = document.querySelector(".new-thing");

// Events
// ------------------------------------------
form.addEventListener('submit', createThing);


// Update page
// ------------------------------------------
function createThing(e) {
	e.preventDefault();
	console.log('createThing');

	// TODO: take value typed into input box and 
	// add to list
	console.log(thing);
	console.log(thing.value);

	//step 1 - create the element
	var li = document.createElement("li")

	//step 2 - add content & attributes 
	li.innerHTML = thing.value;

	things.appendChild(li);

	thing.value = " "; 

}




