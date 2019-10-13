import functions from './functions.js';

// **********
//

// Add the event listeners
// 
// =======Larry's code=======
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// ======= Exercise - Calculator: Summary button =======
let num1;
let num2;
let result;

sumBtn.addEventListener('click', (() => {
    if (num1 === "blank") {
        showResult.textContent = "You need a first value";
    } else if (num2 === "blank") {
        showResult.textContent = "You need a second value";
    } else if (isNaN(num1) || isNaN(num2)) {
        showResult.textContent = "The input should be a number";
    } else if (showOperators.textContent === "") {
        showResult.textContent = "Please choose an operator";
    } else {
        num1 = Number(num1);
        num2 = Number(num2);

        switch (showOperators.textContent) {
            case "+":
                result = functions.add(num1, num2);
                showResult.textContent = `${num1} + ${num2} = ${result}`;
                break;
            case "-":
                result = functions.subtract(num1, num2)
                showResult.textContent = `${num1} - ${num2} = ${result}`;
                break;
            case "x":
                result = functions.multiply(num1, num2);
                showResult.textContent = `${num1} x ${num2} = ${result}`;
                break;
            case "÷":
                result = functions.divide(num1, num2)
                showResult.textContent = `${num1} ÷ ${num2} = ${result}`;
                if (num2 === 0) {
                    showResult.textContent = "You cannot have second value \= 0";
                }
                break;

            default:
                break;
        }
        clear();
    }
}));

// ======= Exercise - Calculator: fancy stuff (Not necessary) =======
const clear = (str) => {
    value1.focus();
    showValue1.textContent = "";
    showValue2.textContent = "";
    showOperators.textContent = "";
    value1.value = "";
    value2.value = "";
    valueContainer1.style.borderColor = "gray";
    valueContainer2.style.borderColor = "transparent";
    operationsContainter.style.borderColor = "transparent";
    sumBtn.style.borderColor = "transparent";
};

const operatorChoosen = (key) => {
    let returnFocus;
    if (key === 13) {
        returnFocus = value2.focus();
    } else if (key === 43) {
        returnFocus = addBtn.focus();
    } else if (key === 45) {
        returnFocus = subtractBtn.focus();
    } else if (key === 42) {
        returnFocus = multiplyBtn.focus();
    } else if (key === 47) {
        returnFocus = divideBtn.focus();
    }
    return returnFocus;
}

value1.addEventListener('focusin', (() => {
    valueContainer1.style.border = "2px dashed gray";
    operationsContainter.style.borderColor = "transparent";
}));

value1.addEventListener('focusout', (() => {
    valueContainer1.style.borderColor = "transparent";
}));

value1.addEventListener('keyup', (() => {
    if (value1.value === "") {
        showValue1.textContent = "";
        num1 = "blank";
        console.log(num1)
    } else {
        num1 = value1.value;
        showValue1.textContent = num1;
    }
}));

value1.addEventListener('keypress', (() => {
    if (event.keyCode === 13) {
        addBtn.focus();
    } 
}));

value2.addEventListener('focusin', (() => {
    valueContainer2.style.border = "2px dashed gray";
    operationsContainter.style.borderColor = "transparent";
}));

value2.addEventListener('focusout', (() => {
    valueContainer2.style.borderColor = "transparent";
}));

value2.addEventListener('keyup', (() => {
    if (value2.value === "") {
        showValue2.textContent = "";
        num2 = "blank";
    } else {
        num2 = value2.value;
        showValue2.textContent = num2;
    }
}));

value2.addEventListener('keypress', (() => {
    if (event.keyCode === 13) {
        sumBtn.focus();
    } 
}));

addBtn.addEventListener('focusin', (() => {
    showOperators.textContent = "+";
    operationsContainter.style.border = "2px dashed gray";    
}));

addBtn.addEventListener('keypress', (() => {
    operatorChoosen(event.keyCode);
}));


subtractBtn.addEventListener('keypress', (() => {
    operatorChoosen(event.keyCode);
}));

multiplyBtn.addEventListener('keypress', (() => {
    operatorChoosen(event.keyCode);
}));

divideBtn.addEventListener('keypress', (() => {
    operatorChoosen(event.keyCode);
}));

subtractBtn.addEventListener('focusin', (() => {
    showOperators.textContent = "-";
    operationsContainter.style.border = "2px dashed gray";
}));

multiplyBtn.addEventListener('focusin', (() => {
    showOperators.textContent = "x";
    operationsContainter.style.border = "2px dashed gray";
}));

divideBtn.addEventListener('focusin', (() => {
    showOperators.textContent = "÷";
    operationsContainter.style.border = "2px dashed gray";
}));

sumBtn.addEventListener('focusin', (() => {
    sumBtn.style.border = "2px dashed gray";
}));

// ======= Exercise - Calculator: Summary button =======
taxBtn.addEventListener('click', (() => {
    let tax1;
    tax1 = income.value;
    tax1 = tax1.replace(/[,$]/g, '')
    showTax.value = functions.tax(tax1);
}));