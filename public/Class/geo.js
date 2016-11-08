
function initMap() {
	console.log('initMap');

}


var button = document.querySelector('button');
var myLocation = document.querySelector('.my-location');

button.addEventListener('click', getPosition);


function getPosition(e){ 
// setup callback when position is determined (use geolocation API)

navigator.geolocation.getCurrentPosition(updateLocation);
}


// callback function
function updateLocation(position){
	console.log('updateLocation');
	console.log(position);


	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude; 

	myLocation.textContext = longitude + ',' + latitude;

}


//google maps api part 1
function createGoogleMap() {

	var el = document.querySelector("#google-map"); 


	var options = {
		center: { lat: -34.397, lng: 150.644},
		zoom: 8
	};

	var map = new google.maps.Map(el, options);	

	var marker = new google.maps.Marker({
		map: map,
		position: { lat: -34.397, lng: 150.644}
	});

}


