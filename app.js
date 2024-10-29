let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let btns=["yellow","green","purple","red"];
let h2=document.querySelector("h2");
let body =document.querySelector("body");
document.addEventListener("keypress",function(){
    if(started==false){
      console.log("game started");
       started=true;
       levelUp();
    }
});


function flashbtn(btn){
  btn.classList.add("flash");
  setTimeout(()=>{
    btn.classList.remove("flash");
  },250);
}
function userflash(btn){
    btn.classList.add("user");
    setTimeout(()=>{
      btn.classList.remove("user");
    },250);
  }

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    flashbtn(randbtn);
}
function checkans(idx){
    // console.log(`currlevel is ${level}`);
    if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);
    }   
    }else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> press any key to start again `;

        body.classList.add("back");
        setTimeout(()=>{
            body.classList.remove("back");
        },500);
        console.log("Your maximum score is :" +level);
       
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn =this;
    userflash(btn);
     usercolor=btn.getAttribute("id");
    //  console.log(usercolor);
     userseq.push(usercolor);
     checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
}
