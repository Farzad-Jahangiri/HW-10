const total = document.getElementById("total");//جمع کل
const serviceFeeAndFee = document.getElementById("serviceFeeAndFee");//حق سرویس و کارمزد
const discount = document.getElementById("discount");//تخفیف
const totla = document.getElementById("orderTotal");
const The_amount_payable = document.getElementById("The_amount_payable")


const persianNumber = ["&#x06F0;", "&#x06F1;", "&#x06F2;", "&#x06F3;", "&#x06F4;", "&#x06F5;", "&#x06F6;", "&#x06F7;", "&#x06F8;", "&#x06F9;"]
const number_en_fa={
    "۰":"0",
    "۱":"1",
    "۲":"2",
    "۳":"3",
    "۴":"4",
    "۵":"5",
    "۶":"6",
    "۷":"7",
    "۸":"8",
    "۹":"9"
}
function convertToPersianNumber(number) {
    const digits = [];
    while (number) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    let num="";
    for(let index=0;index<digits.length;index++){
        num+=persianNumber[digits[index]];
    }
    return num;
}//تبدیل عدد لاتین به فارسی
function converToEnglishNumber(strNumber){
    let strNumberReturn="";
    strNumber=strNumber.split("");
    strNumber.forEach((value,index)=>{
        strNumberReturn+=number_en_fa[value];
    });
    return strNumberReturn;
}//تبدیل عدد فارسی به لاتین  

function NumbeOfOrders_Plus(event) {
    const input = event.parentNode.parentNode.querySelector("input");

    input.value = parseInt(input.value) + 1;//افزایش سفارش
    const addprice=event.parentNode.parentNode.parentNode.parentNode.querySelector("span");
    const price=event.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".price");
    let Price_englishNumber = converToEnglishNumber(reverseString(price.innerHTML));
    addprice.innerHTML=convertToPersianNumber(parseInt(Price_englishNumber)*parseInt(input.value));
    Total();
}
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
function NumbeOfOrders_Minus(event) {
    const input = event.parentNode.parentNode.querySelector("input");
    const addprice=event.parentNode.parentNode.parentNode.parentNode.querySelector("span");
    input.value = parseInt(input.value) - 1;
    if (parseInt(input.value) <= 0) {
        addprice.innerHTML="۰";
        input.value=0;
        Total();
        return;
    }
    const price=event.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".price");//<span>&#x06F1;&#x06F1;</span>
    let Price_englishNumber = converToEnglishNumber(reverseString(price.innerHTML));
    addprice.innerHTML=convertToPersianNumber(parseInt(Price_englishNumber)*parseInt(input.value));
    Total();
    
}

function Total(){
    const total_one=document.querySelectorAll("#total_one");
    let sum_total_one=0;
    total_one.forEach(val => {
        sum_total_one+=parseInt(converToEnglishNumber(reverseString(val.innerHTML)));
      });
      total.innerHTML=convertToPersianNumber(sum_total_one);
      if(!total.innerHTML){
        total.innerHTML="۰";
      }

    serviceFeeAndFee.innerHTML=convertToPersianNumber(sum_total_one*0.05);
    The_amount_payable.innerHTML=convertToPersianNumber((sum_total_one*0.05)+sum_total_one);

}

//Modal:
const buyButton = document.getElementById("buy-button");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close_modal");


buyButton.onclick = ()=> {
    if(The_amount_payable.innerHTML !="۰" ){modal.style.display = "block";}
    else{
        alert("هیچ انتخابی ندارید!!");
    }
}
closeButton.onclick=()=> {
    modal.style.display = "none";
  }