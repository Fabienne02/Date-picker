// MONTH GENERATOR
const month = document.getElementById("month")
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const m = new Date();
month.textContent = monthNames[m.getMonth()]


// MONTH - DAY PICKER 

let d = new Date();
const box = document.querySelector('.box');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

box.textContent = d.getDate();

function daysInThisMonth() {
  let now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

leftArrow.addEventListener('click', decreaseValue);
rightArrow.addEventListener('click', increaseValue);

function decreaseValue() {
  if ( box.textContent > d.getDate()) {
        box.textContent -= 1;
      } else {
        limitAnim();
    }
}

function increaseValue() {
  if (box.textContent < daysInThisMonth()) {
        box.textContent = parseInt(box.textContent) + 1;
      } else {
        limitAnim();
    }
}

function limitAnim() {
  if (box.classList.contains('shake-horizontal')) {
      return
   } 
   else {
    box.classList.add("shake-horizontal");
    box.addEventListener('animationend', e => {
      e.target.classList.remove('shake-horizontal');
    });
  }
}

// TIME 
var now     = new Date(); 
var hour    = now.getHours();
var minute  = now.getMinutes();
var dateTime = hour+':'+minute; 

function getDateTime() { 
  if(hour.toString().length == 1) {
       hour = '0'+hour;
  }
  if(minute.toString().length == 1) {
       minute = '0'+minute;
  
  }    
   return dateTime;
}

setInterval(function(){
  currentTime = getDateTime();
  document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);

// TIME PICKER
const addArrow = document.getElementById("arrow-time-right")
const removeArrow = document.getElementById("arrow-time-left")
const fastAddArrow = document.getElementById("arrow-time-right-fast")
const fastRemoveArrow = document.getElementById("arrow-time-left-fast")
var futureDate = new Date(now.getTime());

function getFutureDateTime() { 
  var futureHour    = futureDate.getHours();
  var futureMinute  = futureDate.getMinutes();

  if(futureHour.toString().length == 1) {
       futureHour = '0'+futureHour;
  }
  if(futureMinute.toString().length == 1) {
       futureMinute = '0'+futureMinute;
  
  }    
  var futureDateTime = futureHour+':'+futureMinute;
   return futureDateTime;
}

getFutureDateTime()

newTime =  getFutureDateTime();
document.getElementById("digital-clock").innerHTML = newTime;

setInterval(function(){
  newTime =  getFutureDateTime();
  document.getElementById("digital-clock").innerHTML = newTime;
});

addArrow.onclick = function () {
if ( newTime < 23+':'+30) {
  futureDate = new Date(futureDate.getTime() + 30*60000);
 } else  {
    limitAnimT();
  }
}


fastAddArrow.onclick = function () {
  if ( newTime < 23+':'+30) {
    futureDate = new Date(futureDate.getTime() + 60*60000);
   } else  {
      limitAnimT();
    }
  }

removeArrow.onclick = function () {
  if ( newTime > dateTime) {
  futureDate = new Date(futureDate.getTime() - 30*60000);
  } else {
    limitAnimT();
  }
}

fastRemoveArrow.onclick = function () {
  if ( newTime > dateTime) {
  futureDate = new Date(futureDate.getTime() - 60*60000);
  } else {
    limitAnimT();
  }
}

const boxT = document.querySelector(".boxT")

function limitAnimT() {
  if (boxT.classList.contains('shake-horizontal')) {
      return
   } 
   else {
    boxT.classList.add("shake-horizontal");
    boxT.addEventListener('animationend', e => {
      e.target.classList.remove('shake-horizontal');
    });
  }
}

















