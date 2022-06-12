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

    localStorage.setItem( 'plans', JSON.stringify( timeBlock ) );

 $('#hour9').textcontent = localStorage.getItem("plans");



    // console.log('plans', JSON.parse(retrievedPlans));

}

// function getPlans(){
//     var retrievedPlans = localStorage.getItem('plans');
//     var plansArray;
//     if(retrievedPlans == null){
//         scoresArray = [];
//     } else {
//         plansArray = JSON.parse(retrievedPlans)
//     }


//  for (i = 0; i < retrievedPlans.length; i++) {
//         var eachplan = document.createElement("p"); 
//         eachplan.innerHTML = retrievedPlans[i]
//          savedHighscores.appendChild(eachNewHighScore); 
//             }

// }




// var timeBefore = moment().isBefore();
// if (timeBefore = true)
//     $('#time1').addClass('past');
//     $('#plans').addClass('past');
 