window.onload = function () {
    // 과제 1번
    alert("xxx웹 페이지에 접속하셨습니다");
    
    // 과제 2번
    // 자바스크립트 css 설정을 통해 글을 숨김
    var hide = document.getElementById("hide");
    hide.style.display = "none";


    document.getElementById("btn").onclick = function () {

        // 조건문을 통해 글 목록 보이기
        if (hide.style.display == "none") {
            hide.style.display = "block"
        }

        // 조건문을 통해 글 목록 숨기기
        else if (hide.style.display == "block") {
            hide.style.display = "none"
        }
    }




}

    // 과제 3번
    // ajax는 한번도 안다뤄봐서 잘 모르겠습니다.
function SimpleAjax() {
    $.ajax({
        url:"22.jpg",
        dataType: "image/jpg",
        succes:function(data){
            $("#ajax_image").attr("src",data);
        }
    })

    $.ajax({
        url:"22.jpg",
        dataType: "video/mp4",
        succes:function(data){
            $("#ajax_video").attr("src",data);
        }
    })

    $.ajax({
        url:"ajax_text.text",
        dataType : "text",
        succes:function(data){
            $("#ajax_video").attr("src",data);
        }
    })

}