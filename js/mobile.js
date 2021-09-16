fetch("json/mobile.json")
.then((response) => response.json())
.then(function(data){
dataleft=data;
datasearch = data;
resultleft=dataleft;
datafil=dataleft;
var b1=0
var b2=0
var b3=0
var b4=0
var b5=0
var b=0
var sortp=0;
showleft = document.getElementById("Left");
showright = document.getElementById("Right");
countleft = document.getElementById("cl");
document.getElementById("btn1").onclick = function () {    
  b=0
  b1=1;
  b2=0;
  b3=0;
  b4=0;
  b5=0;
  sessionStorage.setItem("b", b);
  sessionStorage.setItem("b1", b1);
  sessionStorage.setItem("b2", b2);
  sessionStorage.setItem("b3", b3);
  sessionStorage.setItem("b4", b4);
  sessionStorage.setItem("b5", b5);
location.href = "main.html"}
document.getElementById("btn2").onclick = function () {    
  b=0
  b1=0;
  b2=1;
  b3=0;
  b4=0;
  b5=0;
  sessionStorage.setItem("b", b);
  sessionStorage.setItem("b1", b1);
  sessionStorage.setItem("b2", b2);
  sessionStorage.setItem("b3", b3);
  sessionStorage.setItem("b4", b4);
  sessionStorage.setItem("b5", b5);
  location.href = "main.html"}
document.getElementById("btn3").onclick = function () {    
  b=0
  b1=0;
  b2=0;
  b3=1;
  b4=0;
  b5=0;
  sessionStorage.setItem("b", b);
  sessionStorage.setItem("b1", b1);
  sessionStorage.setItem("b2", b2);
  sessionStorage.setItem("b3", b3);
  sessionStorage.setItem("b4", b4);
  sessionStorage.setItem("b5", b5);
  location.href = "main.html"}
  document.getElementById("btn4").onclick = function () {  
  b=0
  b1=0;
  b2=0;
  b3=0;
  b4=1;
  b5=0;
  sessionStorage.setItem("b", b);
  sessionStorage.setItem("b1", b1);
  sessionStorage.setItem("b2", b2);
  sessionStorage.setItem("b3", b3);
  sessionStorage.setItem("b4", b4);
  sessionStorage.setItem("b5", b5);
  location.href = "main.html"}
document.getElementById("btn5").onclick = function () {    
  b1=0;
  b2=0;
  b3=0;
  b4=0;
  b5=1;
  sessionStorage.setItem("b", b);
  sessionStorage.setItem("b1", b1);
  sessionStorage.setItem("b2", b2);
  sessionStorage.setItem("b3", b3);
  sessionStorage.setItem("b4", b4);
  sessionStorage.setItem("b5", b5);
  location.href = "main.html"}
document.getElementById("home").onclick = function () {location.href = "index.html"};
enter.addEventListener('click',search);
sortprice.addEventListener('click',price);
showleft.innerHTML ='';
showright.innerHTML ='';
var cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px;'>"+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+dataleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].OnTop+"<br />"+dataleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+dataleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+dataleft[i].ขนาดจอ+"<br />"+dataleft[i].หน่วยประมวลผล+"<br />"+dataleft[i].RAM+"<br />"+dataleft[i].ROM+"<br />"+dataleft[i].กล้องถ่ายรูป+"<br />"+dataleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
  }
if(dataleft.length==0){
  showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
}
countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
function search(){
  cleft=0;
  dropbtn2.innerHTML="ช่วงราคา ▾"
  dropbtn.innerHTML="แบรนด์มือถือ ▾"
    sortprice.innerHTML="เรียงตามราคา"
    var input = document.getElementById('input').value;
    showleft.innerHTML='';
    showright.innerHTML ='';
    if(input==''){
        resultleft = dataleft
        for (i = 0;i<resultleft.length;i++){
          cleft++;
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
          }
        }
        countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
        return resultleft;  }
    else{
    resultleft = data.filter(function(obj) {
        return obj.รุ่นที่ร่วมรายการ.toLowerCase()== input.toLowerCase() ||obj.โปรโมชั่นที่ร่วมรายการ.toLowerCase()== input.toLowerCase()||obj.ขนาดจอ.toLowerCase()== input.toLowerCase()||obj.หน่วยประมวลผล.toLowerCase()== input.toLowerCase()||obj.RAM.toLowerCase()== input.toLowerCase()||obj.ROM.toLowerCase()== input.toLowerCase()||obj.กล้องถ่ายรูป.toLowerCase()== input.toLowerCase()||obj.ความจุแบตเตอรี่.toLowerCase()== input.toLowerCase||obj.ค่าย.toLowerCase()== input.toLowerCase();
    });     
    for (i = 0;i<resultleft.length;i++){
      cleft++;
      // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+resultleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px'>"+"<b>ชื่อรุ่น : </b>"+resultleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+resultleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+resultleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+resultleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+resultleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+resultleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+resultleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+resultleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+resultleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+resultleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+resultleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+resultleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+resultleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+resultleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
      showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+resultleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+resultleft[i].รุ่นที่ร่วมรายการ+"<br />"+resultleft[i].ราคาปกติ+" "+"บาท"+"<br />"+resultleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+resultleft[i].OnTop+"<br />"+resultleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+resultleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+resultleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+resultleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+resultleft[i].ขนาดจอ+"<br />"+resultleft[i].หน่วยประมวลผล+"<br />"+resultleft[i].RAM+"<br />"+resultleft[i].ROM+"<br />"+resultleft[i].กล้องถ่ายรูป+"<br />"+resultleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

      if(resultleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
      }
      if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
        showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
      }
    }
    if(resultleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    return resultleft;
}}
let itemName = datasearch.map(value => { return value.รุ่นที่ร่วมรายการ });
let itemPro = datasearch.map(value => { return value.โปรโมชั่นที่ร่วมรายการ });
let itemSize = datasearch.map(value => { return value.ขนาดจอ });
let itemCpu= datasearch.map(value => { return value.หน่วยประมวลผล});
let itemRam = datasearch.map(value => { return value.RAM });
let itemRom = datasearch.map(value => { return value.ROM });
let itemCam= datasearch.map(value => { return value.กล้องถ่ายรูป });
let itemBat= datasearch.map(value => { return value.ความจุแบตเตอรี่});
let itemBrand= datasearch.map(value => { return value.ค่าย});
var list = document.getElementById('list');
itemName = itemName.filter(function(item, index) {
  if (itemName.indexOf(item) == index)
    return item;
});
itemPro = itemPro.filter(function(item, index) {
  if (itemPro.indexOf(item) == index)
    return item;
});
itemSize = itemSize.filter(function(item, index) {
  if (itemSize.indexOf(item) == index)
    return item;
});
itemCpu = itemCpu.filter(function(item, index) {
  if (itemCpu.indexOf(item) == index)
    return item;
});
itemRam = itemRam.filter(function(item, index) {
  if (itemRam.indexOf(item) == index)
    return item;
});
itemRom = itemRom.filter(function(item, index) {
  if (itemRom.indexOf(item) == index)
    return item;
});
itemCam = itemCam.filter(function(item, index) {
  if (itemCam.indexOf(item) == index)
    return item;
});
itemBat = itemBat.filter(function(item, index) {
  if (itemBat.indexOf(item) == index)
    return item;
});
itemBrand = itemBrand.filter(function(item, index) {
  if (itemBrand.indexOf(item) == index)
    return item;
});
itemName.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option)
 });
 itemPro.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option)
 });
 itemCpu.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option)
 });
 itemSize.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option)
 });
 itemRam.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option)
 });
 itemRom.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option)
 });
 itemCam.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option)
 });
 itemBat.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option)
 });
 itemBrand.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option)
 });
 function price(prop) { 
        resultleft = dataleft;
        cleft=0; 
        showleft.innerHTML =''
        showright.innerHTML ='';
        if(sortp==0){
        resultleft = resultleft.sort((a, b) => {
            let retval = 0;
            if (a.price < b.price)
              retval = -1;
            if (a.price > b.price)
              retval = 1;
            if (retval === 0)
              retval = a.resultleft > b.resultleft ? -1 : 1;
            return retval;
          });
          for (i = 0;i<resultleft.length;i++){
            cleft++;
           if (resultleft[i].รุ่นที่ร่วมรายการ!==""){
            // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+resultleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px'>"+"<b>ชื่อรุ่น : </b>"+resultleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+resultleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+resultleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+resultleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+resultleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+resultleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+resultleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+resultleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+resultleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+resultleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+resultleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+resultleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+resultleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+resultleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
            showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+resultleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+resultleft[i].รุ่นที่ร่วมรายการ+"<br />"+resultleft[i].ราคาปกติ+" "+"บาท"+"<br />"+resultleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+resultleft[i].OnTop+"<br />"+resultleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+resultleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+resultleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+resultleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+resultleft[i].ขนาดจอ+"<br />"+resultleft[i].หน่วยประมวลผล+"<br />"+resultleft[i].RAM+"<br />"+resultleft[i].ROM+"<br />"+resultleft[i].กล้องถ่ายรูป+"<br />"+resultleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

            if(resultleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
            }
            if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
              showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
            }
          }
           }
        
        sortprice.innerHTML="เรียงตามราคา ↓"
        sortp=1;
    }
    else if(sortp==1){
        resultleft = resultleft.sort((a, b) => {
            let retval = 0;
            if (a.price > b.price)
              retval = -1;
            if (a.price < b.price)
              retval = 1;
            if (retval === 0)
              retval = a.resultleft < b.resultleft ? -1 : 1;
            return retval;
          });
          for (i = 0;i<resultleft.length;i++){
            cleft++;;
           if (resultleft[i].รุ่นที่ร่วมรายการ!=="")
          //  showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+resultleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px'>"+"<b>ชื่อรุ่น : </b>"+resultleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+resultleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+resultleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+resultleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+resultleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+resultleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+resultleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+resultleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+resultleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+resultleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+resultleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+resultleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+resultleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+resultleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
          showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+resultleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+resultleft[i].รุ่นที่ร่วมรายการ+"<br />"+resultleft[i].ราคาปกติ+" "+"บาท"+"<br />"+resultleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+resultleft[i].OnTop+"<br />"+resultleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+resultleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+resultleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+resultleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+resultleft[i].ขนาดจอ+"<br />"+resultleft[i].หน่วยประมวลผล+"<br />"+resultleft[i].RAM+"<br />"+resultleft[i].ROM+"<br />"+resultleft[i].กล้องถ่ายรูป+"<br />"+resultleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

          if(resultleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
          }
          if(resultleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
            showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
          }
          }
        sortprice.innerHTML="เรียงตามราคา ↑"
        sortp=0;
    }
    if(resultleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
}  
var totop = document.getElementById("totop");
totop.addEventListener('click',topFunction);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    totop.style.display = "block";
  } else {
    totop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var dropbtn =document.getElementById("drop");
var dropbtn2 =document.getElementById("drop2");
a.addEventListener('click',filtera);
o.addEventListener('click',filtero);
r.addEventListener('click',filterr);
s.addEventListener('click',filters);
v.addEventListener('click',filterv);
x.addEventListener('click',filterx);
all.addEventListener('click',filterall);
function filtera(){
dropbtn2.innerHTML="ช่วงราคา ▾"
dropbtn.innerHTML="Apple ▾"
sortprice.innerHTML="เรียงตามราคา"
dataleft = data.filter(function(obj) {return obj.ค่าย == "Apple" });
datafil=dataleft;
showleft.innerHTML ='';
showright.innerHTML ='';
cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px;'>"+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+dataleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].OnTop+"<br />"+dataleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+dataleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+dataleft[i].ขนาดจอ+"<br />"+dataleft[i].หน่วยประมวลผล+"<br />"+dataleft[i].RAM+"<br />"+dataleft[i].ROM+"<br />"+dataleft[i].กล้องถ่ายรูป+"<br />"+dataleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
  }
  if(dataleft.length==0){
    showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
  }
  countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
  return dataleft;  
}
function filtero(){
  dropbtn2.innerHTML="ช่วงราคา ▾"
  dropbtn.innerHTML="Oppo ▾"
  sortprice.innerHTML="เรียงตามราคา"
  dataleft = data.filter(function(obj) {return obj.ค่าย == "Oppo" });
  datafil=dataleft;
  showleft.innerHTML ='';
showright.innerHTML ='';
cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px;'>"+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+dataleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].OnTop+"<br />"+dataleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+dataleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+dataleft[i].ขนาดจอ+"<br />"+dataleft[i].หน่วยประมวลผล+"<br />"+dataleft[i].RAM+"<br />"+dataleft[i].ROM+"<br />"+dataleft[i].กล้องถ่ายรูป+"<br />"+dataleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
      countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    }
    if(dataleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    return dataleft;  
}
function filterr(){
  dropbtn2.innerHTML="ช่วงราคา ▾"
  dropbtn.innerHTML="Realme ▾"
  sortprice.innerHTML="เรียงตามราคา"
  dataleft = data.filter(function(obj) {return obj.ค่าย == "Realme" });
  datafil=dataleft;
  showleft.innerHTML ='';
showright.innerHTML ='';
cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px;'>"+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+dataleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].OnTop+"<br />"+dataleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+dataleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+dataleft[i].ขนาดจอ+"<br />"+dataleft[i].หน่วยประมวลผล+"<br />"+dataleft[i].RAM+"<br />"+dataleft[i].ROM+"<br />"+dataleft[i].กล้องถ่ายรูป+"<br />"+dataleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
      countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    }
    if(dataleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    return dataleft;    
}
function filters(){
  dropbtn2.innerHTML="ช่วงราคา ▾"
  dropbtn.innerHTML="Samsung ▾"
  sortprice.innerHTML="เรียงตามราคา"
  dataleft = data.filter(function(obj) {return obj.ค่าย == "Samsung" });
  datafil=dataleft;
  showleft.innerHTML ='';
showright.innerHTML ='';
cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px;'>"+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+dataleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].OnTop+"<br />"+dataleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+dataleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+dataleft[i].ขนาดจอ+"<br />"+dataleft[i].หน่วยประมวลผล+"<br />"+dataleft[i].RAM+"<br />"+dataleft[i].ROM+"<br />"+dataleft[i].กล้องถ่ายรูป+"<br />"+dataleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
      countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    }
    if(dataleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    return dataleft;  
}
function filterv(){
  dropbtn2.innerHTML="ช่วงราคา ▾"
  dropbtn.innerHTML="Vivo ▾"
  sortprice.innerHTML="เรียงตามราคา"
  dataleft = data.filter(function(obj) {return obj.ค่าย == "Vivo" });
  datafil=dataleft;
  showleft.innerHTML ='';
showright.innerHTML ='';
cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px;'>"+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+dataleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].OnTop+"<br />"+dataleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+dataleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+dataleft[i].ขนาดจอ+"<br />"+dataleft[i].หน่วยประมวลผล+"<br />"+dataleft[i].RAM+"<br />"+dataleft[i].ROM+"<br />"+dataleft[i].กล้องถ่ายรูป+"<br />"+dataleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
      countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    }
    if(dataleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    return dataleft;  
}
function filterx(){
  dropbtn2.innerHTML="ช่วงราคา ▾"
  dropbtn.innerHTML="Xiaomi ▾"
  sortprice.innerHTML="เรียงตามราคา"
  dataleft = data.filter(function(obj) {return obj.ค่าย == "Xiaomi" });
  datafil=dataleft;
  showleft.innerHTML ='';
showright.innerHTML ='';
cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px;'>"+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+dataleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].OnTop+"<br />"+dataleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+dataleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+dataleft[i].ขนาดจอ+"<br />"+dataleft[i].หน่วยประมวลผล+"<br />"+dataleft[i].RAM+"<br />"+dataleft[i].ROM+"<br />"+dataleft[i].กล้องถ่ายรูป+"<br />"+dataleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
      countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    }
    if(dataleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    return dataleft;  
}
function filterall(){
  dropbtn2.innerHTML="ช่วงราคา ▾"
  dropbtn.innerHTML="แบรนด์มือถือทั้งหมด ▾"
  sortprice.innerHTML="เรียงตามราคา"
  dataleft = data
  datafil=dataleft;
  showleft.innerHTML ='';
showright.innerHTML ='';
cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px;'>"+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+dataleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].OnTop+"<br />"+dataleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+dataleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+dataleft[i].ขนาดจอ+"<br />"+dataleft[i].หน่วยประมวลผล+"<br />"+dataleft[i].RAM+"<br />"+dataleft[i].ROM+"<br />"+dataleft[i].กล้องถ่ายรูป+"<br />"+dataleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
      countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    }
    if(dataleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    return dataleft;  
}
h.addEventListener('click',filterh);
l.addEventListener('click',filterl);
all2.addEventListener('click',filterall2);

function filterl(){
  dropbtn2.innerHTML="0-9,999 บาท ▾"
  sortprice.innerHTML="เรียงตามราคา"
  dataleft = datafil.filter(function(obj) {return obj.price < "10000" });
  showleft.innerHTML ='';
showright.innerHTML ='';
cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px;'>"+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+dataleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].OnTop+"<br />"+dataleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+dataleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+dataleft[i].ขนาดจอ+"<br />"+dataleft[i].หน่วยประมวลผล+"<br />"+dataleft[i].RAM+"<br />"+dataleft[i].ROM+"<br />"+dataleft[i].กล้องถ่ายรูป+"<br />"+dataleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
      countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    }
    if(dataleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    return dataleft;    
}
function filterh(){
  dropbtn2.innerHTML="10,000 บาทขึ้นไป ▾"
  sortprice.innerHTML="เรียงตามราคา"
  dataleft = datafil.filter(function(obj) {return obj.price >= "10000" });
  showleft.innerHTML ='';
showright.innerHTML ='';
cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px;'>"+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+cleft+"</span>"+'</div>'+"<span style='font-size: 28px;'>"+'<div class="Rowdata" >'+'<div class="Column2" >'+"<b>ชื่อรุ่น : </b>"+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+" "+"<br />"+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+"<br />"+"<b>📱 ขนาดจอ : </b>"+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+'</div>'+'<div class="Column" >'+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+dataleft[i].ส่วนลดค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].OnTop+"<br />"+dataleft[i].ชำระค่าเครื่อง+" "+"บาท"+"<br />"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+"<br />"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+dataleft[i].สัญญาการใช้งาน+" "+"เดือน"+"<br />"+dataleft[i].ขนาดจอ+"<br />"+dataleft[i].หน่วยประมวลผล+"<br />"+dataleft[i].RAM+"<br />"+dataleft[i].ROM+"<br />"+dataleft[i].กล้องถ่ายรูป+"<br />"+dataleft[i].ความจุแบตเตอรี่+'</div>'+'</div>'+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
      countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    }
    if(dataleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    return dataleft;  
}
function filterall2(){
  dropbtn2.innerHTML="ช่วงราคาทั้งหมด ▾"
  sortprice.innerHTML="เรียงตามราคา"
  dataleft = datafil
  showleft.innerHTML ='';
showright.innerHTML ='';
cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+"<span style='font-size: 20px;margin-right:70px;background-color:white;border-radius:25px;padding-left:10px;padding-right:10px;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);'>"+dataleft[i].ค่าย+"</span>"+cleft+'</div>'+"<span style='font-size: 28px;'>"+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"</span>"+"<br />"+"<b> 💰 ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>🏷️ ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>💳 On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>⏱️ ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+"<br />"+"<b>🌐 โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>📅 สัญญาการใช้งาน : </b> "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote10.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/redminote9t.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme5.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/oppoa74.png" id="img"  ></img/>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/realme8.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/VivoY72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga72.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/vivov21.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno5.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/samsunga52.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/opporeno6z.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12pro.png" id="img2"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showright.innerHTML+='<div class="itemright" tabindex="0">'+'<img src="img/iphone12promax.png" id="img"  ></img>'+'</div>';
    }
      countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    }
    if(dataleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"<b>ไม่พบข้อมูล</b>"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    return dataleft;  
}
})