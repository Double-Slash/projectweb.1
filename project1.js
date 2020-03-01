/*$(window).load(function() {
    alert("wow");
});
*/
$(document).ready(function() {
  alert("웹페이지에 접속하셨습니다");
  $.ajax({
    url: "#",
    type: "GET",
    success: function(data) {
      json = "<p>";
      json += data.title;
      json += "</p>";
      $("#image").append(json);
    },
    error: function(data) {
      alert("404 error");
    }
  });
});

function openDetail() {
  $(document).ready(function() {
    if ($("#detail").is(":empty")) {
      //do something
      var detailString =
        "jQuery is a fast, small, and feature-rich JavaScript library.";
      detailString += "<br>";
      detailString +=
        "It makes things like HTML document traversal and manipulation,";
      detailString += "<br>";
      detailString +=
        "event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.";
      detailString += "<br>";
      detailString +=
        "With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.";
      $("#detail").prepend(detailString);
    } else $("#detail").empty();
  });
}
