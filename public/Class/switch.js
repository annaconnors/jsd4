var grad = prompt ("what's your grade?");

//Grade

if (grade == "A") {
	console.log("Awesome job!");
}
else if (grade == "B") {
	console.log("Good job!");
}
else {
	console.log("error: unknown grade");
}


switch(Grade1) {
	case "A": 
		console.log("Awesome job!");
		break;
	case "B":
		console.log("Good job!");
		break;
	case "C":
		console.log("Try harder");
		break;
	default: 
	console.log("error: unknown grade");		

}


switch(grade) {
	case "A":
	case "B":
	case "C":
	case "D":
		console.log("Pass");
		break;
	case "F":
		console.log("Fail");
		break;
	default:
		console.log("error: unknown grade");		


}


//setTimeout(changeGreen, 3000);
//setInterval(changeYellow, 2000);

var color = "red";
setInterval(changeColor, 2000);

function changeColor() {
	if (color == "red") {
		color = changeGreen();
	} else if (color == "green") {
		color = changeYellow (); 
	} else if (color == "yellow") {
		color = changeRed();
	}
}

function changeGreen() {
	console.log("Green");
}

function changeYellow( ) {
	console.log("Yellow");
}

function changeRed() {
	console.log("Red");
}


function start ( ) {
	var timeId = setInterval(changeColor, 2000);
}

function stop ( ) {
	var clearInterval(timeId); 

}

function nightMode () {
	if (color = "yellow") {
		changeOff();
	else {
		changeYellow(); 
	}
}

function flash () {
	stop (); 
	flashId = setInterval(nightMode, 1500); 

}

function changeOff() {
	console.log("Off");
	return "off";
}
