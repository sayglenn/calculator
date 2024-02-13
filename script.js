function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let firstInput = 0;
let secondInput = 0;
let currOperator = "";

const numDictionary = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "zero": 0,
}

const opDictionary = {
    "add": "+",
    "subtract": "-",
    "multiply": "×",
    "divide": "÷",
}

function stringToNum(string) {
    return numDictionary[string];
}

function stringToOp(string) {
    return opDictionary[string];
}

const displayValue = document.querySelector(".display-value");
const operationPreview = document.querySelector(".operation-preview");

const numbersArray = document.querySelectorAll(".number");
numbersArray.forEach(num => 
    num.addEventListener("click", () => {
        if (currOperator == "") {
            const numString = firstInput.toString();
            if (numString.length < 11) {
                firstInput = firstInput * 10 + stringToNum(num.id);
                displayValue.textContent = firstInput;
            }
        } else {
            secondInput = secondInput * 10 + stringToNum(num.id);
            displayValue.textContent = secondInput;
        }
    }));

const operatorsArray = document.querySelectorAll(".operator");
operatorsArray.forEach(operator =>
    operator.addEventListener("click", () => {
        currOperator = operator.id;
        operationPreview.textContent = firstInput + " " + stringToOp(currOperator) + " ";
    }))

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    firstInput = 0;
    currOperator = "";
    displayValue.textContent = "0";
    operationPreview.textContent = '\u00A0';
})

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
    if (currOperator == "") {
        firstInput = Math.floor(firstInput / 10);
        displayValue.textContent = firstInput;
    } else {
        secondInput = Math.floor(secondInput / 10);
        displayValue.textContent = secondInput;
    }
})

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    if (currOperator == "") {
        // 
    } else {
        if (currOperator == "add") {
            firstInput = add(firstInput, secondInput);
            displayValue.textContent = firstInput;
            secondInput = 0;
            currOperator = "";
            operationPreview.textContent = "\u00A0";
        } else if (currOperator == "subtract") {
            firstInput = subtract(firstInput, secondInput);
            displayValue.textContent = firstInput;
            secondInput = 0;
            currOperator = "";
            operationPreview.textContent = "\u00A0";
        } else if (currOperator == "multiply") {
            firstInput = multiply(firstInput, secondInput);
            displayValue.textContent = firstInput;
            secondInput = 0;
            currOperator = "";
            operationPreview.textContent = "\u00A0";
        } else {
            if (secondInput !== 0) {
                firstInput = divide(firstInput, secondInput);
                displayValue.textContent = firstInput;
                secondInput = 0;
                currOperator = "";
                operationPreview.textContent = "\u00A0";
            } else {
                alert("You cannot divide by 0!");
            }
        }
    }
})