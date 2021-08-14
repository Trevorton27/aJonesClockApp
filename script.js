// 	hour = hour < 10 ? "0" + hour : hour;
// 	min = min < 10 ? "0" + min : min;
// 	sec = sec < 10 ? "0" + sec : sec;

// 	const showTime = hour + ":"
// 			+ min + ":" + sec + am_pm;

// 	document.getElementById("digital_Clock")
// 			.innerHTML = currentTime;

//     const monthOfTheYear = time.getMonth("January","Febuary","March","April","May","June","July","August","September","October","November","December");
//     const dayOfTheWeek = time.getDay("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
// }
// showTime();

function currentClock() {
  const showTime = new Date();

  /* time */
  var hr,
    _min =
      showTime.getMinutes() < 10
        ? "0" + showTime.getMinutes()
        : showTime.getMinutes(),
    sec =
      showTime.getSeconds() < 10
        ? "0" + showTime.getSeconds()
        : showTime.getSeconds(),
    ampm = showTime.getHours() >= 12 ? "PM" : "AM";

  // 12 will be subtracted from any time designated from 13 to 23 and midnight will start at 0
  if (showTime.getHours() == 0) {
    hr = 12;
  } else if (showTime.getHours() > 12) {
    hr = showTime.getHours() - 12;
  } else {
    hr = showTime.getHours();
  }
  
//   current time holds results for hr min sec untill it is applied to the dom by the getElementBy ID

  const currentTime = hr + ":" + _min + ":" + sec;

  // AM/ PM options

  document.getElementById("time").innerHTML = currentTime;
  document.getElementById("tod").innerHTML = ampm;
//   print options to display to the  date and time to the DOM

  /*  Add Date options */
   /* dow Day of the week*/
//    moty Month of the year
   const dotw = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
  ];
//   const dotw = showTime.getDay("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

 const moty = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
  ];

// const moty = showTime.getMonth("January","Febuary","March","April","May","June","July","August","September","October","November","December");


  day = showTime.getDate();

// store date
var currentDate = dotw[showTime.getDay()] + ", " + moty[showTime.getMonth()] + " " + day;

// var currentDate = dotw[] + ", " + moty[] + " " + day;

document.getElementById("date").innerHTML = currentDate;
};

// print time and date once, then update them every second
currentClock();
setInterval(function() {
 currentClock()
}, 1000);
