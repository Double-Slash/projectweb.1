alert("Welcome to Double Slash HW1 Homepage!");

var contents = document.querySelector('.mainContents');
var showContents = false;

//ajax 이용 image 불러오기
$(function(){
    $.ajax(
        {
            url: 'http://localhost:3000/data/image.jpg',
            contentType: 'image/jpg',
            async: true,
            success: function(image){
                console.log('image load!')
                $('.image').attr('src','data/image.jpg');
            }
        }
    )
});

//ajax 이용 video 불러오기
$(function(){
    $.ajax(
        {
            url: 'http://localhost:3000/data/video.mp4',
            contentType: 'video/mp4',
            async: true,
            success: function(){
                console.log('video load!')
                $('.video').attr('src','data/video.mp4');
            }
        }
    )
});


//ajax 이용 text 불러오기
$(function(){
    $('.btn').click(function(){
        $.ajax(
            {
                url: 'http://localhost:3000/data/index.html',
                async: true,
                success: function(result){
                    if(showContents){
                        showContents = false;
                    }else{
                        showContents = true;
                    }

                    if(showContents){
                        contents.style.opacity = 1;
                        contents.style.backgroundColor = 'white';
                        $('.mainContents').html(result);
                        console.log('text load!');
                    }else{
                        contents.innerHTML = '';
                        contents.style.opacity = 0;
                    }
                }
            }
        )         
    })
    
});