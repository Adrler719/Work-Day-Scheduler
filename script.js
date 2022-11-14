$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // listener for click event on save button
  $(".saveBtn").on("click", function() {

    var value = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");

    //save in local storage
    localStorage.setItem(time, value);
  });

  // Apply past, present, or future to blocks
  function hourUpdate(){
    //get current hours
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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // Displays the current date in the header of the page.
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});
