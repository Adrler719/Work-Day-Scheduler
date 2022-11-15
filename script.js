$(document).ready(function () {
  // listener for click event on save button
  $(".saveBtn").on("click", function() {

    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //save in local storage
    localStorage.setItem(time, value);
  });

  // Apply past, present, or future to blocks
  function hourUpdate(){
    //get current hour
    var currentTime = moment().hours();

    // loop over time blocks
    $(".time-block").each(function() {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);

      // adds appropiate css class after comparing time block and current time
      if (blockTime < currentTime) {
        $(this).addClass("past");
      }
      else if (blockTime == currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })

  }

  hourUpdate();

  // Displays user's saved data from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));


  // Displays the current date in the header of the page.
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});
