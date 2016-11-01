/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

// var monkey1 = {
// 	name: "Boots",
// 	species: "baby monkey",
// 	foodsEaten: "Cheez Its, Goldfish, pretzels",
// 	eatSomething: function(food) {
// 		return "These "+ food +" are yummy"
// 	},
// 	introduce: function(hiThere){
// 		return "Hi, there! My name is " + this.name
// 	}

// };

// var monkey2 = {
// 	name: "Donkey Kong",
// 	species: "big monkey",
// 	foodsEaten: "kale, lettuce, celery",
// 	eatSomething: function(food) {
// 		return "These "+ food +" are yummy"
// 	},
// 	introduce: function(){
// 		return this.name.species.foodsEaten
// 	}

// };

// var monkey3 = {
// 	name: "Curious George",
// 	species: "average sized monkey",
// 	foodsEaten: "skittles, starbursts, sweedish fish",
// 	eatSomething: function(food) {
// 		return "These "+ food +" are yummy"
// 	},
// 	introduce: function(){
// 		return this.name.species.foodsEaten
// 	}

// };

// var monkey = function(){
// 	return "Curious George"; 
// }



//constructor 

function Monkey (name, species, foodsEaten) {
	this.name = name;
	this.species = species;
	this.foodsEaten = [];
};

// prototype

Monkey.prototype = {
	eatSomething: function () {
		console.log("eatSomething", food);
		this.foodsEaten.push(food);
	},
	introduce: function() {
		console.log("fn introduce", this);
		return "My name is " + this.name;
	}
};

var monkey1 = new Monkey("Jack", "Howler");  
var monkey2 = new Monkey("Curious George", "baby monkey");

