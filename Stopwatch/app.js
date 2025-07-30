let secondsElapsed=0;
let interval=null;
let time=document.querySelector("h2");

function padStart(value){
    return String(value).padStart(2,"0");
 }
 
 function setTime(){
    let minutes = Math.floor(secondsElapsed / 60);
    let seconds = secondsElapsed % 60;
    time.innerText = `${padStart(minutes)}:${padStart(seconds)}`;
}



function Timer(){
    secondsElapsed++;
    setTime();
}

function Start(){
    if(interval) Stop();
    interval=setInterval(Timer,1000);
}

function Stop(){
    clearInterval(interval);
}

function Reset(){
    Stop();
    secondsElapsed=0;
    setTime();
}