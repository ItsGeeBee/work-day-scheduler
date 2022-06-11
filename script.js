var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


var time = $("#time");
var saveBtn = $("#saveBtn");
var plans = $('input[plans="plans"]');

function savePlans(event) {
    event.preventDefault();

console.log('plans',plans.val());
$.each(plans,function()  {
    selected.push($(this).val());
  });

console.log('plans', selected.join(' '));

}


saveBtn.on('click', savePlans ());






// var timeBefore = moment().isBefore();
// if (timeBefore = true)
//     $('#time').addclass('past')
