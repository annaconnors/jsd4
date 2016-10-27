// establish connection with firebase

var json = {
	color: "red",
	colors: [
		"red",
		"olive",
		"rebeccapurple",
		"skyblue"
	]
};


var ref = new Firebase("https://jsd4-intro-54182.firebaseio.com");

//elements

var button = document.querySelector("button");

//events

button.addEventListener('click', saveChanges);

function saveChanges(e) {
	console.log('saveChanges');

	ref.set(json);


}


ref.on('value', updateApp); 

function updateApp(snapshot) {
	console.log(snapshot.val());

	document.body.style.background = value.active; 


}


