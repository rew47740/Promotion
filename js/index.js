var audio = new Audio('img/sound.mp3');
var beep = new Audio('img/beep.mp3');
audio.loop=true;
var priceinput ='';
var callinput ='';
var netinput ='';
var speedinput ='';
var x = 0;
var play = document.getElementById("play");
play.style.filter="grayscale(100%)";
document.getElementById("ok").onclick = function () {   
var pricemin = 0;
var pricemax =9999;
var callmin =0;
var callmax=9999;
var speedmin =0;
var speedmax=9999;
var netmin =0;
var netmax=9999;

    if (priceinput=="ไม่ระบุ"){
        pricemin = 0
        pricemax = 9999
    }
    if (priceinput=="0-299"){
        pricemin = 0
        pricemax = 299
    }
    if (priceinput=="300-599"){
        pricemin = 300
        pricemax = 599
    }
    if (priceinput=="600-899"){
        pricemin = 600
        pricemax = 899
    }
    if (priceinput=="900 ขึ้นไป"){
        pricemin = 900
        pricemax = 9999
    }
    if (callinput=="ไม่ระบุ"){
        callmin = 0
        callmax = 9999
    }
    if (callinput=="0-199"){
        callmin = 0
        callmax = 199
    }
    if (callinput=="200-499"){
        callmin = 200
        callmax = 499
    }
    if (callinput=="500-999"){
        callmin = 500
        callmax = 999
    }
    if (callinput=="1000 ขึ้นไป"){
        callmin = 1000
        callmax = 9999
    }
    if (callinput=="ไม่จำกัด"){
        callmin = 9999
        callmax = 9999
    }
    if (netinput=="ไม่ระบุ"){
        netmin = 0
        netmax = 9999
    }
    if (netinput=="0-19"){
        netmin = 0
        netmax = 19
    }
    if (netinput=="20-49"){
        netmin = 20
        netmax = 49
    }
    if (netinput=="50-79"){
        netmin = 50
        netmax = 79
    }
    if (netinput=="80 ขึ้นไป"){
        netmin = 80
        netmax = 9999
    }
    if (netinput=="ไม่จำกัด"){
        netmin = 9999
        netmax = 9999
    }
    if (speedinput=="ไม่ระบุ"){
        speedmin = 0
        speedmax = 9999
    }
    if (speedinput=="0-99"){
        speedmin = 0
        speedmax = 99
    }
    if (speedinput=="100-299"){
        speedmin = 100
        speedmax = 299
    }
    if (speedinput=="300-599"){
        speedmin = 300
        speedmax = 599
    }
    if (speedinput=="600 ขึ้นไป"){
        speedmin = 600
        speedmax = 9999
    }
    if (speedinput=="Full Speed"){
        speedmin = 9999
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
};
document.getElementById("swap").onclick = function () {
    location.href = "index2.html";
};
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
        audio.volume=0.1;
        beep.volume=0.1;
        play.style.filter="none";
    }
    else if(x==1){
        audio.pause();
        audio.volume=0;
    beep.volume=0;
        x=0
        play.style.filter="grayscale(100%)";
    }
    }
    document.getElementById("netmin").addEventListener("click", mouseOver);
    document.getElementById("callmin").addEventListener("click", mouseOver);
    document.getElementById("speedmin").addEventListener("click", mouseOver);
    document.getElementById("pricemin").addEventListener("click", mouseOver);

document.getElementById("play").addEventListener("click", mouseOver);
document.getElementById("swap").addEventListener("click", mouseOver);
document.getElementById("ok").addEventListener("mouseover", mouseOver);
function mouseOver(){
    beep.currentTime=0;
  beep.play();
}
function sprice() {
    var price = document.getElementById("pricemin");
    priceinput = price.options[price.selectedIndex].text;
    }
function scall() {
    var call = document.getElementById("callmin");
    callinput = call.options[call.selectedIndex].text;
    }
function sspeed() {
    var speed = document.getElementById("speedmin");
    speedinput = speed.options[speed.selectedIndex].text;
    }
function snet() {
    var net = document.getElementById("netmin");
    netinput = net.options[net.selectedIndex].text;
    }