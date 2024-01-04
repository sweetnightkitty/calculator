//variables for calculator input
let firstNum;
let operator = "add";
let secondNum;
let equationPosition = "first";
let solution;


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

            value = display.textContent; //value is 5 --> //new value is 10
            //assignNumbers(equationPosition, value);
        })    
    });



    //log number in for each.
    // logged number is put into a function to append value
    //funnel logged number into display function   

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
})

//edited
addBtn.addEventListener('click', () => {
    operator = "add";
    assignNumbers(equationPosition, value); //first position becomes 5
    equationPosition = "second" // no reset of display value; we can't, want it to reset after button press

});

subtractBtn.addEventListener('click', () => {
    operator = "subtract";
    display.textContent = 0;
    equationPosition = "second"
});


multiplyBtn.addEventListener('click', () => {
    operator = "multiply";
    display.textContent = 0;
    equationPosition = "second"
});

divideBtn.addEventListener('click', () => {
    operator = "divide";
    display.textContent = 0;
    equationPosition = "second"
})

equalsBtn.addEventListener('click', () => {
    assignNumbers(equationPosition, value); //new value 10 assigned to numb2 (5 + 10)
    const solution = operate(firstNum, operator, secondNum); //soln = 15
    display.textContent = "" + solution; 
    equationPosition = "first";
});



