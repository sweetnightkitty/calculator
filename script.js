//variables for calculator input
let firstNum = 2;
let operator = "add";
let secondNum = 4;
let number = "first";


const displayValue = document.querySelector(".display");
const btns = document.querySelectorAll(".btn");
const btnNums = document.querySelectorAll(".btn-num");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const equalsBtn = document.querySelector(".equals");
const clear = document.querySelector(".clear");

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const operate = (firstNum, operator, secondNum) => {
    if(operator === "add") {
        return add(firstNum, secondNum);
    } else if(operator === "subtract") {
        return subtract(firstNum, secondNum);
    } else if(operator === "multiply") {
        return multiply(firstNum, secondNum);
    } else if(operator === "divide") {
        return divide(firstNum, secondNum);
    } else {
        return
    }
}

console.log(operate(firstNum, operator, secondNum));
console.log(displayValue.length);

//Changes display to display button pressed and updates to firstNum
btnNums.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (displayValue.textContent.length < 10 && displayValue.textContent == 0){
                displayValue.textContent = "" + btn.textContent;
            } else if (displayValue.textContent.length < 10){
                displayValue.textContent = "" + displayValue.textContent + btn.textContent;
            }
            
            output = displayValue.textContent;
            switchNumbers(number, output);
        })    
    });

clear.addEventListener('click', () => {
    displayValue.textContent = 0;
})

addBtn.addEventListener('click', () => {
    operator = "add";
    displayValue.textContent = 0;
    number = "second"
});

subtractBtn.addEventListener('click', () => {
    operator = "subtract";
    displayValue.textContent = 0;
    number = "second"
});


multiplyBtn.addEventListener('click', () => {
    operator = "multiply";
    displayValue.textContent = 0;
    number = "second"
});

divideBtn.addEventListener('click', () => {
    operator = "divide";
    displayValue.textContent = 0;
    number = "second"
})



function switchNumbers(number, output) {
    if (number == "first") {
        firstNum = output;
    } else if (number == "second") {
        secondNum = output;
    }
}