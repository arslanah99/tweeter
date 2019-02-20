$(document).ready(function() {
    // --- our code goes here ---
$('textarea').keypress(function() {
   var inputBoxValue = ($('textarea').val().length)
   inputBoxValue = inputBoxValue + 1
   var spanNumber = $('.counter').val()
   var afterNum = Number(spanNumber)
   console.log(inputBoxValue)
   console.log(afterNum)
})
    // $('.counter').html(counter_value)
  });
  