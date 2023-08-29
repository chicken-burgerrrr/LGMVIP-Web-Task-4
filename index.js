let input= document.getElementById("input");
let allButtons=document.querySelectorAll("button");


let string="";
let buttonArray=Array.from(allButtons);

buttonArray.forEach(button=>{
    button.addEventListener("click",(result)=>{
        if (result.target.innerHTML=="=") {
            string=eval(string);
            input.value=string;
        }
        else if (result.target.innerHTML=="DEL") {
           string=string.substring(0,string.length-1);
           input.value=string; 
        }
        else if(result.target.innerHTML=="AC"){
            string="";
            input.value=string;
        }
        else{
            string=string+result.target.innerHTML;
            input.value=string
        }
    })
})