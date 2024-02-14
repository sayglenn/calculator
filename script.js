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

function reduceNumber(number) {
    if (number > 999999999) {
        let counter = 0;
        while (number.toString().length > 7) {
            number = Math.floor(number / 10);
            counter++;
        }
        let result = number * Math.pow(10, counter)
        return (number * Math.pow(10, counter)).toExponential();
    } else {
        let curr = Math.floor(number);
        let currString = curr.toString();
        let counter = 0;
        while (currString.length < 7) {
            number = number * 10;
            curr = Math.floor(number);
            console.log(curr);
            currString = curr.toString();
            counter += 1;
        } 
        return curr / Math.pow(10, counter);
    }
}
    

let firstInput = 0;
let secondInput = 0;
let currOperator = "";
let dotCounter = 1;

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
            const numStringOne = firstInput.toString();
            if (numStringOne.length < 11 || !numStringOne.includes("e")) {
                firstInput = firstInput * 10 + stringToNum(num.id);
                displayValue.textContent = firstInput;
            }
        } else {
            const numStringTwo = secondInput.toString();
            if (numStringTwo.length < 11 || !numStringTwo.includes("e")) {
                secondInput = secondInput * 10 + stringToNum(num.id);
                displayValue.textContent = secondInput;
            }
        }
    }));

const operatorsArray = document.querySelectorAll(".operator");
operatorsArray.forEach(operator =>
    operator.addEventListener("click", () => {
        if (currOperator == "") {
            currOperator = operator.id;
            operationPreview.textContent = firstInput + " " + stringToOp(currOperator) + " ";
            displayValue.textContent = secondInput;
            dotCounter = 1;
        } else {
            equalButton.click();
            currOperator = operator.id;
            operationPreview.textContent = firstInput + " " + stringToOp(currOperator) + " "
            secondInput = 0;
            dotCounter = 1;
            displayValue.textContent = secondInput;
        }
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
        if (firstInput.toString().includes("e")) {
            firstInput = Math.floor(firstInput / 10);
            if (firstInput > 999999999) {
                firstInput = firstInput.toExponential();
            }
            displayValue.textContent = firstInput;
        } else {
            firstInput = firstInput.toString();
            firstInput = firstInput.substring(0, firstInput.length - 1);
            displayValue.textContent = Number(firstInput);
        }
    } else {
        if (secondInput.toString().includes("e")) {
            secondInput = Math.floor(secondInput / 10);
            if (secondInput > 999999999) {
                secondInput = secondInput.toExponential();
            }
            displayValue.textContent = secondInput;
        } else {
            firstInput = firstInput.toString();
            firstInput = firstInput.substring(0, firstInput.length - 1);
            displayValue.textContent = Number(firstInput);
        }
    }
})

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    if (currOperator == "") {
        // 
    } else {
        if (currOperator == "add") {
            firstInput = add(firstInput, secondInput);
            firstInput = reduceNumber(firstInput);
            displayValue.textContent = firstInput;
            secondInput = 0;
            currOperator = "";
            dotCounter = 1;
            operationPreview.textContent = "\u00A0";
        } else if (currOperator == "subtract") {
            firstInput = subtract(firstInput, secondInput);
            firstInput = reduceNumber(firstInput);
            displayValue.textContent = firstInput;
            secondInput = 0;
            currOperator = "";
            dotCounter = 1;
            operationPreview.textContent = "\u00A0";
        } else if (currOperator == "multiply") {
            firstInput = multiply(firstInput, secondInput);
            firstInput = reduceNumber(firstInput);
            displayValue.textContent = firstInput;
            secondInput = 0;
            currOperator = "";
            dotCounter = 1;
            operationPreview.textContent = "\u00A0";
        } else {
            if (secondInput !== 0) {
                firstInput = divide(firstInput, secondInput);
                firstInput = reduceNumber(firstInput);
                displayValue.textContent = firstInput;
                secondInput = 0;
                currOperator = "";
                dotCounter = 1;
                operationPreview.textContent = "\u00A0";
            } else {
                alert("You cannot divide by 0!");
            }
        }
    }
})

const nothing = document.querySelector(".nothing");
nothing.addEventListener("click", () => 
    window.open("https:www.github.com/sayglenn", "_blank"));
