$(document).ready(function() {
  // --- our code goes here ---
  $("textarea").keydown(function() {
    var inputBoxValuesLength = $("textarea").val().length;
    var hardCodedCounterValue = 140;
    var subtractInputAndHardCodeValues = hardCodedCounterValue - inputBoxValuesLength;
    $(this)
      .siblings(".counter")
      .text(subtractInputAndHardCodeValues);
    if (subtractInputAndHardCodeValues <= 0) {
      $(this)
        .siblings(".counter")
        .css({ color: "red" });
    } else{
        $(this)
        .siblings(".counter")
        .css({ color: "gray" })
    }
  });
});
