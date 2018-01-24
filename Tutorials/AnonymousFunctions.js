/** Places an order
*/
function placeAnOrder (orderNumber) {

	console.log("Customer order; ", orderNumber);

	cookAndDeliverFood(function ()  {

		// When the function finishes their action
		console.log("Delivered food order:", orderNumber);

	});

}

// Simulate a 5 second operation
function cookAndDeliverFood (callback) {

	// Sends callback after 5 seconds
	setTimeout(callback, 5000);

}

// Simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);

// Compare only values
console.log(19 == '19'); // true

// Compare values and types
console.log(19 === '19'); // false
