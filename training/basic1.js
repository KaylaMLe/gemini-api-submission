// Function to demonstrate basic functionality with numbers
function numberDemo() {
	// Declaring variables of type number
	let integerNumber = 10;
	let floatingPointNumber = 3.14;

	// Basic arithmetic operations
	let sum = integerNumber + floatingPointNumber;
	let difference = integerNumber - floatingPointNumber;
	let product = integerNumber * floatingPointNumber;
	let quotient = integerNumber / floatingPointNumber;

	// Outputting results
	console.log('Sum:', sum);
	console.log('Difference:', difference);
	console.log('Product:', product);
	console.log('Quotient:', quotient);
}

// Function to demonstrate basic functionality with strings
function stringDemo() {
	// Declaring variables of type string
	let firstName = 'John';
	let lastName = 'Doe';

	// Concatenating strings
	let fullName = firstName + ' ' + lastName;

	// Outputting result
	console.log('Full Name:', fullName);
}

// Function to demonstrate basic functionality with booleans
function booleanDemo() {
	// Declaring variables of type boolean
	let isTrue = true;
	let isFalse = false;

	// Using boolean operators
	let resultAnd = isTrue && isFalse;
	let resultOr = isTrue || isFalse;
	let resultNot = !isTrue;

	// Outputting results
	console.log('Result of AND operation:', resultAnd);
	console.log('Result of OR operation:', resultOr);
	console.log('Result of NOT operation:', resultNot);
}

// Function to demonstrate basic functionality with arrays
function arrayDemo() {
	// Declaring variables of type array
	let numbers = [1, 2, 3, 4, 5];
	let strings = ['apple', 'banana', 'orange'];
	let mixedArray = [1, 'two', 3, 'four'];

	// Accessing elements of arrays
	console.log('First element of numbers array:', numbers[0]);
	console.log('Second element of strings array:', strings[1]);
	console.log('Third element of mixedArray:', mixedArray[2]);
}

// Function to demonstrate basic functionality with objects
function objectDemo() {
	// Declaring variables of type object
	let person = { name: 'Alice', age: 30 };
	let car = { brand: 'Toyota', model: 'Camry', year: 2020 };

	// Accessing properties of objects
	console.log('Person:', person);
	console.log('Car:', car);
}

// Function returning a number
function addNumbers(a, b) {
	return a + b;
}

// Function returning a string
function greet(name) {
	return `Hello, ${name}!`;
}

// Function returning a boolean
function isEven(num) {
	return num % 2 === 0;
}

// Function returning an array of numbers
function generateNumbers(count) {
	const numbers = [];

	for (let i = 1; i <= count; i++) {
		numbers.push(i);
	}

	return numbers;
}

// Function returning an object
function createPerson(name, age) {
	return { name, age };
}

// Function calls to demonstrate each data type
numberDemo();
stringDemo();
booleanDemo();
arrayDemo();
objectDemo();

// Testing the functions
console.log('Sum of 5 and 3:', addNumbers(5, 3));
console.log(greet('Alice'));
console.log('Is 10 even?', isEven(10));
console.log('First 5 numbers:', generateNumbers(5));
console.log('Person:', createPerson('Bob', 25));
