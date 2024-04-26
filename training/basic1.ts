// Function to demonstrate basic functionality with numbers
function numberDemo(): void {
	// Declaring variables of type number
	let integerNumber: number = 10;
	let floatingPointNumber: number = 3.14;

	// Basic arithmetic operations
	let sum: number = integerNumber + floatingPointNumber;
	let difference: number = integerNumber - floatingPointNumber;
	let product: number = integerNumber * floatingPointNumber;
	let quotient: number = integerNumber / floatingPointNumber;

	// Outputting results
	console.log('Sum:', sum);
	console.log('Difference:', difference);
	console.log('Product:', product);
	console.log('Quotient:', quotient);
}

// Function to demonstrate basic functionality with strings
function stringDemo(): void {
	// Declaring variables of type string
	let firstName: string = 'John';
	let lastName: string = 'Doe';

	// Concatenating strings
	let fullName: string = firstName + ' ' + lastName;

	// Outputting result
	console.log('Full Name:', fullName);
}

// Function to demonstrate basic functionality with booleans
function booleanDemo(): void {
	// Declaring variables of type boolean
	let isTrue: boolean = true;
	let isFalse: boolean = false;

	// Using boolean operators
	let resultAnd: boolean = isTrue && isFalse;
	let resultOr: boolean = isTrue || isFalse;
	let resultNot: boolean = !isTrue;

	// Outputting results
	console.log('Result of AND operation:', resultAnd);
	console.log('Result of OR operation:', resultOr);
	console.log('Result of NOT operation:', resultNot);
}

// Function to demonstrate basic functionality with arrays
function arrayDemo(): void {
	// Declaring variables of type array
	let numbers: number[] = [1, 2, 3, 4, 5];
	let strings: string[] = ['apple', 'banana', 'orange'];
	let mixedArray: (number | string)[] = [1, 'two', 3, 'four'];

	// Accessing elements of arrays
	console.log('First element of numbers array:', numbers[0]);
	console.log('Second element of strings array:', strings[1]);
	console.log('Third element of mixedArray:', mixedArray[2]);
}

// Function to demonstrate basic functionality with objects
function objectDemo(): void {
	// Declaring variables of type object
	let person: { name: string; age: number; } = { name: 'Alice', age: 30 };
	let car: { brand: string; model: string; year: number; } = { brand: 'Toyota', model: 'Camry', year: 2020 };

	// Accessing properties of objects
	console.log('Person:', person);
	console.log('Car:', car);
}

// Function returning a number
function addNumbers(a: number, b: number): number {
	return a + b;
}

// Function returning a string
function greet(name: string): string {
	return `Hello, ${name}!`;
}

// Function returning a boolean
function isEven(num: number): boolean {
	return num % 2 === 0;
}

// Function returning an array of numbers
function generateNumbers(count: number): number[] {
	const numbers: number[] = [];

	for (let i = 1; i <= count; i++) {
		numbers.push(i);
	}

	return numbers;
}

// Function returning an object
function createPerson(name: string, age: number): { name: string; age: number; } {
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
