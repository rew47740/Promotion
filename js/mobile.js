fetch("json/mobile.json")
.then((response) => response.json())
.then(function(data){
dataleft=data;
datasearch = data;
resultleft=dataleft;
var sortp=0;
showleft = document.getElementById("Left");
countleft = document.getElementById("cl");
document.getElementById("btn1").onclick = function () {location.href = "main.html"};
document.getElementById("btn2").onclick = function () {location.href = "main.html"};
document.getElementById("btn3").onclick = function () {location.href = "main.html"};
document.getElementById("btn4").onclick = function () {location.href = "main.html"};
document.getElementById("btn5").onclick = function () {location.href = "main.html"};
document.getElementById("home").onclick = function () {location.href = "index.html"};
enter.addEventListener('click',search);
sortprice.addEventListener('click',price);
showleft.innerHTML ='';
var cleft =0;
for (i = 0;i<dataleft.length;i++){
    cleft++;
    showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+cleft+'</div>'+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+"<b>ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+" บาท"+"<br />"+"<b>โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>สัญญาการใช้งาน </b>: "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
      showleft.innerHTML+='<img src="img/redminote10.png" id="img"  ></img/>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
      showleft.innerHTML+='<img src="img/redminote9t.png" id="img"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
      showleft.innerHTML+='<img src="img/realme5.png" id="img"  ></img/>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
      showleft.innerHTML+='<img src="img/VivoY72.png" id="img"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
      showleft.innerHTML+='<img src="img/oppoa74.png" id="img"  ></img/>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
      showleft.innerHTML+='<img src="img/realme8.png" id="img"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
      showleft.innerHTML+='<img src="img/VivoY72.png" id="img"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
      showleft.innerHTML+='<img src="img/samsunga72.png" id="img"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
      showleft.innerHTML+='<img src="img/vivov21.png" id="img"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
      showleft.innerHTML+='<img src="img/opporeno5.png" id="img"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
      showleft.innerHTML+='<img src="img/samsunga52.png" id="img"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
      showleft.innerHTML+='<img src="img/opporeno6z.png" id="img2"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
      showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
      showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
      showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
      showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
      showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
    }
    if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
      showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
    }
  }
if(dataleft.length==0){
  showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
}
countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
function search(){
  cleft=0;
    sortprice.innerHTML="เรียงตามราคา"
    sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
    sortcall.innerHTML="เรียงตามปริมาณโทร"
    sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
    var input = document.getElementById('input').value;
    showleft.innerHTML='';
    if(input==''){
        resultleft = dataleft
        for (i = 0;i<dataleft.length;i++){
          cleft++;
          showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+cleft+'</div>'+"<b>ชื่อรุ่น : </b>"+dataleft[i].รุ่นที่ร่วมรายการ+"<br />"+"<b>ราคาปกติ : </b>"+dataleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>ส่วนลดค่าเครื่อง : </b>"+dataleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>On Top e-Coupon [TrueID] : </b>"+dataleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+dataleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+dataleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+" บาท"+"<br />"+"<b>โปรโมชั่นที่ร่วมรายการ : </b>"+dataleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>สัญญาการใช้งาน </b>: "+dataleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+dataleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+dataleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+dataleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+dataleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+dataleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+dataleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
            showleft.innerHTML+='<img src="img/redminote10.png" id="img"  ></img/>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
            showleft.innerHTML+='<img src="img/redminote9t.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
            showleft.innerHTML+='<img src="img/realme5.png" id="img"  ></img/>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
            showleft.innerHTML+='<img src="img/VivoY72.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
            showleft.innerHTML+='<img src="img/oppoa74.png" id="img"  ></img/>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
            showleft.innerHTML+='<img src="img/realme8.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
            showleft.innerHTML+='<img src="img/VivoY72.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
            showleft.innerHTML+='<img src="img/samsunga72.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
            showleft.innerHTML+='<img src="img/vivov21.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
            showleft.innerHTML+='<img src="img/opporeno5.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
            showleft.innerHTML+='<img src="img/samsunga52.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
            showleft.innerHTML+='<img src="img/opporeno6z.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
            showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
            showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
            showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
            showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
            showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
            showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
          }
        }
        countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
        return resultleft;  }
    else{
    resultleft = dataleft.filter(function(obj) {
        return obj.รุ่นที่ร่วมรายการ.toLowerCase()== input.toLowerCase() ||obj.โปรโมชั่นที่ร่วมรายการ.toLowerCase()== input.toLowerCase()||obj.ขนาดจอ.toLowerCase()== input.toLowerCase()||obj.สัญญาการใช้งาน+" เดือน"== input||obj.หน่วยประมวลผล.toLowerCase()== input.toLowerCase()||obj.RAM.toLowerCase()== input.toLowerCase()||obj.ROM.toLowerCase()== input.toLowerCase()||obj.กล้องถ่ายรูป.toLowerCase()== input.toLowerCase()||obj.ความจุแบตเตอรี่.toLowerCase()== input.toLowerCase();
    });     
    for (i = 0;i<resultleft.length;i++){
      cleft++;
      showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+cleft+'</div>'+"<b>ชื่อรุ่น : </b>"+resultleft[i].รุ่นที่ร่วมรายการ+"<br />"+"<b>ราคาปกติ : </b>"+resultleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>ส่วนลดค่าเครื่อง : </b>"+resultleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>On Top e-Coupon [TrueID] : </b>"+resultleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+resultleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+resultleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+" บาท"+"<br />"+"<b>โปรโมชั่นที่ร่วมรายการ : </b>"+resultleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>สัญญาการใช้งาน </b>: "+resultleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+resultleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+resultleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+resultleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+resultleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+resultleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+resultleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
      if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
        showleft.innerHTML+='<img src="img/redminote10.png" id="img"  ></img/>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
        showleft.innerHTML+='<img src="img/redminote9t.png" id="img"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
        showleft.innerHTML+='<img src="img/realme5.png" id="img"  ></img/>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
        showleft.innerHTML+='<img src="img/VivoY72.png" id="img"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
        showleft.innerHTML+='<img src="img/oppoa74.png" id="img"  ></img/>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
        showleft.innerHTML+='<img src="img/realme8.png" id="img"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
        showleft.innerHTML+='<img src="img/VivoY72.png" id="img"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
        showleft.innerHTML+='<img src="img/samsunga72.png" id="img"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
        showleft.innerHTML+='<img src="img/vivov21.png" id="img"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
        showleft.innerHTML+='<img src="img/opporeno5.png" id="img"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
        showleft.innerHTML+='<img src="img/samsunga52.png" id="img"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
        showleft.innerHTML+='<img src="img/opporeno6z.png" id="img2"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
        showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
        showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
        showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
        showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
        showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
      }
      if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
        showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
      }
    }
    if(resultleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    return resultleft;
}}
let itemName = datasearch.map(value => { return value.รุ่นที่ร่วมรายการ });
let itemPro = datasearch.map(value => { return value.โปรโมชั่นที่ร่วมรายการ });
let itemSize = datasearch.map(value => { return value.ขนาดจอ });
let itemTime= datasearch.map(value => { return value.สัญญาการใช้งาน });
let itemCpu= datasearch.map(value => { return value.หน่วยประมวลผล});
let itemRam = datasearch.map(value => { return value.RAM });
let itemRom = datasearch.map(value => { return value.ROM });
let itemCam= datasearch.map(value => { return value.กล้องถ่ายรูป });
let itemBat= datasearch.map(value => { return value.ความจุแบตเตอรี่});
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
itemTime = itemTime.filter(function(item, index) {
  if (itemTime.indexOf(item) == index)
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
 itemTime.forEach(function(item){
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
 function price(prop) { 
        resultleft = resultleft;
        cleft=0; 
        showleft.innerHTML =''
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
            showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+cleft+'</div>'+"<b>ชื่อรุ่น : </b>"+resultleft[i].รุ่นที่ร่วมรายการ+"<br />"+"<b>ราคาปกติ : </b>"+resultleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>ส่วนลดค่าเครื่อง : </b>"+resultleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>On Top e-Coupon [TrueID] : </b>"+resultleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+resultleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+resultleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+" บาท"+"<br />"+"<b>โปรโมชั่นที่ร่วมรายการ : </b>"+resultleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>สัญญาการใช้งาน </b>: "+resultleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+resultleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+resultleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+resultleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+resultleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+resultleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+resultleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
            if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
              showleft.innerHTML+='<img src="img/redminote10.png" id="img"  ></img/>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
              showleft.innerHTML+='<img src="img/redminote9t.png" id="img"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
              showleft.innerHTML+='<img src="img/realme5.png" id="img"  ></img/>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
              showleft.innerHTML+='<img src="img/VivoY72.png" id="img"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
              showleft.innerHTML+='<img src="img/oppoa74.png" id="img"  ></img/>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
              showleft.innerHTML+='<img src="img/realme8.png" id="img"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
              showleft.innerHTML+='<img src="img/VivoY72.png" id="img"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
              showleft.innerHTML+='<img src="img/samsunga72.png" id="img"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
              showleft.innerHTML+='<img src="img/vivov21.png" id="img"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
              showleft.innerHTML+='<img src="img/opporeno5.png" id="img"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
              showleft.innerHTML+='<img src="img/samsunga52.png" id="img"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
              showleft.innerHTML+='<img src="img/opporeno6z.png" id="img2"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
              showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
              showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
              showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
              showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
              showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
            }
            if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
              showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
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
           showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="num">'+cleft+'</div>'+"<b>ชื่อรุ่น : </b>"+resultleft[i].รุ่นที่ร่วมรายการ+"<br />"+"<b>ราคาปกติ : </b>"+resultleft[i].ราคาปกติ+" "+"บาท"+"<br />"+"<b>ส่วนลดค่าเครื่อง : </b>"+resultleft[i].ส่วนลดค่าเครื่อง+" "+" บาท"+"<br />"+"<b>On Top e-Coupon [TrueID] : </b>"+resultleft[i].OnTop+"<br />"+"<b>💵 ชำระค่าเครื่อง : </b>"+resultleft[i].ชำระค่าเครื่อง+" "+" บาท"+"<br />"+"<b>ชำระค่าบริการรายเดือนล่วงหน้า : </b>"+resultleft[i].ชำระค่าบริการรายเดือนล่วงหน้า+" "+" บาท"+"<br />"+"<b>โปรโมชั่นที่ร่วมรายการ : </b>"+resultleft[i].โปรโมชั่นที่ร่วมรายการ+"<br />"+"<b>สัญญาการใช้งาน </b>: "+resultleft[i].สัญญาการใช้งาน+" เดือน"+"<br />"+"<b>📱 ขนาดจอ : </b>"+resultleft[i].ขนาดจอ+"<br />"+"<b>🧠 หน่วยประมวลผล : </b>"+resultleft[i].หน่วยประมวลผล+"<br />"+"<b>🗄️ ความจุข้อมูลภายใน (RAM) : </b>"+resultleft[i].RAM+"<br />"+"<b>🗄️ ความจุข้อมูลภายนอก (ROM) : </b>"+resultleft[i].ROM+"<br />"+"<b>📷 กล้องถ่ายรูป : </b>"+resultleft[i].กล้องถ่ายรูป+"<br />"+"<b>🔋 ความจุแบตเตอรี่ : </b>"+resultleft[i].ความจุแบตเตอรี่+"<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
           if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note10 5G"){
            showleft.innerHTML+='<img src="img/redminote10.png" id="img"  ></img/>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Redmi Note9T 5G"){
            showleft.innerHTML+='<img src="img/redminote9t.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 5G 4+ 128"){
            showleft.innerHTML+='<img src="img/realme5.png" id="img"  ></img/>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G (6/128)"){
            showleft.innerHTML+='<img src="img/VivoY72.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo A74 5G"){
            showleft.innerHTML+='<img src="img/oppoa74.png" id="img"  ></img/>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Realme 8 5G"){
            showleft.innerHTML+='<img src="img/realme8.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo Y72 5G"){
            showleft.innerHTML+='<img src="img/VivoY72.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A32 5G"){
            showleft.innerHTML+='<img src="img/samsunga72.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Vivo V21 5G 128GB"){
            showleft.innerHTML+='<img src="img/vivov21.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="OPPO Reno5 5G"){
            showleft.innerHTML+='<img src="img/opporeno5.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Samsung Galaxy A52 5G"){
            showleft.innerHTML+='<img src="img/samsunga52.png" id="img"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="Oppo Reno 6z 5G"){
            showleft.innerHTML+='<img src="img/opporeno6z.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 128GB"){
            showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 256GB"){
            showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO 512GB"){
            showleft.innerHTML+='<img src="img/iphone12pro.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 128GB"){
            showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 256GB"){
            showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
          }
          if(dataleft[i].รุ่นที่ร่วมรายการ=="iPhone 12 PRO MAX 512GB"){
            showleft.innerHTML+='<img src="img/iphone12promax.png" id="img2"  ></img>'
          }
          }
        sortprice.innerHTML="เรียงตามราคา ↑"
        sortp=0;
    }
    if(resultleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
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
})