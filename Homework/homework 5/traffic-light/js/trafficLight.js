// Setup
// ----------------------------------------------

var stopLight = document.querySelector(".control.stop-button");

var slowLight = document.querySelector(".control.slow-button");

var goLight = document.querySelector (".control.go-button");

var cautionLight = document.querySelector (".control.caution-button");

var trafficLight = document.querySelector ("#traffic-light");

// Structure
// ----------------------------------------------

var timer;

stopLight.addEventListener("click", redLight);
function redLight() {
	console.log("redLight");
	clearInterval(timer);
	trafficLight.classList.add("stop");
	trafficLight.classList.remove("slow","go");

}

slowLight.addEventListener("click", yellowLight);
function yellowLight() {
	console.log("yellowLight");
	clearInterval(timer);
	trafficLight.classList.add("slow");
	trafficLight.classList.remove("stop","go");
}


goLight.addEventListener("click", greenLight);
function greenLight() {
	console.log("greenLight");
	clearInterval(timer);
	trafficLight.classList.add("go");
	trafficLight.classList.remove("slow","stop");
}

cautionLight.addEventListener("click", carefulLight);
function carefulLight() {
	console.log("carefulLight");
	trafficLight.classList.add("slow");
	trafficLight.classList.remove("go","stop");
	timer = setInterval(yellowBlink, 2000)
}

function yellowBlink () {
		trafficLight.classList.toggle("slow");
		console.log("slow")

	}



// Events
// ----------------------------------------------


// Event handlers
// ----------------------------------------------
