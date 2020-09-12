let imgbox1=document.getElementById('backg');
const imgbox2=document.getElementById('backg2');
const yourscore=document.getElementById('p5');
const computerscore=document.getElementById('p7');
const time=document.getElementById('p34');
let button=document.getElementById('userbut');
let output=document.getElementById('p9');
let output2=document.getElementById('p10');
let messagebox=document.querySelector('.message-box');
let p11=document.getElementById('p11');
let p13=document.getElementById('p13');
let lastbutton=document.getElementById('playagain')
let maincontainer=document.getElementById('main-container');
let audio=new Audio()
audio.src="mouseclick.mp4"
const tl=new TimelineMax()
tl.fromTo(imgbox1,1,{height:"0%"},{height:"100%",ease:Power2.easeInOut})
tl.fromTo(imgbox2,1,{height:"0%"},{height:"100%",ease:Power2.easeInOut})
let cardimage=[
    "ace.jpg",
    "king.jpg",
    "queen.jpg",
    "jack.jpg"
]
let score=1;
const imageBox1=()=>{
    let outputnumber=Math.floor(Math.random()*4)
    if(outputnumber=="0"){
        output.innerHTML=0;
        imgbox1.src=cardimage[3];
    }
    if(outputnumber=="1"){
        output.innerHTML=1;
        imgbox1.src=cardimage[2];
    }
    if(outputnumber=="2"){
        output.innerHTML=2;
        imgbox1.src=cardimage[1];
    }
    if(outputnumber=="3"){
        output.innerHTML=3;
        imgbox1.src=cardimage[0];
    }
    setTimeout(()=>{  
        if(output.innerHTML>output2.innerHTML){
            yourscore.innerHTML=score++;
        }
 },1000)

   }
let score2=1;
const imagebox2=()=>{
   
let outputnumber2=Math.floor(Math.random()*4)
if(outputnumber2=="0"){
    output2.innerHTML=0;
    imgbox2.src=cardimage[3];
}
if(outputnumber2=="1"){
    output2.innerHTML=1;
    imgbox2.src=cardimage[2];
}
if(outputnumber2=="2"){
    output2.innerHTML=2;
    imgbox2.src=cardimage[1];
}
if(outputnumber2=="3"){
    output2.innerHTML=3;
    imgbox2.src=cardimage[0];
}
setTimeout(()=>{
    if(output.innerHTML<output2.innerHTML){
        computerscore.innerHTML=score2++
    }
},1000)
 
 }

button.addEventListener('click',function(){
    userScoreclick()
    setTimeout(()=>{
        tl.fromTo(imgbox1,1,{height:"0%"},{height:"100%",ease:Power2.easeInOut})
        imageBox1();
         },500)
   
setTimeout(()=>{
    tl.fromTo(imgbox2,1,{height:"0%"},{height:"100%",ease:Power2.easeInOut})
    imagebox2()
    
},1000)
})
let timestart=200;
function userScoreclick(){
    audio.play()
setInterval(()=>{
        time.innerHTML=timestart--;
        if(timestart==0){
            button.style.display="none";
             timestart++;
            if(computerscore.innerHTML>yourscore.innerHTML){
                  return lostoutput()
                  }
            if(computerscore.innerHTML<yourscore.innerHTML){
            return winningoutput()
                 }
                 else{
                     drawgame();
                 }
                  }
    },1500)
}
const musilist=[
    "lost.mp4",
    "victory.mp4",
    "draw.mp4",
]
let music2=new Audio()
music2.src=musilist[0]
let music=new Audio()
music.src=musilist[1];
function winningoutput(){
    messagebox.style.display="block";
    p11.innerHTML=`Your score is more than computer Score`
    p13.textContent=`Congratulation You won !`;
  music.play()
  document.body.style.backgroundColor="rgb(0, 0, 0, 0.657)";
  maincontainer.style.backgroundColor="rgb(0, 0, 0, 0.657)"
    }
function lostoutput(){
    messagebox.style.display="block";
    p11.innerHTML=`Your score is less than computer Score`
    p13.textContent=`Oops You lost !`;
    music2.play()
    document.body.style.backgroundColor="rgb(0, 0, 0, 0.657)";
    maincontainer.style.backgroundColor="rgb(0, 0, 0, 0.657)"
}
lastbutton.addEventListener('click',()=>{
    music2.pause()
    music.pause()
    music3.pause()
    score=1;
    score2=1;
    yourscore.innerHTML=null;
    button.style.display="block";
    computerscore.innerHTML=null
    messagebox.style.display="none";
    timestart=300;
    imgbox1.src="backside.jpg"
    imgbox2.src="backside.jpg"
    document.body.style.backgroundColor="rgba(0, 0, 0, 0.274)"
    maincontainer.style.backgroundColor="white";
    userScoreclick()
    })
let music3=new Audio()
music3.src=musilist[2]
    function drawgame(){
        messagebox.style.display="block";
        p11.innerHTML=`You both have same score`
        p13.textContent=`Match Draw !`;
        music3.play()
        document.body.style.backgroundColor="rgb(0, 0, 0, 0.657)";
        maincontainer.style.backgroundColor="rgb(0, 0, 0, 0.657)"
    }