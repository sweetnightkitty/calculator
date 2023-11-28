//variables for calculator input
const firstNum = 2;
const operator = "add";
const secondNum = 4;


const displayValue = document.querySelector(".display");
const btns = document.querySelectorAll(".btn");

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

// Button listener to activate the clicked button

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        displayValue.textContent() = btn.textContent;
    })
})


