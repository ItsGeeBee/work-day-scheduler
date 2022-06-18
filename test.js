// Show current day at top of page using moment.js //

var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY'));


// Declare variables //
var savebtn = $('.saveBtn');

var tasks = $('.tasks')

var container = $('.container')

// Click event - When the save button is clicked, save THIS task alongside parent ID //

savebtn.on('click', function() {

  var savedTask = $(this).siblings('.tasks').val();

  var time = $(this).parent().attr('id');

  console.log(time);

// Save to local storage //  

  localStorage.setItem(time, JSON.stringify(savedTask));

});

// CSS class determined by time of day.

function timeColour() {
 var hour = moment().hours();

  $('.time-block').each(function() {

   var currentHour = parseInt($(this).attr('id'));

   if (currentHour > hour) {
     $(this).addClass('future');
}   else if (currentHour === hour) {
      $(this).addClass('present');
}   else {
     $(this).addClass('past');
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



