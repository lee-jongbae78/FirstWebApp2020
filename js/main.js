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

function changeBgB() {
  const target = document.querySelector("body");
  const target = document.querySelector("body");

  if (this.value === "day") {
    target.style.backgroundColor = "black";

    this.value = "night";
    console.log(target.value);
  } else {
    target.style.backgroundColor = "white";
    this.value = "day";
    console.log(target.value);
  }
}
