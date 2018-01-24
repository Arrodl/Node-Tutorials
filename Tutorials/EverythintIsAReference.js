
// In JavaScript everything is a function
var Bucky = {
	favFood: "bacon",
	favMovie: "Chappie"
};

var Person = Bucky;

// Since it is a reference of Bucky 
// It also changes Bucky´s preferences
Person.favFood = "salad";
console.log(Bucky.favFood);