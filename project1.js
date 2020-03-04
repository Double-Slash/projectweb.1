$(document).ready(function() {
  alert("박정우의 웹페이지에 접속하셨습니다");
  $.ajax({
    url: "/image",
    type: "GET",
    success: function(data) {
      $("#image").attr("src", data.image);
      $("#video").attr("src", data.video);
      var list = "<ol>";
      for (var i in data.list) {
        list += "<li>";
        list += i;
        list += "</li>";
      }
      list += "</ol>";
      $("#list").append(list);
    },
    error: function(data) {
      alert("404 error");
    }
  });
});

function openDetail() {
  $(document).ready(function() {
    if ($("#detail").is(":empty")) {
      var detailString = "안녕하세요 doubleslash 4기 개발팀 박정우입니다.";
      detailString += "<br>";
      detailString += "저는 25살이고 분당에 살고있습니다.";
      detailString += "<br>";
      detailString += "저는 긍정적이고 활동적인 것을 좋아합니다";
      detailString += "<br>";
      detailString += "사용해 본 프레임워크는 Angular와 React입니다.";
      detailString += "<br>";
      detailString +=
        "여러 사람들과 함께 다양한 프로젝트를 만들어 보고 싶습니다.";
      detailString += "<br>";
      detailString += "잘부탁드립니다";
      detailString += "<br>";
      detailString += "감사합니다";
      $("#detail").prepend(detailString);
    } else $("#detail").empty();
  });
}
