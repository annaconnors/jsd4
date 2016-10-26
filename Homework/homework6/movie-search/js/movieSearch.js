// Setup
// ----------------------------------------------

var searchForm = document.querySelector(".search");

var detailResults = document.querySelector(".details");

var resultsResults = document.querySelector(".results");


// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------


form.addeventListener('submit',showResults);


document.getElementById("results").addEventListener("click",function(e) {
	if(e.target && e.target.nodeName == "LI") {
		console.log("List item"), e.target.id.replace("post-", ""), " was clicked!"); 
	}
});

// Event handlers
// ----------------------------------------------

var showResults = 

// Update page
// ----------------------------------------------
