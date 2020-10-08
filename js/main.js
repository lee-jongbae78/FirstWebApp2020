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
  const targetDay = document.getElementsByClassName("#targetDay");
  var litest = document.querySelectorAll("li");

  if (targetDay.value === "day") {
    target.style.backgroundColor = "white";
    document.getElementById("targetDay").value = "day";
    i = 0;
    while (i < litest.length) {
      litest[i].style.color = "powderblue";
      i = i + 1;
    }
    targetDay.value = "night";
  } else {
    i = 0;
    target.style.backgroundColor = "black";
    document.getElementById("targetDay").value = "night";
    while (i < litest.length) {
      litest[i].style.color = "white";
      i = i + 1;
    }
    targetDay.value = "day";
  }
}
