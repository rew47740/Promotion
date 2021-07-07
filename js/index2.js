// var audio = new Audio('/img/sound.mp3');
//   audio.play();
var filtermax=9999;
var filtermin=0;
document.getElementById("btnlow").onclick = function () {
    filtermin=0;
    filtermax=399;
    location.href = "main.html";
    sessionStorage.setItem("filtermax", filtermax);
    sessionStorage.setItem("filtermin", filtermin);
};
document.getElementById("btnmed").onclick = function () {
    filtermin=400;
    filtermax=699;
    location.href = "main.html";
    sessionStorage.setItem("filtermax", filtermax);
    sessionStorage.setItem("filtermin", filtermin);
};
document.getElementById("btnhigh").onclick = function () {
    filtermin=700;
    filtermax=9999;
    location.href = "main.html";
    sessionStorage.setItem("filtermax", filtermax);
    sessionStorage.setItem("filtermin", filtermin);
};
document.getElementById("skip").onclick = function () {
    location.href = "main.html";
    sessionStorage.setItem("filtermax", filtermax);
    sessionStorage.setItem("filtermin", filtermin);
};
document.getElementById("previous").onclick = function () {
    location.href = "index.html";
    sessionStorage.setItem("filtermax", filtermax);
    sessionStorage.setItem("filtermin", filtermin);
};