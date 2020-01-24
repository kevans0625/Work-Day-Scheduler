//display a planner 
 
// display current day Day, Month
//create variable
 var displayDate = document.querySelector(".currentdate")
//create function 
var date = moment().format("dddd[, ] MMM Do YYYY")
//create the text and append
$(".currentdate").text(date)

// display current time
var displayTime = document.querySelector(".currenttime")
//create function 
var time = moment().format('h:mm a')
//create the text
$(".currenttime").text(time)



//scroll to display planner
// add time that shows business hours 
//input fields to store text on enter and display
//local storage keep text even when refreshed