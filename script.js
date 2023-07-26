console.log("Welcome to Tic Tac Toe");
let music=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
let audiogameover=new Audio("gameover.mp3");
let turn="X";
let gameover=false;
//Function to change turn
music.volume=0.1;
music.play();

const changeTurn=()=>{
    return turn==="X"?"0":"X";
}

//Koi Jeeta
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText!==""&&boxtext[e[1]].innerText!==""&&boxtext[e[2]].innerText!=="")&&(boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText))
        {
            // document.querySelector('.info').innerText=boxtext[e[0]].innerText+ " Won";
            document.getElementsByClassName("Info")[0].innerText=boxtext[e[0]].innerText+" Won";
            gameover=true;
            audiogameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='196px';
            // document.getElementsByClassName('yay')[0].style.width='50px';
            // document.getElementsByClassName("imgbox").style.display=
        }
    })
}

//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
     let boxtext=element.querySelector(".boxtext");
     element.addEventListener('click',(e)=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText=turn;
            turn = changeTurn();
            console.log(turn);
            audioturn.play();
            checkWin();
            if(gameover===false)
            document.getElementsByClassName("Info")[0].innerText="Turn For "+turn;
        }
     })
})

//Reset Button

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    turn="X";
    gameover=false;
    document.getElementsByClassName("Info")[0].innerText="Turn For "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';
})