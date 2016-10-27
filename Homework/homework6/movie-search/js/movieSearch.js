// Setup
// ----------------------------------------------

var form = document.querySelector("form");

var search = document.querySelector(".search");

var details = document.querySelector(".details");

var results = document.querySelector(".results");


// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------


form.addEventListener('submit',getResults);

results.addEventListener('click', detailsShown);


// document.getElementById("results").addEventListener("click",function(e) {
// 	if(e.target && e.target.nodeName == "LI") {
// 		console.log("List item"), e.target.id.replace("post-", ""), " was clicked!"); 
// 	}
// });

// Event handlers
// ----------------------------------------------


function detailsShown(event) {
	var li = event.target.closest("li");
	console.log(li); 
	console.log(event.target); 
}


function getResults(event) {
	event.preventDefault(); 

	var searchMovies = movies.value;
	console.log(searchMovies);

	var url = "http://www.omdbapi.com/?s=" + searchMovies; 

	$.getJSON(url, showResults);
}

function showResults(id) {
	console.log('showResults', id); 

	var display = id.value; 
	console.log(display); 

	var query = "http://www.omdbapi.com/?i=" + id; 

	$.getJSON(query, showResults); 

}




// Update page
// ----------------------------------------------
