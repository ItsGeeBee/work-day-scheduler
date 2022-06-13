var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
savebtn = $(".saveBtn");

var plan = $(this).siblings(".tasks").val();

saveBtn.on('click', function() {
  var time = $(this).siblings(".tasks").text();
  localStorage.setItem(time, plan);
});

function pageRefresh() {

  $(".tasks").each(function() {
    return JSON.parse = localStorage.getItem(plan);
  })};