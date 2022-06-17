var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY'));

var savebtn = $('.saveBtn');

var tasks = $('.tasks')

var container = $('.container')

savebtn.on('click', function() {

  var savedTask = $(this).siblings('.tasks').val();

  var time = $(this).parent().attr('id');

  console.log(time);

  localStorage.setItem(time, JSON.stringify(savedTask));

});
function timeColour() {
 var hour = moment().hours();

  $('.time-block').each(function() {

   var currentHour = $(this).attr('id');

   if (currentHour > hour) {
     $(this).addClass("future");
}   else if (currentHour === hour) {
      $(this).addClass("present");
}   else {
     $(this).addClass("past");
}
 })};

$('#time-nine').val(localStorage.getItem('9'));
$('#time-ten').val(localStorage.getItem('10'));
$('#time-eleven').val(localStorage.getItem('11'));
$('#time-twelve').val(localStorage.getItem('12'));
$('#time-thirteen').val(localStorage.getItem('13'));
$('#time-fourteen').val(localStorage.getItem('14'));
$('#time-fifteen').val(localStorage.getItem('15'));
$('#time-sixteen').val(localStorage.getItem('16'));
$('#time-seventeen').val(localStorage.getItem('17'));



