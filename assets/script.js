
  

$(document).ready(function() {  
   
// display current day Day, Month
//create variable for current date
var displayDate = $(".currentdate");
//create function 
var date = moment().format("dddd[, ] MMM Do YYYY");
// Set Time \\
//create to format time
var time = moment().format('h:mm a');
//create variable for current time
var displayTime = $(".currenttime");
var eventTime = $("btn-time");

 // Set Current Time 
function currentDate() { 
    //create the text and append to display 
    $(".currentdate").text(date);

    
}
currentDate()

// Current Time
function setTime() { 
    
    //create the text and append to display
    $(".currenttime").text(time);
}
setTime()






// When form is submitted... //works but does grab value
$(".btnLock").on("click", function(e) {
    e.preventDefault();
    //save to storage
    localStorage.setItem("event1", $(".eventinput").val());
        // $(".input1").text($(this).text());

        $(".input2").closest("input").text($(this).text())
        //pull from storage
        console.log($("this").closest("input").append(eventList))
    });

    var eventText = localStorage.getItem("events");
   console.log(eventText)
   $(".input1").append(eventText)
    
$(".btnLock").on("click", function() {
    //save to storage 
    localStorage.setItem("event2", $(".input2").val());
        $(".input2").text($(this).text());
});

$(".btnLock").on("click", function() {
    //save to storage
    localStorage.setItem("event3", $(".input3").val());
        $(".input3").text($(this).text());
});

$(".btnLock").on("click", function() {
    //save to storage
    localStorage.setItem("event4", $(".input4").val());
        $(".input4").text($(this).text());
});

$(".btnLock").on("click", function() {
    //save to storage
    localStorage.setItem("event5", $(".input5").val());
        $(".input5").text($(this).text());
});

$(".btnLock").on("click", function() {
    //save to storage
    localStorage.setItem("event6", $(".input6").val());
        $(".input6").text($(this).text());
});

$(".btnLock").on("click", function() {
    //save to storage
    localStorage.setItem("event7", $(".input7").val());
        $(".input7").text($(this).text());
});

$(".btnLock").on("click", function() {
    //save to storage
    localStorage.setItem("event8", $(".input8").val());
        $(".input8").text($(this).text());
});

function displayIt(){
    $("#9am").append(localStorage.getItem('event1'))
    $("#10am").append(localStorage.getItem('event2'))
    $("#11am").append(localStorage.getItem('event3'))
    $("#12pm").append(localStorage.getItem('event4'))
    $("#1pm").append(localStorage.getItem('event5'))
    $("#2pm").append(localStorage.getItem('event6'))
    $("#3pm").append(localStorage.getItem('event7'))
    $("#4pm").append(localStorage.getItem('event8'))
    $("#5pm").append(localStorage.getItem('event9'))
 } displayIt()


$(".btnLock").on("click", function() {
    //save to storage
    localStorage.setItem("event9", $(".input9").val());
        $(".input9").text($(this).text());
    //display storage item
   
});

});