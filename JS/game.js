let secretNumber=Math.trunc(Math.random()*20+1);
let score=20;
let highscrore=0;

// Logics:
document.getElementById("checkBtn").addEventListener("click",()=>{
    const guessdNo=Number(document.getElementById("guess").value);
    // console.log(guessdNo);
    if(!guessdNo){
        document.querySelector(".message").textContent="No Number";
    }

    // Win Logic:
    else if(guessdNo===secretNumber){
        document.querySelector(".message").textContent="Correct Number";
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector("body").style.backgroundColor="green";

        if(score>highscrore){
            highscrore=score;
            document.querySelector(".highscore").textContent=highscrore;
        }
    }

    // To high:
    else if(guessdNo>secretNumber){
        if(score>1){
            document.querySelector(".message").textContent="TO High";
            score=score-1;
            document.querySelector(".score").textContent=score;
        }else{
            document.querySelector(".message").textContent="You Lost the Game!";
            document.querySelector("score").textContent=0;
        }
    }

    // To Low:
    else if(guessdNo<secretNumber){
        if(score>1){
            document.querySelector(".message").textContent="TO Low!";
            score=score-1;
            document.querySelector(".score").textContent=score;
        }else{
            document.querySelector(".message").textContent="You Lost the Game!";
            document.querySelector("score").textContent=0;
        }
    }

});

// Again:
document.querySelector(".again").addEventListener("click",()=>{
    secretNumber=Math.trunc(Math.random()*20+1);
    score=20;
    
    document.querySelector(".message").textContent="Start Guessing....";
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent="?";
    document.getElementById("guess").value="";
    document.querySelector("body").style.backgroundColor="black";
})
