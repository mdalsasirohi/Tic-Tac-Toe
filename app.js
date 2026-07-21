
//RESET BUTTON SETTINGS
let resetBtn = document.querySelector("#reset");
let btnText = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
let i = 0;
let game = false;
let hasWinner = false;
resetBtn.addEventListener("click",()=>{
    if(resetBtn.innerText==="NEW GAME"){
        resetBtn.innerText="START GAME";
        btnText.forEach(btn=>{
            btn.innerText="";
        })
        winner.innerText="";
        game=false;
        i=0;

    }
    else if(resetBtn.innerText==="START GAME"){
        resetBtn.innerText="RESET GAME";
        game=true;
        btnText.forEach(btn=>{
            btn.innerText="";
        })
        i=0;}})
for(let b=0; b<btnText.length;b++){
    btnText[b].addEventListener("click",()=>{
        if(btnText[b].innerText==="" && game){
            let x;
            if(i%2===0){
                x="X";
            }
            else{
                x="O";
            }
            btnText[b].innerText= x;
            i++
            let winPatterns=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]];
            for(let pattern of winPatterns){
                let[a,b,c] = pattern;
                if(
                    btnText[a].innerText!=="" && 
                    btnText[a].innerText===btnText[b].innerText && 
                    btnText[a].innerText===btnText[c].innerText
                ){
                    console.log("WINNER!!")
                    game=false;
                    resetBtn.innerText="NEW GAME"
                    winner.innerText="YOU WON!🎊"
                    hasWinner = true;

                    const duration = 15000;
                    const end = Date.now() + duration;

                    (function frame() {
                        confetti({
                            particleCount: 10,
                            spread: 60,
                            origin: {
                                x: Math.random(),
                                y: 0
                            }
                        });

                        if (Date.now() < end) {
                            requestAnimationFrame(frame);
                        }
                    })();
                }
                if(i===9 && !hasWinner){
                winner.innerText="DRAW";
                game=false;
                resetBtn.innerText="NEW GAME"
                }
            }
        }
    })
}