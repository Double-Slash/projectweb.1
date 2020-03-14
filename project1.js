function expandDetail() {
  $(document).ready(function(){
    if (tog === 1){
      $("#Detail").empty();
      var toggle = 0
      var detail = "디테일1"
      detail += "<br>디테일2"
      detail += "<br>디테일3"
      detail += "<br>디테일4"
      detail += "<br>디테일5"
      detail += "<br>디테일6"
      detail += "<br>디테일7"
      $("#Detail").prepend(detail)
      tog = 0;
    }
    else {
      $("#Detail").empty();
      tog = 1;
    }
  });
}

function getVideoData() {
  $(document).ready(function() {
      $.ajax({
          url: "http://localhost:3000/videoGET",
          type: 'GET',
          cache:false,
          success: function(data) {
              $("#VideoData").attr("src",data);
          },
          error: function(data){
              alert("404. Not Found");
          }
      })
  })
}

function getImageData() {
  $(document).ready(function() {
      $.ajax({
          url: "http://localhost:3000/imageGET",
          type: 'GET',
          cache: false,
          success: function(data) {
              $("#ImageData").attr("src",data);
          },
          error: function(data){
              alert("404. Not Found");
          }
      })
  })
}

function getContentsData() {
  $(document).ready(function() {
      $.ajax({
          url: "http://localhost:3000/contentsGET",
          type: 'GET',
          cache: false,
          success: function(data) {
            contents = "<li>"
            contents += data
            contents += "</li>"
            $("ol#Oltxt").append(contents);
          },
          error: function(data){
              alert("404. Not Found");
          }
      })
  })
}

alert('Double Slash Porj1에 접속하셨습니다.');
var tog = 1;
getContentsData();
getImageData();
getVideoData()