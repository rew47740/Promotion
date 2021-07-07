var audio = new Audio('img/sound.mp3');
var beep = new Audio('img/beep.mp3');
audio.loop=true;
audio.volume=0.3;
beep.volume=0.3;
var x = 0;
var play = document.getElementById("play");
play.style.filter="grayscale(100%)";
document.getElementById("ok").onclick = function () {
    var pricemin = document.getElementById('pricemin').value;
    var pricemax = document.getElementById('pricemax').value;
    var callmin = document.getElementById('callmin').value;
    var callmax = document.getElementById('callmax').value;
    var netmin = document.getElementById('netmin').value;
    var netmax = document.getElementById('netmax').value;
    var speedmin = document.getElementById('speedmin').value;
    var speedmax = document.getElementById('speedmax').value;
    if (pricemin==""){
        pricemin = 0
    }
    if (pricemax==""){
        pricemax = 9999
    }
    if (callmin==""){
        callmin = 0
    }
    if (callmax==""){
        callmax = 9999
    }
    if (netmin==""){
        netmin = 0
    }
    if (netmax==""){
        netmax = 9999
    }
    if (speedmin==""){
        speedmin = 0
    }
    if (speedmax==""){
        speedmax = 9999
    }
    location.href = "main.html";
    sessionStorage.setItem("pricemin", pricemin);
    sessionStorage.setItem("pricemax", pricemax);
    sessionStorage.setItem("callmin", callmin);
    sessionStorage.setItem("callmax", callmax);
    sessionStorage.setItem("netmin", netmin);
    sessionStorage.setItem("netmax", netmax);
    sessionStorage.setItem("speedmin", speedmin);
    sessionStorage.setItem("speedmax", speedmax);
    console.log(netmax)
    console.log(netmin)
};
document.getElementById("skip").onclick = function () {
    document.getElementById('pricemin').value="";
    document.getElementById('pricemax').value="";
    document.getElementById('callmin').value="";
    document.getElementById('callmax').value="";
    document.getElementById('netmin').value="";
    document.getElementById('netmax').value="";
    document.getElementById('speedmin').value="";
    document.getElementById('speedmax').value="";
    // var pricemin = 0
    // var pricemax = 9999
    // var callmin = 0
    // var callmax = 9999
    // var netmin = 0
    // var netmax = 9999
    // var speedmin = 0
    // var speedmax = 9999 
    // location.href = "main.html";
    // sessionStorage.setItem("pricemin", pricemin);
    // sessionStorage.setItem("pricemax", pricemax);
    // sessionStorage.setItem("callmin", callmin);
    // sessionStorage.setItem("callmax", callmax);
    // sessionStorage.setItem("netmin", netmin);
    // sessionStorage.setItem("netmax", netmax);
    // sessionStorage.setItem("speedmin", speedmin);
    // sessionStorage.setItem("speedmax", speedmax);
    
};
document.getElementById("callunlim").onclick = function () {
    callmax.value="ไม่จำกัด";
    callmin.value="ไม่จำกัด";
}
document.getElementById("netunlim").onclick = function () {
    netmax.value="ไม่จำกัด"
    netmin.value="ไม่จำกัด"
}
document.getElementById("speedunlim").onclick = function () {
    speedmax.value="Full Speed"
    speedmin.value="Full Speed"
}
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("ok").click();
    }});
document.getElementById("play").onclick = function () {
    if(x==0){
        audio.currentTime = 1
        audio.play();
        x=1
        play.style.filter="none";
    }
    else if(x==1){
        audio.pause();
        x=0
        play.style.filter="grayscale(100%)";
    }
    }
document.getElementById("play").addEventListener("click", mouseOver);
document.getElementById("callunlim").addEventListener("mouseover", mouseOver);
document.getElementById("netunlim").addEventListener("mouseover", mouseOver);
document.getElementById("speedunlim").addEventListener("mouseover", mouseOver);
document.getElementById("skip").addEventListener("mouseover", mouseOver);
document.getElementById("ok").addEventListener("mouseover", mouseOver);
function mouseOver(){
    beep.currentTime=0;
  beep.play();
}