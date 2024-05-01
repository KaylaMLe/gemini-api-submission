import { Person } from './alltypes';

// Define a function to create a person object
function createPerson(name: string, age: number, isStudent: boolean): Person {
	return {
		name,
		age,
		isStudent,
	};
}

// Define a function to get the type of a variable
function getType(variable: any): string {
	return typeof variable;
}

// Define a function to perform addition
function add(a: number, b: number): number {
	return a + b;
}

// Define a function to concatenate strings
function concatenateStrings(a: string, b: string): string {
	return a + b;
}

// Main function
function main(): void {
	// Create a person object
	const person: Person = createPerson('John', 25, true);

	// Print person details
	console.log('Person:', person);

	// Perform addition
	const sum: number = add(5, 3);
	console.log('Sum:', sum);

	// Concatenate strings
	const concatenatedString: string = concatenateStrings('Hello, ', 'world!');
	console.log('Concatenated String:', concatenatedString);

	// Get type of variables
	console.log('Type of person:', getType(person));
	console.log('Type of sum:', getType(sum));
	console.log('Type of concatenatedString:', getType(concatenatedString));
}

// Call the main function
main();
