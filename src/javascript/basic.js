function size(textValue) {
	if (textValue.length === 0) {
		return "You haven't key anything";
	} else if (Number(textValue) < 10) {
		return "small";
	} else if (Number(textValue) >= 10 && textValue <= 19) {
		return "med";
	} else if (Number(textValue) >= 20) {
		return "large";
	} else if (isNaN(Number(textValue))) {
		return textValue + " is not a number.";
	}
}

function changeTitle(indexTitle) {
	if (indexTitle === 0) {
		return [1, "Hello Thailand"];
	} else if (indexTitle === 1) {
		return [2, "Hello Canada"];
	} else {
		return [0, "Hello World from inline JavaScript"];
	};
}

let indexTitle = 0;

idButton.addEventListener("click", (() => {
	resultText1.textContent = size(idTextbox.value);
}));

helloTitle.addEventListener("mouseover", (() => {
	const result = changeTitle(indexTitle);
	indexTitle = result[0];
	helloTitle.textContent = result[1];
}));