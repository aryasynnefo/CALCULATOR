let input=document.getElementById("input");
let buttons=document.querySelectorAll("button");
var string="";
let arr=Array.from(buttons);
arr.forEach(btn=>{
    btn.addEventListener('click',(e)=>{

        if(e.target.innerHTML== "="){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string='';
            input.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string=string+e.target.innerHTML;
            input.value=string;
        }
    })
});































// let input=document.getElementById("input");
// let buttons=document.querySelectorAll("button");
// console.log(buttons);
// let string='';
// var arr=Array.from(buttons);
// arr.forEach(button=>{
//     button.addEventListener('click',(e)=>{
//         console.log(e.target.innerHTML);
//         if(e.target.innerHTML=="="){
//             string=eval(string);
//             input.value=string;
//         }
//         else if(e.target.innerHTML=="AC"){
//             string='';
//             input.value=string;
//         }
//         else if(e.target.innerHTML=="DEL"){
//             string=string.substring(0,string.length-1);
//             input.value=string;
//         }
//         else{
//             string=string+e.target.innerHTML;
//             input.value=string;
//         }
//     })
// })




































