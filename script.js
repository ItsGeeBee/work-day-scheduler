var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var time = $("#time");
var saveBtn = $(".saveBtn");
var task = $('input[name="plans"]');
var container = $('#container')

$(".saveBtn").on('click', savePlans);

function savePlans(e) {
    e.preventDefault();
       
    var timeBlock = $('#time-nine').val();
    console.log(timeBlock);


    localStorage.setItem('plans',timeBlock);

    localStorage.setItem( 'plans', JSON.stringify( timeBlock ) );

    // console.log('plans', JSON.parse(retrievedPlans));

}

function getPlans(){
    var retrievedPlans = localStorage.getItem('plans');

    if(retrievedPlans != null){
        document.getElementById("plans").value = timeBlock; 
    }
}

// for ( var i = 0; i < task.length; i++ ) {
//     newsavedTasks.children().eq().text('plans');
// }
//     // localStorage.setItem( 'plans', JSON.stringify( timeBlock ) );
// }



// var timeBefore = moment().isBefore();
// if (timeBefore = true)
//     $('#time1').addClass('past');
//     $('#plans').addClass('past');
 