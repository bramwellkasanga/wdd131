const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

let forResults = [];
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    forResults.push(studentReport[i]);
  }
}

let whileResults = [];
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    whileResults.push(studentReport[i]);
  }
  i++;
}

let forEachResults = [];
studentReport.forEach(function (item) {
  if (item < LIMIT) {
    forEachResults.push(item);
  }
});

let forInResults = [];
for (let index in studentReport) {
  if (studentReport[index] < LIMIT) {
    forInResults.push(studentReport[index]);
  }
}

const forLoopElement = document.getElementById('for-loop');
const whileLoopElement = document.getElementById('while-loop');
const forEachLoopElement = document.getElementById('foreach-loop');
const forInLoopElement = document.getElementById('forin-loop');

if (forLoopElement) {
  forLoopElement.textContent = forResults.join(', ');
}
if (whileLoopElement) {
  whileLoopElement.textContent = whileResults.join(', ');
}
if (forEachLoopElement) {
  forEachLoopElement.textContent = forEachResults.join(', ');
}
if (forInLoopElement) {
  forInLoopElement.textContent = forInResults.join(', ');
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const currentDay = today.getDay();
const futureDaysElement = document.getElementById('future-days');

if (futureDaysElement) {
  let futureDays = [];
  for (let dayIndex = 1; dayIndex <= DAYS; dayIndex++) {
    let nextDay = (currentDay + dayIndex) % dayNames.length;
    futureDays.push(dayNames[nextDay]);
  }
  futureDaysElement.textContent = `Next ${DAYS} days: ${futureDays.join(', ')}`;
}
