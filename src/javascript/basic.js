let whichHello = 0;

function checkSize(num) {	
	let sizeResult;
	if (num < 10) {
		sizeResult = "small";
	} else if (num >= 10 && num <= 19) {
	 	sizeResult = "med";
	} else if (num > 19) {
		sizeResult = "large";
    } else {
		sizeResult = "N/A - Are you sure you keyed the number?"
	}
	return sizeResult;
}

function changeTitle() {
	if (whichHello === 0) {
		document.getElementById("helloTitle").textContent = "Hello Thailand";
		whichHello = 1;
	} else if (whichHello === 1) {
		document.getElementById("helloTitle").textContent = "Hello Canada";
		whichHello = 2;
	} else {
		document.getElementById("helloTitle").textContent = "Hello World from inline JavaScript";
		whichHello = 0;
	};
}

function addNumber() {
	let textInput = document.getElementById("textbox").value;
	let sum;
	let result;
	//console.log(!isNaN(Number(textInput)));
	if (!isNaN(Number(textInput))) {
		sum = Number(textInput) + 1;
		result = checkSize(textInput);
		console.log(textInput + " + 1 = " + sum);
		console.log("The result is " + result);	
	} else {
		console.log("Sorry, " + textInput + " is not a number.");
	}	
}

console.log("Hello World from basic.js");
document.getElementById("button").addEventListener("click", addNumber);
document.getElementById("helloTitle").addEventListener("mouseover", changeTitle);

// when you press enter after you key in textbox
