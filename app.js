$(document).ready(function () {
  $("#search-button").on("click", function (event) {
    var itemCount = 10;
    var resultsList = $("#results-list")

    $("#no-results").remove();

    for (var i = 0; i < itemCount; i += 1) {
      var result = $("<li>")
      result.text("Result #" + i);
      resultsList.append(result);
    }
  })
})