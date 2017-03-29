
// Calculate the average price of all items. Answer is 23.63 Done!
// Get an array of items that cost between $14.00 and $18.00 USD Done!
// Which item has a "GBP" currency code? Display its name and price. Done!
// Display a list of all items which are made of wood.
// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
// How many items were made by their sellers?



// calculate the average price of all items 

var items = require('./esty.js');
// console.log(items[0].price)


function price(item){
	return item.price
}
var myPriceArray = items.map(price)

// console.log(myArray)
var sum = myPriceArray.reduce(add, 0);

function add(a, b) {
    return a + b;
}
// console.log(sum)

var average = sum / items.length;
// console.log('The average price is ' , average); This is the answer 


// Get an array of items that cost between $14.00 and $18.00 USD

 let costBetween = items.filter(item => item.price > 13.99 && item.price < 19);

	// console.log(costBetween)

	function  nameOfItem (name){
		return name.title
	}

	var namesOfItems = costBetween.map( nameOfItem  )

	// console.log('The names of the movies that cost more than 14 but less than 19 ' , namesOfItems) This is the answer


	// Which item has a "GBP" currency code? Display its name and price.

// function currencyCode(currencies) {
// 	return currencies.currency_code
// }

var allCurrencyArray = items.filter(item => item.currency_code === "GBP")

 // console.log("This is the items with the currency code of GBP" , allCurrencyArray) This is the answer

// function onlyGBP (Gbp){
// 	return Gbp.
// }

// var gbpCurrency = allCurrencyArray.filter(onlyGBP)

// console.log(gbpCurrency)










// Display a list of all items which are made of wood.

function materialArray(material){
	return material.materials
}

// console.log(materialArray);

var allMaterialArrays = items.filter(materialArray)

// console.log(allMaterialArrays)

var allWoodenArrays = allMaterialArrays.filter(item => item.materials == "wood")

// console.log(allWoodenArrays)

var answer = allWoodenArrays.forEach( item => item.title == "wood")

console.log(answer)


// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

















// How many items were made by their sellers?













