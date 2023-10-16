//const => constant variable 
// let => reassigned variable
const word = "This is my favourite number!"; 
let number = 56;


//render javascript variables onto the html page
document.getElementById("primary-number").innerHTML = number;
document.getElementById("primary-string").innerHTML = word;


//Number methods
// Is the number an integer => True or False
document.getElementById("integer").innerHTML = Number.isInteger(parseFloat(number));

//Is the number finite => True or False
let isFiniteNumber = Number.isFinite(number);
document.getElementById("finite").innerHTML = isFiniteNumber;

//Round the number to the nearest integer
document.getElementById("round").innerHTML = Math.round(number);


//String Methods
//show last character in word
document.getElementById("last-letter").innerHTML = word.charAt(word.length - 1);

//show first character in word
document.getElementById("first-letter").innerHTML = word.charAt(0)

//substring 5-12
document.getElementById("substring").innerHTML = word.substring(5,12)

// Convert the string to uppercase
UpperCase = word.toUpperCase();
document.getElementById("uppercase").innerHTML = UpperCase
