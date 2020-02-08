
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

//display storage item by getting the key for the value of it
    function displayIt(){
       $("#textBox-9").val(localStorage.getItem("1"));
        $("#textBox-10").val(localStorage.getItem("2"));
        $("#textBox-11").val(localStorage.getItem("3"));
        $("#textBox-12").val(localStorage.getItem("4"));
        $("#textBox-13").val(localStorage.getItem("5"));
        $("#textBox-14").val(localStorage.getItem("6"));
        $("#textBox-15").val(localStorage.getItem("7"));
        $("#textBox-16").val(localStorage.getItem("8"));
        $("#textBox-17").val(localStorage.getItem("9"));
    } 
    
    displayIt();

 
        
   
    //change cell color storage item by getting the time and appending it
     function cellstatus(){

        $(".form-control").each(function(){
            let textHour = $(this).attr("id").split("-")[1];
            let currentHour = moment().hours();
            
            if (textHour < currentHour){
                $(this).addClass("past");
            } else if (textHour == currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }
        })

     } 
     
     cellstatus()

    
    
    
});