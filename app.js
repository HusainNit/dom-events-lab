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
const basicOp=(event) =>{ //srcElement innerText innerHTML
    //console.log(event.srcElement.innerText)
   
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
       Snums=dispEl.textContent;
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
    //  fnums="";
     userop=true;
    }

    if(event.target.classList.contains("equals")){
        const result=eval(fnums+Snums);
        console.log(result)
        dispEl.textContent=result;
    }

    if(event.srcElement.innerText === "C"){
        op="";
        fnums = "";
        Snums="";
        dispEl.textContent="";
    }

}

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/
culElm.addEventListener("click",basicOp);

/*-------------------------------- Functions --------------------------------*/
