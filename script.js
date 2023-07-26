console.log("Welcome to Tic Tac Toe");
let music=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
let audiogameover=new Audio("gameover.mp3");
let turn="X";
let gameover=false;
//Function to change turn
music.volume=0.2;
music.play();

const changeTurn=()=>{
    return turn==="X"?"0":"X";
}

//Koi Jeeta
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,-23,5,0],
        [3,4,5,-23,15,0],
        [6,7,8,-23,25,0],
        [0,3,6,-33,15,90],
        [1,4,7,-23,15,90],
        [2,5,8,-13,15,90],
        [0,4,8,-23,15,45],
        [6,4,2,-23,15,-45],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText!==""&&boxtext[e[1]].innerText!==""&&boxtext[e[2]].innerText!=="")&&(boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText))
        {
            // document.querySelector('.info').innerText=boxtext[e[0]].innerText+ " Won";
            document.getElementsByClassName("Info")[0].innerText=boxtext[e[0]].innerText+" Won";
            gameover=true;
            audiogameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='196px';
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "30vw";
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
    document.querySelector(".line").style.width="0vw";
    document.getElementsByClassName("Info")[0].innerText="Turn For "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';
})