
$(document).ready(function() {  
   
    // display current day Day, Month
    //create variable for current date
    var displayDate = $(".currentdate").text(date);
    //create function 
    var date = moment().format("dddd[, ] MMM Do YYYY");
    // Set Time \\
    //create the text and append to display
    //create to format time
    var time = moment().format('h:mm a');
    //create variable for current time
    var displayTime =  $(".currenttime").text(time);
  


    function currentDate() { 
        //create the text and append to display 
        $(".currentdate").text(date);
    
    
    }
    currentDate()

    eventList = JSON.parse(localStorage.getItem('masterList')); 
    // When form is submitted... //works but does grab value

    $(".btnLock").on("click", function(e){
        e.preventDefault();
        let hourText = $(this).siblings( ".form-control" ).val();
        let hourTime = $(this).siblings( ".time" ).attr("value");

        localStorage.setItem(hourTime, hourText);
        console.log(hourText)
        console.log(hourTime)
    })


 
        
    //display storage item by getting the itme and appending it
   
    //change cell color storage item by getting the itme and appending it
    

    
    
    
    });