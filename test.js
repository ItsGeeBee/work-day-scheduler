document.getElementById('currentDay').textContent = moment().format(
    'dddd, MMMM Do, YYYY'
  );

  var time = document.getElementById('time');

  var saveBtn = document.getElementsByClassName('.saveBtn');

  var nine = document.getElementById('time-nine');

saveBtn.addEventListener('click', timeNine);


function timeNine() { 
    var task = nine.value;
    nine.innerHTML = task;
} 

