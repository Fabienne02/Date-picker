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
var futureDate = new Date(now.getTime() + 30*60000);
var futureHour    = futureDate.getHours();
var futureMinute  = futureDate.getMinutes();
console.log(futureMinute)

function getFutureDateTime() { 
  if(futureHour.toString().length == 1) {
    console.log("hi")
       futureHour = '0'+futureHour;
  }
  if(futureMinute.toString().length == 1) {
       futureMinute = '0'+futureMinute;
  
  }    
   return futureDateTime;
}

getFutureDateTime()

var futureDateTime = futureHour+':'+futureMinute;

setInterval(function(){
  newTime =  getFutureDateTime();
  document.getElementById("digital-clock").innerHTML = newTime;
  console.log(newTime)
});

// addArrow.onclick = function AddTime () {
//   console.log("hi")
//   futureDate = new Date(now.getTime() + 30*60000);
//   console.log(futureDate)

//   return futureDate;
  
// }











