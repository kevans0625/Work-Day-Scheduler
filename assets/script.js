$(document).ready(function() {
    
//display a planner 
// display current day Day, Month

// Set Time \\
//create variable for current date
var time = moment().format('h:mm a');
//create variable for current time
var displayTime = $(".currenttime");


// Set Current Time 

    var displayDate = $(".currentdate");
    //create function 
    var date = moment().format("dddd[, ] MMM Do YYYY");
    //create to format time
    //create the text and append to display 
    $(".currentdate").text(date);
  


// Current Time
function setTime() { 
  
    //create the text and append to display
    $(".currenttime").text(time);
}
setTime()





});