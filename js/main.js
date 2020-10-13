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

function hellotest(){
  var hw = document.getElementById("hellotest");
  hw.addEventListener("click", function(){
    alert("hello~~~~~");
  })
}

function logIn(){
  if(prompt("id???") === "leejongbae78"){
    alert("welcome ljb");
  }else {
    alert("fail");
  }
  }

  function countSet(){
    for (var i = 0; i < 10; i++){
      for( var j = 0; j <10; j++){
        document.write("count" + i + j +"<br/>");
      }
    }
  }

  function alphabetSet(){
    return ["a", "b", "c", "d"];
  }

  const alphabets = alphabetSet();

  console.log(alphabets[2], alphabets[0].toUpperCase(), alphabets.push("z"));
  console.log(alphabets);