var flight = {
	origin: "SFO",
	destination: "DEN",
	wifi: false,
	distance: 880,
	status: "delayed"
};

var numbers = [1,2,3,5,8,13];

var colors = ["red", "green", "white"];

var car = {
	make: "Subaru",
	model: "Forester",
	year: 2013,
	color: "green",
	insurance: {
		provider: "Geico",
		policy: 3487654
	},
	miles: 45700, 
	on: false, 
	speed: 0, 
	addMile: function() {
		this.miles++;
	},
	start: function() {
		this.on = true;
	}

}

for (i in car) {
	console.log(i);
}


var recipe = {
	protein: "pieces of chicken",
	side: "cups of rice and beans",
	vegetable: "cups of broccoli",
	feeds: 4,
	scaleRecipe: function() {
		this.protein * diners;
		this.side * diners;
		this.vegetable * diners; 
	}

}



var computerGame = {
	commander: {
		position: 2
		moveUp: function() {
			position++;
		},
		moveDown: function() {
			position--;
		},
	},
	general: {
		position: 4

	}

}

var hotelWebsite = {
	reservations: {
		number: 124354,
		arrivalDate: "10/18/16",
		roomType: "Suite"
	},
	reservation2: {
		number: 7387298,
		arrivalDate: "10/20/16",
		roomType: "Deluxe Suite"
	}
}

 // A user who had reserved a Zipcar arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.

// var zipcar1 = {
//     status: "not available",
//     pickup: function(){
//         if (this.status == "not available") {
//             return "Car not available. Call customer service & complain";
//         }
//         if (this.status == "available") {
//             this.status = "in use";
//             return "Off you go!";
//         }
//     },
//     return: function(){
//         if (this.status == "in use") {
//             this.status = "available";
//             return "Hope you had a nice ride!";
//         }
//         else return "You are not driving";
//     }
// };

var zipcar2 = {
    status: "available",
    pickup: function(){
        if (this.status == "not available") {
            return "Car not available. Call customer service & complain.";
        }
        if (this.status == "available") {
            status = "in use";
            return "Off you go!";
        }
    },
    return: function(){
        if (this.status == "in use") {
            this.status = "available";
            return "Hope you had a nice ride!";
        }
        else return "You are not driving";
    }

};

var zipcars = [zipcar1, zipcar2];

var reservation = {
    zipcar: zipcars[0],
    transfer: function(){
        this.zipcar = zipcars[1];
        return "You're all set sir, thank you for being a loyal customer";
    }
};

var person = {
    firstname: "Bob",
    lasname: "Boberson",
    plan: "Get to band practice",
    reservation: reservation,
    pickup: function(){
        return this.reservation.zipcar.pickup();
    },
    complain: function() {
        return this.reservation.transfer();
    },
    return: function() {
        return this.reservation.zipcar.return();
    }
}

//constructor
var Zipcar = function(){
	this.status: "not available";
}

//prototype
Zipcar.prototype = {
	pickup: function() {
        if (this.status == "not available") {
            return "Car not available. Call customer service & complain.";
        }
        if (this.status == "available") {
            status = "in use";
            return "Off you go!";
        }
    },
    return: function() {
        if (this.status == "in use") {
            this.status = "available";
            return "Hope you had a nice ride!";
        }
        else return "You are not driving";
    }

};

var zipcar1 = new Zipcar 

