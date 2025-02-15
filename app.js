/*-------------------------------- Constants --------------------------------*/
const nubsEl=document.querySelector(".number");
const opeEl = document.querySelector(".operator");
const dispEl = document.querySelector(".display");
const culElm = document.querySelector("#calculator");

/*-------------------------------- Variables --------------------------------*/
let fnums="";
let Snums="";
let op="";
let userop=false;
let f=true;


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

// code is mess :(
    const basicOp=(event) =>{ 
  
        dispEl.textContent+=event.srcElement.innerText;
        if(!userop){
            fnums=dispEl.textContent;
        }
    
    
        if(event.target.classList.contains("number") && userop){
           if(f){
            dispEl.textContent="";
            f=false;
           }
        //    Snums=event.srcElement.innerText;
        //     dispEl.textContent=Snums;
           Snums +=event.srcElement.innerText ;
           dispEl.textContent=Snums;
        }
    
        console.log("first num: "+fnums);
        console.log("is operation: "+userop);
        console.log("operation: "+op);
        console.log("second num: "+Snums);
        console.log()
        if(event.target.classList.contains("operator")){
         dispEl.textContent="";
         dispEl.textContent=event.srcElement.innerText;
         op=dispEl.textContent;
         userop=true;
        }
    
        if(event.target.classList.contains("equals")){
            const result=eval(fnums+Snums);
            console.log(result)
            dispEl.textContent=result;
        }
    
        if(event.srcElement.innerText === "C"){
            dispEl.textContent="";
            op="";
            fnums = "";
            Snums="";
            userop = false;
            f=true;
            // i dont why in the first time i press it dont works , its dent know why its need me to duplicate the code
            dispEl.textContent="";
            op="";
            fnums = "";
            Snums="";
            userop = false;
            f=true;
            
        }
    
    }

/*----------------------------- Event Listeners -----------------------------*/
// dispEl.removeEventListener("click",basicOp)

culElm.addEventListener("click",basicOp); //crate problem of pressing in the cluclater body