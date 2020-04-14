const clockMin = document.querySelector("#clock-m");
const clockSec = document.querySelector("#clock-s");

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
const message = document.querySelector('.message');

let countSec = 0;
let countMin = 0;

const checkLength = (value) =>{
    if(String(value).length < 2) return 0 + String(value);
    return String(value);
}
let updateTime = ()=> {
   clockMin.innerHTML = checkLength(countMin);
   clockSec.innerHTML = checkLength(countSec); 
}

let counterFunc = function() {
    const timeInterval = setTimeout(counterFunc, 1000);
    if (countSec > 0) {
        countSec--;
    }else if (countSec == 0 && countMin > 0){
        countSec = 59;
        countMin--;
    }else{
        countSec = 0;
        countMin = 0;
        message.innerHTML = "<p>Упс всё!</p>"
        clearTimeout(timeInterval);
        plus.hidden = false;
        minus.style.display = "";
    }
    updateTime()
}
start.onclick = () => {
    counterFunc();
    plus.hidden = true;
    minus.style.display = "none";
    message.innerHTML = ""
}


plus.onclick = ()=> {
    if (countSec < 59){
        countSec++;
    }else if (countMin<=59){
        countSec = 0;
        countMin++;
    }else{
        countSec = 0;
        countMin = 0;
    }
    updateTime()
}

minus.onclick = ()=> {
    if (countSec > 0) {
        countSec--;
    }else if (countSec == 0 && countMin > 0){
        countSec = 59;
        countMin--;
    }else{
        countSec = 0;
        countMin = 0;
    }
    updateTime()
}

