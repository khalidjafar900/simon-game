let userseq=[];
let gameseq=[];
let btncolor=["red","yellow","blue","purple"]

let started=false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function() {
    if(started==false){
        started=true;
        console.log("game has started")
        levelup();
        
    }})


    function levelup(){
        userseq=[];
        level++;
        h2.innerText=`Level ${level}`;
        let randomno=Math.floor(Math.random()*3);
        randomidx=btncolor[randomno];
        gameseq.push(randomidx);
        let btn=document.querySelector(`.${randomidx}`);
         btnflash(btn);
    }
function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length-1==gameseq.length-1){
        setTimeout(levelup,2000);
        }
    }
    else{
        h2.innerText=`Game over! your score is ${level}
        Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
setTimeout(function (){
    document.querySelector("body").style.backgroundColor="white"},200)

        reset();
    }
}

   function btnflash(btn){
      btn.classList.add("flash");
      setTimeout(function (){
       btn.classList.remove("flash")},300);
      }
function btnpress(){
    let btn=this;
     btnflash(btn);
     userid=btn.getAttribute("id");
     userseq.push(userid);
     checkans(userseq.length-1);
}

      let allbtn=document.querySelectorAll(".btn");
      for(btn of allbtn){
      btn.addEventListener("click",btnpress);
      }
    function reset(){
       userseq=[];
       gameseq=[];
       level=0;
       started=false;
        

    }