// Variable for moment day
var currentDay = moment().format("dddd, MMMM Do YYYY")
var currentTime = moment().hour()
var saveBtn = document.querySelector('.container')

// Setting the day and time on the webpage
$("#currentDay").text("Today is: " + currentDay)

for(var i = 8; i < 18; i++) {
    if(i < currentTime) {
        $("#" + i).addClass("past");
    } else if(i == currentTime) {
        $("#" + i).addClass("present");
    } else if(i > currentTime) {
        $("#" + i).addClass("future");
    }
}


$(".saveBtn").click(function() { 
    var task9 = $("#9").val();
    var task10 = $("#10").val();
    var task11 = $("#11").val();
    var task12 = $("#12").val();
    var task13 = $("#13").val();
    var task14 = $("#14").val();
    var task15 = $("#15").val();
    var task16 = $("#16").val();
    var task17 = $("#17").val();
    localStorage.setItem('task9AM', task9);
    localStorage.setItem('task10AM', task10);
    localStorage.setItem('task11AM', task11);
    localStorage.setItem('task12PM', task12);
    localStorage.setItem('task1PM', task13);
    localStorage.setItem('task2PM', task14);
    localStorage.setItem('task3PM', task15);
    localStorage.setItem('task4PM', task16);
    localStorage.setItem('task5PM', task17); 
});

var savedTask9AM = localStorage.getItem("task9AM");
var savedTask10AM = localStorage.getItem("task10AM");
var savedTask11AM = localStorage.getItem("task11AM");
var savedTask12PM = localStorage.getItem("task12PM");
var savedTask1PM = localStorage.getItem("task1PM");
var savedTask2PM = localStorage.getItem("task2PM");
var savedTask3PM = localStorage.getItem("task3PM");
var savedTask4PM = localStorage.getItem("task4PM");
var savedTask5PM = localStorage.getItem("task5PM");
$('#9').val(savedTask9AM);
$('#10').val(savedTask10AM);
$('#11').val(savedTask11AM);
$('#12').val(savedTask12PM);
$('#13').val(savedTask1PM);
$('#14').val(savedTask2PM);
$('#15').val(savedTask3PM);
$('#16').val(savedTask4PM);
$('#17').val(savedTask5PM);
