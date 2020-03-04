alert("웹페이지에 접속하셨습니다");

function button_toggle() {
    if ($(".hide").css("display") == "none") {
        $(".hide").css({
            display: "block"
        });
    } else if ($(".hide").css("display") == "block") {
        $(".hide").css({
            display: "none"
        });
    }
}

function getData() {
    // data = {
    //     img : ./flower.png,
    //     list : [...],
    //     video : ./movie.mp4,
    //     words : "..."
    // }
    // 임을 가정
    $(document).ready(function () {
        $.ajax({
            url: "", // TODO
            type: 'GET',
            cache: false,
            success: function (data) {
                document.getElementById('#image').src = data.img;
                document.getElementById('#video').src = data.video;

                var word = "";
                word += "<p>";
                word += data.words;
                word += "</p>";
                $("words").append(word);

                var list = "<ul>";
                for (var a in data.list) {
                    list += "<li>";
                    list += a;
                    list += "</li>";
                }
                list += "</ul>";
                $("#list").append(list);
            },
            error: function (data) {
                alert("404. Please wait until the File is Loaded.");
            }
        })
    })
}
