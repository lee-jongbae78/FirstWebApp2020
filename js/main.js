const name = "ljb";

const ljbInfo = {
  name: "leejongbae",
  age: 43,
  kids: ["first", "second", "third"],
}; //array, object 혼합

function sayHello(a) {
  return `${a} hi!!!`;
}

const greetLjb = sayHello("LeeJB");

const title = document.querySelector("#title");
console.log(title);
title.innerHTML = name + "님 학습을 시작합니다.";
title.style.color = "red";
//document.title= "title changed!";
function setColor(color) {
  var litest = document.querySelectorAll("li");
  i = 0;
  while (i < litest.length) {
    litest[i].style.color = "color";
    i = i + 1;
  }
}

function nightDayHandler(self) {
  var target = document.querySelector("body");

  if (self.value === "night") {
    target.style.backgroundColor = "black";
    target.style.color = "white";
    setColor("red");
    self.value = "day";
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "black";

    setColor("blue");
    self.value = "night";
  }
}
