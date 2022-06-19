// Show current day at top of page using moment.js //

var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));


// Declare variables //
var savebtn = $('.saveBtn');

var tasks = $('.tasks')

var container = $('.container')

// Click event - When a save button is clicked, save THIS task alongside parent ID //

savebtn.on('click', function() {

  var savedTask = $(this).siblings('.tasks').val();

  var time = $(this).parent().attr('id');

// Save to local storage //  

  localStorage.setItem(time, JSON.stringify(savedTask));

});

// CSS class determined by time of day.

function blockColour() {
 var hour = moment().hours(); // current time using moment.js

  $('.time-block').each(function() { 

   var timeNow = parseInt($(this).attr('id')); // timeNow = timeblock ID

   if (timeNow > hour) {$(this).addClass('future'); // if the time now is greater than the Div id, add class future 
}   

else if (timeNow === hour) {$(this).addClass('present'); // if the timeNow equal the current hour, add class present 
}   

else {$(this).addClass('past'); // if does not fit into the first 2 rules, add class past
}

 })};


// Retrieve from local storage on refresh //
$('#time-nine').val(localStorage.getItem('9'));
$('#time-ten').val(localStorage.getItem('10'));
$('#time-eleven').val(localStorage.getItem('11'));
$('#time-twelve').val(localStorage.getItem('12'));
$('#time-thirteen').val(localStorage.getItem('13'));
$('#time-fourteen').val(localStorage.getItem('14'));
$('#time-fifteen').val(localStorage.getItem('15'));
$('#time-sixteen').val(localStorage.getItem('16'));
$('#time-seventeen').val(localStorage.getItem('17'));


// When page loads, execute blockColour function to get class dependant on time 
$( document ).ready(function() {
  blockColour();
});