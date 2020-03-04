function openJqueryDetail() {
    $(document).ready(function() {
        $("#mj").empty();
        var detailString ="안녕하세요! 저는 더블슬래시 4기 개발팀에 들어온 김민정이라고 합니다."
        detailString += "<br>"
        detailString += "구피 6마리와 시피루스를 기르고 있습니다."
        detailString += "<br>"
        detailString += "좋아하는 것은 소설책읽기 입니다."
        detailString += "<br>"
        detailString += "드라마를 본게 계기가 되어 중국어를 공부하고 있습니다."
        detailString += "<br>"
        detailString += "다루어본 프레임워크는 vue가 처음입니다."
        detailString += "<br>"
        detailString += "다른 프레임워크도 다루어보고 싶습니다."
        detailString += "<br>"
        detailString += "재미있는 걸 많이 만들어보고싶습니다."
        detailString += "<br>"
        $("#mj").prepend(detailString);
    })
    //설명문이 보이면 버튼을 눌렀을 때 올려주고 안보이면 버튼을 눌렀을때 내려준다
    if($("#mj").is(":visible")){ 
            $("#mj").slideUp();
    }else{
            $("#mj").slideDown();
         }
        
}

//ajax로 데이터 불러오기

//사진 ----->id photo에 있는 사진을 불러온다 
function getPhotoGET() {
    $(document).ready(function() {
        $.ajax({
            url: "http://localhost:3000/kim.jpg",
            type: 'GET',
            contentType: "image/jpg",
            cache:false,
            success: function(data) {
                $("#photo").attr("src",kim.jpg);//성공하면 저장한 데이터를 불러오고
            },
            error: function(data){
                alert("작동이 되지 않습니다!!!!");//실패하면 작동이 안된다는 메세지를 보여준다!!
            }
        })
    })
}

//동영상------->id video에 있는 동영상을 불러온다
function getVideoGET() {
    $(document).ready(function() {
        $.ajax({
            url: "http://localhost:3000/kim.mp4",
            type: 'GET',
            contentType: "video/mp4",
            cache:false,
            success: function(data) {
                $("#video").attr("src",kim.mp4);//성공하면 저장한 데이터를 불러오고
            },
            error: function(data){
                alert("작동이 되지 않습니다!!!!");//실패하면 작동이 안된다는 메세지를 보여준다!!
            }
        })
    })
}
//글
function getMjGET() {
    $(document).ready(function() {
        $.ajax({
            url: "/project.html",
            type: "GET",
            dataType : "html",
            cache:false,
            success: function(data) {
                $('#mj').html(data);//성공하면 저장한 데이터를 불러오고     
            },
            error: function(data){
                alert("작동이 되지 않습니다!!!!");//실패하면 작동이 안된다는 메세지를 보여준다!!
            }
        })
    })
}
