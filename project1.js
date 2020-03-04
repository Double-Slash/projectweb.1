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