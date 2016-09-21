
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

function calcFahrenheitToCelcius (x) {
	var fahrenheitCalc = (x-32) * (5/9)
	console.log(x)
	console.log(fahrenheitCalc)
	return fahrenheitCalc

}

function calcCelciusToFarenheit (y) {
	var celciusCalc = y * (9/5) + 32
	console.log(y)
	console.log(celciusCalc)
	return celciusCalc

}

function calcCircumference (r) {
	var calcCirc = 2 * Math.PI * r
	console.log(r)
	console.log(calcCirc)
	return calcCirc 

}

function calcLongestSide (a,b) {
	var pythCalc = Math.sqrt((a *a) + (b * b))
	console.log(a)
	console.log(b)
	console.log(pythCalc)
	return pythCalc

}
