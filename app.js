// /*-------------------------------- Constants --------------------------------*/
// const nubsEl=document.querySelector(".number");
// const opeEl = document.querySelector(".operator");
// const dispEl = document.querySelector(".display");
// const culElm = document.querySelector("#calculator");

// /*-------------------------------- Variables --------------------------------*/
// let fnums="";
// let Snums="";
// let op="";
// let userop=false;
// let f=true;


// /*------------------------ Cached Element References ------------------------*/



// /*-------------------------------- Functions --------------------------------*/

// // code is mess :(
//     const basicOp=(event) =>{ 
  
//         dispEl.textContent+=event.srcElement.innerText;
//         if(!userop){
//             fnums=dispEl.textContent;
//         }
    
    
//         if(event.target.classList.contains("number") && userop){
//            if(f){
//             dispEl.textContent="";
//             f=false;
//            }
//         //    Snums=event.srcElement.innerText;
//         //     dispEl.textContent=Snums;
//            Snums +=event.srcElement.innerText ;
//            dispEl.textContent=Snums;
//         }
    
//         console.log("first num: "+fnums);
//         console.log("is operation: "+userop);
//         console.log("operation: "+op);
//         console.log("second num: "+Snums);
//         console.log()
//         if(event.target.classList.contains("operator")){
//          dispEl.textContent="";
//          dispEl.textContent=event.srcElement.innerText;
//          op=dispEl.textContent;
//          userop=true;
//         }
    
//         if(event.target.classList.contains("equals")){
//             const result=eval(fnums+Snums);
//             console.log(result)
//             dispEl.textContent=result;
//         }
    
//         if(event.srcElement.innerText === "C"){
//             dispEl.textContent="";
//             op="";
//             fnums = "";
//             Snums="";
//             userop = false;
//             f=true;
//             // i dont why in the first time i press it dont works , its dent know why its need me to duplicate the code
//             dispEl.textContent="";
//             op="";
//             fnums = "";
//             Snums="";
//             userop = false;
//             f=true;
            
//         }
    
//     }

// /*----------------------------- Event Listeners -----------------------------*/
// // dispEl.removeEventListener("click",basicOp)

// culElm.addEventListener("click",basicOp); //crate problem of pressing in the cluclater body







/**
 *      ^ solution number one, its works but its messy(the Listener can be activated by other then the buttons and also it hard to be understands )
 * 
 * 
 * 
 *      V solution number two, i think its better, its more readable and more understandable
 */







/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let numberTerm1;
let numberTerm2;
let operation;
let currentValue="";
let operationDetected=false;
let result;

/*------------------------ Cached Element References ------------------------*/
const display=document.querySelector(".display");
/*-------------------------------- Functions --------------------------------*/
const culc = (event)=>{

    // two line of code will handel displacing user input to the culc display 
    currentValue+=event.srcElement.innerText;
    display.textContent=currentValue;
    
    if(!operationDetected && !event.target.classList.contains("operator") && !event.target.classList.contains("equals") ){
        //handel first number term
        numberTerm1=currentValue;
        console.log("num1 "+numberTerm1)
    }
    else if(event.target.classList.contains("operator") && !event.target.classList.contains("equals") && event.srcElement.innerText!=="C" ){
        //handel the operation
        display.textContent="";
        operation=event.srcElement.innerText;
        operationDetected=true;
        display.textContent=operation;
        console.log("op "+operation);
        currentValue="";
    }
    else if(operationDetected && !event.target.classList.contains("equals") && event.srcElement.innerText!=="C" ){
        //handel second number term
        display.textContent="";
        numberTerm2=currentValue;
        display.textContent+=numberTerm2;
        console.log("num2 "+numberTerm2)
    }
    else if(event.target.classList.contains("equals") && event.srcElement.innerText!=="C"){
        //handel the = operation
        display.textContent="";
        currentValue="";
        result = eval(numberTerm1+operation+numberTerm2)
        display.textContent=result;
        console.log("res " +result)
    }
    else{
        //handel C operation , clear operation
         numberTerm1="";
         numberTerm2="";
         operation="";
         currentValue="";
         operationDetected=false;
         result="";
         display.textContent="0";
    }
}

/*----------------------------- Event Listeners -----------------------------*/
document.querySelectorAll(".button").forEach((button)=>{
    button.addEventListener("click",culc);
    display.textContent="0"; // make culc start by displacing 0
})