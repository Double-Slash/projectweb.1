(() => {
  alert("차민철 웹페이지에 접속하셨습니다");
  const button = document.querySelector(".button");
  const introduce = document.querySelector(".introduce");
  let clicked = false;
  const clickButton = () => {
    const target = introduce.classList;
    if (clicked) {
      clicked = false;
      target.remove("block");
    } else {
      clicked = true;
      target.add("block");
    }
  };
  fetch("http://localhost:3001").then(response => {
    console.log("획득", response);
  });
  button.addEventListener("click", clickButton);
})();
