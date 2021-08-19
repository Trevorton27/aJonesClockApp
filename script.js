function renderClock() {
  const showTime = new Date();

  let hours = showTime.getHours();
  const minutes = renderLeadingZero(showTime.getMinutes());
  const seconds = renderLeadingZero(showTime.getSeconds());
  const isAm = hours < 12 || hours === 0;
  const amPm = isAm ? 'AM' : 'PM';

  document.getElementById('time').textContent = `${formatHour(
    hours
  )}:${minutes}:${seconds} ${amPm}`;
}

function renderLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;
  hour = hour === 0 ? hour + 12 : hour;

  return hour;
}

function renderDate() {
  const showDate = new Date();

  const day = dayOfWeek[showDate.getDay()];
  const date = appendDateSuffix(showDate.getDate());
  const month = monthOfTheYear[showDate.getMonth()];
  const year = showDate.getFullYear();

  document.getElementById(
    'date'
  ).textContent = `${day}, ${month} ${date}, ${year}`;
}

function appendDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const dayOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const monthOfTheYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

renderClock();
renderDate();

setInterval(() => {
  renderClock();
  renderDate();
}, 1000);
