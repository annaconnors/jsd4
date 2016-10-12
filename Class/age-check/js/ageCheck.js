// Structure
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {
	p.innerHTML = privilege
}




// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here
function getPrivilege(age) { 

	switch(true) {
		case age < 16:
			return "You cannot do much outside of going to school";
		case age > 16 && age <= 18:
			return "You can drive";
		case age > 18 && age <= 20:
			return "You can vote";
		case age >= 21 && age < 25:
			return "You can drink alcohol";
		case age >= 25 && age < 32:
			return "You can rent a car";
		case age >= 33 && age < 65:
			return "You can run for president";
		default:
			return "You collect social security benefits";					
	}		
}
