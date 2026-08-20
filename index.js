let Score=0;
let form=document.getElementById("quizform")
let success=document.getElementById("success")
let result=document.getElementById("result")
let res1=document.getElementById("result1")
let res2=document.getElementById("result2")
let res3=document.getElementById("result3")
let res4=document.getElementById("result4")
let res5=document.getElementById("result5")
form.addEventListener("submit",submit)

function submit(event){
event.preventDefault();
Score=0;
let selected1=document.querySelector('input[name="1a"]:checked');

let correctAns1="js";
if(selected1.value===correctAns1){
   Score++;
}

// q2
let selected2=document.querySelector('input[name="2a"]:checked');

let correctAns2="hss";
if(selected2.value===correctAns2){
   Score++;
   res2.innerHTML="correct";
}
else{
    res2.innerHTML=`Wrong
    correct Answer is js
    `
}


// q3
let selected3=document.querySelector('input[name="3a"]:checked');

let correctAns3="css";
if(selected3.value===correctAns3){
   Score++;
}


// q4
let selected4=document.querySelector('input[name="4a"]:checked');

let correctAns4="jsv";
if(selected4.value===correctAns4){
   Score++;
}


// q5
let selected5=document.querySelector('input[name="5a"]:checked');

let correctAns5="js";
if(selected5.value===correctAns5){
   Score++;
}
 result.innerHTML="your Score is"+ Score +"/ 5";

}


