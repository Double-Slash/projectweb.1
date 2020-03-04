
/* ajax 비동기 통신 

fetch("url")
	.then(response => response.json())
    .then(data => {
			document.querySelector('img').src = data.img; 
			document.querySelector('iframe').src = data.video; 
			let list = "<li>" + data.list1 + "</li>" + "<li>" + data.list2 + "</li>";
			document.querySelector('ol').innerHTML = list;
            })
    .catch(error => console.log(error));
*/

window.alert("김수진 웹페이지에 접속하셨습니다");



function showText() {
	const msg = "안녕하세요 <br> 반갑습니다 <br> 안녕하세요 <br> 반갑습니다 <br> 안녕하세요 <br> 반갑습니다 <br> 안녕하세요";	
	if(document.getElementById("more").innerText == ''){
		document.getElementById("more").innerHTML =msg;
	} else {
		document.getElementById("more").innerText ='';
	}
	
}