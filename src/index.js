// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const numbers = document.querySelectorAll(".cal-row__number"),
    operators = document.querySelectorAll(".cal-row__operator"),
    equal = document.querySelector(".cal-row__equal"),
    reset = document.querySelector(".cal-row__reset"),
    result = document.querySelector(".cal-row__result").querySelector("span");
const Equal = '=';
const Reset = 'C'
let firstValue='',
    firstDone,
    secondValue='',
    secondDone,
    currentOperator;
function numberClicked(e){
   const clickedNum = e.target.innerText;
   if(!firstDone){
       firstValue += clickedNum;
       result.innerHTML = firstValue;
   }else{
       secondValue += clickedNum;
       result.innerHTML = secondValue;
       secondDone = true;
   }
}
function makeOperation(){
    const valueA = parseInt(firstValue,10);
    const valueB = parseInt(secondValue,10);
    switch(currentOperator){
        case "+":
            return valueA + valueB;
        case "-":
            return valueA - valueB;
        case "*":
            return valueA * valueB;
        case "/":
            return valueA / valueB;
        default:
            return;
        
    }
}
function calculate(){
    const operationResult = makeOperation();
    result.innerHTML = operationResult;
    firstValue = operationResult;
    secondDone = false;
    secondValue='';
}
function operatorClicked(e){
    clickedOperator = e.target.innerText;
    
    if(!firstDone){
        firstDone = true;
    }
    if(firstDone && secondDone){
        calculate();
    }
    currentOperator = clickedOperator;
}
function resetClicked(){
    result.innerHTML = "0";
    firstValue='';
    firstDone=false;
    secondValue='';
    secondDone=false;
    clickedOperator=null;
}
function equalClicked(){
    if(firstDone && secondDone){
        calculate();
    }
}

numbers.forEach(function(number){
    number.addEventListener("click",numberClicked);
})
operators.forEach(function(operator){
    operator.addEventListener("click",operatorClicked);
})
equal.addEventListener("click",equalClicked);
reset.addEventListener("click",resetClicked);
