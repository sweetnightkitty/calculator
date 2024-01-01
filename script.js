//variables for calculator input
let firstNum = 2;
let operator = "add";
const secondNum = 4;


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


//Changes display to display button pressed and updates to firstNum
btnNums.forEach((btn) => {
        btn.addEventListener('click', () => {
            displayValue.textContent = btn.textContent;
            firstNum = displayValue.textContent;
        })    
    });

clear.addEventListener('click', () => {
    displayValue.textContent = 0;
})

addBtn.addEventListener('click', () => {
    operator = "add";
});

subtractBtn.addEventListener('click', () => {
    operator = "subtract";
});

multiplyBtn.addEventListener('click', () => {
    operator = "multiply";
});

divideBtn.addEventListener('click', () => {
    operator = "divide";
})

