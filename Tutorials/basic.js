var person = {
	firstName: "Alfonso",
	lastName: "Reyna",
	age: 23
};

console.log(person);

function addNumber(a, b) {
	return a + b;
}

// 10
console.log(addNumber(7, 3));

function worthless() {
}

// Undefined
console.log(worthless());

// Anonymus function
var printBacon = function() {
	console.log("Bacon is healthy, ... , for cancer.")
};

printBacon();

// Waits 5 seconds
setTimeout(printBacon, 5000);

var Bucky = {
	printFristName: function () {
		console.log("My name is Bucky");
		console.log(this === Bucky);
	}
};

Bucky.printFristName();

// The default calling context is global 
function doSomethingWorthless () {
	console.log("\nHe is worthless");
	console.log(this === Bucky);  // False
	console.log(this === global); // True 
}

doSomethingWorthless();