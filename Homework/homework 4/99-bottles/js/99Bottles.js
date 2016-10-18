// Elements
// ------------------------------------------

var ul = document.querySelector(".bottles-of-beer");

function playSong(bottle) {
	var li = document.createElement("li");
	if (bottle == 1) {
		 var lyric = bottle + " bottle of beer on the wall, " + bottle + " bottle of beer. <br>" +
        "Take one down and pass it around, no more bottles of beer on the wall."
    }
	else if (bottle == 0) {
		var lyric = "No more bottles of beer on the wall, no more bottles of beer. <br>" +
        "Go to the store and buy some more, 99 bottles of beer on the wall."
	}
	else {
        var lyric = bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. <br>" +
        "Take one down and pass it around, " + (bottle - 1) + " bottles of beer on the wall."
    }
 	li.innerHTML = phrase;
    ul.appendChild(li);

}

for (var i = 99; i > -1; i--) {
	playSong(i); 
}


// Update page
// ------------------------------------------

console.log("99 bottles of beer on the wall!");