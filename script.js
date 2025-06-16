function toCase(text) {
  // write your code here
	let textInLower = text.toLowerCase();
	let textInUpper = text.toUpperCase();

	return `${textInLower}-${textInUpper}`
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
