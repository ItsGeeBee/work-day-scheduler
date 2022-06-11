var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var time = $("#time");
var saveBtn = $("#saveBtn");
var task = $('input[name ="plans"]');

function savePlans(e) {
    e.preventDefault();
    console.log('plans',task.val());
       
        $('#plans').text(task);
        localStorage.setItem(task,'plans');
}


saveBtn.on('click', savePlans);

// 1 event.preventDefault();
// $( ".inner" ).append( "<p>Test</p>" );

// $('#example').append("this text was appended");

// 


//    // Display the letter
//    letterBtn.text(letters[i]);
//    // Attach the letter element
//    buttonListEl.append(letterBtn);



var timeBefore = moment().isBefore();
if (timeBefore = true)
    $('#time1').addClass('past');
    $('#plans').addClass('past');
 