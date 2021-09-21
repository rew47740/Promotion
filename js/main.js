var pricemax = sessionStorage.getItem("pricemax");
var pricemin = sessionStorage.getItem("pricemin");
var callmax = sessionStorage.getItem("callmax");
var callmin = sessionStorage.getItem("callmin");
var netmax = sessionStorage.getItem("netmax");
var netmin = sessionStorage.getItem("netmin");
var speedmax = sessionStorage.getItem("speedmax");
var speedmin = sessionStorage.getItem("speedmin");
var b1 = sessionStorage.getItem("b1");
var b2 = sessionStorage.getItem("b2");
var b3 = sessionStorage.getItem("b3");
var b4 = sessionStorage.getItem("b4");
var b5 = sessionStorage.getItem("b5");
var b = sessionStorage.getItem("b");
console.log(b)
if (b==1){
  b1=0;
  b2=0;
  b3=0;
  b4=0;
  b5=0;
  b=0;
}
console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)
console.log(b5)
if (netmax=="ไม่จำกัด"){netmax=9999}
if (netmin=="ไม่จำกัด"){netmin=9999}
if (callmax=="ไม่จำกัด"){callmax=9999}
if (callmin=="ไม่จำกัด"){callmin=9999}
if (speedmax=="Full Speed"){speedmax=9999}
if (speedmin=="Full Speed"){speedmin=9999}
fetch("json/Pronew.json")
.then((response) => response.json())
.then(function(dat){
data = dat.filter(function(obj) {return obj.call >= callmin && obj.call <= callmax && obj.netcapacity >= netmin && obj.netcapacity <= netmax && obj.price >= pricemin && obj.price <= pricemax && obj.speed >= speedmin && obj.speed <= speedmax });
datasearch = data.filter(function(obj) {return obj.ค่าย == "AIS" || obj.ค่าย== "DTAC"});
dataleft=data.filter(function(obj) {return obj.ค่าย=="AIS" });
dataright=data.filter(function(obj) {return obj.ค่าย=="DTAC" });
datarightest=data.filter(function(obj) {return obj.ค่าย=="3BB" });
showleft = document.getElementById("Left");
showright = document.getElementById("Right");
countleft = document.getElementById("cl");
countright = document.getElementById("cr");
showleft.innerHTML ='';
showright.innerHTML ='';
resultleft=dataleft;
resultright=dataright;
resultrightest=datarightest;
var sortp = 0;
var sortc = 0;
var sortca = 0;
var sorts = 0;
var g=0;
var gg =0;
var bb =0;
var cleft =0;
var cright=0;
for (i = 0;i<dataleft.length;i++){
  if (dataleft[i].Type!==""){showleft.innerHTML += '<div class="typeleft">'+dataleft[i].Type+'</div>'}
  cleft++;
// showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
//     showleft.innerHTML += '<div class="typesleft">'+dataleft[i].ประเภทแพ็กเกจ+'</div>';
//     showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+dataleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+dataleft[i].ค่าบริการ+" "+dataleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+dataleft[i].โทรในเครือข่าย+" "+dataleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+dataleft[i].โทรนอกเครือข่าย+" "+dataleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+dataleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+dataleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+dataleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+dataleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+dataleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+dataleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+dataleft[i].SMS+"<b> / MMS : </b>"+dataleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+dataleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+dataleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+dataleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+dataleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

//   }
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
    showleft.innerHTML += '<div class="typesleft">'+dataleft[i].ประเภทแพ็กเกจ+'</div>';
		showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].โทรในเครือข่าย+" "+dataleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].โทรนอกเครือข่าย+" "+dataleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+dataleft[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+dataleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].SMS+" / "+dataleft[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+dataleft[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

  }
for (i = 0;i<dataright.length;i++){
  if (dataright[i].Type!==""){showright.innerHTML += '<div class="typeright">'+dataright[i].Type+'</div>'}
  cright++;
// showright.innerHTML += '<div class = numright>'+cright+'</div>';
//     showright.innerHTML += '<div class="typesright">'+dataright[i].ประเภทแพ็กเกจ+'</div>';
//     showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+dataright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+dataright[i].ค่าบริการ+" "+dataright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+dataright[i].โทรในเครือข่าย+" "+dataright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+dataright[i].โทรนอกเครือข่าย+" "+dataright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+dataright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+dataright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+dataright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+dataright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+dataright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+dataright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+dataright[i].SMS+"<b> / MMS : </b>"+dataright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+dataright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+dataright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+dataright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+dataright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
// }
showright.innerHTML += '<div class = numright>'+cright+'</div>';
    showright.innerHTML += '<div class="typesright">'+dataright[i].ประเภทแพ็กเกจ+'</div>';
		showright.innerHTML += '<div class="itemright" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].โทรในเครือข่าย+" "+dataright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].โทรนอกเครือข่าย+" "+dataright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+dataright[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+dataright[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].SMS+" / "+dataright[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+dataright[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

  }
if(dataleft.length==0){
  showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
}
if(dataright.length==0){
  showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
}
countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
function search(){
  cright=0;
  cleft=0;
  g=0;
  gg=0;
  press4.style.color = "white";
  press2.style.color = "white";
  press3.style.color = "white";
  press1.style.color = "white";
  press5.style.color = "white";
  fiveg.style.color = "rgb(255, 255, 255)"
  fourg.style.color = "rgb(255, 255, 255)"
    sortprice.innerHTML="เรียงตามราคา"
    sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
    sortcall.innerHTML="เรียงตามปริมาณโทร"
    sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
    var input = document.getElementById('input').value;
    showleft.innerHTML='';
    showright.innerHTML ='';
    if(input==''){
        resultleft = dataleft
        for (i = 0;i<resultleft.length;i++){
          cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';;showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
            showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';
            if (resultleft[i].Type!==""){showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>'}
            // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
           showdataleft();          }  
        resultright = dataright 
        for (i = 0;i<resultright.length;i++){
          cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
            showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
            if (resultright[i].Type!==""){showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>'}
           
            // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
            showdataright();          }
        countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
        countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
        return resultleft,resultright;  }
    else{
    resultleft = dataleft.filter(function(obj) {
        return obj.ค่าย.toLowerCase() == input.toLowerCase() || obj.ประเภทแพ็กเกจ.toLowerCase()== input.toLowerCase() || obj.ชื่อแพ็กเกจ.toLowerCase()== input.toLowerCase() || obj.ค่าบริการ == input|| obj.ค่าบริการ+" "+obj.หน่วยราคา == input||obj.price==input||obj.price+" "+obj.หน่วยราคา == input|| obj.โทรนอกเครือข่าย.toLowerCase() == input.toLowerCase()|| obj.โทรในเครือข่าย.toLowerCase() == input.toLowerCase()|| obj.ปริมาณเน็ต.toLowerCase() == input.toLowerCase()|| obj.ความเร็วเน็ตสูงสุด.toLowerCase()== input.toLowerCase() || obj.ส่วนเกินค่าโทรในเครือข่าย.toLowerCase() == input.toLowerCase()|| obj.ส่วนเกินค่าโทรในเครือข่าย.toLowerCase() == input.toLowerCase()|| obj.ส่วนเกินค่าเน็ต.toLowerCase()== input.toLowerCase() || obj.ส่วนเกินMMS.toLowerCase() == input.toLowerCase()|| obj.ส่วนเกินSMS.toLowerCase()== input.toLowerCase()|| obj.SMS.toLowerCase()== input.toLowerCase()|| obj.MMS.toLowerCase()== input.toLowerCase()||obj.ของแถม.toLowerCase()== input.toLowerCase()||obj.Wifi.toLowerCase()== input.toLowerCase()||obj.เงื่อนไขเพิ่มเติม.toLowerCase()== input.toLowerCase()||obj.netcapacity== input||obj.call== input||obj.speed== input||obj.Type.toLowerCase()== input.toLowerCase();
    });     
    for (i = 0;i<resultleft.length;i++){
      cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';;showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
        showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';
        if (resultleft[i].Type!==""){showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>'}
        // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
       showdataleft();   
      }
    resultright = dataright.filter(function(obj) {
      return obj.ค่าย.toLowerCase() == input.toLowerCase() || obj.ประเภทแพ็กเกจ.toLowerCase()== input.toLowerCase() || obj.ชื่อแพ็กเกจ.toLowerCase()== input.toLowerCase() || obj.ค่าบริการ == input|| obj.ค่าบริการ+" "+obj.หน่วยราคา == input||obj.price==input||obj.price+" "+obj.หน่วยราคา == input|| obj.โทรนอกเครือข่าย.toLowerCase() == input.toLowerCase()|| obj.โทรในเครือข่าย.toLowerCase() == input.toLowerCase()|| obj.ปริมาณเน็ต.toLowerCase() == input.toLowerCase()|| obj.ความเร็วเน็ตสูงสุด.toLowerCase()== input.toLowerCase() || obj.ส่วนเกินค่าโทรในเครือข่าย.toLowerCase() == input.toLowerCase()|| obj.ส่วนเกินค่าโทรในเครือข่าย.toLowerCase() == input.toLowerCase()|| obj.ส่วนเกินค่าเน็ต.toLowerCase()== input.toLowerCase() || obj.ส่วนเกินMMS.toLowerCase() == input.toLowerCase()|| obj.ส่วนเกินSMS.toLowerCase()== input.toLowerCase()|| obj.SMS.toLowerCase()== input.toLowerCase()|| obj.MMS.toLowerCase()== input.toLowerCase()||obj.ของแถม.toLowerCase()== input.toLowerCase()||obj.Wifi.toLowerCase()== input.toLowerCase()||obj.เงื่อนไขเพิ่มเติม.toLowerCase()== input.toLowerCase()||obj.netcapacity== input||obj.call== input||obj.speed== input||obj.Type.toLowerCase()== input.toLowerCase();
    });      
    for (i = 0;i<resultright.length;i++){
      cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
        showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
        if (resultright[i].Type!==""){showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>'}
        // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        showdataright();      }
    if(resultleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
    }
    if(resultright.length==0){
      showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
    return resultleft,resultright;
}}
function showdata1 (){
  cleft=0;
  cright=0;
  bb=0;
  sortp = 0;
  sortc = 0;
  sortca = 0;
  sorts = 0;
  g=0;
  gg =0;
    press1.style.color = "rgb(255, 200, 97)";
    press2.style.color = "white";
    press3.style.color = "white";
    press4.style.color = "white";
    press5.style.color = "white";
    fiveg.style.color = "rgb(255, 255, 255)"
    fourg.style.color = "rgb(255, 255, 255)"
    sortprice.innerHTML="เรียงตามราคา"
    sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
    sortcall.innerHTML="เรียงตามปริมาณโทร"
    sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
    showleft.innerHTML ='';
    resultleft = dataleft.filter(function(obj) {return obj.ประเภทแพ็กเกจ == 'รายเดือน'});     
    for (i = 0;i<resultleft.length;i++){  
        cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';;showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
        showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';  
        showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>';
        // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
       showdataleft();   
    }
    showright.innerHTML ='';
    resultright = dataright.filter(function(obj) {return obj.ประเภทแพ็กเกจ == 'รายเดือน'});     
    for (i = 0;i<resultright.length;i++){
      cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
        showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
        showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>';
        // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        showdataright();      }
    if(resultleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
    }
    if(resultright.length==0){
      showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
    return resultleft,resultright;
}
function showdata2 (){
  cleft=0;
  cright=0;
  bb=0;
  sortp = 0;
  sortc = 0;
  sortca = 0;
  sorts = 0;
  g=0;
  gg =0;
  press2.style.color = "rgb(255, 200, 97)";
  press1.style.color = "white";
  press3.style.color = "white";
  press4.style.color = "white";
  press5.style.color = "white";
  fiveg.style.color = "rgb(255, 255, 255)"
  fourg.style.color = "rgb(255, 255, 255)"
    sortprice.innerHTML="เรียงตามราคา"
    sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
    sortcall.innerHTML="เรียงตามปริมาณโทร"
    sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
    showleft.innerHTML ='';
    resultleft = dataleft.filter(function(obj) {return obj.ประเภทแพ็กเกจ == 'เติมเงิน'});     
    for (i = 0;i<resultleft.length;i++){
      cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';;showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
        showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';
        showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>';
        // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
       showdataleft();   
    }
    showright.innerHTML ='';
    resultright = dataright.filter(function(obj) {return obj.ประเภทแพ็กเกจ == 'เติมเงิน'});     
    for (i = 0;i<resultright.length;i++){
      cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
      showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
      showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>';
      // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
      showdataright();    }
    if(resultleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
    }
    if(resultright.length==0){
      showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
    return resultleft,resultright;

}
function showdata3 (){
  cleft=0;
  cright=0;
  bb=0;
  sortp = 0;
  sortc = 0;
  sortca = 0;
  sorts = 0;
  g=0;
  gg =0;
  press3.style.color = "rgb(255, 200, 97)";
  press2.style.color = "white";
  press1.style.color = "white";
  press4.style.color = "white";
  press5.style.color = "white";
  fiveg.style.color = "rgb(255, 255, 255)"
  fourg.style.color = "rgb(255, 255, 255)"
    sortprice.innerHTML="เรียงตามราคา"
    sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
    sortcall.innerHTML="เรียงตามปริมาณโทร"
    sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
    showleft.innerHTML =''
    resultleft = dataleft.filter(function(obj) {return obj.ประเภทแพ็กเกจ == 'แพ็กเกจเสริม'});     
    for (i = 0;i<resultleft.length;i++){
      cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';;showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
      showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';
      showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>';
      // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
     showdataleft();   
  }
    showright.innerHTML ='';
    resultright = dataright.filter(function(obj) {return obj.ประเภทแพ็กเกจ == 'แพ็กเกจเสริม'});     
    for (i = 0;i<resultright.length;i++){
      cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
      showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
      showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>';
      // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
      showdataright();    }
    if(resultleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
    }
    if(resultright.length==0){
      showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
    return resultleft,resultright;
 
}
function showdata4 (){
  cleft=0;
  cright=0;
  bb=0;
  sortp = 0;
  sortc = 0;
  sortca = 0;
  sorts = 0;
  g=0;
  gg =0;
  press4.style.color = "rgb(255, 200, 97)";
  press2.style.color = "white";
  press3.style.color = "white";
  press1.style.color = "white";
  press5.style.color = "white";
  fiveg.style.color = "rgb(255, 255, 255)"
  fourg.style.color = "rgb(255, 255, 255)"
  sortprice.innerHTML="เรียงตามราคา"
  sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
  sortcall.innerHTML="เรียงตามปริมาณโทร"
  sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
  showleft.innerHTML =''
  resultleft = dataleft.filter(function(obj) {return obj.ประเภทแพ็กเกจ == 'โปรโมชั่นมือถือ'});     
  for (i = 0;i<resultleft.length;i++){
    cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
      showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';
      // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
     showdataleft();   
  }
  showright.innerHTML ='';
  resultright = dataright.filter(function(obj) {return obj.ประเภทแพ็กเกจ == 'โปรโมชั่นมือถือ'});     
  for (i = 0;i<resultright.length;i++){
    cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
    showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
    // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
    showdataright();  }
  if(resultleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
    }
    if(resultright.length==0){
      showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
  return resultleft,resultright;
}
function showdata5 (){
  cleft=0;
  cright=0;
  bb=1;
  sortp = 0;
  sortc = 0;
  sortca = 0;
  sorts = 0;
  g=0;
  gg =0;
  press5.style.color = "rgb(255, 200, 97)";
  press2.style.color = "white";
  press3.style.color = "white";
  press4.style.color = "white";
  press1.style.color = "white";
  fiveg.style.color = "rgb(255, 255, 255)"
  fourg.style.color = "rgb(255, 255, 255)"
  sortprice.innerHTML="เรียงตามราคา"
  sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
  sortcall.innerHTML="เรียงตามปริมาณโทร"
  sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
  showleft.innerHTML =''
  resultleft = dataleft.filter(function(obj) {return obj.ประเภทแพ็กเกจ !== 'รายเดือน'&& obj.ประเภทแพ็กเกจ !== 'เติมเงิน'&& obj.ประเภทแพ็กเกจ !== 'แพ็กเกจเสริม'&& obj.ประเภทแพ็กเกจ !== 'โปรโมชั่นมือถือ'});     
  for (i = 0;i<resultleft.length;i++){
    cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
    showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';
    // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
   showdataleft();   
}
  showright.innerHTML ='';
  resultrightest = datarightest.filter(function(obj) {return obj.ประเภทแพ็กเกจ !== 'รายเดือน'&& obj.ประเภทแพ็กเกจ !== 'เติมเงิน'&& obj.ประเภทแพ็กเกจ !== 'แพ็กเกจเสริม'&& obj.ประเภทแพ็กเกจ !== 'โปรโมชั่นมือถือ'});
  for (i = 0;i<resultrightest.length;i++){
    cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
    showright.innerHTML += '<div class="typesright">'+resultrightest[i].ประเภทแพ็กเกจ+'</div>';
    // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultrightest[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultrightest[i].ค่าบริการ+" "+resultrightest[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultrightest[i].โทรในเครือข่าย+" "+resultrightest[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultrightest[i].โทรนอกเครือข่าย+" "+resultrightest[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultrightest[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultrightest[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultrightest[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultrightest[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultrightest[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultrightest[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultrightest[i].SMS+"<b> / MMS : </b>"+resultrightest[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultrightest[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultrightest[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultrightest[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultrightest[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
		showright.innerHTML += '<div class="itemright" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].โทรในเครือข่าย+" "+resultrightest[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].โทรนอกเครือข่าย+" "+resultrightest[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+resultrightest[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+resultrightest[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].SMS+" / "+resultrightest[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+resultrightest[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        
  }
  if(resultleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
    }
    if(resultrightest.length==0){
      showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
  return resultleft,resultrightest;

}

function four(){
  cleft=0;
  cright=0;
  gg=0;
  if (g == 0){
    fourg.style.color="rgb(255, 200, 97)";
    fiveg.style.color="rgb(255, 255, 255)";
  showleft.innerHTML =''
    gresultleft = resultleft.filter(function(obj) {return obj.Type == '4G/3G'});     
    for (i = 0;i<gresultleft.length;i++){
      cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
      showleft.innerHTML += '<div class="typesleft">'+gresultleft[i].ประเภทแพ็กเกจ+'</div>';
      showleft.innerHTML += '<div class="typeleft">'+gresultleft[i].Type+'</div>';
      // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+gresultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+gresultleft[i].ค่าบริการ+" "+gresultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+gresultleft[i].โทรในเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+gresultleft[i].โทรนอกเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+gresultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+gresultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+gresultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+gresultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+gresultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+gresultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+gresultleft[i].SMS+"<b> / MMS : </b>"+gresultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+gresultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+gresultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+gresultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+gresultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
  	showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].โทรในเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].โทรนอกเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].SMS+" / "+gresultleft[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        
    }
    showright.innerHTML ='';
    gresultright = resultright.filter(function(obj) {return obj.Type == '4G/3G'});     
    for (i = 0;i<gresultright.length;i++){
      cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
      showright.innerHTML += '<div class="typesright">'+gresultright[i].ประเภทแพ็กเกจ+'</div>';
      showright.innerHTML += '<div class="typeright">'+gresultright[i].Type+'</div>';
      // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+gresultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+gresultright[i].ค่าบริการ+" "+gresultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+gresultright[i].โทรในเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+gresultright[i].โทรนอกเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+gresultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+gresultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+gresultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+gresultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+gresultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+gresultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+gresultright[i].SMS+"<b> / MMS : </b>"+gresultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+gresultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+gresultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+gresultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+gresultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
  	showright.innerHTML += '<div class="itemright" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].โทรในเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].โทรนอกเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].SMS+" / "+gresultright[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        
    }
    g=1}
    else if (g==1){
      fourg.style.color="rgb(255, 255, 255)";
      fiveg.style.color="rgb(255, 255, 255)";
    showleft.innerHTML =''
    gresultleft = resultleft   
    for (i = 0;i<gresultleft.length;i++){
      cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
      showleft.innerHTML += '<div class="typesleft">'+gresultleft[i].ประเภทแพ็กเกจ+'</div>';
      showleft.innerHTML += '<div class="typeleft">'+gresultleft[i].Type+'</div>';
      // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+gresultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+gresultleft[i].ค่าบริการ+" "+gresultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+gresultleft[i].โทรในเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+gresultleft[i].โทรนอกเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+gresultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+gresultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+gresultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+gresultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+gresultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+gresultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+gresultleft[i].SMS+"<b> / MMS : </b>"+gresultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+gresultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+gresultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+gresultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+gresultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
  	showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].โทรในเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].โทรนอกเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].SMS+" / "+gresultleft[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        
    }
  showright.innerHTML ='';
  gresultright = resultright    
  for (i = 0;i<gresultright.length;i++){
    cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
    showright.innerHTML += '<div class="typesright">'+gresultright[i].ประเภทแพ็กเกจ+'</div>';
    showright.innerHTML += '<div class="typeright">'+gresultright[i].Type+'</div>';
    // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+gresultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+gresultright[i].ค่าบริการ+" "+gresultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+gresultright[i].โทรในเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+gresultright[i].โทรนอกเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+gresultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+gresultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+gresultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+gresultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+gresultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+gresultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+gresultright[i].SMS+"<b> / MMS : </b>"+gresultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+gresultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+gresultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+gresultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+gresultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
  	showright.innerHTML += '<div class="itemright" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].โทรในเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].โทรนอกเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].SMS+" / "+gresultright[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        
  }
  g=0}
  if(gresultleft.length==0){
    showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
  }
  if(gresultright.length==0){
    showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
  }
  countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
    return gresultleft,gresultright;}
function five(){
    cleft=0;
    cright=0;
      g=0;
      if (gg == 0){
        fiveg.style.color="rgb(255, 200, 97)";
        fourg.style.color="rgb(255, 255, 255)";
      showleft.innerHTML =''
        gresultleft = resultleft.filter(function(obj) {return obj.Type == '5G'});     
        for (i = 0;i<gresultleft.length;i++){
          cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
          showleft.innerHTML += '<div class="typesleft">'+gresultleft[i].ประเภทแพ็กเกจ+'</div>';
          showleft.innerHTML += '<div class="typeleft">'+gresultleft[i].Type+'</div>';
          // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+gresultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+gresultleft[i].ค่าบริการ+" "+gresultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+gresultleft[i].โทรในเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+gresultleft[i].โทรนอกเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+gresultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+gresultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+gresultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+gresultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+gresultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+gresultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+gresultleft[i].SMS+"<b> / MMS : </b>"+gresultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+gresultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+gresultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+gresultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+gresultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
  	showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].โทรในเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].โทรนอกเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].SMS+" / "+gresultleft[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        
        }
        showright.innerHTML ='';
        gresultright = resultright.filter(function(obj) {return obj.Type == '5G'});     
        for (i = 0;i<gresultright.length;i++){
          cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
          showright.innerHTML += '<div class="typesright">'+gresultright[i].ประเภทแพ็กเกจ+'</div>';
          showright.innerHTML += '<div class="typeright">'+gresultright[i].Type+'</div>';
          // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+gresultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+gresultright[i].ค่าบริการ+" "+gresultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+gresultright[i].โทรในเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+gresultright[i].โทรนอกเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+gresultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+gresultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+gresultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+gresultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+gresultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+gresultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+gresultright[i].SMS+"<b> / MMS : </b>"+gresultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+gresultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+gresultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+gresultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+gresultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
  	showright.innerHTML += '<div class="itemright" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].โทรในเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].โทรนอกเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].SMS+" / "+gresultright[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        
        }
        gg=1}
        else if (gg==1){
          fourg.style.color="rgb(255, 255, 255)";
          fiveg.style.color="rgb(255, 255, 255)";
        showleft.innerHTML =''
        gresultleft = resultleft   
        for (i = 0;i<gresultleft.length;i++){
          cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
          showleft.innerHTML += '<div class="typesleft">'+gresultleft[i].ประเภทแพ็กเกจ+'</div>';
          showleft.innerHTML += '<div class="typeleft">'+gresultleft[i].Type+'</div>';
          // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+gresultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+gresultleft[i].ค่าบริการ+" "+gresultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+gresultleft[i].โทรในเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+gresultleft[i].โทรนอกเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+gresultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+gresultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+gresultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+gresultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+gresultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+gresultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+gresultleft[i].SMS+"<b> / MMS : </b>"+gresultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+gresultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+gresultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+gresultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+gresultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
  	showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].โทรในเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].โทรนอกเครือข่าย+" "+gresultleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].SMS+" / "+gresultleft[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+gresultleft[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        
        }
      showright.innerHTML ='';
      gresultright = resultright   
      for (i = 0;i<gresultright.length;i++){
        cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
        showright.innerHTML += '<div class="typesright">'+gresultright[i].ประเภทแพ็กเกจ+'</div>';
        showright.innerHTML += '<div class="typeright">'+gresultright[i].Type+'</div>';
        // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+gresultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+gresultright[i].ค่าบริการ+" "+gresultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+gresultright[i].โทรในเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+gresultright[i].โทรนอกเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+gresultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+gresultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+gresultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+gresultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+gresultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+gresultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+gresultright[i].SMS+"<b> / MMS : </b>"+gresultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+gresultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+gresultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+gresultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+gresultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
  	showright.innerHTML += '<div class="itemright" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].โทรในเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].โทรนอกเครือข่าย+" "+gresultright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].SMS+" / "+gresultright[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+gresultright[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        
      }
      gg=0}
      if(gresultleft.length==0){
        showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
      }
      if(gresultright.length==0){
        showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
      }
      countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
    return gresultleft,gresultright;}
function price(prop) { 
  cleft=0;
  cright=0; 
  g=0;
  gg=0;
  if (bb==0){
    resultright=resultright;
  }
  else if(bb==1){
    resultright=resultrightest;
  }
  fiveg.style.color = "rgb(255, 255, 255)"
  fourg.style.color = "rgb(255, 255, 255)"  
    showright.innerHTML =''
    if(sortp==0){
        resultright = resultright.sort((a, b) => {
            let retval = 0;
            if (a.price < b.price)
              retval = -1;
            if (a.price > b.price)
              retval = 1;
            if (retval === 0)
              retval = a.resultright > b.resultright ? -1 : 1;
            return retval;
          });
          for (i = 0;i<resultright.length;i++){
            cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
            if (resultright[i].Type!==""){showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>'}
            showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
            // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
            showdataright();          }
        showleft.innerHTML =''
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
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
            if (resultleft[i].Type!==""){showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>'}
            showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';    
            // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
           showdataleft();   
        }
        
        sortprice.innerHTML="เรียงตามราคา ↓"
        sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
        sortcall.innerHTML="เรียงตามปริมาณโทร"
        sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
        sortp=1;
    }
    else if(sortp==1){
        resultright = resultright.sort((a, b) => {
            let retval = 0;
            if (a.price > b.price)
              retval = -1;
            if (a.price < b.price)
              retval = 1;
            if (retval === 0)
              retval = a.resultright < b.resultright ? -1 : 1;
            return retval;
          });
          for (i = 0;i<resultright.length;i++){
            cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
            if (resultright[i].Type!==""){showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>'}
            showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
            // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
            showdataright();          }
        showleft.innerHTML =''
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
            cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
            if (resultleft[i].Type!==""){showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>'}
            showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';    
            // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
           showdataleft();   
        }
        sortprice.innerHTML="เรียงตามราคา ↑"
        sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
        sortcall.innerHTML="เรียงตามปริมาณโทร"
        sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
        sortp=0;
    }
    if(resultleft.length==0){
      showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
    }
    if(resultright.length==0){
      showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
    }
    countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
    countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
}  
function netcapacity(prop) {  
  cleft=0;
  cright=0;
  g=0;
  gg=0;
  if (bb==0){
    resultright=resultright;
  }
  else if(bb==1){
    resultright=resultrightest;
  }
  fiveg.style.color = "rgb(255, 255, 255)"
  fourg.style.color = "rgb(255, 255, 255)"   
  showright.innerHTML =''
  if(sortc==0){
      resultright = resultright.sort((a, b) => {
          let retval = 0;
          if (a.netcapacity < b.netcapacity)
            retval = -1;
          if (a.netcapacity > b.netcapacity)
            retval = 1;
          if (retval === 0)
            retval = a.resultright > b.resultright ? -1 : 1;
          return retval;
        });
        for (i = 0;i<resultright.length;i++){
          cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
          if (resultright[i].Type!==""){showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>'}
          showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
          // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
          showdataright();        }
      showleft.innerHTML =''
      resultleft = resultleft.sort((a, b) => {
          let retval = 0;
          if (a.netcapacity < b.netcapacity)
            retval = -1;
          if (a.netcapacity > b.netcapacity)
            retval = 1;
          if (retval === 0)
            retval = a.resultleft > b.resultleft ? -1 : 1;
          return retval;
        });
        for (i = 0;i<resultleft.length;i++){
          cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
          if (resultleft[i].Type!==""){showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>'}
          showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';    
          // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
         showdataleft();   
      }
      sortcapacity.innerHTML="เรียงตามปริมาณเน็ต ↓"
      sortprice.innerHTML="เรียงตามราคา"
      sortcall.innerHTML="เรียงตามปริมาณโทร"
      sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
      sortc=1;
  }
  else if(sortc==1){
      resultright = resultright.sort((a, b) => {
          let retval = 0;
          if (a.netcapacity > b.netcapacity)
            retval = -1;
          if (a.netcapacity < b.netcapacity)
            retval = 1;
          if (retval === 0)
            retval = a.resultright < b.resultright ? -1 : 1;
          return retval;
        });
        for (i = 0;i<resultright.length;i++){
          cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
          if (resultright[i].Type!==""){showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>'}
          showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
          // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
          showdataright();        }
      showleft.innerHTML =''
      resultleft = resultleft.sort((a, b) => {
          let retval = 0;
          if (a.netcapacity > b.netcapacity)
            retval = -1;
          if (a.netcapacity < b.netcapacity)
            retval = 1;
          if (retval === 0)
            retval = a.resultleft < b.resultleft ? -1 : 1;
          return retval;
        });
        for (i = 0;i<resultleft.length;i++){
          cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
          if (resultleft[i].Type!==""){showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>'}
          showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';    
          // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
         showdataleft();   
      }
      sortcapacity.innerHTML="เรียงตามปริมาณเน็ต ↑"
      sortprice.innerHTML="เรียงตามราคา"
      sortcall.innerHTML="เรียงตามปริมาณโทร"
      sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
      sortc=0;
  }
  if(resultleft.length==0){
    showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
  }
  if(resultright.length==0){
    showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
  }
  countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
  countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
}  
function call(prop) {  
  cleft=0;
  cright=0;  
  g=0;
  gg=0;
  if (bb==0){
    resultright=resultright;
  }
  else if(bb==1){
    resultright=resultrightest;
  }
  if (bb==0){
    resultright=resultright;
  }
  else if(bb==1){
    resultright=resultrightest;
  }
  fiveg.style.color = "rgb(255, 255, 255)"
  fourg.style.color = "rgb(255, 255, 255)" 
  showright.innerHTML =''
  if(sortca==0){
      resultright = resultright.sort((a, b) => {
          let retval = 0;
          if (a.call < b.call)
            retval = -1;
          if (a.call > b.call)
            retval = 1;
          if (retval === 0)
            retval = a.resultright > b.resultright ? -1 : 1;
          return retval;
        });
        for (i = 0;i<resultright.length;i++){
          cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
          if (resultright[i].Type!==""){showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>'}
          showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
          // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
          showdataright();        }
      showleft.innerHTML =''
      resultleft = resultleft.sort((a, b) => {
          let retval = 0;
          if (a.call < b.call)
            retval = -1;
          if (a.call > b.call)
            retval = 1;
          if (retval === 0)
            retval = a.resultleft > b.resultleft ? -1 : 1;
          return retval;
        });
        for (i = 0;i<resultleft.length;i++){
          cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
          if (resultleft[i].Type!==""){showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>'}
          showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';    
          // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
         showdataleft();   
      }
      sortcall.innerHTML="เรียงตามปริมาณโทร ↓"
      sortprice.innerHTML="เรียงตามราคา"
      sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
      sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
      sortca=1;
  }
  else if(sortca==1){
    resultright = resultright.sort((a, b) => {
        let retval = 0;
        if (a.call > b.call)
          retval = -1;
        if (a.call < b.call)
          retval = 1;
        if (retval === 0)
          retval = a.resultright < b.resultright ? -1 : 1;
        return retval;
      });
      for (i = 0;i<resultright.length;i++){
        cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
        if (resultright[i].Type!==""){showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>'}
        showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
        // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
        showdataright();      }
    showleft.innerHTML =''
    resultleft = resultleft.sort((a, b) => {
        let retval = 0;
        if (a.call > b.call)
          retval = -1;
        if (a.call < b.call)
          retval = 1;
        if (retval === 0)
          retval = a.resultleft < b.resultleft ? -1 : 1;
        return retval;
      });
      for (i = 0;i<resultleft.length;i++){
        cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
        if (resultleft[i].Type!==""){showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>'}
        showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';    
        // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
       showdataleft();   
    }
    sortcall.innerHTML="เรียงตามปริมาณโทร ↑"
    sortprice.innerHTML="เรียงตามราคา"
    sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
    sortspeed.innerHTML="เรียงตามความเร็วเน็ต"
    sortca=0;
}
if(resultleft.length==0){
  showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
}
if(resultright.length==0){
  showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
}
countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
}
function speed(prop) {  
  cleft=0;
  cright=0;  
  g=0;
  gg=0;
  if (bb==0){
    resultright=resultright;
  }
  else if(bb==1){
    resultright=resultrightest;
  }
  fiveg.style.color = "rgb(255, 255, 255)"
  fourg.style.color = "rgb(255, 255, 255)" 
    showright.innerHTML =''
    if(sorts==0){
        resultright = resultright.sort((a, b) => {
            let retval = 0;
            if (a.speed < b.speed)
              retval = -1;
            if (a.speed > b.speed)
              retval = 1;
            if (retval === 0)
              retval = a.resultright > b.resultright ? -1 : 1;
            return retval;
          });
          for (i = 0;i<resultright.length;i++){
            cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
            if (resultright[i].Type!==""){showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>'}
            showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
            // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
            showdataright();          }
        showleft.innerHTML =''
        resultleft = resultleft.sort((a, b) => {
            let retval = 0;
            if (a.speed < b.speed)
              retval = -1;
            if (a.speed > b.speed)
              retval = 1;
            if (retval === 0)
              retval = a.resultleft > b.resultleft ? -1 : 1;
            return retval;
          });
          for (i = 0;i<resultleft.length;i++){
            cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
            if (resultleft[i].Type!==""){showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>'}
            showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';    
            // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
           showdataleft();   
        }
        sortcall.innerHTML="เรียงตามปริมาณโทร"
        sortprice.innerHTML="เรียงตามราคา"
        sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
        sortspeed.innerHTML="เรียงตามความเร็วเน็ต ↓"
        sorts=1;
    }
  else if(sorts==1){
      resultright = resultright.sort((a, b) => {
          let retval = 0;
          if (a.speed > b.speed)
            retval = -1;
          if (a.speed < b.speed)
            retval = 1;
          if (retval === 0)
            retval = a.resultright < b.resultright ? -1 : 1;
          return retval;
        });
        for (i = 0;i<resultright.length;i++){
          cright++;
showright.innerHTML += '<div class = numright>'+cright+'</div>';
          if (resultright[i].Type!==""){showright.innerHTML += '<div class="typeright">'+resultright[i].Type+'</div>'}
          showright.innerHTML += '<div class="typesright">'+resultright[i].ประเภทแพ็กเกจ+'</div>';
          // showright.innerHTML += '<div class="itemright" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultright[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultright[i].ค่าบริการ+" "+resultright[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultright[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultright[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultright[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultright[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultright[i].SMS+"<b> / MMS : </b>"+resultright[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultright[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultright[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultright[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultright[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
          showdataright();        }
      showleft.innerHTML =''
      resultleft = resultleft.sort((a, b) => {
          let retval = 0;
          if (a.speed > b.speed)
            retval = -1;
          if (a.speed < b.speed)
            retval = 1;
          if (retval === 0)
            retval = a.resultleft < b.resultleft ? -1 : 1;
          return retval;
        });
        for (i = 0;i<resultleft.length;i++){
          cleft++;
showleft.innerHTML += '<div class = numleft>'+cleft+'</div>';
          if (resultleft[i].Type!==""){showleft.innerHTML += '<div class="typeleft">'+resultleft[i].Type+'</div>'}
          showleft.innerHTML += '<div class="typesleft">'+resultleft[i].ประเภทแพ็กเกจ+'</div>';    
          // showleft.innerHTML += '<div class="itemleft" tabindex="0">'+"<b>ชื่อแพ็กเกจ : </b>"+resultleft[i].ชื่อแพ็กเกจ+"<br />"+"<b>ราคา : </b>"+resultleft[i].ค่าบริการ+" "+resultleft[i].หน่วยราคา+"<br />"+"<b>📞 โทรในเครือข่าย : </b>"+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>โทรนอกเครือข่าย : </b>"+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+"<br />"+"<b>ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+"<br />"+"<b>ส่วนเกินค่าโทร (นอกเครือข่าย) </b>: "+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+"<br />"+"<b>🌐 ปริมาณเน็ต : </b>"+resultleft[i].ปริมาณเน็ต+"<br />"+"<b>ความเร็วเน็ตสูงสุด : </b>"+resultleft[i].ความเร็วเน็ตสูงสุด+"<br />"+"<b>ส่วนเกินค่าเน็ต : </b>"+resultleft[i].ส่วนเกินค่าเน็ต+"<br />"+"<b>Wifi : </b>"+resultleft[i].Wifi+"<br />"+"<b>✉️ SMS : </b>"+resultleft[i].SMS+"<b> / MMS : </b>"+resultleft[i].MMS+ "<br />"+"<b>ส่วนเกิน SMS : </b>"+resultleft[i].ส่วนเกินSMS+"<br />"+"<b>ส่วนเกิน MMS : </b>"+resultleft[i].ส่วนเกินMMS+"<br />"+"<b>🆓 ของแถม : </b>"+resultleft[i].ของแถม+ "<br />"+"<b>เงื่อนไขเพิ่มเติม : </b>"+resultleft[i].เงื่อนไขเพิ่มเติม+ "<br />"+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';
         showdataleft();   
      }
      sortcall.innerHTML="เรียงตามปริมาณโทร"
      sortprice.innerHTML="เรียงตามราคา"
      sortcapacity.innerHTML="เรียงตามปริมาณเน็ต"
      sortspeed.innerHTML="เรียงตามความเร็วเน็ต ↑"
      sorts=0;
  }
  if(resultleft.length==0){
    showleft.innerHTML='<div class="itemleftno">'+"ไม่พบข้อมูล"+'</div>';
  }
  if(resultright.length==0){
    showright.innerHTML='<div class="itemrightno">'+"ไม่พบข้อมูล"+'</div>';
  }
  countleft.innerHTML="ผลลัพธ์ทั้งหมด "+cleft+" รายการ"
  countright.innerHTML="ผลลัพธ์ทั้งหมด "+cright+" รายการ"
}  
let press1 = document.getElementById('btn1');
let press2 = document.getElementById('btn2');
let press3 = document.getElementById('btn3');
let press4 = document.getElementById('btn4');
let press5 = document.getElementById('btn5');
let enter = document.getElementById('enter');
let sortprice = document.getElementById('sortprice');
let sortcapacity = document.getElementById('sortcapacity');
let sortcall = document.getElementById('sortcall');
let sortspeed = document.getElementById('sortspeed');
let fourg = document.getElementById('fourg');
let fiveg = document.getElementById('fiveg');
let change = document.getElementById('change');
change.addEventListener('click',toggle);
var check =0;
document.getElementById("home").onclick = function () {location.href = "index.html"};
document.getElementById("btn6").onclick = function () {location.href = "mobile.html"};
if (b1==1){
  b1=0;
  sessionStorage.setItem("b1", b1);
  showdata1()}
if (b2==1){
    b2=0;
  sessionStorage.setItem("b2", b2);
  showdata2();}
if (b3==1){
  b3=0;
  sessionStorage.setItem("b3", b3);
  showdata3();}
if (b4==1){
  b4=0;
  sessionStorage.setItem("b4", b4);
  showdata4();}
if (b5==1){
  b5=0;
  sessionStorage.setItem("b5", b5);
  showdata5();
}
press1.addEventListener('click',showdata1);
press2.addEventListener('click',showdata2);
press3.addEventListener('click',showdata3);
press4.addEventListener('click',showdata4);
press5.addEventListener('click',showdata5);
press1.addEventListener('click',showg);
press2.addEventListener('click',showg);
press3.addEventListener('click',showg);
press4.addEventListener('click',showg);
press5.addEventListener('click',hideg);
press1.addEventListener('click',pictureChange2);
press2.addEventListener('click',pictureChange2);
press3.addEventListener('click',pictureChange2);
press4.addEventListener('click',pictureChange2);
press5.addEventListener('click',pictureChange1);
enter.addEventListener('click',pictureChange2);
enter.addEventListener('click',search);
sortprice.addEventListener('click',price);
sortcapacity.addEventListener('click',netcapacity);
sortcall.addEventListener('click',call);
sortspeed.addEventListener('click',speed);
fiveg.addEventListener('click',five);
fourg.addEventListener('click',four);
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("enter").click();
  }});
let itemName = datasearch.map(value => { return value.ชื่อแพ็กเกจ });
let itemPrice = datasearch.map(value => { return value.price+" "+value.หน่วยราคา });
let itemPrice2 = datasearch.map(value => { return value.ค่าบริการ+" "+value.หน่วยราคา });
let itemCapacity = datasearch.map(value => { return value.ปริมาณเน็ต });
let itemCall = datasearch.map(value => { return value.โทรนอกเครือข่าย });
let itemSpeed= datasearch.map(value => { return value.ความเร็วเน็ตสูงสุด });
let itemType= datasearch.map(value => { return value.Type});
var list = document.getElementById('list');

itemName = itemName.filter(function(item, index) {
  if (itemName.indexOf(item) == index)
    return item;
});
itemPrice = itemPrice.filter(function(item, index) {
  if (itemPrice.indexOf(item) == index)
    return item;
});
itemPrice2 = itemPrice2.filter(function(item, index) {
  if (itemPrice2.indexOf(item) == index)
    return item;
});
itemCapacity = itemCapacity.filter(function(item, index) {
  if (itemCapacity.indexOf(item) == index)
    return item;
});
itemCall = itemCall.filter(function(item, index) {
  if (itemCall.indexOf(item) == index)
    return item;
});
itemSpeed = itemSpeed.filter(function(item, index) {
  if (itemSpeed.indexOf(item) == index)
    return item;
});
itemType = itemType.filter(function(item, index) {
  if (itemType.indexOf(item) == index)
    return item;
});

itemName.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option)
  });
itemSpeed.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option);
});

itemCapacity.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option);
});
itemPrice.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option);
});
itemPrice2.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option);
});
itemCall.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option);
});
itemType.forEach(function(item){
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option);
});
function pictureChange1()
{
 document.getElementById("imgdtac").src="img/3bb.png";
 document.getElementById("imgais").src="img/aisfibre.png";
}
function pictureChange2()
{
 document.getElementById("imgdtac").src="img/dtac.png";
 document.getElementById("imgais").src="img/ais.png";
}
function showg()
{
 document.getElementById("fiveg").style.visibility = 'visible';
 document.getElementById("fourg").style.visibility = 'visible';
}
function hideg()
{
  document.getElementById("fiveg").style.visibility = 'hidden';
  document.getElementById("fourg").style.visibility = 'hidden';
}
function toggle() {
  if (check==0){
    console.log(check)
  document.getElementById("change").src="img/sun.png";
  check=1}
  else{
    console.log(check)
    document.getElementById("change").src="img/moon.png";
    check=0}
};
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
function showdataright(){
  	showright.innerHTML += '<div class="itemright" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].โทรในเครือข่าย+" "+resultright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].โทรนอกเครือข่าย+" "+resultright[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+resultright[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+resultright[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].SMS+" / "+resultright[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+resultright[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

}
function showdataleft(){
		showleft.innerHTML += '<div class="itemleft" tabindex="0">'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✔️ ชื่อแพ็กเกจ : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].ชื่อแพ็กเกจ+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💵 ราคา : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].ค่าบริการ+" บาท"+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรในเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].โทรในเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📞 โทรนอกเครือข่าย : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].โทรนอกเครือข่าย+" "+resultleft[i].เงื่อนไขโทร+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (ในเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+resultleft[i].ส่วนเกินค่าโทรในเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าโทร (นอกเครือข่าย) : </b>"+"</div>"+'<div class="Column2" >'+resultleft[i].ส่วนเกินค่าโทรนอกเครือข่าย+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🌐 ปริมาณเน็ต : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].ปริมาณเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>⚡ ความเร็วเน็ตสูงสุด : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].ความเร็วเน็ตสูงสุด+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกินค่าเน็ต : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].ส่วนเกินค่าเน็ต+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>📡 Wifi : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].Wifi+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>✉️ SMS / MMS : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].SMS+" / "+resultleft[i].MMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน SMS : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].ส่วนเกินSMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>💰 ส่วนเกิน MMS : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].ส่วนเกินMMS+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>🆓 ของแถม : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].ของแถม+'</div>'+'</div>'+'<div class="Rowdata" >'+'<div class="Column" >'+"<b>❔ เงื่อนไขเพิ่มเติม : </b>"+'</div>'+'<div class="Column2" >'+resultleft[i].เงื่อนไขเพิ่มเติม+'</div>'+'</div>'+" "+ "<br />"+" "+"<br />"+"<br />"+'</div>';

}
  })




