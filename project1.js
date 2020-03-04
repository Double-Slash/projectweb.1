window.onload = function () {
    alert("xxx웹 페이지에 접속하셨습니다");

    var hide = document.getElementById("hide");
    hide.style.display = "none";

    document.getElementById("btn").onclick = function () {

        if (hide.style.display == "none") {
            hide.style.display = "block"
        }

        else if (hide.style.display == "block") {
            hide.style.display = "none"
        }
    }

    // ajax
    $.ajax({
        url:"22.jpg",
        type:"POST",
        dataType:"json",
        succes:function(data){
            $("#ajax_image").attr("src",data);
        }
    })

}