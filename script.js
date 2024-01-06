//variables for calculator input
let firstNum;
let operator;
let secondNum;
let equationPosition = "first";


const display = document.querySelector(".display");
const btns = document.querySelectorAll(".btn");
const btnNums = document.querySelectorAll(".btn-num");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const equalsBtn = document.querySelector(".equals");
const clear = document.querySelector(".clear");


const add = (a, b) => {return a + b;};
const subtract = (a, b) => {return a - b;};
const multiply = (a, b) => {return a * b;};
const divide = (a, b) => {return a / b;};


const operate = (firstNum, operator, secondNum) => {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

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

};



//Changes display to display button pressed and updates to firstNum
btnNums.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (equationPosition == "second" && secondNum == undefined) {
                display.textContent = "" + btn.textContent;
                secondNum = display.textContent;
            } else if (display.textContent.length < 10 && display.textContent == 0){
                display.textContent = "" + btn.textContent;
            } else if (display.textContent.length < 10){
                display.textContent = "" + display.textContent + btn.textContent;
            }

            value = display.textContent;
        })    
    });



function assignNumbers(equationPosition, value) {
    if (equationPosition == "first") {
        firstNum = value;
    } else if (equationPosition == "second") {
        secondNum = value;
    }
}

clear.addEventListener('click', () => {
    display.textContent = 0;
    firstNum = undefined;
    secondNum = undefined;
    equationPosition = "first";
})


addBtn.addEventListener('click', () => {
    assignNumbers(equationPosition, value);

    if (equationPosition == "second") {
        const solution = operate(firstNum, operator, secondNum);
        const trimmedSolution = (solution + "").substring(0, 10);
        display.textContent = "" + trimmedSolution;
        firstNum = solution;
        secondNum = undefined;
    };
    operator = "add";
    equationPosition = "second"
});

subtractBtn.addEventListener('click', () => {
    assignNumbers(equationPosition, value);

    if (equationPosition == "second") {
        const solution = operate(firstNum, operator, secondNum);
        const trimmedSolution = (solution + "").substring(0, 10);
        display.textContent = "" + trimmedSolution;
        firstNum = solution;
        secondNum = undefined;
    };

    operator = "subtract";
    equationPosition = "second"
});


multiplyBtn.addEventListener('click', () => {
    assignNumbers(equationPosition, value);

    if (equationPosition == "second") {
        const solution = operate(firstNum, operator, secondNum);
        const trimmedSolution = (solution + "").substring(0, 10);
        display.textContent = "" + trimmedSolution;
        firstNum = solution;
        secondNum = undefined;
    };

    operator = "multiply";
    equationPosition = "second"
});

divideBtn.addEventListener('click', () => {
    assignNumbers(equationPosition, value);

    if (equationPosition == "second") {
        const solution = operate(firstNum, operator, secondNum);
        const trimmedSolution = (solution + "").substring(0, 10);
        display.textContent = "" + trimmedSolution;
        firstNum = solution;
        secondNum = undefined;
    };

    operator = "divide";
    equationPosition = "second"
})

equalsBtn.addEventListener('click', () => {

    if(equationPosition == "second"){
       assignNumbers(equationPosition, value); //assigns second number in equation 
    };
       
    let solution = operate(firstNum, operator, secondNum); 
    if (solution == Infinity) {
        display.textContent = "Ho Ho No!";
    } else if (solution) {
        const trimmedSolution = (solution + "").substring(0, 10);
        display.textContent = "" + trimmedSolution;

        //allows further computations using the solution as the first num
        equationPosition = "first";
        value = solution;
        secondNum = undefined;
    };
});