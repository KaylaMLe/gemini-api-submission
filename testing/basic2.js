// Define a function to create a person object
function createPerson(name, age, isStudent) {
	return {
		name,
		age,
		isStudent,
	};
}

// Define a function to get the type of a variable
function getType(variable) {
	return typeof variable;
}

// Define a function to perform addition
function add(a, b) {
	return a + b;
}

// Define a function to concatenate strings
function concatenateStrings(a, b) {
	return a + b;
}

// Main function
function main() {
	// Create a person object
	const person = createPerson('John', 25, true);

	// Print person details
	console.log('Person:', person);

	// Perform addition
	const sum = add(5, 3);
	console.log('Sum:', sum);

	// Concatenate strings
	const concatenatedString = concatenateStrings('Hello, ', 'world!');
	console.log('Concatenated String:', concatenatedString);

	// Get type of variables
	console.log('Type of person:', getType(person));
	console.log('Type of sum:', getType(sum));
	console.log('Type of concatenatedString:', getType(concatenatedString));
}

// Call the main function
main();
