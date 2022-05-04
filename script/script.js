// TO DO 
// - time back to current if date day goes back to now 
// - autocomplete X
// - default + 1 hour X
// - Date is word not in numbers -> if date+1 date name goes +1 X
// - Volgorde autocomplete
// - add nonsence 


// MONTH GENERATOR
const month = document.getElementById("month")
const monthNames = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
  "Juli", "Augustus", "September", "October", "November", "December"
];

const m = new Date();
month.textContent = monthNames[m.getMonth()]

// MONTH - DAY NAME

  var a = new Date();
  var weekdays = new Array(7);
  weekdays[0] = "Zondag";
  weekdays[1] = "Maandag";
  weekdays[2] = "Dinsdag";
  weekdays[3] = "Woensdag";
  weekdays[4] = "Donderdsg";
  weekdays[5] = "Vrijdag";
  weekdays[6] = "Zaterdag";
  var r = weekdays[a.getDay()];
  document.getElementById("monthName").innerHTML = r;

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
        document.getElementById("monthName").innerHTML = weekdays[a.getDay()]
      } else {
        limitAnim();
    }
}

function increaseValue() {
  if (box.textContent < daysInThisMonth() && box.textContent < d.getDate() + 1) {
        box.textContent = parseInt(box.textContent) + 1;
        document.getElementById("monthName").innerHTML = weekdays[a.getDay()+1]
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


// TIME PICKER
currentTime = getDateTime()
const boxT = document.querySelector(".boxT")
const addArrow = document.getElementById("arrow-time-right")
const removeArrow = document.getElementById("arrow-time-left")
const fastAddArrow = document.getElementById("arrow-time-right-fast")
const fastRemoveArrow = document.getElementById("arrow-time-left-fast")
var futureDate = new Date(now.getTime())

setInterval(function(){
  currentTime = getDateTime();
  document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);


function getFutureDateTime() { 
  // EEN EXTRA UUR WANT HIJ KAN PAS UUR VAN TE VOREN TREIN PLANNEN
  var futureHour    = futureDate.getHours() + 1;
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
},);

addArrow.onclick = function () {
if ( newTime < 23+':'+30) {
  futureDate = new Date(futureDate.getTime() + 30*60000);
 } else  {
    limitAnimT();
  }
}


fastAddArrow.onclick = function () {
  if ( newTime < 23+':'+00) {
    futureDate = new Date(futureDate.getTime() + 60*60000);
   } else  {
      limitAnimT();
    }
  }

removeArrow.onclick = function () {
  if ( box.textContent == d.getDate() + 1 && parseInt(boxT.textContent) >= 7 || newTime > dateTime) {
  futureDate = new Date(futureDate.getTime() - 30*60000);
  } else {
    limitAnimT();
  }
}

fastRemoveArrow.onclick = function () {
  if ( box.textContent == d.getDate() + 1 && parseInt(boxT.textContent) >= 7|| newTime > dateTime ) {
  futureDate = new Date(futureDate.getTime() - 60*60000);
  } else {
    limitAnimT();
  }
}

// Voor als je tijd op < now staat wanneer de date van daynow +1 naar -1 gaat 
// onclick = setInterval(function resetDateNow () {
//   if ( parseInt(box.textContent) === d.getDate() ) {
//     console.log("hi")

//     document.getElementById("digital-clock").innerHTML = currentTime;

//     clearInterval(100);
//   }
  
// },);

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

// AUTOCOMPLETE - ARRAY 
// Bron: https://www.w3schools.com/howto/howto_js_autocomplete.asp

var stationen = ["Nijmegen","Amsterdam","Utrecht","Amersfoort","Eindhoven","Hilversum","Weesp","Amsterdam Zuid","Den Haag"]
stationen.sort();

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

















