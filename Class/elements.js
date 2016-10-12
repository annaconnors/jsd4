console.log("Elements");

//get the ul from the dom
var brands = document.querySelector(".brands");

//create a new li element
var li = document.createElement("li")

//add the new li to the dom 
li.innerHTML = "japan"

//set the text content of the new li 
brands.appendChild(li); 